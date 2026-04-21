import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const lookbookImages = [
  '/lookbook-1.jpg',
  '/lookbook-2.jpg',
  '/lookbook-3.jpg',
];

export const Lookbook: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Apply a spring to smooth out the snapping transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    mass: 0.5
  });

  // Stepped transform to create the "snap" pauses as the user scrolls
  const x = useTransform(
    smoothProgress,
    [0, 0.2, 0.35, 0.65, 0.8, 1],
    ["0%", "0%", "-33.333333%", "-33.333333%", "-66.666667%", "-66.666667%"]
  );

  return (
    <section id="lookbook" ref={targetRef} className="h-[200vh] md:h-[300vh] relative bg-primary">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        
        <div className="absolute top-12 md:top-24 left-6 md:left-12 z-20 mix-blend-difference text-white pointer-events-none">
          <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase mb-2">Lookbook</h2>
          <p className="tracking-widest uppercase text-xs md:text-sm font-medium">SS/26 Collection</p>
        </div>

        <motion.div style={{ x }} className="flex px-4 md:px-32 w-[300vw] h-[75vh] md:h-[80vh] items-center will-change-transform">
          {lookbookImages.map((src, idx) => {
            // Calculate parallax for each image individually based on its phase
            // Phase centers: 0, 0.5, 1
            const phaseStart = Math.max(0, (idx - 1) * 0.5);
            const phaseEnd = Math.min(1, (idx + 1) * 0.5);
            
            const imageX = useTransform(
              smoothProgress,
              [phaseStart, phaseEnd],
              ["-15%", "15%"]
            );

            return (
              <div 
                key={idx} 
                className="relative h-[75vh] md:h-[80vh] flex-none overflow-hidden group magnetic-interactive w-[100vw] pr-[4vw] md:pr-[12vw]"
              >
                <div className="w-full h-full relative overflow-hidden flex justify-center rounded-2xl md:rounded-none bg-black">
                  <motion.img 
                    style={{ x: imageX, scale: 1.15 }}
                    src={src} 
                    alt={`Lookbook ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.21,0.47,0.32,0.98)] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
