import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Camera, Maximize2, ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const PHOTOS = [
  { id: 1,  src: "/images/IMG_3704.png",                          title: "Hero Crew Shot",            tag: "Installation" },
  { id: 2,  src: "/images/Untitled-design-4.png",                 title: "Precision Nail Work",       tag: "Workmanship" },
  { id: 3,  src: "/images/Untitled-design-3.png",                 title: "Crew on Gabled Roof",       tag: "Installation" },
  { id: 4,  src: "/images/Untitled-design-2.png",                 title: "Finished Brick-House Roof", tag: "Residential" },
  { id: 5,  src: "/images/Untitled-design-12.png",                title: "Shingle Close-Up",          tag: "Owens Corning" },
  { id: 6,  src: "/images/Untitled-design-7.png",                 title: "Sunset Shingle Detail",     tag: "Premium" },
  { id: 7,  src: "/images/IMG_3700.png",                          title: "Commercial Project",        tag: "Industrial" },
  { id: 8,  src: "/images/Untitled-design-9.png",                 title: "Roof Ridge Work",           tag: "Installation" },
  { id: 9,  src: "/images/Untitled-design-10.png",                title: "Shingle Layering",          tag: "Workmanship" },
  { id: 10, src: "/images/Untitled-design-11.png",                title: "Crew At Work",              tag: "Team" },
  { id: 11, src: "/images/Untitled-design-13.png",                title: "Atlas Pinnacle Shingles",   tag: "Atlas" },
  { id: 12, src: "/images/Untitled-design-14.png",                title: "Residential Install",       tag: "Residential" },
  { id: 13, src: "/images/Untitled-design-15.png",                title: "Roof Valley Detail",        tag: "Workmanship" },
  { id: 14, src: "/images/Untitled-design-16-scaled.png",         title: "Storm Repair Job",          tag: "Repair" },
  { id: 15, src: "/images/Untitled-design-17.png",                title: "Ridge Vent Install",        tag: "Ventilation" },
  { id: 16, src: "/images/Untitled-design-18.png",                title: "Full Replacement",          tag: "Residential" },
  { id: 17, src: "/images/Untitled-design-19.png",                title: "Eave & Fascia Work",        tag: "Detail" },
  { id: 18, src: "/images/Untitled-design-20.png",                title: "Nail Pattern Close-Up",     tag: "Workmanship" },
  { id: 19, src: "/images/Untitled-design-22.png",                title: "Completed Project",         tag: "Finished" },
  { id: 20, src: "/images/Untitled-design-8.png",                 title: "Insurance Claim Site",      tag: "Insurance" },
  { id: 21, src: "/images/Screenshot-2026-03-05-at-10.48.38-AM.png", title: "Aerial Site View",      tag: "Commercial" },
  { id: 22, src: "/images/IMG_3716-scaled.jpg",                   title: "On-Site Crew",              tag: "Team" },
];

const STRIP_PHOTOS = [
  "/images/Roof.png",
  "/images/Screenshot-2026-03-05-at-10.49.59-AM.png",
  "/images/Screenshot-2026-03-05-at-10.50.11-AM.png",
  "/images/image4-1-600x450-1-e1741366242675.jpeg",
  "/images/Screenshot-2026-03-05-at-10.49.04-AM-1.png",
  "/images/Untitled-design-4.png",
  "/images/Untitled-design-16-scaled.png",
];

export function Gallery() {
  return (
    <div className="bg-roof-charcoal pt-40 pb-32 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16">

        {/* Header */}
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

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10 mb-40">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.id}
              {...fadeInUp}
              transition={{ delay: (i % 9) * 0.07 }}
              className="relative group cursor-zoom-in break-inside-avoid"
            >
              <div className="overflow-hidden border border-white/5 bg-roof-surface/50 group-hover:border-white/20 transition-all shadow-2xl relative">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full min-h-[280px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
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

        {/* Stats Bar */}
        <div className="grid md:grid-cols-4 gap-px bg-white/5 border border-white/5 mb-40 text-stone-900">
          {[
            { l: 'Google Rating', v: '5.0 ★', s: '19 Verified Reviews' },
            { l: 'Service Area', v: 'Cenla', s: 'Alexandria & Surrounding Parishes' },
            { l: 'Storm Response',    v: '24/7',    s: 'Rapid Tarping Active' },
            { l: 'Materials', v: 'OC + Atlas', s: 'Owens Corning & Atlas Pinnacle' },
          ].map((stat, i) => (
            <div key={i} className="bg-black p-10">
              <div className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-4">{stat.l}</div>
              <div className="text-4xl font-black text-white italic mb-2">{stat.v}</div>
              <div className="text-[10px] text-roof-red font-mono uppercase italic tracking-wider">{stat.s}</div>
            </div>
          ))}
        </div>

        {/* Horizontal Strip */}
        <div className="mb-40 border-t border-white/10 pt-20">
          <div className="flex items-center justify-between mb-12">
            <div className="text-label text-stone-400 uppercase tracking-widest font-black">More From The Field</div>
            <div className="flex items-center gap-2 text-[10px] text-stone-600 font-mono uppercase tracking-widest animate-pulse">
              <span>Scroll to browse</span>
              <span>→</span>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {STRIP_PHOTOS.map((src, i) => (
              <div key={i} className="shrink-0 w-80 h-56 overflow-hidden border border-white/5 group">
                <img src={src} alt={`Field photo ${i + 1}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>

        {/* Case Study */}
        <div className="grid lg:grid-cols-2 gap-28 items-center py-44 border-t border-white/10">
          <div>
            <div className="text-label text-roof-red mb-6 uppercase tracking-widest font-black">Project Breakdown 4.02</div>
            <h2 className="text-4xl md:text-6xl text-white mb-8 leading-tight italic font-black uppercase tracking-tighter">
              Anatomy of a <br /><span className="text-white/40">Storm-Ready</span> <br />Install.
            </h2>
            <p className="text-stone-400 text-lg mb-12 leading-relaxed">
              We don't just "nail down shingles." Every Best Price Roof follows a strict multi-layer protocol: High-weight synthetic felt, ice/water shields in every valley, and industrial-grade ridge vents for Louisiana's heat.
            </p>
            <div className="space-y-6">
              {[
                'Owens Corning Duration Shingles — High-Wind Rated',
                'Hand-Nail Options for precision placement',
                'Complete Gutter & Fascia structural inspection',
                'Zero-Debris Cleanup Guarantee',
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-stone-400">
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
          <Link to="/contact" className="inline-flex items-center gap-3 bg-roof-red text-white px-12 py-6 font-black uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-black transition-all">
            Request Project Quote <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}
