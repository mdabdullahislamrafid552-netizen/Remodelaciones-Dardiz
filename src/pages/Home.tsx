import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const services = [
    {
      title: 'Construcción Residencial',
      description: 'Proyectos desde cero con los más altos estándares de calidad arquitectónica.',
      number: '01',
    },
    {
      title: 'Remodelaciones Generales',
      description: 'Transformamos espacios comerciales y residenciales con precisión y elegancia.',
      number: '02',
    },
    {
      title: 'Diseño de Interiores',
      description: 'Acabados premium y optimización funcional para ambientes sofisticados.',
      number: '03',
    },
    {
      title: 'Restauración de Fachadas',
      description: 'Renovación exterior que eleva el valor y la estética de su propiedad.',
      number: '04',
    },
  ];

  return (
    <div className="bg-[#f8f9fa]">
      {/* Hero Section - Cinematic with Parallax */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://casauno.cl/wp-content/uploads/2023/07/Marmol-House-Katherine-Rahal-6666.jpg"
            alt="Arquitectura de lujo"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
        
        <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="block text-[#D49800] font-sans font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-6">
                Panamá
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light text-white leading-[1.1] tracking-tight mb-8 text-balance">
                Diseño y <br />
                <span className="font-medium">Construcción</span> <br />
                de Excelencia.
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-12"
            >
              <Link
                to="/contacto"
                className="group relative inline-flex items-center justify-center px-8 py-4 sm:py-5 text-xs sm:text-sm font-medium tracking-widest text-white uppercase bg-[#D49800] overflow-hidden w-full sm:w-auto"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative">Cotizar Proyecto</span>
              </Link>
              <Link
                to="/proyectos"
                className="group inline-flex items-center justify-center px-8 py-4 sm:py-5 text-xs sm:text-sm font-medium tracking-widest text-white uppercase border border-white/30 hover:bg-white hover:text-black transition-colors duration-500 w-full sm:w-auto"
              >
                Ver Portafolio
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Intro / Philosophy Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-[#0a0a0a] leading-tight mb-8 text-balance">
                Transformando visiones en <span className="font-medium">realidades tangibles.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed mb-10">
                En Dardiz Remodelaciones, no solo construimos estructuras; creamos atmósferas. Nuestro enfoque integral combina diseño innovador, materiales de primera calidad y una ejecución impecable para superar las expectativas más exigentes.
              </p>
              <Link to="/nosotros" className="inline-flex items-center text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0a0a0a] group">
                Conoce nuestra historia
                <span className="ml-4 w-12 h-[1px] bg-[#0a0a0a] group-hover:w-20 transition-all duration-500"></span>
              </Link>
            </motion.div>
            <div className="relative">
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop" 
                alt="Interior de lujo" 
                className="w-full h-[400px] md:h-[600px] object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-32 h-32 md:w-48 md:h-48 bg-[#f8f9fa] flex items-center justify-center p-6 md:p-8 border border-gray-100 shadow-xl">
                <div className="text-center">
                  <span className="block text-3xl md:text-4xl font-display font-medium text-[#D49800]">10+</span>
                  <span className="block text-[10px] md:text-xs font-bold tracking-widest text-gray-500 uppercase mt-2">Años de<br/>Excelencia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Minimalist List */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20">
            <div>
              <span className="block text-[#D49800] font-sans font-medium tracking-[0.3em] uppercase text-xs mb-4">
                Especialidades
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-balance">Nuestros Servicios</h2>
            </div>
            <Link to="/servicios" className="hidden md:inline-flex items-center text-sm font-bold tracking-widest uppercase text-white group mt-8 md:mt-0">
              Ver todos
              <span className="ml-4 w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-500"></span>
            </Link>
          </div>

          <div className="border-t border-gray-800">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group border-b border-gray-800 py-8 md:py-10 hover:bg-white/5 transition-colors duration-500 px-4 -mx-4"
              >
                <Link to="/servicios" className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center">
                  <div className="md:col-span-1 text-gray-600 font-display text-xl mb-2 md:mb-0">
                    {service.number}
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="text-2xl md:text-3xl font-display font-light group-hover:text-[#D49800] transition-colors duration-500 text-balance">
                      {service.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-gray-400 font-light text-base md:text-lg mt-2 md:mt-0">
                      {service.description}
                    </p>
                  </div>
                  <div className="md:col-span-1 flex justify-start md:justify-end mt-4 md:mt-0">
                    <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-[#D49800] transform group-hover:translate-x-2 transition-all duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 md:hidden">
            <Link to="/servicios" className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-white group">
              Ver todos los servicios
              <span className="ml-4 w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-500"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview - Editorial Grid */}
      <section className="py-24 md:py-32 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 md:mb-20">
            <span className="block text-[#D49800] font-sans font-medium tracking-[0.3em] uppercase text-xs mb-4">
              Portafolio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-[#0a0a0a] text-balance">Proyectos Destacados</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-6 relative">
                <img 
                  src="https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/660354705_1603008665164229_5652204895031427198_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeG1uYAHiBCgZi6huazUdblQubXZB_xskba5tdkH_GyRtiJfwIdPNDtWIzLDaixEXuXWLRfZ2taQ6gx0sTJeFOxD&_nc_ohc=Kc77Lzt5h0kQ7kNvwH7vhV7&_nc_oc=AdriycSh0QnCVrn6l9LVWJHk7Di7UWwRlWHGiPTZicFExk9fhr_6zuTUHXnAJpFHOx4&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&_nc_gid=ixcJFdesa_MPHTV--QZlLg&_nc_ss=7a3a8&oh=00_Af0UnWTOJ382h9ay0N9lI4ipTannpY-jI_SBDEAxRqoflg&oe=69D99C85" 
                  alt="Proyecto Residencial" 
                  className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-medium text-[#0a0a0a] mb-2">Proyecto Residencial</h3>
                  <p className="text-xs sm:text-sm tracking-widest text-gray-500 uppercase">Remodelación Integral</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="group cursor-pointer md:mt-24"
            >
              <div className="overflow-hidden mb-6 relative">
                <img 
                  src="https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/616141326_1526924376105992_7008225487791346100_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEr9VMLxXvFV67Q1ji1M-gBSq-mAg3fxvVKr6YCDd_G9dG4RXY_nijx_YpLxRIKxvAN1TRFpd6KhjihzMS9H_fV&_nc_ohc=z8VEZeFemHEQ7kNvwFcRzby&_nc_oc=AdowMZ_C8_gVTJmcBQ4DEFVqb0veoLe63_QNp0q0H-l9xh-cA4SnlKZdN5BWHWi6488&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&_nc_gid=Zuy-zyC46tUbLMnl5Zphcw&_nc_ss=7a3a8&oh=00_Af0uJ5fK5u4lL6hGxrLpp53x4e_WHCQsjbXVYlQ_0cMr7w&oe=69D9CC55" 
                  alt="Diseño de Interiores" 
                  className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-medium text-[#0a0a0a] mb-2">Diseño de Interiores</h3>
                  <p className="text-xs sm:text-sm tracking-widest text-gray-500 uppercase">Acabados</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-16 md:mt-20">
            <Link to="/proyectos" className="inline-flex items-center text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0a0a0a] group">
              Ver galería completa
              <span className="ml-4 w-12 h-[1px] bg-[#0a0a0a] group-hover:w-20 transition-all duration-500"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Sophisticated */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#D49800]/5"></div>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-[#0a0a0a] mb-8 leading-tight text-balance">
            ¿Listo para elevar <br className="hidden sm:block" />su espacio?
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-light mb-10 md:mb-12 max-w-2xl mx-auto text-balance">
            Agende una consulta privada con nuestro equipo de expertos y comencemos a diseñar su próximo proyecto.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-[#0a0a0a] text-white px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm font-medium tracking-widest uppercase hover:bg-[#D49800] transition-colors duration-500"
          >
            Iniciar Conversación
          </Link>
        </div>
      </section>
    </div>
  );
}
