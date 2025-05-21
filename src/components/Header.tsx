
import { useState, useEffect } from 'react';
import { Menu, Instagram, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-hustle-black py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bebas tracking-wider text-hustle-gold">HUSTLE</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollTo('about')} className="text-hustle-white hover:text-hustle-gold transition-colors">Quem Somos</button>
          <button onClick={() => scrollTo('products')} className="text-hustle-white hover:text-hustle-gold transition-colors">Produtos</button>
          <button onClick={() => scrollTo('customize')} className="text-hustle-white hover:text-hustle-gold transition-colors">Personalize a Sua</button>
          <button onClick={() => scrollTo('testimonials')} className="text-hustle-white hover:text-hustle-gold transition-colors">Depoimentos</button>
          <button onClick={() => scrollTo('contact')} className="text-hustle-white hover:text-hustle-gold transition-colors">Contato</button>
        </nav>

        {/* CTA Button */}
        <a 
          href="https://wa.me/5511914642408" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center bg-hustle-gold text-hustle-black px-4 py-2 rounded-md hover:bg-hustle-green transition-colors duration-300"
        >
          <span className="mr-2">Personalize Agora</span>
          <ArrowRight size={18} />
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-hustle-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-hustle-black shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollTo('about')} className="text-hustle-white hover:text-hustle-gold py-2 transition-colors">Quem Somos</button>
            <button onClick={() => scrollTo('products')} className="text-hustle-white hover:text-hustle-gold py-2 transition-colors">Produtos</button>
            <button onClick={() => scrollTo('customize')} className="text-hustle-white hover:text-hustle-gold py-2 transition-colors">Personalize a Sua</button>
            <button onClick={() => scrollTo('testimonials')} className="text-hustle-white hover:text-hustle-gold py-2 transition-colors">Depoimentos</button>
            <button onClick={() => scrollTo('contact')} className="text-hustle-white hover:text-hustle-gold py-2 transition-colors">Contato</button>
            <a 
              href="https://wa.me/5511914642408" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-hustle-gold text-hustle-black px-4 py-2 rounded-md hover:bg-hustle-green transition-colors duration-300"
            >
              <span className="mr-2">Personalize Agora</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
