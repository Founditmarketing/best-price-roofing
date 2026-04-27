import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Phone, ArrowRight, Shield } from 'lucide-react';
import { SERVICES } from '../constants/services';

export function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <Navigate to="/services" />;

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[60vh]">
        <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
        <div className="absolute inset-0 bg-linear-to-t from-roof-charcoal via-roof-charcoal/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <Link to="/services" className="inline-flex items-center gap-2 text-roof-red font-bold uppercase text-xs tracking-widest mb-6">
                <ChevronLeft size={16} /> Back to Services
             </Link>
             <h1 className="text-5xl text-white mb-4">{service.title}</h1>
             <p className="text-stone-300 text-xl max-w-2xl">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-3 gap-16">
              {/* Main Body */}
              <div className="lg:col-span-2 space-y-12">
                 <div>
                    <h2 className="text-3xl mb-8 border-b-2 border-stone-100 pb-4 inline-block">Service Overview</h2>
                    <p className="text-stone-600 text-lg leading-relaxed">{service.fullDescription}</p>
                 </div>

                 <div>
                    <h2 className="text-3xl mb-8">Why It Matters</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                       {service.benefits.map((benefit, i) => (
                         <div key={i} className="flex gap-4 p-6 bg-stone-50 rounded-xl border border-stone-100">
                            <div className="w-8 h-8 rounded-full bg-roof-red/10 flex items-center justify-center text-roof-red shrink-0 font-black italic">!</div>
                            <span className="text-stone-700 font-medium">{benefit}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-roof-charcoal rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
                    <Shield className="absolute top-[-20%] right-[-10%] text-white/5 w-96 h-96" />
                    <h2 className="text-3xl mb-12 relative z-10">Our Proven Process</h2>
                    <div className="grid gap-8 relative z-10">
                       {service.process.map((p, idx) => (
                         <div key={idx} className="flex gap-6 group">
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-roof-red transition-all font-black shrink-0">
                               {idx + 1}
                            </div>
                            <div>
                               <h4 className="text-xl mb-1 text-white">{p.step}</h4>
                               <p className="text-stone-400 text-sm">{p.description}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Sidebar CTA */}
              <div className="lg:col-span-1">
                 <div className="sticky top-32 space-y-8">
                    <div className="bg-roof-steel p-8 rounded-2xl border border-stone-200">
                       <h3 className="text-2xl mb-6">Need This Service?</h3>
                       <p className="text-stone-600 mb-8 text-sm">Schedule your free inspection for {service.title} today. No pushy sales, just honest expert advice.</p>
                       <Link to="/contact" className="flex items-center justify-center gap-2 w-full bg-roof-charcoal text-white py-4 rounded font-heading text-xs tracking-widest uppercase hover:bg-roof-red transition-all">
                          Get a Quote <ArrowRight size={16} />
                       </Link>
                       <div className="mt-8 pt-8 border-t border-stone-300/50">
                          <p className="text-xs text-stone-500 uppercase font-bold tracking-widest mb-2">Or Call Us Directly</p>
                          <a href="tel:3186130072" className="text-2xl font-black text-roof-red flex items-center gap-2 hover:translate-x-1 transition-transform">
                             <Phone size={24} /> 318-613-0072
                          </a>
                       </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
                       <h4 className="font-heading mb-4 text-xs tracking-widest text-stone-400">Related Services</h4>
                       <div className="grid gap-4">
                          {SERVICES.filter(s => s.id !== id).map(s => (
                             <Link key={s.id} to={`/services/${s.id}`} className="group flex items-center justify-between p-3 border border-stone-100 rounded hover:border-roof-red transition-all">
                                <span className="font-bold text-sm text-stone-600 group-hover:text-roof-red">{s.title}</span>
                                <ChevronRight size={14} className="text-stone-300 group-hover:text-roof-red" />
                             </Link>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Featured Gallery Redirect */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl mb-8">See Our {service.title} Work</h2>
            <Link to="/gallery" className="text-roof-red font-black uppercase text-xs tracking-[0.3em] hover:opacity-80 flex items-center justify-center gap-2">
               Browse Portfolio <ArrowRight size={16} />
            </Link>
         </div>
      </section>
    </div>
  );
}
