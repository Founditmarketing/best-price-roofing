import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants/services';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function Services() {
  return (
    <div className="bg-roof-charcoal pt-40 pb-32 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32"
        >
          <div className="text-label text-roof-red mb-6 uppercase tracking-widest font-black">Central Louisiana's Full-Spectrum Coverage</div>
          <h1 className="text-[56px] md:text-[90px] text-white leading-none mb-8">
            Superior <span className="text-stone-500 italic">Solutions.</span>
          </h1>
          <p className="text-xl text-stone-400 max-w-2xl font-medium leading-relaxed">
            Industrial-grade expertise applied to every residential shingle and commercial flat roof we touch. No-nonsense, high-impact results.
          </p>
        </motion.div>

        <div className="grid gap-16">
          {SERVICES.map((service, i) => (
            <motion.div 
               key={service.id}
               {...fadeInUp}
               transition={{ delay: i * 0.1 }}
               className="group flex flex-col lg:flex-row bg-roof-surface/50 border border-white/5 hover:border-white/10 transition-all overflow-hidden"
            >
               <div className="lg:w-1/3 h-64 lg:h-auto overflow-hidden relative bg-roof-charcoal">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-roof-charcoal/40 group-hover:bg-transparent transition-colors" />
               </div>
               
               <div className="lg:w-2/3 p-10 lg:p-20 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-3xl md:text-5xl text-white uppercase tracking-tight font-black">{service.title}</h2>
                    <span className="text-4xl font-mono text-white/5 group-hover:text-roof-red transition-colors font-black">0{i+1}</span>
                  </div>
                  
                  <p className="text-stone-400 text-lg mb-10 leading-relaxed font-medium">
                    {service.shortDescription}
                  </p>
                  
                  <div className="mt-auto flex flex-wrap gap-4 mb-10">
                    {service.benefits?.slice(0, 3).map((f, fi) => (
                      <span key={fi} className="text-[10px] font-black text-stone-500 border border-white/10 px-3 py-1 uppercase tracking-widest">
                        {f}
                      </span>
                    ))}
                  </div>

                  <Link 
                    to={`/services/${service.id}`}
                    className="text-label text-white flex items-center gap-3 hover:text-roof-red transition-colors group/link"
                  >
                    View Project Specs <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Industrial Capabilities Expansion */}
        <div className="mt-40 border-t border-white/10 pt-40">
           <div className="text-label text-stone-400 mb-16 uppercase tracking-widest font-black">Industrial Division — Capability Matrix</div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
              {[
                { t: 'Multi-Family', d: 'Expert handling of apartment complexes and HOA communities.' },
                { t: 'Flat Roofing', d: 'Low-slope and flat roof solutions for residential and commercial properties.' },
                { t: 'Forensic Audit', d: 'Detailed post-storm damage reports for legal/insurance use.' },
                { t: 'Ridge Shield', d: 'Custom ventilation upgrades to reduce Louisiana attic heat.' },
              ].map((cap, i) => (
                <div key={i} className="bg-black p-10 group hover:bg-roof-red/5 transition-colors">
                   <div className="text-white font-black text-xl mb-4 italic uppercase tracking-tighter group-hover:text-roof-red transition-colors">{cap.t}</div>
                   <p className="text-xs text-stone-300 leading-relaxed font-bold uppercase tracking-wider">{cap.d}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Material Comparison Protocol */}
        <div className="mt-40 p-16 md:p-28 bg-white relative overflow-hidden shadow-2xl text-stone-900">
           <div className="hidden" />
           <div className="relative z-10 text-center mb-16">
              <div className="text-label text-roof-red mb-4 uppercase tracking-[0.3em]">Material Protocol</div>
              <h3 className="text-4xl md:text-6xl text-roof-charcoal font-black uppercase tracking-tighter italic">Standard vs <span className="text-roof-red">BPR Spec.</span></h3>
           </div>
           
           <div className="relative z-10 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="border-b-2 border-roof-charcoal text-[10px] font-black uppercase tracking-widest text-stone-400">
                       <th className="py-6">Component</th>
                       <th className="py-6">Standard Contractor</th>
                       <th className="py-6 text-roof-red">BPR Industrial Spec</th>
                    </tr>
                 </thead>
                 <tbody className="text-xs md:text-sm font-bold uppercase tracking-tight text-roof-charcoal">
                    {[
                      { c: 'Main Shingle', s: 'Standard 3-Tab/Basic Arch', b: 'Owens Corning Duration / Atlas Pinnacle' },
                      { c: 'Underlayment', s: '15lb Asphalt Felt', b: 'High-Weight Synthetic Breathable' },
                      { c: 'Nailing Protocol', s: 'Standard Pattern', b: 'Enhanced High-Wind Pattern' },
                      { c: 'Ventilation', s: 'Standard Box Vents', b: 'Continuous High-Flow Ridge Vents' },
                      { c: 'Warranty', s: 'Standard Workmanship', b: 'Manufacturer-Backed Material Warranties' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-stone-100 hover:bg-stone-50 transition-colors group text-stone-900">
                         <td className="py-6 font-black text-stone-400 group-hover:text-roof-charcoal transition-colors">{row.c}</td>
                         <td className="py-6">{row.s}</td>
                         <td className="py-6 text-roof-red italic font-black">{row.b}</td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>

        {/* Insurance Focus Band */}
        <div className="mt-40 p-16 md:p-24 bg-roof-surface border border-white/5 relative overflow-hidden shadow-2xl">
           <div className="shingle-texture absolute inset-0 opacity-5" />
           <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl text-white mb-6 italic">Dealing with <span className="text-roof-red not-italic font-black">Storm Damage?</span></h3>
                <p className="text-stone-300 font-medium leading-relaxed uppercase tracking-widest text-xs">
                  We specialize in the Louisiana insurance landscape. Our experts walk you through every step of the claim process to ensure full coverage for your loss.
                </p>
              </div>
              <div className="flex justify-end">
                 <Link to="/services/insurance-claim-assistance" className="px-10 py-5 border border-white text-white font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                    Claim Assistance Dept
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
