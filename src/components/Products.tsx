import React, { useRef } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const products = [
    {
      id: 1,
      name: 'Estampa Retrô',
      description: 'Estilo urbano com toque de elegância',
      image: '/images/Hustle Wear.pdf (1)-1.png'
    },
    {
      id: 2,
      name: 'Estampa Caracol',
      description: 'Design exclusivo com estilo único',
      image: '/images/Hustle Wear.pdf (2)-1.png'
    },
    {
      id: 3,
      name: 'Camisa Oversize Off White',
      description: 'Corte largo e confortável, 100% algodão',
      image: '/images/Hustle Wear.pdf-1.png'
    },
    {
      id: 4,
      name: 'Estampa Favela',
      description: 'Das quebradas para as ruas da cidade',
      image: '/images/Hustle Wear.pdf (3)-1.png'
    },
    {
      id: 5,
      name: 'Camisa Logo Hustle',
      description: 'Estampa com nosso logo icônico',
      image: '/images/Hustle Wear.pdf (4)-1.png'
    }
  ];

  return (
    <section id="products" className="bg-hustle-black section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Produtos em Destaque</h2>
        
        <div className="relative mt-12">
          {/* Left Arrow */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-hustle-black/70 p-2 rounded-full text-hustle-gold hover:bg-hustle-gold hover:text-hustle-black transition-colors duration-300"
            aria-label="Produtos anteriores"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Products Carousel */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory py-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map(product => (
              <div key={product.id} className="min-w-[280px] snap-start">
                <ProductCard 
                  name={product.name} 
                  description={product.description} 
                  image={product.image}
                />
              </div>
            ))}
          </div>
          
          {/* Right Arrow */}
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-hustle-black/70 p-2 rounded-full text-hustle-gold hover:bg-hustle-gold hover:text-hustle-black transition-colors duration-300"
            aria-label="Próximos produtos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://wa.me/5511914642408" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Ver Todos os Produtos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
