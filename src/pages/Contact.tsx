import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-roof-charcoal pt-32 pb-24 min-h-screen text-white selection:bg-roof-red selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="text-label text-stone-400 mb-6 uppercase tracking-widest font-black">Secure Your Asset — Connection Line</div>
          <h1 className="text-[56px] md:text-[100px] leading-none mb-8 uppercase tracking-tighter italic font-black">
            Let's <span className="text-roof-red">Talk</span> Shop.
          </h1>
          <p className="text-xl text-stone-400 max-w-2xl font-medium leading-relaxed">
            Direct access to Alexandria's roofing elite. No sales fluff. No zero-value calls. Just precision estimates and industrial-grade inspections.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-px bg-white/5 border border-white/5">
          {/* Info Side */}
          <div className="lg:col-span-5 p-12 bg-black flex flex-col justify-between">
             <div className="space-y-16">
                <div>
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-[1px] bg-roof-red" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">Operation Center</span>
                   </div>
                   <div className="space-y-8">
                      <div className="group">
                         <div className="text-[9px] font-black uppercase text-stone-400 mb-2 tracking-widest">Rapid Hotline</div>
                         <a href="tel:3186130072" className="text-4xl font-black italic tracking-tighter hover:text-roof-red transition-all block">318-613-0072</a>
                         <div className="text-[10px] text-stone-400 mt-2 font-mono uppercase">24/7 Storm Response Active</div>
                      </div>

                      <div className="group">
                         <div className="text-[9px] font-black uppercase text-stone-400 mb-2 tracking-widest">Data Transmission</div>
                         <div className="text-2xl font-bold tracking-tight">quotes@bestpriceroof.com</div>
                      </div>

                      <div className="group">
                         <div className="text-[9px] font-black uppercase text-stone-400 mb-2 tracking-widest">Strategic Radius</div>
                         <div className="text-xl font-bold text-stone-300">Central Louisiana / Alexandria Hub</div>
                         <div className="text-[10px] text-stone-400 mt-1 uppercase leading-tight font-medium">Alexandria • Pineville • Woodworth • Ball • Boyce</div>
                      </div>
                   </div>
                </div>

                <div className="pt-12 border-t border-white/5">
                   <div className="grid grid-cols-2 gap-8">
                      <div>
                         <div className="text-[8px] font-black uppercase text-stone-600 mb-2">Shift Schedule</div>
                         <div className="text-sm font-black italic uppercase">Mon-Sat / 0700-1900</div>
                      </div>
                      <div>
                         <div className="text-[8px] font-black uppercase text-stone-600 mb-2">License Ref</div>
                         <div className="text-xs font-black uppercase opacity-60">Fully Insured / LA #00000</div>
                      </div>
                   </div>
                </div>
             </div>

             <div className="mt-16 flex gap-8 items-center grayscale opacity-30">
                <div className="text-xl font-black italic tracking-tighter px-3 py-1 border border-white">BBB A+</div>
                <div className="text-xl font-black tracking-tight">OC CERT</div>
             </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-roof-surface/50 p-12 md:p-20 relative overflow-hidden backdrop-blur-3xl">
             <div className="industrial-grid absolute inset-0 opacity-5 pointer-events-none" />
             
             <div className="relative z-10 max-w-xl">
                <div className="text-2xl font-black uppercase italic mb-12 tracking-tight">Request Zero-Value Inspection <span className="text-stone-400">—</span> Free.</div>
                <form className="space-y-8">
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                         <label className="text-[9px] font-black uppercase tracking-widest text-stone-400">Asset Owner</label>
                         <input type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-2 focus:border-roof-red focus:outline-none transition-all font-bold text-lg" placeholder="Enter name" />
                      </div>
                      <div className="space-y-3">
                         <label className="text-[9px] font-black uppercase tracking-widest text-stone-400">Comm Line</label>
                         <input type="tel" className="w-full bg-transparent border-b border-white/20 px-0 py-2 focus:border-roof-red focus:outline-none transition-all font-mono text-lg" placeholder="318-xxx-xxxx" />
                      </div>
                   </div>

                   <div className="space-y-3">
                      <label className="text-[9px] font-black uppercase tracking-widest text-stone-400">Protocol Required</label>
                      <select className="w-full bg-transparent border-b border-white/20 px-0 py-2 focus:border-roof-red focus:outline-none transition-all font-bold text-lg appearance-none cursor-pointer">
                         <option className="bg-roof-charcoal">Full Installation</option>
                         <option className="bg-roof-charcoal">Structural Repair</option>
                         <option className="bg-roof-charcoal">Insurance Intel</option>
                         <option className="bg-roof-charcoal">Roof Forensics</option>
                      </select>
                   </div>

                   <div className="space-y-3">
                      <label className="text-[9px] font-black uppercase tracking-widest text-stone-400">Event Details</label>
                      <textarea rows={3} className="w-full bg-transparent border-b border-white/20 px-0 py-2 focus:border-roof-red focus:outline-none transition-all font-medium text-stone-300" placeholder="Leak detection, storm event, or age-related decay..." />
                   </div>

                   <button className="h-20 w-full md:w-auto md:px-16 bg-white text-black hover:bg-roof-red hover:text-white transition-all group overflow-hidden relative font-black uppercase text-xs tracking-[0.3em]">
                      <span className="relative z-10 flex items-center justify-center gap-4">
                        Transmit Data <Send size={14} />
                      </span>
                   </button>
                </form>
             </div>
          </div>
        </div>

        {/* Tactical Map Placeholder */}
        <div className="mt-20 h-96 bg-black relative group overflow-hidden border border-white/5">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80')] opacity-20 grayscale group-hover:scale-105 transition-transform duration-1000" />
           <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
           <div className="absolute bottom-12 left-12">
              <div className="flex items-center gap-2 mb-2">
                 <div className="w-3 h-3 bg-roof-red rounded-full animate-pulse" />
                 <span className="text-label text-roof-red">Operating Hub</span>
              </div>
              <h4 className="text-2xl font-black italic tracking-tighter uppercase">Alexandria, Louisiana <br/><span className="text-stone-300 text-lg">Central Coordination Office</span></h4>
           </div>
        </div>
      </div>
    </div>
  );
}
