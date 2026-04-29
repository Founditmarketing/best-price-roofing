import { motion } from 'motion/react';
import { Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-roof-charcoal pt-32 pb-24 min-h-screen text-white selection:bg-roof-red selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="text-label text-stone-400 mb-6 uppercase tracking-widest font-black">Get In Touch</div>
          <h1 className="text-[40px] md:text-[80px] leading-none mb-8 uppercase tracking-tighter italic font-black">
            Let's <span className="text-roof-red">Talk</span> Shop.
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl font-medium leading-relaxed">
            Reach Alexandria's most trusted roofers. Free inspections, honest quotes, no pressure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-px bg-white/5 border border-white/5">
          {/* Info Side */}
          <div className="lg:col-span-5 p-8 md:p-12 bg-black flex flex-col justify-between">
             <div className="space-y-16">
                <div>
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-[1px] bg-roof-red" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">Contact Info</span>
                   </div>
                   <div className="space-y-8">
                      <div className="group">
                         <div className="text-[9px] font-black uppercase text-stone-400 mb-2 tracking-widest">Phone</div>
                         <a href="tel:3186130072" className="text-4xl font-black italic tracking-tighter hover:text-roof-red transition-all block">318-613-0072</a>
                         <div className="text-[10px] text-stone-400 mt-2 font-mono uppercase">Available Mon – Sat</div>
                      </div>

                      <div className="group">
                         <div className="text-[9px] font-black uppercase text-stone-400 mb-2 tracking-widest">Address</div>
                         <div className="text-xl font-bold text-stone-300">217 Brevard Ct, Alexandria, LA 71303</div>
                         <div className="text-[10px] text-stone-400 mt-1 uppercase leading-tight font-medium">Serving Alexandria • Pineville • Woodworth • Ball • Boyce</div>
                      </div>
                   </div>
                </div>

                <div className="pt-12 border-t border-white/5">
                   <div className="grid grid-cols-2 gap-8">
                      <div>
                         <div className="text-[8px] font-black uppercase text-stone-500 mb-2">Hours</div>
                         <div className="text-sm font-black italic uppercase">Mon – Sat, Call Anytime</div>
                      </div>
                      <div>
                         <div className="text-[8px] font-black uppercase text-stone-500 mb-2">Status</div>
                         <div className="text-xs font-black uppercase text-stone-300">Licensed & Insured — Louisiana</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-roof-surface/50 p-8 md:p-20 relative overflow-hidden backdrop-blur-3xl">
             <div className="industrial-grid absolute inset-0 opacity-5 pointer-events-none" />
             
             <div className="relative z-10 max-w-xl">
                <div className="text-2xl font-black uppercase italic mb-2 tracking-tight text-white">Request a Free Inspection</div>
                <p className="text-stone-400 text-sm mb-10">No obligation. We'll call you back the same day.</p>
                <form className="space-y-8">
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                         <label className="text-xs font-black uppercase tracking-widest text-stone-300">Your Name</label>
                         <input type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-2 focus:border-roof-red focus:outline-none transition-all font-bold text-lg text-white placeholder:text-stone-600" placeholder="John Doe" />
                      </div>
                      <div className="space-y-3">
                         <label className="text-xs font-black uppercase tracking-widest text-stone-300">Phone Number</label>
                         <input type="tel" className="w-full bg-transparent border-b border-white/20 px-0 py-2 focus:border-roof-red focus:outline-none transition-all font-mono text-lg text-white placeholder:text-stone-600" placeholder="318-xxx-xxxx" />
                      </div>
                   </div>

                   <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-stone-300">Service Needed</label>
                      <select className="w-full bg-roof-charcoal border-b border-white/20 px-0 py-2 focus:border-roof-red focus:outline-none transition-all font-bold text-lg appearance-none cursor-pointer text-white">
                         <option className="bg-roof-charcoal">Full Roof Installation</option>
                         <option className="bg-roof-charcoal">Roof Repair</option>
                         <option className="bg-roof-charcoal">Insurance Claim Help</option>
                         <option className="bg-roof-charcoal">Free Inspection</option>
                      </select>
                   </div>

                   <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-stone-300">Details</label>
                      <textarea rows={3} className="w-full bg-transparent border-b border-white/20 px-0 py-2 focus:border-roof-red focus:outline-none transition-all font-medium text-stone-300 placeholder:text-stone-600" placeholder="Tell us about your roof — leak, storm damage, age, etc." />
                   </div>

                   <button className="h-20 w-full md:w-auto md:px-16 bg-roof-red text-white hover:bg-white hover:text-black transition-all group overflow-hidden relative font-black uppercase text-xs tracking-[0.3em]">
                      <span className="relative z-10 flex items-center justify-center gap-4">
                        Get My Free Inspection <Send size={14} />
                      </span>
                   </button>
                </form>
             </div>
          </div>
        </div>

        {/* Map area */}
        <div className="mt-20 h-96 bg-black relative group overflow-hidden border border-white/5">
           <div className="absolute inset-0 bg-[url('/IMG_3689.png')] opacity-20 grayscale group-hover:scale-105 transition-transform duration-1000" />
           <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
           <div className="absolute bottom-12 left-12">
              <div className="flex items-center gap-2 mb-2">
                 <div className="w-3 h-3 bg-roof-red rounded-full animate-pulse" />
                 <span className="text-label text-roof-red">Service Area</span>
              </div>
              <h4 className="text-2xl font-black italic tracking-tighter uppercase">Alexandria, Louisiana <br/><span className="text-stone-300 text-lg">217 Brevard Ct — Serving All of Cenla</span></h4>
           </div>
        </div>
      </div>
    </div>
  );
}
