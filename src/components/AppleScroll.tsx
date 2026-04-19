import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export const AppleScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Inertial smooth spring for that buttery Apple scroll translation feeling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1,
    restDelta: 0.001
  });

  // --- TEXT TIMING ---
  // Adjusted for perfect breathing room (Text 1 fades completely before Text 2 appears)
  // Precision Fit
  const text1Opacity = useTransform(smoothProgress, [0, 0.05, 0.22, 0.28], [0, 1, 1, 0]);
  const text1Y = useTransform(smoothProgress, [0, 0.05, 0.22, 0.28], [40, 0, 0, -40]);

  // Engineered Comfort
  const text2Opacity = useTransform(smoothProgress, [0.35, 0.40, 0.57, 0.63], [0, 1, 1, 0]);
  const text2Y = useTransform(smoothProgress, [0.35, 0.40, 0.57, 0.63], [40, 0, 0, -40]);

  // Zero Gravity
  const text3Opacity = useTransform(smoothProgress, [0.70, 0.75, 0.92, 0.98], [0, 1, 1, 0]);
  const text3Y = useTransform(smoothProgress, [0.70, 0.75, 0.92, 0.98], [40, 0, 0, -40]);

  // --- BACKGROUND MODIFIERS ---
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.4]);
  // Darken background slowly to let visual effects shine
  const bgOpacity = useTransform(smoothProgress, [0.3, 0.7], [0.3, 0.1]);

  // --- FEATURE 1: PRECISION FIT (Contour Mapping & Scanline) ---
  const contourOpacity = useTransform(smoothProgress, [0, 0.05, 0.22, 0.28], [0, 1, 1, 0]);
  const scanLineY = useTransform(smoothProgress, [0, 0.25], ["-10%", "110%"]);
  const pathLength1 = useTransform(smoothProgress, [0, 0.15], [0, 1]);
  const pathLength2 = useTransform(smoothProgress, [0.05, 0.2], [0, 1]);

  // --- FEATURE 2: ENGINEERED COMFORT (Airflow Simulation) ---
  const breathOpacity = useTransform(smoothProgress, [0.35, 0.40, 0.57, 0.63], [0, 1, 1, 0]);
  // Use negative values to simulate flowing air when offset animates toward 0
  const airFlow1 = useTransform(smoothProgress, [0.35, 0.63], [1500, 0]);
  const airFlow2 = useTransform(smoothProgress, [0.38, 0.63], [-1500, 0]);

  // --- FEATURE 3: ZERO GRAVITY (Floating Glass Parallax) ---
  const gravityOpacity = useTransform(smoothProgress, [0.70, 0.75, 0.92, 0.98], [0, 1, 1, 0]);
  const floatY1 = useTransform(smoothProgress, [0.65, 1], [200, -200]);
  const floatY2 = useTransform(smoothProgress, [0.65, 1], [300, -100]);
  const floatY3 = useTransform(smoothProgress, [0.65, 1], [400, -300]);
  const floatRotate1 = useTransform(smoothProgress, [0.65, 1], [0, 15]);
  const floatRotate2 = useTransform(smoothProgress, [0.65, 1], [0, -10]);

  return (
    <section ref={containerRef} className="h-[400vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-primary flex items-center justify-center">
        
        {/* BASE TEXTURE BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ scale: bgScale, opacity: bgOpacity }}
            src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2000&auto=format&fit=crop"
            alt="Fabric detail"
            className="w-full h-full object-cover mix-blend-screen"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
        </div>

        {/* --- VISUAL EFFECT 1: CONTOUR SCANNING --- */}
        <motion.div style={{ opacity: contourOpacity }} className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {/* Laser Scan Line */}
          <motion.div 
            style={{ top: scanLineY }}
            className="absolute left-0 w-full h-[2px] bg-secondary/80 shadow-[0_0_30px_5px_rgba(245,245,245,0.4)] z-20"
          />
          {/* Topographical Grid Paths mimicking garment contours */}
          <svg className="absolute inset-0 w-full h-full opacity-40 mix-blend-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
              d="M 30,0 Q 15,50 30,100 M 40,0 Q 25,50 40,100 M 50,0 Q 35,50 50,100" 
              fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="0.2"
              style={{ pathLength: pathLength1 }}
            />
            <motion.path 
              d="M 70,0 Q 85,50 70,100 M 60,0 Q 75,50 60,100 M 50,0 Q 65,50 50,100" 
              fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.1"
              style={{ pathLength: pathLength2 }}
            />
          </svg>
        </motion.div>

        {/* --- VISUAL EFFECT 2: ENGINEERED COMFORT AIRFLOW --- */}
        <motion.div style={{ opacity: breathOpacity }} className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
          <svg className="w-full h-full max-w-[1440px] opacity-70" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="airGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgba(245,245,245,0.8)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            {/* Wavy aerodynamic paths */}
            <motion.path
              d="M -200 400 C 200 200, 600 350, 1200 100"
              fill="none" stroke="url(#airGrad)" strokeWidth="4"
              strokeDasharray="1500" 
              style={{ strokeDashoffset: airFlow1 }}
            />
            <motion.path
              d="M -200 250 C 300 450, 700 150, 1200 300"
              fill="none" stroke="url(#airGrad)" strokeWidth="2"
              strokeDasharray="1500" 
              style={{ strokeDashoffset: airFlow2 }}
            />
            <motion.path
              d="M -200 150 C 400 50, 800 400, 1200 50"
              fill="none" stroke="url(#airGrad)" strokeWidth="6"
              strokeDasharray="1500" 
              style={{ strokeDashoffset: airFlow1 }}
              className="opacity-40 blur-[2px]"
            />
          </svg>
        </motion.div>

        {/* --- VISUAL EFFECT 3: ZERO GRAVITY FLOATING GLASS --- */}
        <motion.div style={{ opacity: gravityOpacity }} className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center gap-8 md:gap-16 px-12">
           <motion.div style={{ y: floatY1, rotate: floatRotate1 }} className="hidden md:block w-64 h-[400px] border border-white/10 rounded-full bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.02)] overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent mix-blend-overlay" />
           </motion.div>
           
           <motion.div style={{ y: floatY2, rotate: floatRotate2 }} className="w-64 h-[400px] md:w-80 md:h-[500px] border border-white/20 rounded-[100px] bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent mix-blend-overlay" />
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-60" />
           </motion.div>

           <motion.div style={{ y: floatY3, rotate: floatRotate1 }} className="hidden md:block w-56 h-[350px] border border-white/10 rounded-[80px] bg-white/5 backdrop-blur-lg overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent mix-blend-overlay" />
           </motion.div>
        </motion.div>

        {/* --- TEXT CONTENT --- */}
        <div className="relative z-20 w-full max-w-[1440px] px-6 md:px-12 flex items-center justify-center h-full pointer-events-none">
          
          <motion.div style={{ opacity: text1Opacity, y: text1Y }} className="absolute text-center max-w-2xl">
            <h3 className="text-secondary/50 uppercase tracking-[0.2em] mb-4 text-sm font-medium">Precision Fit</h3>
            <h2 className="text-4xl md:text-7xl font-light tracking-tighter uppercase leading-[0.9] text-balance">
              Scans every contour.
            </h2>
          </motion.div>

          <motion.div style={{ opacity: text2Opacity, y: text2Y }} className="absolute text-center max-w-2xl">
            <h3 className="text-secondary/50 uppercase tracking-[0.2em] mb-4 text-sm font-medium">Engineered Comfort</h3>
            <h2 className="text-4xl md:text-7xl font-light tracking-tighter uppercase leading-[0.9] text-balance">
              Breathes like skin.
            </h2>
          </motion.div>
          
          <motion.div style={{ opacity: text3Opacity, y: text3Y }} className="absolute text-center max-w-2xl">
            <h3 className="text-secondary/50 uppercase tracking-[0.2em] mb-4 text-sm font-medium">Zero Gravity</h3>
            <h2 className="text-4xl md:text-7xl font-light tracking-tighter uppercase leading-[0.9] text-balance">
              Moves before you do.
            </h2>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
