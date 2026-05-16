import { motion } from 'motion/react';
import { Scissors, Zap, Shield, User } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Signature Haircut',
    description: 'Precision haircut tailored to your face shape and hair type, finished with a sharp line-up.',
    image: 'https://images.unsplash.com/photo-1599351431247-f10b21ce5381?q=80&w=1974&auto=format&fit=crop'
  },
  {
    icon: Zap,
    title: 'Hot Towel Shave',
    description: 'Traditional straight-razor shave with luxurious hot towels and cooling aftershave treatment.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: User,
    title: 'Beard Grooming',
    description: 'Expert beard sculpting and conditioning to keep your facial hair looking sharp and healthy.',
    image: 'https://images.unsplash.com/photo-1593702295094-172c47040517?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Shield,
    title: 'Kids & Teens',
    description: 'Specialized haircuts for the younger generation, keeping them fresh for school and events.',
    image: 'https://images.unsplash.com/photo-1440132230810-746369527ecb?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#050505] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-gold-500 uppercase tracking-widest font-bold mb-4 block">Masterful Services</span>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-none">
              Elevate Your <br />
              <span className="text-gold-500">Appearance</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-right hidden md:block">
            Our master barbers combine years of experience with modern techniques to give you the perfect look every single time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white/5 border border-white/10 p-8 hover:border-gold-500/30 transition-all"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon size={80} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gold-500/10 flex items-center justify-center mb-6 border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-black transition-colors text-gold-500">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold uppercase mb-4 tracking-tight group-hover:text-gold-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
