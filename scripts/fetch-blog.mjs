/**
 * Fetches the Purgatoria blog RSS feed at build time and writes
 * public/blog-feed.json so BlogSection.tsx can read it without CORS issues.
 */

import { writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(__dirname, "../public/blog-feed.json");
const FEED_URL =
  "https://blog.purgatoria.tr/feeds/posts/default?alt=rss&num=6";

function stripHtml(html) {
  return (
    html
      // 1. CDATA wrapper kaldır
      .replace(/<!\[CDATA\[|\]\]>/g, "")
      // 2. Önce entity'leri decode et (içerik entity-encoded HTML olabilir)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/&nbsp;/g, " ")
      .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
      // 3. Sonra HTML etiketlerini temizle
      .replace(/<[^>]+>/g, " ")
      // 4. Boşlukları düzenle
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 200)
  );
}

function parseXml(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];

    const title = (block.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/) || [])[1]?.trim() ?? "";
    const link  = (block.match(/<link>([\s\S]*?)<\/link>/)  || [])[1]?.trim() ?? "#";
    const date  = (block.match(/<pubDate>([\s\S]*?)<\/pubDate>/) || [])[1]?.trim() ?? "";
    const desc  = (block.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/) || [])[1] ?? "";
    // Decode entities first so we can find img tags
    const decodedDesc = desc
      .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");
    const imgMatch = decodedDesc.match(/<img[^>]+src=["']([^"']+)["']/i);
    // Prefer Blogger CDN urls, skip tiny tracking pixels (< 10px)
    let thumbnail = imgMatch ? imgMatch[1] : null;
    if (thumbnail && /[?&](w|h)=[1-9]$/.test(thumbnail)) thumbnail = null;

    items.push({
      title,
      link,
      pubDate: date,
      summary: stripHtml(desc) + (desc.length > 200 ? "…" : ""),
      thumbnail,
    });
  }

  return items;
}

async function main() {
  console.log("Fetching blog feed…");

  let xml;
  try {
    const res = await fetch(FEED_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    xml = await res.text();
  } catch (err) {
    // If fetch fails (e.g. network unavailable in CI), keep existing file
    console.warn("Could not fetch feed:", err.message);
    console.warn("Keeping existing blog-feed.json (if any).");
    return;
  }

  const posts = parseXml(xml);
  console.log(`Parsed ${posts.length} post(s).`);

  mkdirSync(resolve(__dirname, "../public"), { recursive: true });
  writeFileSync(OUT_PATH, JSON.stringify({ posts, updatedAt: new Date().toISOString() }, null, 2), "utf8");
  console.log(`Written → ${OUT_PATH}`);
}

main();
