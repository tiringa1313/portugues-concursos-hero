// src/components/Guarantees.tsx
import React from "react";
import { Zap, Shield, Clock, CreditCard } from "lucide-react";

const Guarantees = () => {
  const guarantees = [
    { icon: Zap,        title: "Acesso imediato",      description: "Comece a estudar agora mesmo" },
    { icon: Shield,     title: "Garantia de 15 dias",  description: "Satisfação garantida ou seu dinheiro de volta" },
    { icon: Clock,      title: "Acesso vitalício",     description: "Estude no seu tempo, sem pressa" },
    { icon: CreditCard, title: "Pagamento seguro",     description: "Transação protegida e confiável" },
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

      {/* separador superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((g, i) => (
            <div
              key={i}
              className="group text-center rounded-2xl p-6 bg-white/70 dark:bg-card border border-border/50 shadow-sm hover:shadow-md transition"
            >
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition">
                <g.icon className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{g.title}</h3>
              <p className="text-muted-foreground text-sm">{g.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* separador inferior */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
    </section>
  );
};

export default Guarantees;
