import { Badge } from "@/components/ui/badge";
import { Map, Wifi, ExternalLink, Info } from "lucide-react";

const maps = [
  {
    title: "Meshtastic Ağ Haritası",
    description:
      "Türkiye genelindeki aktif Meshtastic node'larını ve mesh bağlantılarını gerçek zamanlı takip et.",
    icon: <Wifi className="w-5 h-5 text-primary" />,
    badge: "Meshtastic",
    badgeClass: "border-primary/40 text-primary",
    img: "/tamesh_map.jpg",
    liveUrl: "https://map.tamesh.org/",
    color: "from-primary/10 to-transparent",
    note: "Meshtastic haritası için MQTT üyeliğinizin olması gerekmektedir. MQTT hesabınızı almak için bizimle iletişime geçiniz.",
  },
  {
    title: "AREDN Ağ Haritası",
    description:
      "Türkiye ve çevresindeki AREDN (Amateur Radio Emergency Data Network) node'larını görüntüle.",
    icon: <Map className="w-5 h-5 text-sky-400" />,
    badge: "AREDN",
    badgeClass: "border-sky-500/40 text-sky-400",
    img: "/aredn_map.jpg",
    liveUrl: "https://worldmap.arednmesh.org/#5.21/39.038/35.64",
    color: "from-sky-500/10 to-transparent",
    note: "Aredn haritasında görünmek için cihazınızın minimum 3 saat çalıştırılması gerekmektedir.",
  },
];

export default function MapsSection() {
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary">
            Canlı Haritalar
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Ağ Durumu
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Meshtastic ve AREDN ağlarındaki aktif node'ları harita üzerinde
            takip edin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {maps.map((m) => (
            <div
              key={m.title}
              className="rounded-xl border border-border overflow-hidden flex flex-col"
            >
              {/* Map header */}
              <div
                className={`flex items-start justify-between p-5 bg-gradient-to-r ${m.color} border-b border-border`}
              >
                <div className="flex items-center gap-3">
                  {m.icon}
                  <div>
                    <h3 className="font-semibold">{m.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {m.description}
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className={`shrink-0 ml-3 ${m.badgeClass}`}>
                  {m.badge}
                </Badge>
              </div>

              {/* Map image + live link */}
              <a
                href={m.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden"
                style={{ paddingBottom: "60%" }}
              >
                <img
                  src={m.img}
                  alt={m.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-black/70 text-white text-sm font-medium px-4 py-2 rounded-full">
                    <ExternalLink className="w-4 h-4" />
                    Canlı Haritayı Aç
                  </span>
                </div>
              </a>

              {/* Optional note */}
              {m.note && (
                <div className="flex items-start gap-2 px-4 py-3 border-t border-border bg-muted/30">
                  <Info className="w-3.5 h-3.5 text-muted-foreground/60 shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground/70 leading-relaxed">
                    {m.note}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
