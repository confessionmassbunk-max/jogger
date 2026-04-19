import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';

export const Header: React.FC<{ category?: string, setCategory?: (c: any) => void }> = ({ category = 'All', setCategory }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150 && !menuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  const categories = ['All', 'Sweatpants', 'Shorts'];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled || menuOpen ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          <button onClick={() => setMenuOpen(!menuOpen)} className="magnetic-interactive p-2 -ml-2 text-white/80 hover:text-white transition-colors cursor-pointer z-50">
            {menuOpen ? <X strokeWidth={1.5} size={24} /> : <Menu strokeWidth={1.5} size={24} />}
          </button>
          
          <div className="cursor-pointer select-none flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
            <BrandLogo className="w-12 h-12 md:w-16 md:h-16 mt-1" />
            <div className="text-xl md:text-2xl font-medium tracking-tight uppercase hidden md:flex items-center gap-1">
              LAZE LABS<span className="text-white/50">.</span>
            </div>
          </div>
          
          <button 
            onClick={() => {
              const cart: any = document.getElementById('cart');
              if (cart && typeof cart.showModal === 'function') cart.showModal();
            }}
            className="magnetic-interactive p-2 -mr-2 text-white/80 hover:text-white transition-colors relative z-50 cursor-pointer"
          >
            <ShoppingBag strokeWidth={1.5} size={24} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl pt-32 px-6 flex flex-col"
          >
            <div className="max-w-4xl mx-auto w-full flex flex-col gap-8 text-center mt-12">
              <h2 className="text-sm font-medium tracking-[0.3em] uppercase text-white/30 mb-8">Categories</h2>
              {categories.map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <button
                    onClick={() => {
                      setCategory?.(c);
                      setMenuOpen(false);
                      document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`text-5xl md:text-7xl font-light tracking-tighter uppercase transition-colors cursor-pointer ${category === c ? 'text-white' : 'text-white/20 hover:text-white/60'}`}
                  >
                    {c}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
