import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Scissors } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-gold-500/20 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <Scissors className="w-8 h-8 text-gold-500 group-hover:rotate-12 transition-transform" />
          <span className="font-display font-bold text-2xl tracking-tighter uppercase">
            Fresh<span className="text-gold-500">Cut</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-white/70 hover:text-gold-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/260970000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-widest text-xs transition-all transform hover:scale-105"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-gold-500/20 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium uppercase tracking-widest hover:text-gold-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/260970000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center px-6 py-3 bg-gold-500 text-black font-bold uppercase tracking-widest text-sm"
              >
                Book via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
