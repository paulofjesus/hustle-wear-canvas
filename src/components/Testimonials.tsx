
import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "A melhor oversize que já usei! Material de qualidade e o caimento ficou perfeito no corpo.",
      author: "Lucas R."
    },
    {
      id: 2,
      text: "Atendimento brabo e camisa monstra! Já estou querendo comprar outra personalizada.",
      author: "Matheus S."
    },
    {
      id: 3,
      text: "Chegou antes do prazo e a qualidade é absurda. Melhor marca de street que já comprei!",
      author: "Carolina F."
    },
    {
      id: 4,
      text: "A personalização ficou igualzinha ao que eu pedi. Muito foda o trabalho de vocês!",
      author: "João P."
    }
  ];

  return (
    <section id="testimonials" className="bg-hustle-black section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">O Que Dizem Sobre Nós</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {testimonials.map(testimonial => (
            <TestimonialCard 
              key={testimonial.id}
              text={testimonial.text}
              author={testimonial.author}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-hustle-gold font-bebas text-2xl mb-4">Veja mais no nosso Instagram</p>
          <a 
            href="https://www.instagram.com/_hustle_wear" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-hustle-white hover:text-hustle-gold transition-colors"
          >
            <span className="mr-2">@_hustle_wear</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
