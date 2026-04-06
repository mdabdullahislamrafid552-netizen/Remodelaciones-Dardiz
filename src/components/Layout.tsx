import { Outlet, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, MapPin, Mail, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-[#f8f9fa]">
      {/* Top Bar - Ultra Minimal */}
      <div className="bg-[#0a0a0a] text-gray-300 py-2 px-4 text-xs tracking-widest uppercase hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-2 text-[#D49800]" /> Panamá</span>
            <span className="flex items-center"><Mail className="w-3 h-3 mr-2 text-[#D49800]" /> Remodardiz23@gmail.com</span>
          </div>
          <div className="flex items-center font-medium">
            <Phone className="w-3 h-3 mr-2 text-[#D49800]" /> +507 6902-1220
          </div>
        </div>
      </div>

      {/* Header - Glassmorphism */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Premium Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src="https://i.imgur.com/lT2bcJk.png" 
                alt="Dardiz Remodelaciones Logo" 
                className="h-12 md:h-16 object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium uppercase tracking-wider transition-all duration-300 relative group ${
                    location.pathname === link.path ? 'text-[#D49800]' : 'text-gray-600 hover:text-[#0a0a0a]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-[#D49800] transform origin-left transition-transform duration-300 ${
                    location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <Link
                to="/contacto"
                className="bg-[#0a0a0a] text-white px-7 py-3 text-sm font-medium uppercase tracking-wider hover:bg-[#D49800] transition-colors duration-500"
              >
                Cotizar Proyecto
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#0a0a0a] focus:outline-none"
              >
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav - Full Screen Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed inset-0 top-[72px] bg-white z-40 h-screen"
            >
              <div className="flex flex-col px-6 pt-10 space-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-3xl font-display font-light tracking-tight ${
                      location.pathname === link.path
                        ? 'text-[#D49800]'
                        : 'text-[#0a0a0a]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-8 border-t border-gray-100">
                  <Link
                    to="/contacto"
                    className="block w-full text-center bg-[#D49800] text-white px-6 py-4 font-medium uppercase tracking-wider"
                  >
                    Cotizar Proyecto
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer - Editorial Style */}
      <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
            <div className="md:col-span-5">
              <Link to="/" className="inline-block mb-8">
                <img 
                  src="https://i.imgur.com/lT2bcJk.png" 
                  alt="Dardiz Remodelaciones Logo" 
                  className="h-16 object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <p className="text-gray-400 font-light leading-relaxed max-w-md text-lg">
                Elevando el estándar de la construcción y el diseño de interiores en Panamá. Creamos espacios que inspiran y perduran.
              </p>
            </div>
            
            <div className="md:col-span-3 md:col-start-7">
              <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-8">Navegación</h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-300 hover:text-[#D49800] transition-colors font-light">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-8">Contacto</h3>
              <ul className="space-y-6">
                <li>
                  <a href="tel:69021220" className="text-xl font-display font-light hover:text-[#D49800] transition-colors block">
                    +507 6902-1220
                  </a>
                </li>
                <li>
                  <a href="mailto:Remodardiz23@gmail.com" className="text-gray-300 hover:text-[#D49800] transition-colors font-light block">
                    Remodardiz23@gmail.com
                  </a>
                </li>
                <li className="text-gray-400 font-light">
                  Ciudad de Panamá, Panamá
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs tracking-wider uppercase">
            <p>&copy; {new Date().getFullYear()} Dardiz Remodelaciones.</p>
            <p className="mt-4 md:mt-0">Diseño y Construcción de Excelencia.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Call Button (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 p-4 z-40">
        <a 
          href="tel:69021220" 
          className="w-full bg-[#0a0a0a] text-white flex items-center justify-center py-4 text-sm font-medium tracking-widest uppercase"
        >
          <Phone className="w-4 h-4 mr-3" /> Llamar Ahora
        </a>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/50769021220"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-8 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-transform hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
