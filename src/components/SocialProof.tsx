import React from 'react';
import { Play } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Aprovada no TRF',
      thumbnail: '🎯'
    },
    {
      name: 'João Santos',
      role: 'Aprovado na Receita Federal',
      thumbnail: '📚'
    },
    {
      name: 'Ana Costa',
      role: 'Aprovada no TCU',
      thumbnail: '✅'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Você vai ficar <span className="text-success">fortão em Português</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o que nossos alunos aprovados têm a dizer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="relative bg-muted rounded-xl aspect-video mb-4 flex items-center justify-center text-4xl cursor-pointer hover:bg-muted/80 transition-colors">
                {testimonial.thumbnail}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center shadow-medium">
                    <Play className="w-8 h-8 text-success-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{testimonial.name}</h3>
              <p className="text-success text-sm font-medium">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;