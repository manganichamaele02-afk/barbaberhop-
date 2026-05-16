import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10 aspect-square rounded-full border border-gold-500/30 overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1512864375354-94943bc72911?q=80&w=2074&auto=format&fit=crop" 
                alt="Master Barbers"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-white/5 rounded-full" />
            
            <div className="absolute -bottom-4 -right-4 bg-gold-500 p-8 text-black hidden md:block z-20">
              <span className="font-display text-4xl font-black block leading-none">10+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">Years of Craft</span>
            </div>
          </div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold-500 uppercase tracking-[0.3em] font-bold mb-6 block">Our Story</span>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-tight mb-8">
              Zambia's Premier <br />
              <span className="text-gold-500">Grooming Club</span>
            </h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                Founded in the heart of Lusaka, Fresh Cut Barber Shop began with a simple mission: to bring world-class grooming standards to the Zambian gentleman.
              </p>
              <p>
                We believe that a haircut is more than just a service—it's an experience. Our shop is a sanctuary where you can relax, recharge, and leave feeling like the best version of yourself.
              </p>
              <p className="border-l-2 border-gold-500 pl-6 italic font-medium text-white/80">
                "Our excellence is found in the details of every fade, the precision of every shave, and the satisfaction of every guest."
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <span className="text-gold-500 font-display text-2xl font-bold block mb-2 underline decoration-white/10">Lusaka</span>
                <p className="text-xs text-white/40 uppercase tracking-widest">Flagship Location</p>
              </div>
              <div>
                <span className="text-gold-500 font-display text-2xl font-bold block mb-2 underline decoration-white/10">Copperbelt</span>
                <p className="text-xs text-white/40 uppercase tracking-widest">Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
