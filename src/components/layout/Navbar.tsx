import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone, MapPin } from 'lucide-react';
import { SERVICES } from '../../constants/services';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-roof-surface/95 shadow-2xl py-2 backdrop-blur-md border-b border-white/10' : 'bg-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`w-8 h-8 flex items-center justify-center bg-roof-red rotate-45 transition-transform group-hover:rotate-0`}>
              <div className="-rotate-45 font-black text-xs text-white group-hover:rotate-0 transition-transform">BPR</div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-black text-xl uppercase tracking-tighter">BEST PRICE <span className="text-roof-red">ROOFING</span></span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <Link to="/" className="text-label hover:text-roof-red transition-colors">Home</Link>
              <Link to="/about" className="text-label hover:text-roof-red transition-colors">About</Link>
              
              <div className="relative group">
                <button 
                  className="flex items-center gap-1 text-label hover:text-roof-red transition-colors"
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  Services <ChevronDown size={14} />
                </button>
                <AnimatePresence>
                  {(servicesOpen || isOpen) && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-roof-surface shadow-2xl p-4 grid gap-1 border border-white/10"
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <Link to="/services" className="text-white font-black text-[10px] uppercase tracking-widest p-2 border-b border-white/5 bg-white/5 mb-2">All Services</Link>
                      {SERVICES.map(service => (
                        <Link 
                          key={service.id} 
                          to={`/services/${service.id}`}
                          className="text-stone-400 font-bold text-[10px] uppercase tracking-wider p-2 hover:text-white hover:bg-white/5 transition-all"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/gallery" className="text-label hover:text-roof-red transition-colors">Gallery</Link>
            </div>

            <div className="flex items-center gap-4 border-l border-white/10 pl-8">
              <a href="tel:3186130072" className="text-sm font-mono text-stone-300 hover:text-white transition-colors">318-613-0072</a>
              <Link 
                to="/contact" 
                className="bg-roof-red text-white px-5 py-2 font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-current" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white text-roof-charcoal border-b border-stone-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 flex flex-col gap-4">
              <Link to="/" className="font-heading text-lg">Home</Link>
              <Link to="/about" className="font-heading text-lg">About</Link>
              <div className="flex flex-col gap-2 pl-4 border-l-2 border-roof-red">
                <Link to="/services" className="font-heading text-sm text-stone-400 uppercase">Services</Link>
                {SERVICES.map(service => (
                  <Link key={service.id} to={`/services/${service.id}`} className="font-bold">{service.title}</Link>
                ))}
              </div>
              <Link to="/gallery" className="font-heading text-lg">Gallery</Link>
              <Link to="/contact" className="font-heading text-lg">Contact</Link>
              <a href="tel:3186130072" className="flex items-center gap-2 font-heading text-roof-red text-xl">
                <Phone size={20} /> 318-613-0072
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
