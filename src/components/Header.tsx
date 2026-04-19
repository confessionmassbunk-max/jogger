import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { BrandLogo } from './BrandLogo';

export const Header: React.FC<{ setCartOpen?: (b: boolean) => void, cartCount?: number }> = ({ setCartOpen, cartCount = 0 }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-primary/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        <button onClick={() => alert('Menu opened!')} className="magnetic-interactive p-2 -ml-2 text-secondary/80 hover:text-secondary transition-colors">
          <Menu strokeWidth={1.5} size={24} />
        </button>
        
        <div className="magnetic-interactive cursor-pointer select-none flex items-center gap-3">
          <BrandLogo className="w-12 h-12 md:w-16 md:h-16 mt-1" />
          <div className="text-xl md:text-2xl font-medium tracking-tight uppercase hidden md:flex items-center gap-1">
            LAZE LABS<span className="text-secondary/50">.</span>
          </div>
        </div>
        
        <button 
          onClick={() => setCartOpen?.(true)}
          className="magnetic-interactive p-2 -mr-2 text-secondary/80 hover:text-secondary transition-colors relative"
        >
          <ShoppingBag strokeWidth={1.5} size={24} />
          {cartCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-secondary rounded-full flex items-center justify-center text-[10px] text-primary font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </motion.header>
  );
};
