
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Customize from '../components/Customize';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-hustle-black">
      <Header />
      <Hero />
      <About />
      <Products />
      <Customize />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
