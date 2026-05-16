import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

// Lusaka Coordinates approximate
const LUSAKA_COORDS = { lat: -15.4167, lng: 28.2833 };

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-500 uppercase tracking-[0.3em] font-bold mb-6 block">Get In Touch</span>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase mb-8">
              Find Our <br />
              <span className="text-gold-500">Sanctuary</span>
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-1">Location</h4>
                  <p className="text-lg">Cairo Road, Lusaka City Square, Zambia</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-1">Call Us</h4>
                  <p className="text-lg">+260 970 000 000</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-1">Hours</h4>
                  <div className="text-lg space-y-1">
                    <p>Mon - Fri: 08:00 - 19:00</p>
                    <p>Sat - Sun: 09:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="NAME"
                  className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-xs font-bold tracking-widest uppercase focus:border-gold-500 outline-none transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="EMAIL"
                  className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-xs font-bold tracking-widest uppercase focus:border-gold-500 outline-none transition-colors"
                />
              </div>
              <textarea 
                rows={4}
                placeholder="YOUR MESSAGE"
                className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-xs font-bold tracking-widest uppercase focus:border-gold-500 outline-none transition-colors resize-none"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-gold-500 text-black font-black uppercase tracking-[0.3em] py-5 flex items-center justify-center gap-4 hover:bg-gold-600 transition-all active:scale-[0.98]"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="h-[500px] lg:h-auto min-h-[600px] bg-white/5 border border-white/10 relative grayscale hover:grayscale-0 transition-all"
          >
            {hasValidKey ? (
              <APIProvider apiKey={API_KEY}>
                <Map
                  defaultCenter={LUSAKA_COORDS}
                  defaultZoom={15}
                  mapId="BARBER_SHOP_MAP"
                  style={{ width: '100%', height: '100%' }}
                  internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                >
                  <AdvancedMarker position={LUSAKA_COORDS}>
                    <Pin background="#d4a017" borderColor="#000" glyphColor="#000" />
                  </AdvancedMarker>
                </Map>
              </APIProvider>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center bg-white/[0.02]">
                <MapPin size={48} className="text-gold-500 mb-6 opacity-30" />
                <h3 className="text-xl font-display font-bold uppercase mb-4">Location View</h3>
                <p className="text-white/40 text-sm max-w-xs mb-8">
                  Google Maps API key is required to view the interactive map.
                </p>
                <div className="text-[10px] uppercase font-bold tracking-widest border border-white/20 p-4 inline-block">
                  Lusaka, Zambia
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
