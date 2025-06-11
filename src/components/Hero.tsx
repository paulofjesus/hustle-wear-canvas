
import React from 'react';

const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] 
        bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-hustle-black/70 via-hustle-black/60 to-hustle-black"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bebas mb-6 tracking-wider">
          <span className="text-hustle-white">Vista o que</span> <br />
          <span className="text-hustle-gold">representa você.</span>
        </h1>
        <p className="text-lg md:text-xl text-hustle-white/80 mb-8 max-w-2xl mx-auto">
        Streetwear da quebrada, 100% do seu jeito. <br/>Personalize com a Hustle.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => scrollTo('products')}
            className="btn-primary"
          >
            Ver Produtos
          </button>
          <button 
            onClick={() => scrollTo('customize')}
            className="border-2 border-hustle-gold text-hustle-gold font-bold py-3 px-6 rounded-md
            transition-all duration-300 hover:bg-hustle-gold hover:text-hustle-black
            focus:outline-none transform hover:scale-105"
          >
            Personalize a Sua
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-hustle-gold flex items-start justify-center">
          <div className="w-1 h-3 bg-hustle-gold rounded-full mt-2 animate-pulse-light"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
