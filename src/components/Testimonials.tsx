import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mwila Kapere',
    role: 'Entrepreneur',
    text: 'Best fade in Lusaka! The attention to detail is unmatched. It is not just a haircut, it is an experience.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Seke Musole',
    role: 'DJ & Philanthropist',
    text: 'Fresh Cut always keeps me looking sharp for my gigs. The atmosphere is top-notch and the staff are true professionals.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Bwalya Chanda',
    role: 'Corporate Lawyer',
    text: 'A true gentleman\'s club. I come here for the hot towel shave—it is the ultimate way to unwind after a long week.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#050505] px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-500 uppercase tracking-widest font-bold mb-4 block">Client Voicer</span>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase">
            Gents <span className="text-gold-500">Testimonials</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] p-10 relative overflow-hidden group border border-white/10"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 text-gold-500">
                <Quote size={64} />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-500/30">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase tracking-tighter text-gold-500">
                    {item.name}
                  </h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/40">
                    {item.role}
                  </p>
                </div>
              </div>

              <p className="text-white/60 italic leading-relaxed relative z-10">
                "{item.text}"
              </p>
              
              <div className="mt-8 flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-1 h-1 bg-gold-500" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
