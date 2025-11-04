import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { getAssetPath } from '../utils/paths';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const images = [
    {
      src: getAssetPath('assets/galeria/Gemini_Generated_Image_2dpvg72dpvg72dpv.png'),
      alt: 'Ambiente Grano y Aroma 1',
    },
    {
      src: getAssetPath('assets/galeria/Gemini_Generated_Image_2dpvg72dpvg72dpv-2.png'),
      alt: 'Ambiente Grano y Aroma 2',
    },
    {
      src: getAssetPath('assets/galeria/Gemini_Generated_Image_9mbdya9mbdya9mbd.png'),
      alt: 'Ambiente Grano y Aroma 3',
    },
    {
      src: getAssetPath('assets/galeria/Gemini_Generated_Image_9mbdya9mbdya9mbd-2.png'),
      alt: 'Ambiente Grano y Aroma 4',
    },
  ];

  return (
    <section
      id="galeria"
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
            Ambiente Grano y Aroma
          </h2>
          <p className="text-light text-lg font-opensans">
            Un espacio diseñado para inspirar y disfrutar
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-light">
                  <p className="font-opensans text-sm">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
