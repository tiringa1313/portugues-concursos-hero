// src/components/Pricing.tsx
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const Pricing: React.FC = () => {
  // Dispara ViewContent quando 50% da seção estiver visível
  const sectionRef = useRef<HTMLElement | null>(null);
  const firedRef = useRef(false);

  useEffect(() => {
    if (!sectionRef.current || firedRef.current) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting && !firedRef.current) {
          firedRef.current = true;
          if (typeof window !== "undefined" && (window as any).fbq) {
            (window as any).fbq("track", "ViewContent", {
              content_name: "Academia de Português",
              content_category: "Curso",
            });
          }
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Headline */}
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
            Invista no seu futuro{" "}
            <span className="block text-success">comece hoje</span>
          </h2>
        </div>

        {/* CARD */}
        <div className="relative max-w-2xl mx-auto">
          {/* Selo de Garantia */}
          <div className="absolute -right-3 -top-3 z-10">
            <div className="select-none rounded-full bg-white shadow-lg ring-1 ring-black/5 px-3 py-1 text-xs font-semibold text-foreground dark:bg-card">
              🛡️ Garantia de 15 dias
            </div>
          </div>

          <div className="rounded-3xl bg-card/90 backdrop-blur shadow-[0_20px_80px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 dark:ring-white/5 p-6 sm:p-10">
            {/* Urgência */}
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-1.5 text-sm font-semibold text-success">
              🔥 Oferta válida hoje
            </div>

            {/* Preço */}
            <div className="mb-6">
              <div className="text-4xl lg:text-5xl font-extrabold text-foreground">
                12x <span className="text-success">R$35,89</span>
              </div>
              <div className="mt-1 text-base lg:text-lg text-muted-foreground">
                ou <span className="font-semibold text-foreground">R$347</span> à vista
              </div>
            </div>

            {/* Lista de benefícios */}
            <div className="mb-8 rounded-2xl overflow-hidden ring-1 ring-border/60">
              {[
                "88 horas de conteúdo",
                "1300 questões comentadas",
                "Acesso vitalício",
                "Garantia de 15 dias",
              ].map((item, idx, arr) => (
                <div
                  key={item}
                  className={`flex items-center justify-between px-5 sm:px-6 py-3 text-left bg-white/60 dark:bg-card/60 ${
                    idx < arr.length - 1 ? "border-b border-border/60" : ""
                  }`}
                >
                  <span className="text-muted-foreground">{item}</span>
                  <span className="text-success font-semibold">✓ Incluído</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="block">
              <Button
                type="button"
                aria-label="Ir para o checkout"
                onClick={() => {
                  // Evento do Pixel: início de checkout
                  if (typeof window !== "undefined" && (window as any).fbq) {
                    (window as any).fbq("track", "InitiateCheckout", {
                      content_name: "Academia de Português",
                      value: 0,
                      currency: "BRL",
                    });
                  }

                  // Abre o checkout Hotmart
                  window.open(
                    "https://go.hotmart.com/Q102033011B?ap=13f6",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                variant="cta"
                size="xl"
                className="
                  relative z-10 w-full rounded-2xl
                  text-white
                  bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-600
                  dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:active:bg-emerald-500 dark:text-white
                  shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_14px_40px_rgba(16,185,129,0.5)]
                  dark:shadow-[0_10px_30px_rgba(52,211,153,0.35)] dark:hover:shadow-[0_14px_40px_rgba(52,211,153,0.5)]
                  transition-shadow
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-emerald-500
                  focus-visible:ring-offset-2 focus-visible:ring-offset-white
                  dark:focus-visible:ring-offset-gray-900
                  data-[pulse=true]:animate-pulse
                "
                data-pulse="true"
              >
                Quero minha vaga agora 🚀
              </Button>
            </div>

            {/* Fallback para quando JS estiver desativado */}
            <noscript>
              <p className="mt-2">
                <a
                  href="https://go.hotmart.com/Q102033011B?ap=13f6"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="underline"
                >
                  Acessar checkout
                </a>
              </p>
            </noscript>

            {/* Micro prova social / confiança */}
            <div className="mt-4 text-xs sm:text-sm text-muted-foreground">
              Mais de <span className="font-semibold text-foreground">59 mil alunos</span> já confiaram •
              Pagamento 100% seguro • Acesso imediato
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
