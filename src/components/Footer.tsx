


const socials = [
  { name: "Facebook", url: "https://www.facebook.com/purgatoria.net" },
  { name: "X", url: "https://x.com/purgatorialis" },
  { name: "YouTube", url: "https://www.youtube.com/@purgatorialis" },
  { name: "Instagram", url: "https://www.instagram.com/purgatorialis/" },
  { name: "GitHub", url: "https://github.com/purgatorialis" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/purgatorialis/" },
  { name: "Reddit", url: "https://www.reddit.com/user/purgatorialis/" },
  { name: "Kick", url: "https://kick.com/purgatorialis" },
  { name: "Twitch", url: "https://www.twitch.tv/purgatorialis" },
];

const sections = [
  {
    title: "Topluluk",
    links: [
      { label: "Hakkımızda", href: "#hakkinda" },
      { label: "TA Mesh", href: "https://tamesh.org" },
      { label: "Blog", href: "https://blog.purgatoria.tr" },
    ],
  },
  {
    title: "Gruplar",
    links: [
      { label: "WhatsApp", href: "https://wp.purgatoria.net" },
      { label: "Discord", href: "https://dc.purgatoria.net" },
      { label: "Facebook Grubu", href: "https://www.facebook.com/groups/purgatoria" },
      { label: "Reddit", href: "https://www.reddit.com/r/purgatoria/" },
    ],
  },
  {
    title: "Kaynaklar",
    links: [
      { label: "TA Mesh", href: "https://tamesh.org" },
      { label: "Meshtastic", href: "https://meshtastic.org" },
      { label: "AREDN", href: "https://www.arednmesh.org" },
      { label: "GitHub", href: "https://github.com/purgatorialis" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/20 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-end gap-1.5 mb-3">
              <img
                src="/PurgatoriaLogo.svg"
                alt="Purgatoria Logo"
                className="h-8 w-auto"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(62%) sepia(40%) saturate(600%) hue-rotate(255deg) brightness(105%)",
                  transform: "translateY(0)",
                }}
              />
              <span
                className="text-xl tracking-tighter leading-none"
                style={{
                  fontFamily: "'Aldrich', sans-serif",
                  color: "#fab131",
                  transform: "translateY(-5%)",
                }}
              >
                URGATORIA
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Sinyallerin topluluğa dönüştüğü yer.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Link sections */}
          {sections.map((sec) => (
            <div key={sec.title}>
              <h4 className="text-sm font-semibold mb-4">{sec.title}</h4>
              <ul className="space-y-2.5">
                {sec.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Purgatoria. Tüm hakları saklıdır.</span>
          <span className="font-mono">purgatoria.net</span>
        </div>
      </div>
    </footer>
  );
}
