import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaFacebookF, FaWhatsapp, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-20 bg-dark"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4 font-playfair">
            Ven a disfrutar con nosotros
          </h2>
          <p className="text-light text-lg font-opensans">
            Te esperamos en el corazón de Tuxtla Gutiérrez para que vivas la experiencia del café chiapaneco
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-gold text-2xl mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gold mb-2 font-playfair">Dirección</h3>
                  <p className="text-light font-opensans">
                    Av. Central Poniente #245<br />
                    Col. Centro, Tuxtla Gutiérrez, Chiapas
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <FaClock className="text-gold text-2xl mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gold mb-2 font-playfair">Horarios</h3>
                  <p className="text-light font-opensans">
                    Lunes a Domingo<br />
                    8:00 a.m. – 10:00 p.m.
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-gold text-xl" />
                  <a href="tel:+529615554321" className="text-light hover:text-gold transition-colors font-opensans">
                    (961) 555 4321
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-gold text-xl" />
                  <a href="mailto:contacto@granoyaroma.com" className="text-light hover:text-gold transition-colors font-opensans">
                    contacto@granoyaroma.com
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <FaInstagram className="text-gold text-xl" />
                  <a href="https://instagram.com/granoyaroma.mx" target="_blank" rel="noopener noreferrer" className="text-light hover:text-gold transition-colors font-opensans">
                    @granoyaroma.mx
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <FaFacebookF className="text-gold text-xl" />
                  <a href="https://facebook.com/granoyaromacafe" target="_blank" rel="noopener noreferrer" className="text-light hover:text-gold transition-colors font-opensans">
                    Grano y Aroma Café
                  </a>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/5219615554321?text=Hola!%20Quiero%20hacer%20un%20pedido%20en%20Grano%20y%20Aroma."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 mt-4"
              >
                <FaWhatsapp className="text-xl" />
                <span className="font-opensans">Haz tu pedido por WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="h-96 md:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15291.234567890123!2d-93.1173705!3d16.7516474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8fe9b0e8d75%3A0x4c24f9e5f0d8e9a2!2sCentro%2C%20Tuxtla%20Guti%C3%A9rrez%2C%20Chis.!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-2xl"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
