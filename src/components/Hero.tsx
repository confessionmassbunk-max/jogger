import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Magnetic } from './ui/Magnetic';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '50vh']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-primary flex flex-col justify-end">
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auth=fit&crop=entropy" 
          alt="High fashion athletic wear"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 flex flex-col items-start h-full justify-end pb-24 md:pb-32"
      >
        <div className="overflow-hidden mb-2">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="text-[12vw] leading-[0.85] font-light tracking-tighter uppercase text-balance"
          >
            Move
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
            className="text-[12vw] leading-[0.85] font-light tracking-tighter uppercase text-balance"
          >
            Different.
          </motion.h1>
        </div>
        
        <div className="flex w-full justify-between items-end">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Magnetic amount={0.2}>
              <button className="magnetic-interactive group relative overflow-hidden rounded-full border border-secondary/30 bg-transparent px-8 py-4 transition-colors hover:border-secondary">
                <span className="relative z-10 text-sm font-medium uppercase tracking-widest text-secondary mix-blend-difference">
                  Explore Collection
                </span>
                <div className="absolute inset-0 z-0 h-full w-full translate-y-full rounded-full bg-secondary transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
              </button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="hidden md:flex flex-col items-center gap-4 text-secondary/50"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-[1px] h-12 bg-gradient-to-b from-secondary/50 to-transparent"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
