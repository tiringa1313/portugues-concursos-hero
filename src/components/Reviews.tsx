import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Carlos Oliveira',
      rating: 5,
      comment: 'Excelente curso! O Prof. Álvaro explica de forma muito clara e objetiva. Consegui melhorar muito minha nota em português.'
    },
    {
      name: 'Fernanda Lima',
      rating: 5,
      comment: 'Material completo e atualizado. As questões comentadas são um diferencial. Recomendo muito!'
    },
    {
      name: 'Roberto Silva',
      rating: 5,
      comment: 'Melhor investimento que fiz para meus estudos. O conteúdo é organizado e fácil de entender.'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="font-bold text-2xl text-foreground">4.8</span>
            <span className="text-muted-foreground">(29 avaliações)</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            O que nossos alunos dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">"{review.comment}"</p>
              <div className="font-semibold text-foreground">{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;