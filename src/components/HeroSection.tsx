import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import heroImage from '@/assets/hero-professor.jpg';

const HeroSection = () => {
  const benefits = [
    'Conteúdo atualizado conforme os editais',
    'Questões resolvidas passo a passo',
    'Teoria clara e direta ao ponto',
    'Acesso vitalício – estude no seu ritmo',
    'Preparação prática para concursos públicos'
  ];

  return (
    <section className="bg-gradient-hero py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
              Curso Completo de Português para{' '}
              <span className="text-success">Concursos Públicos</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Aprenda Português de forma prática e conquiste pontos extras no seu concurso. 
              Mais de <span className="font-semibold text-success">59 mil alunos</span> já 
              estudaram com o Prof. Álvaro Ferreira!
            </p>
<div className="mb-8">
  <a 
    href="https://go.hotmart.com/Q102033011B?ap=13f6" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Button variant="hero" size="xl" className="w-full sm:w-auto mb-6">
      Quero ficar forte em Português
    </Button>
  </a>
</div>


            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <div className="flex-shrink-0 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-success-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:order-first">
            <img 
              src={heroImage} 
              alt="Prof. Álvaro Ferreira ensinando português"
              className="w-full h-auto rounded-2xl shadow-large"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;