import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Network, Cpu, Wifi, MapPin, ExternalLink } from "lucide-react";

/* TA Mesh uses its own green color palette, independent of the site primary */
const GREEN = "hsl(160, 84%, 39%)";
const GREEN_LIGHT = "hsl(160, 84%, 70%)";

const features = [
  {
    icon: <Wifi className="w-5 h-5" style={{ color: GREEN }} />,
    title: "LoRa Tabanlı",
    desc: "Düşük güçle uzun mesafe iletişim",
  },
  {
    icon: <Cpu className="w-5 h-5" style={{ color: GREEN }} />,
    title: "Meshtastic",
    desc: "Açık kaynak mesh protokolü",
  },
  {
    icon: <Network className="w-5 h-5" style={{ color: GREEN }} />,
    title: "Merkezsiz",
    desc: "İnternet gerektirmez, self-healing",
  },
  {
    icon: <MapPin className="w-5 h-5" style={{ color: GREEN }} />,
    title: "Türkiye MQTT Ağı",
    desc: "Türkiye'ye özel MQTT sunucusu",
  },
];

export default function TAMeshSection() {
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: visual */}
          <div className="relative">
            <div className="relative rounded-2xl border bg-card overflow-hidden p-8"
              style={{ borderColor: `${GREEN}30` }}>
              {/* Mesh node diagram dot pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="mesh-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                      <circle cx="15" cy="15" r="1.5" fill="hsl(160 84% 39%)" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mesh-dots)" />
                </svg>
              </div>

              <div className="relative flex flex-col items-center gap-6">
                <div className="text-center">
                  <div
                    className="text-5xl font-black tracking-tighter mb-2"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${GREEN_LIGHT}, ${GREEN})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    TA MESH
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Türkiye Amatör Mesh Ağı
                  </p>
                </div>

                {/* TA Mesh logo */}
                <img
                  src="/tamesh.svg"
                  alt="TA Mesh Logo"
                  className="w-48 h-auto"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(51%) sepia(97%) saturate(443%) hue-rotate(119deg) brightness(89%) drop-shadow(0 0 10px rgb(16 183 127 / 0.4)) drop-shadow(0 0 24px rgb(16 183 127 / 0.15))",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge
                variant="outline"
                style={{
                  borderColor: `${GREEN}50`,
                  color: GREEN_LIGHT,
                  backgroundColor: `${GREEN}10`,
                }}
              >
                Alt Topluluk
              </Badge>
              <Badge variant="outline" className="border-primary/40 text-primary">
                Purgatoria
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              TA Mesh Projesi
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-15">
              TA Mesh (Meshtastic Türkiye Topluluğu), Purgatoria çatısı altında faaliyet gösteren ve LoRa teknolojisiyle Türkiye genelinde internetten bağımsız, afet ve acil durumlara dayanıklı bir iletişim ağı kurmayı hedefleyen kâr amacı gütmeyen bir girişimdir. Topluluk, bu muteber altyapıyı yaygınlaştırırken aynı zamanda mensuplarına RF (Radyo Frekansı) temellerini öğreterek teknik farkındalık oluşturmayı amaçlar.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((f) => (
                <Card key={f.title} className="border-border/50">
                  <CardContent className="flex items-start gap-3 p-4">
                    {f.icon}
                    <div>
                      <div className="font-medium text-sm">{f.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {f.desc}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              className="gap-2"
              style={{
                backgroundColor: GREEN,
                color: "hsl(285, 30%, 6%)",
              }}
              asChild
            >
              <a href="https://tamesh.org" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                TA Mesh Hakkında Daha Fazla
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
