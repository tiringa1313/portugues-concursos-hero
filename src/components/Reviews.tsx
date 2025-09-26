// src/components/Reviews.tsx
import React from "react";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Carlos Oliveira",
      rating: 5,
      comment:
        "Excelente curso! O Prof. Álvaro explica de forma muito clara e objetiva. Consegui melhorar muito minha nota em português.",
    },
    {
      name: "Fernanda Lima",
      rating: 5,
      comment:
        "Material completo e atualizado. As questões comentadas são um diferencial. Recomendo muito!",
    },
    {
      name: "Roberto Silva",
      rating: 5,
      comment:
        "Melhor investimento que fiz para meus estudos. O conteúdo é organizado e fácil de entender.",
    },
  ];

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));

  return (
    <section className="relative py-16 lg:py-24 bg-background">
      {/* separador superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="container mx-auto px-4">
        {/* header da seção */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex">{renderStars(5)}</div>
            <span className="font-bold text-2xl text-foreground">4.8</span>
            <span className="text-muted-foreground">(29 avaliações)</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
            O que nossos alunos <span className="text-success">dizem</span>
          </h2>
          <p className="mt-2 text-muted-foreground">
            Mais de <strong>59 mil alunos</strong> já estudaram com o Prof. Álvaro Ferreira
          </p>

          {/* divisor sutil entre título e cards */}
          <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="relative bg-white/80 dark:bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg transition"
            >
              {/* aspas decorativas */}
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-success/30" />

              <div className="flex items-center gap-2 mb-3">
                <div className="flex">{renderStars(r.rating)}</div>
                <span className="text-xs text-muted-foreground">(Aluno verificado)</span>
              </div>

              <p className="text-foreground leading-relaxed mb-4 italic">“{r.comment}”</p>
              <div className="font-semibold text-success">{r.name}</div>
            </article>
          ))}
        </div>
      </div>

      {/* separador inferior */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
    </section>
  );
};

export default Reviews;
