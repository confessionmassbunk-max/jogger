import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

// We fallback to standard mock handles or handles we expect in the Shopify Store
const productHandles = ['unisex-sweatpants', 'hoodie', 'tech-stretch-short'];

export const Collection: React.FC = () => {
  return (
    <section id="collection" className="py-32 md:py-48 max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase w-full md:w-1/2">
          Engineered<br />For Motion.
        </h2>
        <button onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })} className="magnetic-interactive group flex items-center gap-2 text-sm uppercase tracking-widest mt-8 md:mt-0 font-medium">
          View All <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {productHandles.map((handle, i) => (
          <motion.div 
            key={handle}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group cursor-pointer flex flex-col"
          >
            <shopify-context type="product" handle={handle}>
              <template dangerouslySetInnerHTML={{ __html: `
                <div class="relative aspect-[3/4] w-full overflow-hidden bg-white/5 mb-6 rounded-sm">
                  
                  <div class="absolute top-4 right-4 z-20 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <button 
                      onclick="const cart = document.getElementById('cart'); if (cart) cart.addLine(event).showModal();"
                      shopfiy-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
                      class="w-10 h-10 bg-primary/80 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 hover:bg-secondary hover:text-primary transition-colors cursor-pointer"
                    >
                      <span class="text-lg leading-none mb-0.5">+</span>
                    </button>
                  </div>
                  
                  <!-- Dynamic Image -->
                  <shopify-media 
                    query="product.selectedOrFirstAvailableVariant.image"
                    layout="fullWidth"
                    style="width: 100%; height: 100%; object-fit: cover; display: block;"
                  ></shopify-media>
                </div>

                <div class="flex justify-between items-start">
                  <h3 class="text-lg font-medium tracking-tight uppercase">
                    <shopify-data query="product.title"></shopify-data>
                  </h3>
                  <p class="text-secondary/60 text-sm tracking-wider">
                    <shopify-money query="product.selectedOrFirstAvailableVariant.price" format="money_with_currency"></shopify-money>
                  </p>
                </div>
              `}} />
              
              <div shopify-loading-placeholder={true as any} className="aspect-[3/4] w-full flex items-center justify-center bg-white/5 mb-6 rounded-sm text-secondary/30 uppercase text-xs tracking-widest">
                Loading...
              </div>
            </shopify-context>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
