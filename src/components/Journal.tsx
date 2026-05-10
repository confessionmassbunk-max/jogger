import React, { useState } from 'react';

const articles = [
  {
    id: 1,
    title: "The Evolution of Athletic Wear: From Track to Street",
    date: "May 10, 2026",
    category: "Culture",
    content: `Athletic wear has transcended its original purpose. What was once confined to gyms and running tracks has now seamlessly integrated into our daily wardrobes, giving birth to the phenomenon we call athleisure. The evolution of athletic wear from strictly functional garments to high-fashion staples is a testament to changing lifestyles and priorities.

In the early days, sportswear was strictly utilitarian. Fabrics were basic—mostly cotton and wool—which held moisture and became heavy during workouts. The focus was entirely on functionality rather than form or aesthetic appeal. However, as textile technology advanced in the late 20th century, we saw the introduction of synthetic blends like polyester, spandex, and nylon. These materials revolutionized the industry, offering moisture-wicking properties, durability, and unparalleled stretch.

The true shift occurred when these high-performance fabrics met modern design principles. People began to realize that the comfort they experienced during workouts shouldn't be sacrificed when they went about their daily lives. This led to the rise of premium athletic apparel that bridges the gap between high-performance activewear and modern streetwear aesthetics. 

At Laze Labs, we are at the forefront of this movement. Our signature collections feature meticulously designed garments that utilize advanced fabric technology. Whether it's our heavyweight French terry sweatpants or our lightweight, breathable shorts, the goal remains the same: to provide apparel that looks as good in a coffee shop as it performs in a training session.

As we look to the future, the boundary between performance wear and casual fashion will only continue to blur. The modern individual demands versatility, and athletic wear has risen to the occasion, becoming the defining uniform of our generation.`
  },
  {
    id: 2,
    title: "Sustainable Practices in Modern Clothing Manufacturing",
    date: "April 28, 2026",
    category: "Sustainability",
    content: `The fashion and apparel industry has historically been one of the largest contributors to global pollution. However, a significant paradigm shift is underway. Today, consumers are more conscious of the environmental impact of their purchases, and brands are stepping up to adopt sustainable practices in modern clothing manufacturing.

Sustainability in clothing isn't just a buzzword; it's a comprehensive approach that encompasses the entire lifecycle of a garment. It begins with the sourcing of raw materials. Organic cotton, recycled polyester, and innovative plant-based fibers are replacing traditional materials that require excessive water and chemical pesticides to produce. By utilizing recycled plastics and discarded textiles, the industry can significantly reduce its carbon footprint and divert waste from landfills.

Manufacturing processes are also undergoing radical transformations. Traditional dyeing methods are notoriously water-intensive and often release harmful chemicals into local waterways. In response, modern facilities are adopting closed-loop water systems and eco-friendly dyes that minimize environmental harm. Furthermore, ethical manufacturing practices ensure fair wages and safe working conditions for garment workers, an essential pillar of true sustainability.

At Laze Labs, we believe in sustainable practices and ethical manufacturing. Every piece in our Athletic Dept. collection goes through rigorous quality control, not just for durability, but to ensure our production methods align with our environmental values. We understand that producing high-quality, long-lasting garments is the most effective way to combat the fast fashion cycle. When a piece of clothing is built to last, it reduces the need for constant replacement.

The journey toward a fully sustainable apparel industry is ongoing. By investing in sustainable manufacturing, we are not just creating better clothing; we are investing in the future of our planet.`
  },
  {
    id: 3,
    title: "Performance Meets Aesthetics: Engineering the Perfect Fit",
    date: "April 15, 2026",
    category: "Design",
    content: `Designing the perfect athletic garment is a delicate balancing act. It requires a profound understanding of human anatomy, biomechanics, and aesthetic design. When performance meets aesthetics, the result is clothing that not only elevates your physical capabilities but also boosts your confidence. Engineering the perfect fit is an art form.

The process begins with the silhouette. A great piece of athletic wear must contour to the body in a way that allows for a full range of motion without excess fabric getting in the way. This involves meticulous pattern making and rigorous wear-testing. Every seam is strategically placed to reduce chafing and enhance structural integrity. For example, articulated knees in sweatpants or gusseted crotches in shorts provide the freedom of movement necessary for high-intensity training.

Fabric selection is equally critical. The modern athlete requires fabrics that offer multi-directional stretch, breathability, and thermal regulation. Advanced knitting techniques allow for zoned ventilation, placing breathable mesh in high-heat areas while maintaining durability in zones prone to abrasion. The weight and drape of the fabric also dictate how the garment falls on the body, contributing significantly to its streetwear appeal.

At Laze Labs, engineering the perfect fit is our obsession. We spend countless hours refining our patterns and testing new fabric blends. We believe that comfort shouldn't compromise style. Our garments are designed to move seamlessly with you, whether you are hitting the gym, running track, or navigating the urban jungle.

Ultimately, the perfect fit is one you don't even notice. When an athletic garment is truly engineered well, it becomes an extension of the wearer, allowing them to focus entirely on their performance while looking effortlessly stylish.`
  }
];

export const Journal: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="journal" className="py-24 px-4 bg-[#0A0A0A] relative border-t border-white/10">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-widest text-white mb-4">
              The Journal
            </h2>
            <p className="text-white/50 font-light text-lg max-w-xl">
              Insights, culture, and deep dives into the world of athletic wear, sustainability, and design.
            </p>
          </div>
        </div>
        
        <div className="space-y-8">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="border border-white/10 rounded-2xl p-6 md:p-10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer"
              onClick={() => setExpandedId(expandedId === article.id ? null : article.id)}
            >
              <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-white/40 mb-6">
                <span>{article.category}</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span>{article.date}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light text-white mb-6 pr-8 relative">
                {article.title}
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30">
                  {expandedId === article.id ? '−' : '+'}
                </span>
              </h3>
              
              <div 
                className={`grid transition-all duration-500 ease-in-out ${expandedId === article.id ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-6 text-white/70 font-light leading-relaxed whitespace-pre-line text-lg">
                    {article.content}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
