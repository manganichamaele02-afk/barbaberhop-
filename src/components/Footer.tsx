import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-8 group">
              <Scissors className="w-8 h-8 text-gold-500 group-hover:rotate-12 transition-transform" />
              <span className="font-display font-bold text-3xl tracking-tighter uppercase">
                Fresh<span className="text-gold-500">Cut</span>
              </span>
            </a>
            <p className="text-white/40 max-w-sm text-lg leading-relaxed mb-8">
              Lusakas premier destination for modern grooming. We committed to excellence and the art of barbering.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gold-500 mb-8 underline decoration-white/10 underline-offset-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#gallery" className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gold-500 mb-8 underline decoration-white/10 underline-offset-8">Support</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-white/40">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Career</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            © 2026 Fresh Cut Barber Shop. All Rights Reserved.
          </p>
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            Designed for the <span className="text-gold-500">Modern Gentleman</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
