import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop)',
          referrerPolicy: 'no-referrer'
        } as any}
      >
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-gold-500 uppercase tracking-[0.3em] font-bold mb-4 text-sm md:text-base">
            Professional Barbering in Zambia
          </span>
          <h1 className="font-display text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Precision <br />
            Meet Style
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the ultimate grooming at Fresh Cut Barber Shop. Where tradition meets modern style for the modern gentleman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#services"
              className="px-10 py-4 bg-gold-500 text-black font-black uppercase tracking-[0.2em] text-sm hover:bg-gold-400 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,160,23,0.3)]"
            >
              Explore Services
            </a>
            <a 
              href="#contact"
              className="px-10 py-4 border border-white/20 hover:border-gold-500/50 text-white font-black uppercase tracking-[0.2em] text-sm transition-all hover:bg-white/5"
            >
              Visit Our Shop
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-500 cursor-pointer"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
