import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const products = [
  { handle: 'unisex-sweatpants', category: 'Sweatpants' },
  { handle: 'tech-stretch-short', category: 'Shorts' }
];

export const Collection: React.FC<{ category?: string }> = ({ category = 'All' }) => {
  const filteredProducts = useMemo(() => {
    if (category === 'All') return products;
    return products.filter(p => p.category === category);
  }, [category]);

  return (
    <section id="collection" className="py-24 md:py-32 max-w-[1440px] mx-auto px-6 md:px-12 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase w-full md:w-1/2">
          {category === 'All' ? 'The Collection.' : `${category}.`}
        </h2>
      </div>

      <div className={`grid grid-cols-1 ${filteredProducts.length === 1 ? 'md:grid-cols-1 max-w-md mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8 md:gap-12`}>
        {filteredProducts.map((product, i) => (
          <motion.div 
            key={product.handle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group cursor-pointer flex flex-col"
            onClick={() => {
              const modalContext = document.getElementById('product-modal-context');
              const modal: any = document.getElementById('product-modal');
              if (modalContext && modal) {
                modalContext.setAttribute('handle', product.handle);
                modal.showModal();
              }
            }}
          >
            <shopify-context type="product" handle={product.handle}>
              <template dangerouslySetInnerHTML={{ __html: `
                <div class="relative aspect-[4/5] w-full overflow-hidden bg-[#111] mb-6 rounded-[16px]">
                  
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10 pointer-events-none"></div>

                  <!-- Dynamic Image -->
                  <shopify-media 
                    query="product.selectedOrFirstAvailableVariant.image"
                    layout="fullWidth"
                    style="width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 16px;"
                  ></shopify-media>
                </div>

                <div class="flex justify-between items-start px-1">
                  <h3 class="text-lg font-medium tracking-tight uppercase text-white group-hover:text-white/80 transition-colors">
                    <shopify-data query="product.title"></shopify-data>
                  </h3>
                  <p class="text-white/60 text-sm tracking-wider font-light">
                    <shopify-money query="product.selectedOrFirstAvailableVariant.price" format="money_with_currency"></shopify-money>
                  </p>
                </div>
              `}} />
              
              <div shopify-loading-placeholder={true as any} className="aspect-[4/5] w-full flex items-center justify-center bg-[#111] mb-6 rounded-[16px] text-white/30 uppercase text-xs tracking-widest">
                Loading...
              </div>
            </shopify-context>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
