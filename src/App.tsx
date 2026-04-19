import React from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Collection } from './components/Collection';
import { AppleScroll } from './components/AppleScroll';
import { Features } from './components/Features';
import { Lookbook } from './components/Lookbook';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <shopify-store
      store-domain="laze-lab.myshopify.com"
      public-access-token="fd04f3df73d9dcd4b5a89041f6670758"
      country="US"
      language="en"
    >
      <shopify-cart id="cart"></shopify-cart>
      <SmoothScroll>
        <div className="noise-overlay" />
        
        <Header />

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
    </shopify-store>
  );
}
