import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink, Calendar, RefreshCw } from "lucide-react";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  summary: string;
  thumbnail: string | null;
}

interface BlogFeed {
  posts: BlogPost[];
  updatedAt: string;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchPosts = () => {
    setLoading(true);
    setError(false);

    fetch(`${import.meta.env.BASE_URL}blog-feed.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<BlogFeed>;
      })
      .then((data) => setPosts(data.posts.slice(0, 6)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="border-primary/40 text-primary">
                Blog
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Son Yazılar</h2>
            <p className="text-muted-foreground mt-2">
              blog.purgatoria.tr üzerinden en güncel içerikler
            </p>
          </div>
          <Button variant="outline" size="sm" asChild className="self-end">
            <a
              href="https://blog.purgatoria.tr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tüm Yazılar
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </Button>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-20 gap-3 text-muted-foreground">
            <RefreshCw className="w-5 h-5 animate-spin" />
            <span>Yazılar yükleniyor…</span>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">
              Blog yazıları şu an yüklenemiyor.
            </p>
            <Button variant="outline" size="sm" onClick={fetchPosts}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Tekrar Dene
            </Button>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <p className="text-center text-muted-foreground py-20">
            Henüz blog yazısı yok.
          </p>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((p) => (
              <a
                key={p.link}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="h-full border-border/60 transition-all duration-200 group-hover:border-primary/40 group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:shadow-primary/5 overflow-hidden">
                  {p.thumbnail && (
                    <div className="w-full h-40 overflow-hidden">
                      <img
                        src={p.thumbnail}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardContent className="flex flex-col gap-3 p-5">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatDate(p.pubDate)}</span>
                    </div>
                    <h3 className="font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                    {p.summary && (
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {p.summary}
                      </p>
                    )}
                    <div className="flex items-center gap-1 text-xs text-primary font-medium pt-1">
                      Devamını oku
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
