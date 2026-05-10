import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 bg-[#050505] relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-light uppercase tracking-widest text-white mb-8">
          About Laze Labs
        </h2>
        
        <div className="space-y-6 text-white/70 font-light text-lg md:text-xl leading-relaxed">
          <p>
            Welcome to <strong className="text-white">Laze Labs</strong>, your ultimate destination for premium athletic apparel that perfectly bridges the gap between high-performance activewear and modern streetwear aesthetics. Founded on the principle that comfort shouldn't compromise style, we've dedicated ourselves to crafting the perfect athletic garments for the modern individual. We started this journey with a simple question: why do we have to choose between looking good and feeling comfortable?
          </p>
          
          <p>
            Our signature collections feature meticulously designed sweatpants and shorts, utilizing advanced fabric technology to ensure maximum breathability, durability, and a flawless fit. Whether you are hitting the gym, running track, or navigating the urban jungle, Laze Labs gear is engineered to move seamlessly with you. Our fabrics undergo a rigorous multi-stage testing process. We analyze stretch recovery, pilling resistance, and thermal regulation to ensure that every garment performs under pressure.
          </p>

          <p>
            The ethos of the Athletic Dept. collection is rooted in the heritage of classic sportswear, reimagined for today's dynamic lifestyle. We draw inspiration from vintage collegiate athletics, blending those nostalgic silhouettes with cutting-edge textile innovation. The result is a timeless aesthetic that refuses to sacrifice modern performance metrics. Every stitch, every seam, and every pocket placement is a deliberate choice made by our team of expert designers and textile engineers.
          </p>
          
          <p>
            At Laze Labs, we believe in sustainable practices and ethical manufacturing. Every piece in our collection goes through rigorous quality control to ensure you receive nothing but the best. We source our materials from certified suppliers who share our commitment to environmental responsibility. By utilizing eco-friendly dyes and minimizing water usage in our production processes, we are actively working to reduce our carbon footprint. Sustainability isn't an afterthought for us; it is a foundational pillar of our brand.
          </p>

          <p>
            We are more than just a clothing brand; we are a community of athletes, creatives, and visionaries redefining the boundaries of everyday wear. Our community is our greatest source of inspiration. We listen to your feedback, track your performance needs, and iterate our designs to serve you better. We exist to equip you for whatever challenges your day brings, providing the confidence that comes from knowing your gear will never let you down.
          </p>
          
          <p>
            Join the movement. Elevate your everyday performance. Experience the intersection of relentless innovation and uncompromising style with Laze Labs.
          </p>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};
