import React from 'react';
import logo from '@/assets/academia-logo.png';

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <img 
            src={logo} 
            alt="Academia de Português - Prof. Álvaro Ferreira" 
            className="h-12 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;