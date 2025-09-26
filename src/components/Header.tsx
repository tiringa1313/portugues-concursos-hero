import React from 'react';
import logo from '@/assets/academia-logo.png';

const Header = () => {
  return (
    <header >


      <div className="w-full">
        <img 
          src={logo} 
          alt="Academia de Português - Prof. Álvaro Ferreira" 
          className="w-full h-auto object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
