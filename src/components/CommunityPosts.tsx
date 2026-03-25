import { communityPosts } from "@/data/community-posts";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageSquare, Users } from "lucide-react";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}


export default function CommunityPosts() {
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Users className="w-5 h-5 text-primary" />
            <Badge variant="outline" className="border-primary/40 text-primary">
              Topluluk
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Topluluktan Paylaşımlar
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Üyelerimizin projelerinden, keşiflerinden ve deneyimlerinden seçmeler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {communityPosts.map((post) => (
            <Card
              key={post.id}
              className="border-border/60 hover:border-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5 overflow-hidden"
            >
              {/* Thumbnail */}
              {post.thumbnail && (
                <div className="relative w-full overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                  <img
                    src={post.thumbnail}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              <CardContent className="flex flex-col gap-4 p-5">
                {/* Content */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {post.content}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-primary/70 bg-primary/5 border border-primary/15 rounded px-1.5 py-0.5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 border-t border-border">
                  <span>{formatDate(post.date)}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5" />
                      Yanıtla
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
