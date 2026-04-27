import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Camera, Maximize2 } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const PHOTOS = [
  { id: 1, src: "/images/Untitled-design-4.png", title: "Precision Nail Work", tag: "Workmanship" },
  { id: 2, src: "/images/Untitled-design-3.png", title: "Crew on Gabled Roof", tag: "Installation" },
  { id: 3, src: "/images/Untitled-design-2.png", title: "Finished Residential Roof", tag: "Shingles" },
  { id: 4, src: "/images/Untitled-design-12.png", title: "Sunset Completion", tag: "Owens Corning" },
  { id: 5, src: "/images/Untitled-design-7.png", title: "Shingle Detail", tag: "Premium" },
  { id: 6, src: "/images/IMG_3700.png", title: "Commercial Project", tag: "Industrial" },
];

export function Gallery() {
  return (
    <div className="bg-roof-charcoal pt-40 pb-32 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-28"
        >
          <div className="text-label text-roof-red mb-6 uppercase tracking-widest font-black">Visual Proof — The BPR Portfolio</div>
          <h1 className="text-[56px] md:text-[90px] text-white leading-none mb-8">
            Built To <span className="text-stone-500 italic">Last.</span>
          </h1>
          <p className="text-xl text-stone-400 max-w-2xl font-medium leading-relaxed">
            Every project tells a story of integrity and industrial-grade craftsmanship. No filters, just high-performance results.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10 mb-40">
          {PHOTOS.map((photo, i) => (
            <motion.div 
              key={photo.id}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-zoom-in break-inside-avoid"
            >
              <div className="overflow-hidden border border-white/5 bg-roof-surface/50 group-hover:border-white/20 transition-all shadow-2xl relative">
                 <img 
                   src={photo.src} 
                   alt={photo.title} 
                   className="w-full min-h-[320px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                 />
                 
                 <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                    <div className="mb-4">
                      <span className="text-[10px] font-black text-roof-red bg-white/10 px-2 py-1 uppercase tracking-widest border border-roof-red/20">
                        {photo.tag}
                      </span>
                    </div>
                    <h3 className="text-xl text-white font-black uppercase tracking-tight">{photo.title}</h3>
                    <div className="h-[1px] w-0 group-hover:w-full bg-roof-red mt-4 transition-all duration-500" />
                    <div className="flex items-center gap-2 mt-4 text-[9px] text-stone-500 font-black uppercase tracking-[0.2em]">
                       <Camera size={10} /> Louisiana Project Files
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industrial Stats */}
        <div className="grid md:grid-cols-4 gap-px bg-white/5 border border-white/5 mb-40">
           {[
             { l: 'Residential Units', v: '1,200+', s: 'Completed Parish-wide' },
             { l: 'Commercial Sq Ft', v: '450k', s: 'Flat Roof Specialist' },
             { l: 'Storm Response', v: '24/7', s: 'Rapid Tarping Active' },
             { l: 'Safety Rating', v: 'Perfect', s: 'Zero Site Incidents' },
           ].map((stat, i) => (
             <div key={i} className="bg-black p-10">
                <div className="text-[10px] font-black text-stone-500 uppercase tracking-widest mb-4">{stat.l}</div>
                <div className="text-4xl font-black text-white italic mb-2">{stat.v}</div>
                <div className="text-[10px] text-roof-red font-mono uppercase italic tracking-wider">{stat.s}</div>
             </div>
           ))}
        </div>

        {/* Horizontal photo strip */}
        <div className="mb-40 border-t border-white/10 pt-20">
          <div className="text-label text-stone-500 mb-12 uppercase tracking-widest font-black">More From The Field</div>
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-none">
            {STRIP_PHOTOS.map((src, i) => (
              <div key={i} className="shrink-0 w-80 h-56 overflow-hidden border border-white/5 group">
                <img src={src} alt={`Field photo ${i+1}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>

        {/* Case Study */}
        <div className="grid lg:grid-cols-2 gap-28 items-center py-44 border-t border-white/10">
           <div>
              <div className="text-label text-roof-red mb-6 uppercase tracking-widest font-black">Project Breakdown 4.02</div>
              <h2 className="text-4xl md:text-6xl text-white mb-8 leading-tight italic font-black uppercase tracking-tighter">
                Anatomy of a <br/><span className="text-white/40">Storm-Ready</span> <br/>Install.
              </h2>
              <p className="text-stone-400 text-lg mb-12 leading-relaxed">
                We don't just "nail down shingles." Every Best Price Roof follows a strict multi-layer protocol: High-weight synthetic felt, ice/water shields in every valley, and industrial-grade ridge vents for Louisiana's heat.
              </p>
              <div className="space-y-6">
                 {[
                   'Owens Corning Duration Shingles (130 MPH Wind Rating)',
                   'Hand-Nail Options for precision placement',
                   'Complete Gutter & Fascia structural inspection',
                   'Zero-Debris Cleanup Guarantee'
                 ].map((feat, i) => (
                   <div key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-stone-500">
                      <div className="w-2 h-2 bg-roof-red shrink-0" />
                      {feat}
                   </div>
                 ))}
              </div>
           </div>
           <div className="bg-roof-surface p-1 border border-white/10 group overflow-hidden">
              <div className="relative aspect-square overflow-hidden">
                 <img 
                   src="/images/Untitled-design-16-scaled.png"
                    alt="Storm repair site detail" 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100" 
                 />
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Maximize2 size={64} className="text-white opacity-20 group-hover:opacity-100 transition-opacity" />
                 </div>
              </div>
           </div>
        </div>

        {/* Closing CTA */}
        <div className="text-center py-32 px-8 border border-roof-red/20 bg-roof-red/5">
           <h3 className="text-3xl text-white mb-8 italic uppercase tracking-tighter">See Your Home In Our Next Update?</h3>
           <Link to="/contact" className="inline-block bg-roof-red text-white px-12 py-6 font-black uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-black transition-all">
              Request Project Quote
           </Link>
        </div>
      </div>
    </div>
  );
}
