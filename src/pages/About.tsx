import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* Page Header */}
      <div className="pt-24 md:pt-32 pb-16 md:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="block text-[#D49800] font-sans font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-6">
              Nuestra Historia
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-[#0a0a0a] leading-tight mb-8 text-balance">
              Construyendo <br />
              <span className="font-medium">Legados.</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Main Content - Editorial Layout */}
      <div className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <h2 className="text-3xl md:text-4xl font-display font-light text-[#0a0a0a] leading-tight mb-8 text-balance">
                Más de una década redefiniendo el estándar de la construcción en Panamá.
              </h2>
              <div className="w-12 h-[1px] bg-[#D49800] mb-8"></div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="block text-4xl md:text-5xl font-display font-medium text-[#0a0a0a] mb-2">10+</span>
                  <span className="text-xs sm:text-sm tracking-widest text-gray-500 uppercase">Años de Exp.</span>
                </div>
                <div>
                  <span className="block text-4xl md:text-5xl font-display font-medium text-[#0a0a0a] mb-2">500+</span>
                  <span className="text-xs sm:text-sm tracking-widest text-gray-500 uppercase">Proyectos</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-7 space-y-12 mt-12 lg:mt-0"
            >
              <img 
                src="https://images.unsplash.com/photo-1541888086925-0c13d4f47852?q=80&w=1200&auto=format&fit=crop" 
                alt="Equipo de construcción" 
                className="w-full h-[400px] md:h-[600px] object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              
              <div className="prose prose-lg text-gray-500 font-light leading-relaxed max-w-none">
                <p className="text-xl md:text-2xl text-[#0a0a0a] font-display font-light leading-relaxed mb-8 text-balance">
                  "Nuestra filosofía es simple: no aceptamos compromisos cuando se trata de calidad. Cada detalle importa, cada acabado cuenta una historia."
                </p>
                <p className="text-base md:text-lg">
                  Dardiz Remodelaciones nació con una visión clara: elevar el nivel de la construcción y el diseño de interiores en Panamá. Entendemos que un espacio no es solo un conjunto de paredes, sino el escenario donde se desarrolla la vida y los negocios.
                </p>
                <p className="text-base md:text-lg">
                  Nuestro equipo multidisciplinario combina la precisión técnica de la ingeniería con la sensibilidad estética del diseño de interiores. Esta sinergia nos permite abordar proyectos de alta complejidad, garantizando resultados que no solo son visualmente impactantes, sino estructuralmente impecables.
                </p>
                <p className="text-base md:text-lg">
                  Seleccionamos rigurosamente nuestros materiales y colaboramos exclusivamente con artesanos y proveedores que comparten nuestra obsesión por la perfección. Desde la concepción inicial hasta la entrega final, mantenemos una comunicación transparente y un control de calidad exhaustivo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-gray-200">
                <div>
                  <h3 className="text-xl font-display font-medium text-[#0a0a0a] mb-4">Misión</h3>
                  <p className="text-gray-500 font-light text-base md:text-lg">Transformar espacios mediante soluciones arquitectónicas y constructivas de excelencia, superando las expectativas de nuestros clientes en cada detalle.</p>
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-[#0a0a0a] mb-4">Visión</h3>
                  <p className="text-gray-500 font-light text-base md:text-lg">Ser la firma referente en Panamá para proyectos de remodelación y construcción de alto perfil, reconocidos por nuestra innovación y calidad intransigente.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
