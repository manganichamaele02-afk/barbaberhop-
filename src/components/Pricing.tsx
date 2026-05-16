import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const pricingData = [
  {
    category: 'Haircuts',
    items: [
      { name: 'Standard Fade', price: 'K150', description: 'Classic clipper cut with sharp line-up' },
      { name: 'Gentleman\'s Cut', price: 'K200', description: 'Scissor & clipper combo for a refined look' },
      { name: 'Kids Haircut', price: 'K100', description: 'Under 12 years old' },
      { name: 'The Master Cut', price: 'K300', description: 'Extended appointment with owner' },
    ]
  },
  {
    category: 'Shaves & Beard',
    items: [
      { name: 'Beard Trim', price: 'K100', description: 'Shaping and length reduction' },
      { name: 'Straight Razor Shave', price: 'K150', description: 'Full face shave with hot towels' },
      { name: 'Beard & Hair Combo', price: 'K250', description: 'Full service grooming experience' },
      { name: 'Head Shave', price: 'K150', description: 'Full razor shave for a smooth finish' },
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold-500 uppercase tracking-[0.3em] font-bold mb-4 block text-sm">Investment In Style</span>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase">
            Pricing <span className="text-gold-500">Menu</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {pricingData.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] p-8 md:p-12 border border-white/5"
            >
              <h3 className="text-2xl font-display font-bold uppercase tracking-widest text-gold-500 mb-10 border-b border-gold-500/20 pb-4">
                {section.category}
              </h3>
              <div className="space-y-8">
                {section.items.map((item) => (
                  <div key={item.name} className="flex flex-col gap-2 group">
                    <div className="flex justify-between items-baseline gap-4">
                      <h4 className="text-lg font-bold uppercase tracking-tighter group-hover:text-gold-500 transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex-1 border-b border-dashed border-white/20 mb-1" />
                      <span className="text-xl font-display font-black text-gold-500 font-mono">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-white/40 text-sm italic">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-white/40 mb-8 max-w-lg mx-auto italic">
            * All services include a complimentary beverage and consultation.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-gold-500 transition-all"
          >
            <Check size={16} /> Check Availability
          </a>
        </div>
      </div>
    </section>
  );
}
