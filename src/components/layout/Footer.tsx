import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-20">
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="flex items-center gap-2 mb-8 group">
                <div className="w-8 h-8 flex items-center justify-center bg-roof-red rotate-45 group-hover:rotate-0 transition-transform">
                  <div className="-rotate-45 font-black text-xs text-white group-hover:rotate-0 transition-transform">BPR</div>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-heading font-black text-xl uppercase tracking-tighter italic text-white">Best Price</span>
                  <span className="text-label text-roof-red">Roofing</span>
                </div>
              </Link>
              <p className="text-stone-500 text-xs leading-relaxed mb-8 uppercase tracking-widest font-medium">
                Professional, affordable roofing services built to withstand the unique challenges of the Louisiana climate.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-roof-red transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-roof-red transition-colors"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-roof-red transition-colors"><Twitter size={18} /></a>
              </div>
          </div>

          <div>
            <h4 className="text-label text-stone-400 mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-xs font-bold uppercase tracking-widest hover:text-roof-red transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-xs font-bold uppercase tracking-widest hover:text-roof-red transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-xs font-bold uppercase tracking-widest hover:text-roof-red transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="text-xs font-bold uppercase tracking-widest hover:text-roof-red transition-colors">Work Gallery</Link></li>
              <li><Link to="/contact" className="text-xs font-bold uppercase tracking-widest hover:text-roof-red transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-label text-stone-400 mb-8">Direct Contact</h4>
            <ul className="flex flex-col gap-8">
              <li className="flex flex-col gap-2">
                <span className="text-[10px] text-roof-red uppercase tracking-widest font-black">Call Anytime</span>
                <a href="tel:3186130072" className="text-xl font-mono font-bold hover:text-roof-red transition-colors">318-613-0072</a>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-[10px] text-roof-red uppercase tracking-widest font-black">Louisiana Base</span>
                <span className="text-sm font-medium text-stone-400">Alexandria, LA & <br/>Surrounding Parishes</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-label text-stone-400 mb-8">Industry Standards</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-roof-red" /> Fully Licensed & Insured
              </li>
              <li className="text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-roof-red" /> No-Pressure Inspections
              </li>
              <li className="text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-roof-red" /> Premium Shingle Selection
              </li>
              <li className="text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-roof-red" /> Storm Damage Expertise
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8 text-[9px] font-black text-stone-400 uppercase tracking-[0.2em]">
            <span>© 2024 BEST PRICE ROOFING</span>
            <span>LICENSED #LA-123456</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[9px] font-black text-stone-400 uppercase tracking-[0.2em] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[9px] font-black text-stone-400 uppercase tracking-[0.2em] hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
