
import React, { useState } from 'react';
import { Instagram, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const message = encodeURIComponent(
      `Olá, me chamo ${formData.name} e gostaria de saber mais sobre as roupas da Hustle Wear. ${formData.message}`
    );
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/5511914642408?text=${message}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      whatsapp: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="bg-hustle-black section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Entre em Contato</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bebas text-hustle-gold mb-6">Fale com a Hustle</h3>
            <p className="text-hustle-white/80 mb-8">
              Precisa de ajuda com seu pedido? Quer saber mais sobre nossas peças?
              Estamos aqui para ajudar. Entre em contato com a gente!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-hustle-gold/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp text-hustle-gold">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/>
                    <path d="M13.5 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/>
                    <path d="M9 11.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-hustle-white/60 text-sm">WhatsApp</p>
                  <a 
                    href="https://wa.me/5511914642408" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-hustle-white hover:text-hustle-gold transition-colors"
                  >
                    (11) 91464-2408
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-hustle-gold/20 flex items-center justify-center mr-4">
                  <Instagram className="text-hustle-gold" />
                </div>
                <div>
                  <p className="text-hustle-white/60 text-sm">Instagram</p>
                  <a 
                    href="https://www.instagram.com/_hustle_wear" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-hustle-white hover:text-hustle-gold transition-colors"
                  >
                    @_hustle_wear
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-hustle-white/80 mb-2">Nome</label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-hustle-black/50 border border-hustle-gold/30 rounded-md px-4 py-3 text-hustle-white focus:outline-none focus:border-hustle-gold transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="whatsapp" className="block text-hustle-white/80 mb-2">WhatsApp</label>
                <input 
                  type="text"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full bg-hustle-black/50 border border-hustle-gold/30 rounded-md px-4 py-3 text-hustle-white focus:outline-none focus:border-hustle-gold transition-colors"
                  placeholder="(11) 98765-4321"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-hustle-white/80 mb-2">Mensagem</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-hustle-black/50 border border-hustle-gold/30 rounded-md px-4 py-3 text-hustle-white focus:outline-none focus:border-hustle-gold transition-colors"
                  placeholder="Sua mensagem aqui..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="btn-primary flex items-center w-full justify-center"
              >
                <span>Enviar Mensagem</span>
                <ArrowRight size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/5511914642408" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp mr-2">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/>
              <path d="M13.5 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/>
              <path d="M9 11.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z"/>
            </svg>
            Falar com a Hustle no Whats
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
