import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Mensaje enviado. Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* Page Header */}
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="block text-[#D49800] font-sans font-medium tracking-[0.3em] uppercase text-xs mb-6">
              Inicie su Proyecto
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-light text-[#0a0a0a] leading-tight mb-8">
              Hablemos de su <br />
              <span className="font-medium">Visión.</span>
            </h1>
            <p className="text-xl text-gray-500 font-light max-w-2xl">
              Nuestro equipo de expertos está listo para asesorarle y convertir sus ideas en una realidad tangible.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-display font-medium text-[#0a0a0a] mb-12">
                Información de Contacto
              </h2>
              
              <div className="space-y-10">
                <div className="flex items-start group">
                  <div className="mt-1 mr-6">
                    <MapPin className="w-6 h-6 text-[#D49800] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase text-[#0a0a0a] mb-2">Oficina Principal</h3>
                    <p className="text-gray-500 font-light leading-relaxed">
                      Ciudad de Panamá, Panamá<br />
                      (Atención con cita previa)
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="mt-1 mr-6">
                    <Phone className="w-6 h-6 text-[#D49800] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase text-[#0a0a0a] mb-2">Teléfono</h3>
                    <p className="text-gray-500 font-light leading-relaxed">
                      +507 6902-1220<br />
                      <span className="text-xs text-gray-400">Disponible en WhatsApp</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="mt-1 mr-6">
                    <Mail className="w-6 h-6 text-[#D49800] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase text-[#0a0a0a] mb-2">Correo Electrónico</h3>
                    <p className="text-gray-500 font-light leading-relaxed">
                      Remodardiz23@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="mt-1 mr-6">
                    <Clock className="w-6 h-6 text-[#D49800] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase text-[#0a0a0a] mb-2">Horario de Atención</h3>
                    <p className="text-gray-500 font-light leading-relaxed">
                      Lunes - Viernes: 8:00 AM - 6:00 PM<br />
                      Sábados: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="bg-white p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                <h2 className="text-2xl font-display font-medium text-[#0a0a0a] mb-8">
                  Solicitar Cotización
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Nombre Completo</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#D49800] transition-colors font-light"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Teléfono</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#D49800] transition-colors font-light"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Correo Electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#D49800] transition-colors font-light"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Servicio de Interés</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#D49800] transition-colors font-light text-gray-700"
                      required
                    >
                      <option value="">Seleccione un servicio</option>
                      <option value="construccion">Construcción Residencial</option>
                      <option value="remodelacion">Remodelación General</option>
                      <option value="cocina">Diseño de Interiores</option>
                      <option value="fachada">Restauración de Fachadas</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Detalles del Proyecto</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#D49800] transition-colors font-light resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0a0a0a] text-white py-5 text-sm font-bold tracking-widest uppercase hover:bg-[#D49800] transition-colors duration-500"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
