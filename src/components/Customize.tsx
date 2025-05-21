
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Customize = () => {
  return (
    <section 
      id="customize" 
      className="section-padding relative bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3')] bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-hustle-black/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-8">
            <span className="text-sm font-medium inline-block bg-hustle-green/20 text-hustle-green px-3 py-1 rounded-full">
              PERSONALIZAÇÃO EXCLUSIVA
            </span>
          </div>
          
          <h2 className="section-title">
            Personalize a Sua
          </h2>
          
          <div className="bg-hustle-black/40 backdrop-blur-sm border border-hustle-gold/20 p-8 rounded-lg">
            <p className="text-xl md:text-2xl font-bebas mb-6 text-hustle-white">
              Quer algo só seu?
            </p>
            <p className="text-lg md:text-xl text-hustle-white/80 mb-8">
              Aqui você cria sua própria peça com a cara da Hustle.
              Estampas exclusivas para representar seu estilo único.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-hustle-black/50 p-6 rounded-lg border border-hustle-gold/30">
                <div className="text-hustle-gold text-3xl font-bebas mb-2">01</div>
                <h3 className="font-bebas text-hustle-white text-xl mb-2">Escolha o Modelo</h3>
                <p className="text-hustle-white/70">Selecione o estilo e tamanho que mais combina com você</p>
              </div>
              
              <div className="bg-hustle-black/50 p-6 rounded-lg border border-hustle-gold/30">
                <div className="text-hustle-gold text-3xl font-bebas mb-2">02</div>
                <h3 className="font-bebas text-hustle-white text-xl mb-2">Crie sua Arte</h3>
                <p className="text-hustle-white/70">Envie sua ideia ou escolha entre nossas estampas exclusivas</p>
              </div>
              
              <div className="bg-hustle-black/50 p-6 rounded-lg border border-hustle-gold/30">
                <div className="text-hustle-gold text-3xl font-bebas mb-2">03</div>
                <h3 className="font-bebas text-hustle-white text-xl mb-2">Receba em Casa</h3>
                <p className="text-hustle-white/70">Sua peça única entregue diretamente na sua porta</p>
              </div>
            </div>
            
            <a 
              href="https://wa.me/5511914642408" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <span>Começar Personalização</span>
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customize;
