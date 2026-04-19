import React from 'react';
import { motion } from 'motion/react';
import { Wind, Move3d, Gem } from 'lucide-react';

const features = [
  {
    icon: <Wind strokeWidth={1} size={48} />,
    title: 'Absolute Breathability',
    description: 'AeroKnit™ fabric allows maximum airflow, keeping your core temperature perfectly balanced.'
  },
  {
    icon: <Move3d strokeWidth={1} size={48} />,
    title: '4-Way Flexibility',
    description: 'Designed to move with zero resistance, mimicking the natural flow of your body.'
  },
  {
    icon: <Gem strokeWidth={1} size={48} />,
    title: 'Premium Integrity',
    description: 'Woven with Japanese technical yarns that hold their shape and structure permanently.'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-32 md:py-48 max-w-[1440px] mx-auto px-6 md:px-12 bg-primary">
      <div className="mb-24 md:mb-32 flex flex-col items-center text-center">
        <span className="text-secondary/50 uppercase tracking-[0.2em] mb-4 text-xs font-semibold">The Anatomy</span>
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase text-center text-balance max-w-3xl">Why Laze Labs.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        {features.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="flex flex-col items-center md:items-start text-center md:text-left group"
          >
            <div className="mb-8 text-secondary/70 group-hover:text-secondary group-hover:-translate-y-2 transition-all duration-500 will-change-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-medium tracking-tight uppercase mb-4">{item.title}</h3>
            <p className="text-secondary/50 text-sm leading-relaxed max-w-sm">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
