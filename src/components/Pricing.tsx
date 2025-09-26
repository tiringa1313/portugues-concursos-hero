// src/components/Pricing.tsx
import React from "react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
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
                  className={`flex items-center justify-between px-5 sm:px-6 py-3 text-left bg-white/60 dark:bg-card/60
                              ${idx < arr.length - 1 ? "border-b border-border/60" : ""}`}
                >
                  <span className="text-muted-foreground">{item}</span>
                  <span className="text-success font-semibold">✓ Incluído</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://go.hotmart.com/Q102033011B?ap=13f6"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant="cta"
                size="xl"
                className="w-full shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_14px_40px_rgba(16,185,129,0.5)] transition-shadow
                           data-[pulse=true]:animate-pulse"
                data-pulse="true"
              >
                Quero minha vaga agora 🚀
              </Button>
            </a>

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
