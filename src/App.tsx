import React, { useState, useEffect } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Collection } from './components/Collection';
import { AppleScroll } from './components/AppleScroll';
import { Features } from './components/Features';
import { Lookbook } from './components/Lookbook';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleOpen = () => setCartOpen(true);
    const handleAdd = () => {
      setCartCount(prev => prev + 1);
      setCartOpen(true);
    };
    window.addEventListener('open-cart', handleOpen);
    window.addEventListener('add-to-cart', handleAdd);
    return () => {
      window.removeEventListener('open-cart', handleOpen);
      window.removeEventListener('add-to-cart', handleAdd);
    };
  }, []);

  return (
    <SmoothScroll>
      <div className="noise-overlay" />
      
      {/* We intercept header cart clicks by passing a generic mechanism or via layout context. 
          For simplicity, we'll just open the cart explicitly across the app or inside header.
          Let's pass state manually. We need to update Header for this, but for now we can wrap Header
          interaction or update Header directly. */}
      {/* I will edit Header shortly to accept setCartOpen */}
      <Header setCartOpen={setCartOpen} cartCount={cartCount} />
      <Cart isOpen={cartOpen} setIsOpen={setCartOpen} cartCount={cartCount} />

      <main className="relative z-0">
        <Hero />
        <Collection />
        <AppleScroll />
        <Features />
        <Lookbook />
        <Testimonials />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
