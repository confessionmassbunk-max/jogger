import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const lookbookImages = [
  'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543728069-a3f97c1bd017?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=1000&auto=format&fit=crop',
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
    [0, 0.15, 0.25, 0.45, 0.55, 0.75, 0.85, 1],
    ["0%", "0%", "-25%", "-25%", "-50%", "-50%", "-75%", "-75%"]
  );

  return (
    <section ref={targetRef} className="h-[400vh] relative bg-primary">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        
        <div className="absolute top-12 md:top-24 left-6 md:left-12 z-20 mix-blend-difference text-white pointer-events-none">
          <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase mb-2">Lookbook</h2>
          <p className="tracking-widest uppercase text-xs md:text-sm font-medium">SS/26 Collection</p>
        </div>

        <motion.div style={{ x }} className="flex px-6 md:px-32 w-[400vw] h-[60vh] md:h-[70vh] items-center will-change-transform">
          {lookbookImages.map((src, idx) => {
            // Calculate parallax for each image individually based on its phase
            // Phase centers: 0, 0.35, 0.65, 1
            const phaseStart = Math.max(0, (idx - 1) * 0.33);
            const phaseEnd = Math.min(1, (idx + 1) * 0.33);
            
            const imageX = useTransform(
              smoothProgress,
              [phaseStart, phaseEnd],
              ["-15%", "15%"]
            );

            return (
              <div 
                key={idx} 
                className="relative h-[50vh] md:h-[70vh] w-full flex-none overflow-hidden group magnetic-interactive"
                style={{ width: '100vw', paddingRight: '12vw' }}
              >
                <div className="w-full h-full relative overflow-hidden flex justify-center">
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
