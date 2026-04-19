import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
  cartCount?: number;
}

export const Cart: React.FC<CartProps> = ({ isOpen, setIsOpen, cartCount = 0 }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-primary/60 backdrop-blur-sm z-[90]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-primary border-l border-white/10 z-[100] flex flex-col"
          >
            <div className="p-6 md:p-8 flex justify-between items-center border-b border-white/10">
              <h2 className="text-xl uppercase tracking-widest font-medium">Your Cart ({cartCount})</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mb-6">
                <span className="w-2 h-2 bg-white/20 rounded-full" />
              </div>
              <h3 className="text-lg font-light tracking-widest uppercase mb-2">
                {cartCount > 0 ? `You have ${cartCount} items` : 'Cart is empty'}
              </h3>
              <p className="text-secondary/50 text-sm">
                {cartCount > 0 ? "Ready to checkout and elevate your movement?" : "Discover the latest collection and elevate your movement."}
              </p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-8 border-b text-sm tracking-widest uppercase pb-1 hover:text-white/70 transition-colors"
              >
                Continue Shopping
              </button>
            </div>

            <div className="p-6 md:p-8 border-t border-white/10">
              <button 
                onClick={() => {
                  if (cartCount > 0) {
                    window.location.href = "https://laze-lab.myshopify.com/products/unisex-sweatpants";
                  }
                }}
                className={`w-full py-4 bg-secondary text-primary uppercase tracking-widest text-sm font-medium flex items-center justify-center gap-2 group relative overflow-hidden ${
                  cartCount === 0 ? 'cursor-not-allowed opacity-50' : 'hover:opacity-90'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Checkout <ArrowRight size={16} />
                </span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
