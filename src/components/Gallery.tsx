import { motion } from 'motion/react';

const galleryImages = [
  'https://images.unsplash.com/photo-1599351431247-f10b21ce5381?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1621605815841-28d144581a03?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1622286332308-0c7409bb4533?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1592647425447-db80242ec49a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512690136236-73069dd2446b?q=80&w=800&auto=format&fit=crop',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#080808] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-500 uppercase tracking-widest font-bold mb-4 block">Our Work</span>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase">
            Fresh <span className="text-gold-500">Portfolio</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group aspect-[3/4] overflow-hidden bg-white/5 relative"
            >
              <img 
                src={img} 
                alt={`Haircut ${index + 1}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-[0.3em] text-xs border border-white/40 px-4 py-2 backdrop-blur-sm">View Work</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="text-white/40 hover:text-gold-500 transition-colors uppercase tracking-[0.3em] text-xs border-b border-white/10 hover:border-gold-500 pb-1"
          >
            Follow our Instagram @FreshCut_Lusaka
          </a>
        </div>
      </div>
    </section>
  );
}
