
import React from 'react';

interface TestimonialCardProps {
  text: string;
  author: string;
  image?: string;
}

const TestimonialCard = ({ text, author, image }: TestimonialCardProps) => {
  return (
    <div className="bg-hustle-black/80 border border-hustle-gold/30 p-6 rounded-lg h-full">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          {/* Quote Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-hustle-gold/40" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        
        <p className="text-hustle-white mb-6 flex-grow">"{text}"</p>
        
        <div className="flex items-center mt-auto">
          {image && (
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <img 
                src={image} 
                alt={author} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="text-hustle-gold font-bebas text-lg">{author}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
