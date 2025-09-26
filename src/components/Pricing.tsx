import React from 'react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Invista no seu futuro
          </h2>
          
          <div className="bg-card rounded-3xl p-8 shadow-large mb-8">
            <div className="mb-6">
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                12x <span className="text-success">R$35,89</span>
              </div>
              <div className="text-xl text-muted-foreground">
                ou <span className="font-semibold text-foreground">R$347</span> à vista
              </div>
            </div>
            
            <div className="space-y-3 mb-8 text-left">
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">88 horas de conteúdo</span>
                <span className="text-success font-semibold">✓ Incluído</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">1300 questões comentadas</span>
                <span className="text-success font-semibold">✓ Incluído</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Acesso vitalício</span>
                <span className="text-success font-semibold">✓ Incluído</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-muted-foreground">Garantia de 15 dias</span>
                <span className="text-success font-semibold">✓ Incluído</span>
              </div>
            </div>
            
            <Button variant="cta" size="xl" className="w-full">
              Quero começar agora
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Pagamento 100% seguro • Acesso imediato • Garantia de 15 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;