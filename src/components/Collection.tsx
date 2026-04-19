import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ShopifyProduct {
  handle: string;
  category: string;
}

export const Collection: React.FC<{ category?: string }> = ({ category = 'All' }) => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `
          {
            products(first: 100) {
              edges {
                node {
                  handle
                  title
                }
              }
            }
          }
        `;
        
        const res = await fetch('https://laze-lab.myshopify.com/api/2023-10/graphql.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': 'fd04f3df73d9dcd4b5a89041f6670758',
          },
          body: JSON.stringify({ query })
        });
        
        const json = await res.json();
        const fetchedProducts = json.data.products.edges.map((edge: any) => {
          let cat = 'Apparel';
          const title = edge.node.title.toLowerCase();
          if (title.includes('sweatpants') || title.includes('jogger')) cat = 'Sweatpants';
          if (title.includes('short')) cat = 'Shorts';
          if (title.includes('tee') || title.includes('t-shirt')) cat = 'Tees';
          if (title.includes('cap') || title.includes('hat')) cat = 'Headwear';

          return {
            handle: edge.node.handle,
            category: cat
          };
        });
        
        setProducts(fetchedProducts);
      } catch (err) {
        console.error('Failed to fetch Shopify handles', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (category === 'All') return products;
    return products.filter(p => p.category === category);
  }, [category, products]);

  if (isLoading) {
    return (
      <section id="collection" className="py-24 md:py-32 max-w-[1440px] mx-auto px-6 md:px-12 min-h-[50vh] flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
      </section>
    );
  }

  return (
    <section id="collection" className="py-24 md:py-32 max-w-[1440px] mx-auto px-6 md:px-12 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase w-full md:w-1/2">
          {category === 'All' ? 'The Collection.' : `${category}.`}
        </h2>
      </div>

      <div className={`grid grid-cols-1 ${filteredProducts.length === 1 ? 'md:grid-cols-1 max-w-[360px] mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8 md:gap-12`}>
        {filteredProducts.map((product, i) => (
          <motion.div 
            key={product.handle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group cursor-pointer flex flex-col w-full"
            onClick={() => {
              window.dispatchEvent(new CustomEvent('open-product', { detail: { handle: product.handle } }));
            }}
          >
            <shopify-context type="product" handle={product.handle}>
              <template dangerouslySetInnerHTML={{ __html: `
                <div class="relative w-full overflow-hidden bg-[#0A0A0A] mb-6 rounded-[16px] border border-white/5 transition-colors group-hover:border-white/15" style="aspect-ratio: 4/5;">
                  
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10 pointer-events-none"></div>

                  <!-- Dynamic Image -->
                  <shopify-media 
                    query="product.selectedOrFirstAvailableVariant.image"
                    layout="fullWidth"
                    style="width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 16px;"
                  ></shopify-media>
                </div>

                <div class="flex justify-between items-start px-2">
                  <h3 class="text-sm md:text-base font-medium tracking-tight uppercase text-white group-hover:text-white/80 transition-colors">
                    <shopify-data query="product.title"></shopify-data>
                  </h3>
                  <p class="text-white/60 text-xs md:text-sm tracking-widest font-light">
                    <shopify-money query="product.selectedOrFirstAvailableVariant.price" format="money_with_currency"></shopify-money>
                  </p>
                </div>
              `}} />
              
              <div shopify-loading-placeholder={true as any} className="w-full flex items-center justify-center bg-[#111] mb-6 rounded-[16px] border border-white/5" style={{ aspectRatio: '4/5' }}>
                <div class="w-6 h-6 border-[1px] border-white/10 border-t-white/60 rounded-full animate-spin"></div>
              </div>
            </shopify-context>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
