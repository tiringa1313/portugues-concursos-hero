import React from 'react';
import { Zap, Shield, Clock, CreditCard } from 'lucide-react';

const Guarantees = () => {
  const guarantees = [
    {
      icon: Zap,
      title: 'Acesso imediato',
      description: 'Comece a estudar agora mesmo'
    },
    {
      icon: Shield,
      title: 'Garantia de 15 dias',
      description: 'Satisfação garantida ou seu dinheiro de volta'
    },
    {
      icon: Clock,
      title: 'Acesso vitalício',
      description: 'Estude no seu tempo, sem pressa'
    },
    {
      icon: CreditCard,
      title: 'Pagamento seguro',
      description: 'Transação protegida e confiável'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <guarantee.icon className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{guarantee.title}</h3>
              <p className="text-muted-foreground text-sm">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;