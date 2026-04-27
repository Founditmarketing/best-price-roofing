import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Phone, ArrowRight, Shield } from 'lucide-react';
import { SERVICES } from '../constants/services';

export function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <Navigate to="/services" />;

  const related = SERVICES.filter(s => s.id !== id);

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[60vh]">
        <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
        <div className="absolute inset-0 bg-linear-to-t from-roof-charcoal via-roof-charcoal/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 py-20">
          <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16">
            <Link to="/services" className="inline-flex items-center gap-2 text-roof-red font-bold uppercase text-xs tracking-widest mb-6">
              <ChevronLeft size={16} /> Back to Services
            </Link>
            <h1 className="text-5xl md:text-7xl text-white mb-4">{service.title}</h1>
            <p className="text-stone-300 text-xl max-w-3xl">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Main Content — full width */}
      <section className="py-32 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 mb-24">
            {/* Service Overview */}
            <div>
              <h2 className="text-4xl mb-8 border-b-2 border-stone-100 pb-4 inline-block">Service Overview</h2>
              <p className="text-stone-600 text-lg leading-relaxed">{service.fullDescription}</p>
            </div>

            {/* Why It Matters */}
            <div>
              <h2 className="text-4xl mb-8">Why It Matters</h2>
              <div className="grid gap-4">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-stone-50 border border-stone-100">
                    <div className="w-7 h-7 rounded-full bg-roof-red/10 flex items-center justify-center text-roof-red shrink-0 font-black italic text-sm">!</div>
                    <span className="text-stone-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Proven Process — full width */}
          <div className="bg-roof-charcoal p-12 md:p-20 text-white relative overflow-hidden">
            <Shield className="absolute top-[-20%] right-[-5%] text-white/5 w-96 h-96" />
            <h2 className="text-4xl mb-16 relative z-10">Our Proven Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
              {service.process.map((p, idx) => (
                <div key={idx} className="flex flex-col gap-4 group">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:bg-roof-red group-hover:border-roof-red transition-all font-black text-white text-sm">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg text-white font-black uppercase tracking-tight">{p.step}</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 bg-stone-950 border-t border-white/5">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-label text-roof-red mb-4 uppercase tracking-[0.3em]">Free Inspection</div>
              <h2 className="text-4xl md:text-6xl text-white font-black uppercase italic tracking-tighter leading-tight mb-6">
                Ready to Get <br/><span className="text-roof-red">{service.title}?</span>
              </h2>
              <p className="text-stone-400 text-lg leading-relaxed">
                No pushy sales, no hidden fees. Just honest expert advice and a clear quote for your home.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 lg:items-start xl:items-center">
              <Link
                to="/contact"
                className="px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-roof-red hover:text-white transition-all shadow-2xl text-center"
              >
                Get a Free Quote <ArrowRight size={14} className="inline ml-2" />
              </Link>
              <a
                href="tel:3186130072"
                className="flex items-center gap-3 group"
              >
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:bg-roof-red group-hover:border-roof-red transition-all shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-stone-500">Call Us Directly</div>
                  <div className="text-xl font-black text-white group-hover:text-roof-red transition-colors">318-613-0072</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-roof-charcoal border-t border-white/5">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-label text-stone-500 mb-12 uppercase tracking-widest font-black">Related Services</div>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map(s => (
              <Link
                key={s.id}
                to={`/services/${s.id}`}
                className="group flex flex-col overflow-hidden border border-white/5 hover:border-white/20 transition-all bg-roof-surface/50"
              >
                <div className="h-48 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="p-8 flex items-center justify-between">
                  <span className="font-black text-white uppercase tracking-tight group-hover:text-roof-red transition-colors">{s.title}</span>
                  <ChevronRight size={16} className="text-stone-600 group-hover:text-roof-red transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Redirect */}
      <section className="py-20 bg-stone-50 border-t border-stone-200">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <h2 className="text-3xl mb-6">See Our {service.title} Work</h2>
          <Link to="/gallery" className="text-roof-red font-black uppercase text-xs tracking-[0.3em] hover:opacity-80 flex items-center justify-center gap-2">
            Browse Portfolio <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
