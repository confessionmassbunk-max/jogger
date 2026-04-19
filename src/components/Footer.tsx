import React from 'react';
import { Magnetic } from './ui/Magnetic';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary pt-32 pb-8 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-secondary/50 uppercase tracking-[0.2em] mb-6 text-sm font-medium">Join the Movement</h2>
            <h3 className="text-3xl md:text-5xl font-light tracking-tighter uppercase mb-8">
              Stay ahead.<br />Never settle.
            </h3>
            <div className="relative border-b border-white/20 pb-2 flex items-center group w-full md:max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent w-full outline-none text-secondary placeholder:text-secondary/30 uppercase tracking-widest text-sm"
              />
              <Magnetic amount={0.3}>
                <button className="uppercase tracking-widest text-sm font-medium hover:text-white/70 transition-colors">Submit</button>
              </Magnetic>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
          
          <div className="flex gap-16 uppercase tracking-widest text-xs font-medium">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-secondary hover:opacity-70 transition-opacity">Shop</a>
              <a href="#" className="text-secondary hover:opacity-70 transition-opacity">Lookbook</a>
              <a href="#" className="text-secondary hover:opacity-70 transition-opacity">About</a>
              <a href="#" className="text-secondary hover:opacity-70 transition-opacity">Contact</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="mailto:Lazelab2026@gmail.com" className="text-secondary hover:opacity-70 transition-opacity">Contact</a>
              <span className="text-secondary/50 normal-case mt-2">Lazelab2026@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 uppercase tracking-wider text-[10px] text-secondary/40 gap-4">
          <p>© {new Date().getFullYear()} Laze Labs. All rights reserved.</p>
          <div className="flex flex-col items-center gap-2 pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 opacity-5">
            <BrandLogo className="w-32 h-32 md:w-48 md:h-48" />
            <div className="text-[12vw] leading-none font-bold tracking-tighter whitespace-nowrap">
              LAZE LABS
            </div>
          </div>
          <p className="z-10">Essentials, Elevated.</p>
        </div>

      </div>
    </footer>
  );
};
