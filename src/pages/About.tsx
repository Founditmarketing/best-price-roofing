import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Users } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function About() {
  return (
    <div className="bg-roof-charcoal pt-40 pb-32">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-28 items-center mb-44">
          <motion.div {...fadeInUp}>
            <div className="text-label text-roof-red mb-6 uppercase tracking-widest font-black">Established 2012</div>
            <h1 className="text-[48px] md:text-[68px] text-white mb-10 leading-[0.95]">
              Roots In <br/>Louisiana <span className="text-stone-500 italic">Workmanship.</span>
            </h1>
            <p className="text-xl text-stone-400 font-medium leading-relaxed mb-8">
              We started with a single ladder and a promise: treat every home like it's our mother's. Today, we're Alexandria's most trusted name in storm resilience.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <div className="text-4xl font-black text-white mb-2 italic">100%</div>
                <div className="text-[10px] text-stone-400 font-black uppercase tracking-widest leading-none">Louisiana Owned & Operated</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2 italic">ZERO</div>
                <div className="text-[10px] text-stone-400 font-black uppercase tracking-widest leading-none">Pushy Sales Gear Only Honesty</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative h-[400px] lg:h-[600px]">
             <div className="absolute inset-0 bg-roof-red/20 z-10 mix-blend-overlay" />
             <img 
               src="/images/Screenshot-2026-03-05-at-10.49.04-AM-1.png" 
               alt="Best Price Roofing — roof ridge and shingles" 
               className="w-full h-full object-cover object-top grayscale"
             />
             <div className="glass-panel absolute -bottom-8 left-0 right-0 mx-4 p-8 hidden lg:block">
                <p className="text-xs text-white leading-relaxed italic uppercase font-bold">
                  "Honest pricing isn't just a slogan—it's how we sleep at night. We're part of this community, and we build like it."
                </p>
                <div className="mt-4 text-[10px] font-black text-roof-red tracking-[0.2em]">CEO, Best Price Roofing</div>
             </div>
          </motion.div>
        </div>

        {/* Values - The Industrial Way */}
        <div className="border-t border-white/10 pt-32">
          <div className="text-label text-stone-500 mb-16 uppercase tracking-widest font-black">The BPR Standard — Logic & Integrity</div>
          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 shadow-2xl text-stone-900">
            {[
              { t: 'Safety First', d: 'OSHA compliant on every site. No shortcuts, no risks to your property or our team.', icon: ShieldCheck },
              { t: 'Premier Gear', d: 'We only use Owens Corning and Atlas Pinnacle shingles—materials built for the Gulf Coast.', icon: Award },
              { t: 'Family Values', d: 'Transparent communication from the first inspection through final cleanup.', icon: Users },
            ].map((v, i) => (
              <div key={i} className="bg-roof-charcoal p-12 hover:bg-roof-surface transition-colors group">
                 <v.icon size={32} className="text-roof-red mb-8 group-hover:scale-110 transition-transform" />
                 <h3 className="text-2xl text-white mb-6 uppercase tracking-tight font-black">{v.t}</h3>
                 <p className="text-sm text-stone-500 leading-relaxed font-medium">{v.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Roots */}
        <div className="mt-40 py-40 border-t border-white/10">
           <div className="grid lg:grid-cols-2 gap-28 items-center">
              <div>
                 <div className="text-label text-roof-red mb-6 uppercase tracking-widest font-black">Cenla Commitment</div>
                 <h2 className="text-4xl md:text-6xl text-white mb-8 leading-tight italic font-black uppercase tracking-tighter">
                   Greater <br/><span className="text-white/40">Alexandria</span> <br/>Advocates.
                 </h2>
                 <p className="text-stone-400 text-lg mb-10 leading-relaxed">
                   We don't just work in Alexandria; we live here. We've watched our neighbors struggle with storm recovery since 2012, and it's why we became experts in insurance forensics. Our goal is to ensure that no one in Rapides Parish gets a sub-par roof after a catastrophe.
                 </p>
                 <div className="grid grid-cols-2 gap-6 bg-white/5 p-8 border-l-2 border-roof-red text-stone-900">
                    <div>
                       <div className="text-[10px] font-black text-stone-400 uppercase mb-2">Sponsorships</div>
                       <p className="text-xs text-white uppercase font-bold italic">Local Youth Baseball • Cenla Food Bank</p>
                    </div>
                    <div>
                       <div className="text-[10px] font-black text-stone-400 uppercase mb-2">Location Hub</div>
                       <p className="text-xs text-white uppercase font-bold italic">Pineville • Woodworth • Alexandria</p>
                    </div>
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   "/images/Untitled-design-3.png",
                   "/images/Untitled-design-2.png",
                   "/images/Untitled-design-16-scaled.png",
                   "/images/IMG_3716-scaled.jpg"
                 ].map((img, i) => (
                   <div key={i} className={`h-52 md:h-64 overflow-hidden grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ${i % 2 !== 0 ? 'translate-y-6' : ''}`}>
                      <img src={img} alt="Local project" className="w-full h-full object-cover" />
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Technical Heritage */}
        <div className="mt-40 p-16 md:p-28 bg-roof-surface border border-white/5 relative overflow-hidden">
           <div className="industrial-grid absolute inset-0 opacity-5" />
           <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-3xl text-white mb-10 italic uppercase tracking-tighter font-black">The "Best Price" Logic</h3>
              <p className="text-stone-400 text-sm md:text-base leading-relaxed mb-12 italic">
                We believe in a "Masterful Minimum" approach. By cutting out sales commission and heavy corporate overhead, we can afford to put higher-grade materials on your home for the same price the other guys charge for standard shingles. It's not a secret; it's just better business.
              </p>
              <div className="flex flex-wrap justify-center gap-10">
                 {[
                   { l: 'Owens Corning Preferred', s: 'Verified' },
                   { l: 'General Liability', s: '$2M Coverage' },
                   { l: 'Worker Comp', s: 'Fully Bonded' },
                 ].map((stat, i) => (
                   <div key={i} className="text-center">
                      <div className="text-[9px] font-black uppercase text-roof-red mb-2 tracking-widest">{stat.s}</div>
                      <div className="text-sm text-white font-black uppercase tracking-tight">{stat.l}</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>

      {/* CTA Band */}
      <div className="mt-40 py-24 bg-linear-to-r from-roof-red to-roof-orange relative overflow-hidden">
        <div className="hidden" />
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
           <h4 className="text-3xl md:text-5xl text-white max-w-2xl leading-[1.1] italic">
             Ready to experience <br/>the <span className="font-black not-italic underline decoration-4 underline-offset-8">Best Price</span> difference?
           </h4>
           <Link 
             to="/contact" 
             className="px-12 py-6 bg-black text-white font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl shrink-0"
           >
             Schedule Free Inspection
           </Link>
        </div>
      </div>
    </div>
  );
}
