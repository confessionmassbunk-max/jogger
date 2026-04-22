import React, { useState, useEffect } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Collection } from './components/Collection';
import { AppleScroll } from './components/AppleScroll';
import { Features } from './components/Features';
import { Lookbook } from './components/Lookbook';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { LegalModals } from './components/LegalModals';

export default function App() {
  const [category, setCategory] = useState<'All' | 'Sweatpants' | 'Shorts'>('All');

  useEffect(() => {
    const handleOpenModal = (e: any) => {
      const modalWrapper = document.getElementById('modal-wrapper');
      const modal: any = document.getElementById('product-modal');
      
      if (modalWrapper && modal) {
        modalWrapper.innerHTML = `
          <shopify-context type="product" handle="${e.detail.handle}">
            <template>
              <div class="product-modal__container relative max-h-[90vh] overflow-y-auto">
                <div class="sticky top-0 right-0 flex justify-end p-4 z-50">
                  <button onclick="document.getElementById('product-modal').close();" class="text-white/50 hover:text-white bg-black/80 backdrop-blur rounded-full w-10 h-10 flex items-center justify-center border border-white/10 transition-colors cursor-pointer">
                    ✕
                  </button>
                </div>
                <div class="px-6 pb-10 md:px-10 flex flex-col md:flex-row gap-8">
                  <div class="w-full md:w-1/2">
                     <shopify-media layout="fullWidth" query="product.selectedOrFirstAvailableVariant.image" style="width: 100%; border-radius: 12px; object-fit: cover; aspect-ratio: 4/5;"></shopify-media>
                  </div>
                  <div class="w-full md:w-1/2 flex flex-col justify-center">
                     <h1 class="text-3xl md:text-4xl font-light uppercase tracking-tight mb-2"><shopify-data query="product.title"></shopify-data></h1>
                     <div class="text-xl text-white/50 mb-8"><shopify-money query="product.selectedOrFirstAvailableVariant.price" format="money_with_currency"></shopify-money></div>
                     
                     <div class="mb-10 w-full">
                       <shopify-variant-selector></shopify-variant-selector>
                     </div>
                     
                     <div class="flex flex-col gap-3">
                       <button onclick="const cart = document.getElementById('cart'); cart.addLine(event); document.getElementById('product-modal').close(); cart.showModal();" class="w-full py-4 bg-white text-black uppercase tracking-widest text-sm font-semibold hover:opacity-90 transition-opacity rounded-full cursor-pointer">
                         Add to Cart
                       </button>
                       <button onclick="document.querySelector('shopify-store').buyNow(event)" class="w-full py-4 border border-white/20 text-white uppercase tracking-widest text-sm font-semibold hover:bg-white/5 transition-colors rounded-full cursor-pointer">
                         Buy Now
                       </button>
                     </div>
                     
                     <div class="mt-8 text-white/50 text-sm font-light leading-relaxed">
                       <shopify-data query="product.description"></shopify-data>
                     </div>
                  </div>
                </div>
              </div>
            </template>
            <div shopify-loading-placeholder>
              <div class="w-full h-[60vh] md:h-[80vh] flex items-center justify-center">
                 <div class="w-12 h-12 border-2 border-white/10 border-t-white/50 rounded-full animate-spin"></div>
              </div>
            </div>
          </shopify-context>
        `;
        modal.showModal();
      }
    };
    
    window.addEventListener('open-product', handleOpenModal);
    return () => window.removeEventListener('open-product', handleOpenModal);
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen font-sans selection:bg-white selection:text-black">
      {/* Configure Shopify Store */}
      <shopify-store
        store-domain="laze-lab.myshopify.com"
        public-access-token="fd04f3df73d9dcd4b5a89041f6670758"
        country="IN"
        language="en"
      >
      </shopify-store>
      
      {/* Shopify Cart Drawer */}
      <shopify-cart id="cart" position="right" backdrop></shopify-cart>
      
      {/* Product Modal */}
      <dialog id="product-modal" className="product-modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24px] shadow-2xl border-0 p-0 m-0 w-[90%] max-w-4xl backdrop:bg-black/50 overflow-hidden bg-[#0A0A0A] text-[#F5F5F5] z-[150]">
        <div id="modal-wrapper"></div>
      </dialog>

      <LegalModals />
      <CookieConsent />

      <SmoothScroll>
        <div className="noise-overlay" />
        
        <Header category={category} setCategory={setCategory} />

        <main className="relative z-0">
          <Hero />
          <Collection category={category} />
          <AppleScroll />
          <Features />
          <Lookbook />
        </main>

        <Footer />
      </SmoothScroll>

      <style dangerouslySetInnerHTML={{ __html: `
        shopify-variant-selector::part(form) { display: flex; flex-direction: column; gap: 20px; }
        shopify-variant-selector::part(label) { display: block; text-transform: uppercase; font-size: 10px; letter-spacing: 0.15em; color: rgba(255,255,255,0.4); margin-bottom: 8px; }
        shopify-variant-selector::part(select) { width: 100%; appearance: none; background: #111; border: 1px solid rgba(255,255,255,0.1); color: white; padding: 12px 16px; border-radius: 8px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; outline: none; transition: border-color 0.3s ease; }
        shopify-variant-selector::part(select):hover { border-color: rgba(255,255,255,0.25); }
        shopify-variant-selector::part(select):focus { border-color: white; }
      `}} />
    </div>
  );
}
