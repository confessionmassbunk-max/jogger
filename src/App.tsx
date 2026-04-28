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
        const galleryHtml = e.detail.images && e.detail.images.length > 1
          ? e.detail.images.slice(1).map((imgUrl: string) => `
              <div class="snap-center shrink-0 w-full flex-none">
                <img src="${imgUrl}" alt="Product Image" class="w-full rounded-xl object-cover aspect-[4/5] md:aspect-[4/5] max-h-[50vh] md:max-h-none" loading="lazy" />
              </div>
            `).join('')
          : '';

        const imagesHtml = `
          <div class="snap-center shrink-0 w-full flex-none">
            <shopify-media layout="fullWidth" query="product.selectedOrFirstAvailableVariant.image" class="w-full rounded-xl object-cover aspect-[4/5] md:aspect-[4/5] max-h-[50vh] md:max-h-none block"></shopify-media>
          </div>
          ${galleryHtml}
        `;

        modalWrapper.innerHTML = `
          <shopify-context type="product" handle="${e.detail.handle}">
            <template>
              <div class="product-modal__container relative max-h-[95vh] md:max-h-[90vh] overflow-y-auto bg-[#0A0A0A]">
                <div class="sticky top-0 right-0 flex justify-end p-3 md:p-4 z-50 pointer-events-none">
                  <button onclick="document.getElementById('product-modal').close();" class="text-white/50 hover:text-white bg-black/80 backdrop-blur rounded-full w-10 h-10 flex items-center justify-center border border-white/10 transition-colors cursor-pointer pointer-events-auto">
                    ✕
                  </button>
                </div>
                <div class="px-4 pb-8 md:px-10 md:pb-10 flex flex-col md:flex-row gap-6 md:gap-8 -mt-12 md:-mt-16">
                  <div class="w-full md:w-1/2 overflow-hidden pt-4 md:pt-0">
                     <div id="product-gallery-container" class="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full cursor-grab active:cursor-grabbing" style="scrollbar-width: none; -ms-overflow-style: none;">
                       ${imagesHtml}
                     </div>
                     ${e.detail.images && e.detail.images.length > 1 ? `<div class="text-center text-xs text-white/50 mt-4 uppercase tracking-widest hidden md:block">← Drag for more →</div><div class="text-center text-xs text-white/50 mt-4 uppercase tracking-widest md:hidden">← Swipe for more →</div>` : ''}
                  </div>
                  <div class="w-full md:w-1/2 flex flex-col justify-center">
                     <h1 class="text-2xl md:text-4xl font-light uppercase tracking-tight mb-2"><shopify-data query="product.title"></shopify-data></h1>
                     <div class="text-lg md:text-xl text-white/50 mb-6 md:mb-8"><shopify-money query="product.selectedOrFirstAvailableVariant.price" format="money_with_currency"></shopify-money></div>
                     
                     <div class="mb-8 md:mb-10 w-full" onchange="document.getElementById('product-gallery-container')?.scrollTo({ left: 0, behavior: 'smooth' })">
                       <shopify-variant-selector></shopify-variant-selector>
                     </div>
                     
                     <div class="flex flex-col gap-3">
                       <button onclick="const cart = document.getElementById('cart'); cart.addLine(event); document.getElementById('product-modal').close(); cart.showModal();" class="w-full py-3.5 md:py-4 bg-white text-black uppercase tracking-widest text-sm font-semibold hover:opacity-90 transition-opacity rounded-full cursor-pointer">
                         Add to Cart
                       </button>
                       <button onclick="document.querySelector('shopify-store').buyNow(event)" class="w-full py-3.5 md:py-4 border border-white/20 text-white uppercase tracking-widest text-sm font-semibold hover:bg-white/5 transition-colors rounded-full cursor-pointer">
                         Buy Now
                       </button>
                     </div>
                     
                     <div class="mt-6 md:mt-8 text-white/50 text-sm font-light leading-relaxed">
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

        // Add drag-to-scroll functionality for desktop
        setTimeout(() => {
          const slider = document.getElementById('product-gallery-container');
          if (!slider) return;

          let isDown = false;
          let startX = 0;
          let scrollLeft = 0;

          slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            slider.classList.remove('snap-x', 'snap-mandatory');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
          });

          const stopDrag = () => {
            isDown = false;
            slider.classList.remove('active');
            slider.classList.add('snap-x', 'snap-mandatory');
          };

          slider.addEventListener('mouseleave', stopDrag);
          slider.addEventListener('mouseup', stopDrag);

          slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // scroll speed multiplier
            slider.scrollLeft = scrollLeft - walk;
          });
        }, 100);

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
      <dialog id="product-modal" className="product-modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24px] shadow-2xl border-0 p-0 m-0 w-[95%] md:w-[90%] max-w-4xl backdrop:bg-black/50 overflow-hidden bg-[#0A0A0A] text-[#F5F5F5] z-[150]">
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
        .flex::-webkit-scrollbar { display: none; }
      `}} />
    </div>
  );
}
