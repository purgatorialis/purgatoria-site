import { Badge } from "@/components/ui/badge";
import { Radio, Signal, Network, Globe } from "lucide-react";

const mission = [
  {
    icon: <Radio className="w-5 h-5 text-primary shrink-0 mt-0.5" />,
    title: "Radyo Amatörlüğü",
    desc: "Lisanslı radyo amatörlerini ve meraklıları bir araya getiriyoruz.",
  },
  {
    icon: <Signal className="w-5 h-5 text-primary shrink-0 mt-0.5" />,
    title: "Mesh Ağları",
    desc: "Merkezi olmayan, afet koşullarında çalışan haberleşme altyapısı kuruyoruz.",
  },
  {
    icon: <Network className="w-5 h-5 text-primary shrink-0 mt-0.5" />,
    title: "Açık Kaynak",
    desc: "Meshtastic, AREDN ve benzeri açık kaynak projeleri destekliyoruz.",
  },
  {
    icon: <Globe className="w-5 h-5 text-primary shrink-0 mt-0.5" />,
    title: "Küresel Bağlantı",
    desc: "Türkiye genelinde ve uluslararası topluluklar ile köprü kuruyoruz.",
  },
];

const images = [
  {
    label: "Mesh Ağ Topolojisi",
    emoji: "📡",
    bg: "from-primary/20 to-primary/5",
  },
  {
    label: "Radyo Ekipmanları",
    emoji: "🎙️",
    bg: "from-indigo-500/20 to-indigo-900/5",
  },
  {
    label: "Topluluk Etkinlikleri",
    emoji: "🤝",
    bg: "from-purple-500/20 to-purple-900/5",
  },
  {
    label: "Açık Hava Operasyonları",
    emoji: "🏔️",
    bg: "from-sky-500/20 to-sky-900/5",
  },
];

export default function AboutSection() {
  return (
    <section id="hakkinda" className="py-24 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary">
            Hakkımızda
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Purgatoria Nedir?
          </h2>
        </div>

        {/* Content: text left, images right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: text */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Purgatoria; Amatör Telsizcilik, Kısa Dalga Dinleyiciliği (SWL) ve Mesh ağ sistemleri gibi radyo frekansı (RF) odaklı teknik alanlarda faaliyet gösteren, kâr amacı gütmeyen çok katmanlı bir topluluktur. 
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              TA Mesh gibi oluşumlara çatı yapı sağlayan bu topluluk, yeni meraklılar ile deneyimli amatör telsizcileri güvenli ve huzurlu bir ortamda buluşturarak ülkemizde iyi eğitimli bir Amatör Telsizci kitlesi yetiştirilmeyi ve afet gibi acil durumlarda kullanılabilecek alternatif haberleşme altyapılarını geliştirmeyi misyon edinmiştir.
            </p>

            <h3 className="text-xl font-semibold mb-5">Topluluk Misyonumuz</h3>
            <ul className="space-y-4">
              {mission.map((m) => (
                <li key={m.title} className="flex gap-3">
                  {m.icon}
                  <div>
                    <span className="font-medium">{m.title}</span>
                    <p className="text-sm text-muted-foreground mt-0.5">{m.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: placeholder image grid */}
          <div className="grid grid-cols-2 gap-3">
            {images.map((img) => (
              <div
                key={img.label}
                className={`rounded-lg border border-border bg-gradient-to-br ${img.bg} flex flex-col items-center justify-center aspect-square gap-3 p-4`}
              >
                <span className="text-4xl" aria-hidden="true">
                  {img.emoji}
                </span>
                <span className="text-xs text-muted-foreground text-center font-medium">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
