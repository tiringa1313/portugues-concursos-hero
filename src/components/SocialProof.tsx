import React, { useState } from "react";
import { Play, X } from "lucide-react";

// 🔸 IMPORTS DE THUMBS LOCAIS
import thumbRodrigo from "@/assets/depoimentorodrigo.png";
import thumbAna from "@/assets/depoimento2.png";
import thumbVinicius from "@/assets/depoimento3.png";

type Testimonial = {
  name: string;
  city?: string;
  text: string;
  videoUrl: string;        // Pode ser youtu.be, watch?v=..., ou já embed
  thumbnailUrl?: string;   // Aceita import local ou URL
  emoji?: string;          // Fallback se não tiver thumb
};

// 🔸 Função que transforma URL do YouTube em URL de EMBED
const toEmbedUrl = (url: string) => {
  try {
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1].split(/[?&]/)[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes("watch?v=")) {
      const id = new URL(url).searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes("/embed/")) return url;
    return url;
  } catch {
    return url;
  }
};

// 🔸 LISTA DE DEPOIMENTOS
const testimonials: Testimonial[] = [
  {
    name: "Rodrigo Reis",
    city: "Ceará-mirim/RN",
    text: "Acertou 13 de 15 questões (86%) de Português.",
    videoUrl: "https://youtu.be/bvHQ6FqatFo",
    thumbnailUrl: thumbRodrigo,   // 👈 agora pega do import
    emoji: "🎯",
  },
  {
    name: "Ana Oliveira",
    city: "Salvador/BA",
    text: "Acertou 14 das 15 questões (93%).",
    videoUrl: "https://youtu.be/e5DIgYtxznE",
    thumbnailUrl: thumbAna,       // 👈 agora pega do import
    emoji: "📚",
  },
  {
    name: "Vinícius Nogueira",
    city: "Rio de Janeiro/RJ",
    text: "Acertou 14 das 15 questões (93%) de Português.",
    videoUrl: "https://youtu.be/yVdHf5e9Xmk",
    thumbnailUrl: thumbVinicius, // fallback
    emoji: "✅",
  },
];

const SocialProof: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Você vai ficar <span className="text-success">Fortão em Português</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o que nossos alunos aprovados têm a dizer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              {/* Thumbnail clicável (abre modal) */}
              <button
                type="button"
                onClick={() => setActiveVideo(toEmbedUrl(t.videoUrl))}
                className="relative rounded-xl overflow-hidden bg-muted group w-full text-left"
                aria-label={`Assistir depoimento de ${t.name}`}
              >
                {/* Mantém proporção 9:16 */}
                <div className="pt-[177.78%]" />
                {t.thumbnailUrl ? (
                  <img
                    src={t.thumbnailUrl}
                    alt={`Depoimento de ${t.name}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-5xl">
                    {t.emoji ?? "🎥"}
                  </div>
                )}

                {/* Botão de Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center shadow-medium transition transform group-hover:scale-105">
                    <Play className="w-8 h-8 text-success-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </button>

              {/* Texto */}
              <div className="mt-4">
                <h3 className="font-semibold text-foreground">
                  {t.name}{t.city ? `, ${t.city}` : ""}
                </h3>
                <p className="text-muted-foreground mt-1 leading-relaxed">
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal do vídeo */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden">
            <iframe
              src={activeVideo}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <button
              className="absolute top-3 right-3 bg-white/85 hover:bg-white rounded-full p-2 transition"
              onClick={() => setActiveVideo(null)}
              aria-label="Fechar vídeo"
            >
              <X className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SocialProof;
