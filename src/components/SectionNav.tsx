import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "hero",             label: "Giriş" },
  { id: "community-groups", label: "Topluluk" },
  { id: "about",            label: "Purgatoria Nedir?" },
  { id: "tamesh",           label: "TA Mesh" },
  { id: "maps",             label: "Haritalar" },
  { id: "blog",             label: "Blog" },
];

export default function SectionNav() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      // Trigger point: 35% from the top of the viewport
      const trigger = window.scrollY + window.innerHeight * 0.35;

      let current = SECTIONS[0].id;
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= trigger) current = id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <nav
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3 transition-opacity duration-500"
      style={{ opacity: 1 }}
      aria-label="Sayfa navigasyonu"
    >
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            title={label}
            aria-label={label}
            className="group relative flex items-center justify-end"
          >
            {/* Tooltip */}
            <span
              className="absolute right-full mr-3 whitespace-nowrap text-xs font-medium px-2 py-1 rounded bg-card border border-border text-foreground
                         opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150"
            >
              {label}
            </span>

            {/* Dot */}
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width:  isActive ? "10px" : "6px",
                height: isActive ? "10px" : "6px",
                backgroundColor: isActive
                  ? "hsl(302, 59%, 65%)"
                  : "hsl(285, 10%, 45%)",
                boxShadow: isActive
                  ? "0 0 8px hsl(302 59% 65% / 0.7)"
                  : "none",
              }}
            />
          </button>
        );
      })}
    </nav>
  );
}
