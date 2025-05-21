
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-hustle-black section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Quem Somos</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-12">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-hustle-gold"></div>
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Hustle Wear Streetwear" 
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bebas mb-6 text-hustle-gold">
              Da periferia para o mundo
            </h3>
            <p className="text-hustle-white/90 mb-6 text-lg">
              A Hustle nasceu das quebradas, feita pra quem vive o corre.
              Estilo de rua com essência, alma e atitude.
            </p>
            <p className="text-hustle-white/90 mb-6 text-lg">
              Cada peça é uma expressão — urbana, personalizada, e 100% você.
              Nossas roupas oversized são feitas para destacar seu estilo único, 
              mantendo o conforto e qualidade que você merece.
            </p>
            <p className="text-hustle-white/90 mb-6 text-lg">
              Na <span className="text-hustle-gold font-semibold">HUSTLE</span>, criamos mais que roupas.
              Criamos identidade.
            </p>
            
            <div className="flex gap-4 mt-8">
              <div className="border-l-2 border-hustle-gold pl-4">
                <p className="text-hustle-gold text-4xl font-bebas">100%</p>
                <p className="text-hustle-white/80">Personalizado</p>
              </div>
              <div className="border-l-2 border-hustle-gold pl-4">
                <p className="text-hustle-gold text-4xl font-bebas">Original</p>
                <p className="text-hustle-white/80">Das quebradas</p>
              </div>
              <div className="border-l-2 border-hustle-gold pl-4">
                <p className="text-hustle-gold text-4xl font-bebas">Qualidade</p>
                <p className="text-hustle-white/80">Premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
