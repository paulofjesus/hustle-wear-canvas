
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hustle-black border-t border-hustle-gold/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bebas tracking-wider text-hustle-gold">HUSTLE WEAR</h2>
            <p className="text-hustle-white/60 mt-2">Vista o que representa você.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#about" className="text-hustle-white hover:text-hustle-gold transition-colors">Quem Somos</a>
            <a href="#products" className="text-hustle-white hover:text-hustle-gold transition-colors">Produtos</a>
            <a href="#customize" className="text-hustle-white hover:text-hustle-gold transition-colors">Personalize</a>
            <a href="#testimonials" className="text-hustle-white hover:text-hustle-gold transition-colors">Depoimentos</a>
            <a href="#contact" className="text-hustle-white hover:text-hustle-gold transition-colors">Contato</a>
          </div>
        </div>
        
        <div className="border-t border-hustle-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-hustle-white/60 text-sm mb-4 md:mb-0">
            © 2025 HUSTLE WEAR. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/_hustle_wear" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-hustle-white hover:text-hustle-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://wa.me/5511914642408" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-hustle-white hover:text-hustle-gold transition-colors"
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/>
                <path d="M13.5 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/>
                <path d="M9 11.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
