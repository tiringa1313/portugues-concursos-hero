import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Academia de Português</h3>
            <p className="text-background/80">Prof. Álvaro Ferreira</p>
          </div>
          
          <div className="border-t border-background/20 pt-6">
            <p className="text-sm text-background/60 mb-4">
              Este site é independente e tem fins de divulgação educacional.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors">
                Política de Privacidade
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-background transition-colors">
                Termos de Uso
              </a>
              <span className="hidden sm:inline">•</span>
              <span>© 2024 Academia de Português</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;