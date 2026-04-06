import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Construcción Residencial',
      description: 'Desarrollamos proyectos residenciales desde sus cimientos, asegurando una integración perfecta entre diseño arquitectónico y funcionalidad estructural. Utilizamos materiales de vanguardia para garantizar durabilidad y estética.',
      number: '01',
      image: 'https://mx.habcdn.com/photos/project/medium/construccion-residencial-186353.jpg'
    },
    {
      title: 'Remodelaciones Generales',
      description: 'Revitalizamos espacios existentes, adaptándolos a las nuevas exigencias del diseño contemporáneo. Nuestro enfoque minimiza la disrupción mientras maximiza el valor y la belleza de su propiedad.',
      number: '02',
      image: 'https://g10construcciones.cl/images/remodelaciones_generales.jpg'
    },
    {
      title: 'Diseño de Interiores',
      description: 'Creamos atmósferas sofisticadas mediante la selección meticulosa de acabados, iluminación y mobiliario. Cada espacio es diseñado para reflejar la identidad y el estilo de vida de nuestros clientes.',
      number: '03',
      image: 'https://images.griddo.udit.es/f/jpg/w/1280/h/768/blog-diseno-de-interiores-271025-8a64a90f-23c3-4146-95f6-4916d98a9b26'
    },
    {
      title: 'Restauración de Fachadas',
      description: 'Elevamos la presencia exterior de su edificio mediante intervenciones de diseño que combinan estética moderna con soluciones técnicas avanzadas para la protección contra el clima.',
      number: '04',
      image: 'https://www.solucionesespeciales.net/wp-content/uploads/Reparacion-de-la-fachada-exterior.jpg'
    },
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* Page Header */}
      <div className="pt-24 md:pt-32 pb-16 md:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="block text-[#D49800] font-sans font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-6">
              Nuestra Experiencia
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-[#0a0a0a] leading-tight mb-8 text-balance">
              Servicios de <br />
              <span className="font-medium">Excelencia.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed text-balance">
              Soluciones integrales de diseño y construcción, ejecutadas con precisión milimétrica y un compromiso inquebrantable con la calidad.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Detailed List */}
      <div className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-24 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="overflow-hidden relative group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <span className="block text-5xl md:text-6xl font-display font-light text-gray-200 mb-4 md:mb-6">
                    {service.number}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-medium text-[#0a0a0a] mb-4 md:mb-6 text-balance">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed mb-8 md:mb-10">
                    {service.description}
                  </p>
                  <Link to="/contacto" className="inline-flex items-center text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0a0a0a] group">
                    Solicitar Información
                    <span className="ml-4 w-12 h-[1px] bg-[#0a0a0a] group-hover:w-20 transition-all duration-500"></span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#0a0a0a] py-24 md:py-32 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light mb-6 md:mb-8 text-balance">¿Tiene un proyecto en mente?</h2>
          <p className="text-gray-400 font-light mb-10 md:mb-12 text-base md:text-lg text-balance">
            Permítanos transformar su visión en una obra maestra arquitectónica.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm font-medium tracking-widest text-[#0a0a0a] uppercase bg-white hover:bg-[#D49800] hover:text-white transition-colors duration-500"
          >
            Contactar al equipo
          </Link>
        </div>
      </div>
    </div>
  );
}
