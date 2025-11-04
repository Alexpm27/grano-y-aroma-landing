import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { getAssetPath } from '../utils/paths';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="sobre-nosotros"
      ref={ref}
      className="py-20 bg-dark"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6 font-playfair">
              Sobre Nosotros
            </h2>
            <p className="text-light text-lg mb-6 leading-relaxed font-opensans">
              En Grano y Aroma celebramos el arte del café chiapaneco. Cada taza es
              el resultado de un proceso artesanal cuidadosamente preparado por
              nuestros baristas.
            </p>
            <p className="text-light text-lg mb-8 leading-relaxed font-opensans">
              Nuestro espacio combina diseño moderno y calidez, ideal para conversar,
              trabajar o simplemente disfrutar del aroma perfecto.
            </p>
            <a
              href="#menu"
              className="inline-block bg-gold text-dark px-6 py-3 rounded-full font-semibold hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 font-opensans"
            >
              Conoce nuestro menú
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={getAssetPath('assets/interior/Gemini_Generated_Image_wvcyxvwvcyxvwvcy.png')}
              alt="Interior de Grano y Aroma"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brown/20 rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
