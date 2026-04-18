import React from 'react';
import { motion } from 'motion/react';

const reviews = [
  {
    text: "Finally, a brand that understands movement without compromising aesthetic.",
    author: "M. Chen",
    role: "Creative Director"
  },
  {
    text: "The drape and feel of these pieces are unmatched. Pure luxury.",
    author: "A. Davis",
    role: "Athlete"
  },
  {
    text: "Minimalist perfection. It's the only gear I wear now.",
    author: "J. Foster",
    role: "Designer"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 md:py-48 max-w-[1440px] mx-auto px-6 md:px-12 bg-primary border-t border-white/5">
      <div className="flex flex-col md:flex-row gap-16 md:gap-0">
        <div className="w-full md:w-1/3 pr-8">
          <h2 className="text-2xl font-light tracking-tighter uppercase mb-6">The Verdict.</h2>
          <p className="text-secondary/50 text-sm max-w-sm">
            Don't just take our word for it. Trusted by athletes, creatives, and purveyors of fine design worldwide.
          </p>
        </div>
        
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="flex flex-col"
            >
              <div className="text-4xl text-secondary/20 font-serif leading-none mb-4">"</div>
              <p className="text-lg md:text-xl font-light leading-relaxed mb-8 flex-1">
                {review.text}
              </p>
              <div className="mt-auto">
                <span className="block uppercase tracking-widest text-xs font-medium">{review.author}</span>
                <span className="block uppercase tracking-widest text-[10px] text-secondary/40 mt-1">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
