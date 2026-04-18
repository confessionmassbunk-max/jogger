import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'AeroKnit Jogger',
    price: '$120',
    tag: 'New Arrival',
    images: [
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    id: 2,
    name: 'Tech-Stretch Short',
    price: '$85',
    tag: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1574626154625-9614c24d14b4?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502421379766-3d2371b694b8?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    id: 3,
    name: 'Zero-G Trackpant',
    price: '$145',
    tag: '',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?q=80&w=1000&auto=format&fit=crop'
    ]
  }
];

export const Collection: React.FC = () => {
  return (
    <section className="py-32 md:py-48 max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase w-full md:w-1/2">
          Engineered<br />For Motion.
        </h2>
        <a href="#" className="magnetic-interactive group flex items-center gap-2 text-sm uppercase tracking-widest mt-8 md:mt-0 font-medium">
          View All <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {products.map((product, i) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group cursor-pointer magnetic-interactive flex flex-col"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-white/5 mb-6 rounded-sm">
              {product.tag && (
                <div className="absolute top-4 left-4 z-20 text-[10px] uppercase tracking-widest bg-secondary text-primary px-3 py-1 rounded-full font-medium">
                  {product.tag}
                </div>
              )}
              <div className="absolute top-4 right-4 z-20 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="w-10 h-10 bg-primary/80 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 hover:bg-secondary hover:text-primary transition-colors">
                  <span className="text-lg leading-none mb-0.5">+</span>
                </div>
              </div>
              <img 
                src={product.images[0]} 
                alt={`${product.name} view 1`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                referrerPolicy="no-referrer"
              />
              <img 
                src={product.images[1]} 
                alt={`${product.name} view 2`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 scale-105 group-hover:opacity-100 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-medium tracking-tight uppercase">{product.name}</h3>
              <p className="text-secondary/60 text-sm tracking-wider">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
