
export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(hsl(302 59% 65% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(302 59% 65% / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,hsl(302_59%_65%/0.12),transparent)]" />

      {/* Signal rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-primary/10 animate-pulse"
            style={{
              width: `${i * 200}px`,
              height: `${i * 200}px`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div
          className="flex items-end justify-center gap-2 md:gap-3 mb-6 select-none"
        >
          {/* Logo — SVG fill rengi CSS filter ile primary'e çevriliyor */}
          <img
            src="/PurgatoriaLogo.svg"
            alt="Purgatoria Logo"
            className="h-[4.1rem] md:h-[7.3rem] w-auto"
            style={{
              filter: "brightness(0) saturate(100%) invert(62%) sepia(40%) saturate(600%) hue-rotate(255deg) brightness(105%) drop-shadow(0 0 28px hsl(302 59% 65% / 0.45))",
              transform: "translateY(0)",
            }}
          />

          <h1
            className="text-[3.15rem] md:text-[4.5rem] tracking-tighter leading-none"
            style={{
              fontFamily: "'Aldrich', sans-serif",
              color: "#fab131",
              filter: "drop-shadow(0 0 28px #fab13166)",
              transform: "translateY(18%) translateX(-5%)",
            }}
          >
            URGATORIA
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
          Sinyallerin topluluğa dönüştüğü yer.
        </p>

        <div className="mt-10 flex items-center justify-center gap-2 text-muted-foreground/50 text-xs font-mono">
          <span className="inline-block w-8 h-px bg-muted-foreground/30" />
          <span>purgatoria.net</span>
          <span className="inline-block w-8 h-px bg-muted-foreground/30" />
        </div>
      </div>
    </section>
  );
}
