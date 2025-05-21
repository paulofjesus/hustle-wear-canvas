
import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

const ProductCard = ({ name, description, image }: ProductCardProps) => {
  return (
    <div className="group relative hover:z-10 transition-all duration-300 transform hover:-translate-y-2 mx-4">
      <div className="bg-hustle-black rounded-lg overflow-hidden border border-hustle-gold/30 hover:border-hustle-gold">
        <div className="h-64 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-xl font-bebas text-hustle-gold mb-1">{name}</h3>
          <p className="text-hustle-white/70 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
