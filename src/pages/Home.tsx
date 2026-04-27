import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Star, 
  ShieldCheck, 
  Award, 
  Clock,
  ChevronRight,
  Hammer,
  Wrench,
  Shield,
  ClipboardCheck
} from 'lucide-react';
import { SERVICES } from '../constants/services';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function Home() {
  return (
    <div className="overflow-hidden bg-roof-charcoal">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col pt-16">
        <div className="flex-1 grid grid-cols-12 relative">
          {/* Hero Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-r from-roof-charcoal via-roof-charcoal/80 to-transparent z-10" />
            <img
              src="/images/IMG_3704.png"
              alt="Best Price Roofing crew at work"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Content Left */}
          <div className="col-span-12 lg:col-span-8 z-10 px-6 sm:px-10 lg:px-20 flex flex-col justify-center py-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 bg-roof-red text-[10px] font-black uppercase tracking-[0.3em] mb-8 w-fit">
                Louisiana's Storm-Ready Experts
              </div>
              <h1 className="text-[56px] sm:text-[80px] lg:text-[110px] text-white leading-[0.85] mb-8">
                Protect What <br/>Matters <span className="text-transparent bg-clip-text bg-linear-to-b from-stone-200 to-stone-500">Most.</span>
              </h1>
              <p className="text-lg md:text-xl text-stone-400 max-w-xl font-medium leading-relaxed mb-10">
                Industrial-grade strength for your family home. Quality roofing that stands up to Louisiana storms at the state's most honest price point.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  to="/contact" 
                  className="px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-roof-orange hover:text-white transition-all shadow-2xl hover:scale-105"
                >
                  Get Your Free Quote Today
                </Link>

              </div>
            </motion.div>
          </div>

          {/* Visual Right (Industrial Sidebar) */}
          <div className="hidden lg:col-span-4 lg:flex flex-col justify-end p-12 border-l border-white/5 bg-roof-surface/30 relative overflow-hidden">
             <div className="shingle-texture absolute inset-0 opacity-5" />
             <div className="space-y-6 relative z-10">
                <div className="h-[1px] w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />
                <div className="flex justify-between items-center">
                  <span className="text-label text-stone-500">Premium Materials</span>
                  <span className="text-xs font-mono text-white">Owens Corning</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-label text-stone-500">Lead Time</span>
                  <span className="text-xs font-mono text-white">Free Inspection</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-label text-stone-500">Expertise</span>
                  <span className="text-xs font-mono text-white">Insurance Mastery</span>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Teaser Row (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-roof-charcoal border-t border-white/10">
          {[
            { n: '01', l: 'Installations', t: 'Roof Install', d: 'Full replacements and new construction installs using premium Owens Corning and Atlas materials.', p: '/services/installations', b: 'View Service' },
            { n: '02', l: 'Repair', t: 'Roof Repair', d: 'Fast, honest fixes for leaks, missing shingles, and storm damage — no unnecessary upsells.', p: '/services/repair', b: 'View Service' },
            { n: '03', l: 'Shingles', t: 'Premium Shingles', d: 'Owens Corning Duration and Atlas Pinnacle Pristine with Scotchgard algae protection.', p: '/services/shingles', b: 'View Service' },
            { n: '04', l: 'Insurance', t: 'Claim Assistance', d: 'We meet adjusters on-site and handle the documentation so you get the coverage you deserve.', p: '/services/insurance', b: 'Claims Help', special: true },
          ].map((teaser, i) => (
            <Link 
              key={teaser.n} 
              to={teaser.p}
              className={`p-10 border-r border-white/10 border-b lg:border-b-0 flex flex-col group transition-all duration-500 ${teaser.special ? 'bg-roof-red/10 border-b-4 border-b-roof-red' : 'hover:bg-roof-surface'}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-label ${teaser.special ? 'text-roof-red' : 'text-roof-red'}`}>{teaser.n} — {teaser.l}</span>
                {teaser.special && <span className="bg-roof-red text-white text-[8px] font-black px-1.5 py-0.5 animate-pulse">URGENT</span>}
              </div>
              <h3 className="text-2xl text-white mb-4">{teaser.t}</h3>
              <p className="text-xs text-stone-500 leading-relaxed mb-8 group-hover:text-stone-300 transition-colors">{teaser.d}</p>
              <div className={`mt-auto text-label transition-opacity flex items-center gap-2 ${teaser.special ? 'opacity-100 text-roof-red' : 'opacity-0 group-hover:opacity-100 text-white'}`}>
                {teaser.b} <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Mini Status Bar */}
      <div className="h-12 bg-black border-t border-white/5 flex items-center justify-between px-6 sm:px-10">
        <div className="flex gap-8 text-[9px] font-black text-stone-600 uppercase tracking-[0.2em]">
          <span>© 2024 BEST PRICE ROOFING</span>
          <span className="hidden sm:inline">LICENSED & INSURED</span>
          <span className="hidden sm:inline">LOUISIANA OWNED</span>
        </div>
        <div className="flex gap-4">
          <div className="w-2.5 h-2.5 bg-roof-red rounded-full shadow-[0_0_10px_rgba(178,34,34,0.5)]" />
          <div className="w-2.5 h-2.5 bg-stone-800 rounded-full" />
          <div className="w-2.5 h-2.5 bg-stone-800 rounded-full" />
        </div>
      </div>

      {/* Testimonials Marquee */}
      <section className="py-36 bg-stone-950 overflow-hidden relative">
        <img src="/images/IMG_3700.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover grayscale opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-b from-stone-950/80 to-stone-950/95 pointer-events-none" />
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 mb-20">
          <div className="text-label text-roof-red mb-4 uppercase tracking-[0.2em]">Voice of the Parish</div>
          <h2 className="text-4xl text-white font-black italic uppercase tracking-tighter">Verified Field Reports</h2>
        </div>
        {/* Marquee track — two identical sets for seamless loop */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 w-max marquee-track">
            {[
                            // Real Google Reviews — 5.0 ★ (19 reviews)
              { n: 'Greg E.',     l: 'Colfax, LA',  t: 'Roof Repair',      c: 'Mr James is first class. Within two hours of my call he was at my house, estimated the repair, and that day I had a cost and plan. Repair complete in timely fashion, roof leak gone. No bs — highly recommend.' },
              { n: 'Richard C.',  l: 'Alexandria',  t: 'Full Replacement',  c: 'Great company, the guys were really nice. Showed up on time, tore my roof off and put a new one on in one day. Two years later — great looking roof, no leaks. Highly recommend.' },
              { n: 'Doug T.',     l: 'Alexandria',  t: 'Insurance Claim',   c: 'Needed a new roof after hail damage. They came out, did the inspection, and helped me through the insurance process. Done in 2.5 days. Very satisfied with the quality and the roof looks awesome.' },
              { n: 'Brent W.',    l: 'Alexandria',  t: 'Full Replacement',  c: 'Extremely professional! Chooses high quality product that ensures your roof will last. Crew is great and cleans up after themselves. I would not go to anyone else.' },
              { n: 'Lakeitha B.', l: 'Alexandria',  t: 'Roof Installation', c: 'BEST PRICE is not the only thing this company is BEST at! Prompt call back, quickly placed on the schedule, work completed as communicated. All my questions answered. Great price too!' },
              { n: 'Brandon M.',  l: 'Alexandria',  t: 'New Roof',          c: 'They did an excellent job on my new roof. Professional, explained everything up front, no surprise costs. Repairs and cleanup done as promised. Highly recommended.' },
              // Duplicate set for seamless loop
              { n: 'Greg E.',     l: 'Colfax, LA',  t: 'Roof Repair',      c: 'Mr James is first class. Within two hours of my call he was at my house, estimated the repair, and that day I had a cost and plan. Repair complete in timely fashion, roof leak gone. No bs — highly recommend.' },
              { n: 'Richard C.',  l: 'Alexandria',  t: 'Full Replacement',  c: 'Great company, the guys were really nice. Showed up on time, tore my roof off and put a new one on in one day. Two years later — great looking roof, no leaks. Highly recommend.' },
              { n: 'Doug T.',     l: 'Alexandria',  t: 'Insurance Claim',   c: 'Needed a new roof after hail damage. They came out, did the inspection, and helped me through the insurance process. Done in 2.5 days. Very satisfied with the quality and the roof looks awesome.' },
              { n: 'Brent W.',    l: 'Alexandria',  t: 'Full Replacement',  c: 'Extremely professional! Chooses high quality product that ensures your roof will last. Crew is great and cleans up after themselves. I would not go to anyone else.' },
              { n: 'Lakeitha B.', l: 'Alexandria',  t: 'Roof Installation', c: 'BEST PRICE is not the only thing this company is BEST at! Prompt call back, quickly placed on the schedule, work completed as communicated. All my questions answered. Great price too!' },
              { n: 'Brandon M.',  l: 'Alexandria',  t: 'New Roof',          c: 'They did an excellent job on my new roof. Professional, explained everything up front, no surprise costs. Repairs and cleanup done as promised. Highly recommended.' },
              // Duplicate set for seamless loop
              { n: 'James R.',   l: 'Alexandria', t: 'Storm Damage',       c: 'Professional from start to finish. They handled the insurance company and got us a premium roof for just our deductible.' },
              
              { n: 'David L.',   l: 'Woodworth',  t: 'Commercial Flat Roof', c: 'Industrial expertise that you usually don\'t find in smaller companies. Highly recommended for business owners.' },
              
              { n: 'Chris P.',  l: 'Boyce',       t: 'Insurance Claim',    c: 'Best Price Roofing fought the insurance adjuster on our behalf. We got a full replacement instead of a patch job.' },
              { n: 'Angela B.', l: 'Pineville',   t: 'Full Replacement',   c: 'Zero pressure, zero hidden fees. They told me exactly what needed to be done and did it for the exact price quoted.' },
            ].map((review, i) => (
              <div key={i} className="min-w-[440px] bg-roof-surface p-12 border border-white/5 shrink-0">
                <div className="flex gap-1 mb-6 text-roof-red">
                   {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-stone-300 italic mb-8 leading-relaxed">"{review.c}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-roof-red rounded-full flex items-center justify-center font-black text-xs text-white">
                    {review.n[0]}
                  </div>
                  <div>
                     <div className="text-sm font-black text-white uppercase">{review.n}</div>
                     <div className="text-[10px] text-stone-400 font-mono uppercase tracking-widest">{review.l} • {review.t}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed Photo Strip */}
      <div className="w-full overflow-hidden flex gap-1 border-y border-white/5">
        {[
          "/images/IMG_3704.png",
          "/images/Untitled-design-9.png",
          "/images/Untitled-design-16-scaled.png",
          "/images/Untitled-design-11.png",
          "/images/IMG_3716-scaled.jpg",
          "/images/Untitled-design-14.png",
          "/images/Screenshot-2026-03-05-at-10.48.38-AM.png",
          "/images/Untitled-design-22.png",
        ].map((src, i) => (
          <div key={i} className="flex-1 h-64 overflow-hidden group shrink-0 min-w-[120px]">
            <img src={src} alt={`Project ${i+1}`} className="w-full h-full object-cover grayscale hover:grayscale-0 scale-105 hover:scale-110 transition-all duration-700" />
          </div>
        ))}
      </div>

      <section className="py-40 bg-white relative overflow-hidden text-stone-900">
        <div className="shingle-texture absolute inset-0 pointer-events-none" />
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-24">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl mb-4 text-stone-900">Precision <span className="text-roof-red font-black italic">Workmanship.</span></h2>
              <p className="text-stone-500 text-lg">Every project we take on is treated with the same level of focus, whether it's a simple repair or a multi-million dollar installation.</p>
            </div>
            <Link to="/services" className="px-6 py-3 border-2 border-roof-charcoal text-roof-charcoal font-black uppercase text-xs tracking-[0.2em] hover:bg-roof-charcoal hover:text-white transition-all">
              View All Services
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {SERVICES.map((s, idx) => (
              <motion.div 
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group border border-stone-200 p-10 hover:border-roof-red transition-all cursor-pointer bg-white text-stone-900"
              >
                <div className="w-12 h-12 bg-stone-100 flex items-center justify-center rounded text-roof-charcoal mb-6 group-hover:bg-roof-red group-hover:text-white transition-all">
                  {s.id === 'installations' && <Hammer size={24} />}
                  {s.id === 'repair' && <Wrench size={24} />}
                  {s.id === 'shingles' && <Shield size={24} />}
                  {s.id === 'insurance' && <ClipboardCheck size={24} />}
                </div>
                <h4 className="text-xl mb-3 text-stone-900">{s.title}</h4>
                <p className="text-stone-500 text-sm mb-6 leading-relaxed">{s.shortDescription}</p>
                <Link to={`/services/${s.id}`} className="text-xs font-black uppercase tracking-widest text-stone-400 group-hover:text-roof-red flex items-center gap-2">
                  View Detail <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Specialist */}
      <section className="py-44 bg-roof-charcoal">
         <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-28 items-center">
               <div className="relative group">
                  <div className="absolute -inset-4 border-2 border-roof-red/20 group-hover:-inset-6 transition-all duration-700" />
                  <img 
                    src="/images/Untitled-design-7.png"
                    alt="Best Price Roofing crew on site"
                    className="relative z-10 w-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
                  />
                  <div className="absolute bottom-10 right-10 z-20 bg-roof-red p-6 text-white max-w-xs shadow-2xl skew-x-[-12deg]">
                     <div className="skew-x-[12deg]">
                        <p className="text-xs font-black uppercase tracking-widest mb-4">On-Site Direct</p>
                        <h3 className="text-2xl font-black italic">Every job is seen by the owner. No exceptions.</h3>
                     </div>
                  </div>
               </div>
               <div>
                  <div className="text-label text-stone-500 mb-6 uppercase tracking-widest font-black">Direct Communication Channel</div>
                  <h2 className="text-4xl md:text-6xl text-white mb-8 leading-tight">
                    Alexandria's <br/><span className="text-roof-red italic">No-Middleman</span> <br/>Roofing Source.
                  </h2>
                  <p className="text-stone-400 text-lg mb-12 leading-relaxed">
                    Tired of talking to salespeople who have never held a hammer? At Best Price Roofing, you speak directly with the expertise. We don't push extras you don't need—we build roofs that last.
                  </p>
                  <div className="grid grid-cols-2 gap-10">
                     <div>
                        <h4 className="text-white font-black uppercase text-xs mb-3 italic">Technical Cert</h4>
                        <p className="text-stone-500 text-sm font-medium">Owens Corning trusted materials used on every installation for proven durability and storm resistance.</p>
                     </div>
                     <div>
                        <h4 className="text-white font-black uppercase text-xs mb-3 italic">Response Protocol</h4>
                        <p className="text-stone-500 text-sm font-medium">Direct line access for all active clients. No automated switchboards.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Trust Materials Section */}
      <section className="py-36 bg-stone-900 border-y border-white/5 relative overflow-hidden">
        <img src="/images/Untitled-design-12.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover grayscale opacity-8 pointer-events-none scale-110" />
        <div className="absolute inset-0 bg-stone-900/90 pointer-events-none" />
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 text-center text-white">
          <p className="text-roof-red font-bold uppercase tracking-[0.3em] text-xs mb-8">Premium Partnerships</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all">
            <h2 className="text-3xl font-black italic">OWENS CORNING</h2>
            <h2 className="text-3xl font-black tracking-tighter">ATLAS ROOFING</h2>
            <h2 className="text-3xl font-black">PINNACLE</h2>
          </div>
        </div>
      </section>

      {/* Detailed Technical FAQ Section */}
      <section className="py-44 bg-white text-stone-900">
         <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16">
            <div className="mb-28 text-center">
               <div className="text-label text-roof-red mb-4 uppercase tracking-[0.3em]">Knowledge Base</div>
               <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-stone-900">Field Intelligence</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
               {[
                 { q: 'How long does a full shingle replacement take?', a: 'Most residential jobs are completed within 24-48 hours from tear-off to cleanup. Our crews move efficiently without cutting corners on quality.' },
                 { q: 'Will my insurance cover a 20-year-old roof?', a: 'If there is verifiable storm damage (wind/hail), most policies cover replacement cost rather than actual cash value. We provide the detailed damage documentation your adjuster needs to verify the claim.' },
                 { q: 'What makes your shingles "Storm Ready"?', a: 'We exclusively use high-weight shingles with reinforced nail zones and enhanced adhesive strips. Our Owens Corning and Atlas lines are engineered for high-wind Gulf Coast conditions.' },
                 { q: 'Do you offer financing for non-claim jobs?', a: 'We work with homeowners to find the most affordable path forward. Contact us directly to discuss your situation and we will find the right solution.' },
               ].map((faq, i) => (
                 <div key={i} className="border-b border-stone-200 pb-12">
                   <h3 className="text-2xl font-black text-roof-charcoal mb-6 uppercase tracking-tight italic flex gap-4">
                     <span className="text-roof-red not-italic">?</span> {faq.q}
                   </h3>
                   <p className="text-stone-500 font-medium leading-relaxed">{faq.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Why Choose Us & Process */}
      <section className="py-44 bg-white text-stone-900">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16">
           <div className="grid lg:grid-cols-2 gap-28 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl mb-8 font-black uppercase tracking-tighter italic text-stone-900">Why Alexandria Trusts <span className="text-roof-red">The Best.</span></h2>
                <div className="grid gap-8">
                   <div className="flex gap-6">
                      <div className="w-14 h-14 shrink-0 bg-stone-100 flex items-center justify-center rounded-lg text-roof-red">
                        <ShieldCheck size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 uppercase tracking-tight text-stone-900">Uncompromising Safety</h4>
                        <p className="text-stone-500 text-sm leading-relaxed">We maintain strict safety protocols on every job site, ensuring our crew and your family are protected throughout the build.</p>
                      </div>
                   </div>
                   <div className="flex gap-6">
                      <div className="w-14 h-14 shrink-0 bg-stone-100 flex items-center justify-center rounded-lg text-roof-red">
                        <Award size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 uppercase tracking-tight text-stone-900">Licensed & Insured</h4>
                        <p className="text-stone-500 text-sm leading-relaxed">Fully licensed and insured in Louisiana, giving you confidence that your home is in trusted hands on every job.</p>
                      </div>
                   </div>
                   <div className="flex gap-6">
                      <div className="w-14 h-14 shrink-0 bg-stone-100 flex items-center justify-center rounded-lg text-roof-red">
                        <Clock size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 uppercase tracking-tight text-stone-900">Transparent Timelines</h4>
                        <p className="text-stone-500 text-sm leading-relaxed">No guessing games. You'll know exactly when we start, how long it will take, and when we'll be out of your hair.</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-roof-steel rounded-2xl transform rotate-3" />
                <div className="relative bg-roof-charcoal rounded-2xl p-10 md:p-16 shadow-2xl">
                   <h3 className="text-white text-3xl mb-12 italic uppercase tracking-tighter font-black">Our 4-Step Process</h3>
                   <div className="grid gap-12">
                      {[
                        {n: '01', t: 'Precision Assessment', d: 'Drones and on-roof inspections identify every detail.'},
                        {n: '02', t: 'Honest Proposal', d: 'A clear, itemized quote with no hidden fees or pushy sales.'},
                        {n: '03', t: 'Masterful Build', d: 'Fast, clean, and expertly installed by our specialized crew.'},
                        {n: '04', t: 'Final Inspection', d: 'We dont leave until we—and you—are 100% satisfied.'},
                      ].map((step, idx) => (
                        <div key={idx} className="flex gap-6 relative">
                           {idx < 3 && <div className="absolute top-10 left-6 bottom-[-24px] w-px bg-white/10 text-stone-900" />}
                           <div className="w-12 h-12 rounded-full border-2 border-roof-red flex items-center justify-center text-white font-black text-xs shrink-0 bg-roof-red/10 z-10">
                             {step.n}
                           </div>
                           <div>
                              <h4 className="text-white text-lg mb-1 font-bold uppercase tracking-tight">{step.t}</h4>
                              <p className="text-stone-400 text-sm leading-relaxed">{step.d}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Main CTA Form Section */}
      <section className="py-44 bg-stone-900 relative overflow-hidden">
        <img src="/images/Untitled-design-7.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover grayscale opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-b from-stone-900/70 via-stone-900/85 to-stone-900/95 pointer-events-none" />
         <div className="max-w-5xl mx-auto px-6 sm:px-12 text-center">
            <h2 className="text-5xl md:text-7xl mb-8 text-white font-black uppercase italic tracking-tighter leading-none">Ready for a <br/><span className="text-roof-red">Solid</span> Roof?</h2>
            <p className="text-stone-400 text-lg mb-12 uppercase tracking-widest font-black text-[10px]">Schedule your free, zero-pressure inspection today.</p>
            <div className="bg-roof-charcoal p-8 md:p-16 rounded shadow-2xl border border-white/5">
               <form className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-3">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-400">FullName</label>
                    <input type="text" placeholder="John Doe" className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-roof-red transition-all font-bold text-lg" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-400">Phone</label>
                    <input type="tel" placeholder="318-000-0000" className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-roof-red transition-all font-mono text-lg" />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-400">Requirements</label>
                    <textarea rows={3} placeholder="Brief details about your property..." className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-roof-red transition-all font-medium text-stone-300" />
                  </div>
                  <div className="md:col-span-2 mt-8">
                    <button className="w-full bg-white text-black py-6 font-black uppercase text-xs tracking-[0.4em] hover:bg-roof-red hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                      Transmit Data Request
                    </button>
                    <div className="flex items-center justify-center gap-4 mt-8 opacity-40 grayscale group cursor-default">
                       <ShieldCheck size={20} className="text-white" />
                       <span className="text-[8px] font-black uppercase tracking-widest text-white">Full Privacy Protection Active</span>
                    </div>
                  </div>
               </form>
            </div>
         </div>
      </section>
    </div>
  );
}
