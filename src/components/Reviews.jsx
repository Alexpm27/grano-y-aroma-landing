import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      name: 'María Gómez',
      review: 'El mejor espresso de Tuxtla. El ambiente es increíble y el personal súper atento. ¡Volveré pronto!',
      rating: 5,
    },
    {
      name: 'Carlos Ramírez',
      review: 'Perfecto para trabajar o relajarse con amigos. El wifi es rápido y los cappuccinos son deliciosos.',
      rating: 5,
    },
    {
      name: 'Andrea López',
      review: 'Un aroma que te atrapa desde que entras. Los postres son espectaculares, especialmente el cheesecake.',
      rating: 5,
    },
    {
      name: 'Roberto Hernández',
      review: 'Excelente calidad en cada taza. Me encanta el cold brew y los smoothies son fresquísimos.',
      rating: 5,
    },
    {
      name: 'Sofía Martínez',
      review: 'El lugar perfecto para disfrutar un buen café. La decoración es muy bonita y acogedora.',
      rating: 5,
    },
    {
      name: 'Diego Torres',
      review: 'Las hamburguesas están deliciosas y las porciones son generosas. Muy recomendable para comer.',
      rating: 5,
    },
    {
      name: 'Valentina Cruz',
      review: '¡Me fascina este lugar! Los frappés son los mejores que he probado y siempre hay variedad.',
      rating: 5,
    },
    {
      name: 'Fernando Ruiz',
      review: 'Gran variedad en el menú y precios justos. El café de olla es auténtico y delicioso.',
      rating: 5,
    },
    {
      name: 'Lucía Mendoza',
      review: 'Los desayunos son espectaculares. Los hot cakes con frutas son mi favorito. ¡Altamente recomendado!',
      rating: 5,
    },
    {
      name: 'Miguel Ángel Vega',
      review: 'Atención de primera y productos de calidad. Es mi lugar favorito para reuniones de trabajo.',
      rating: 5,
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000); // Cambia cada 6 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentReview((prev) => 
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentReview(index);
  };

  return (
    <section
      id="opiniones"
      ref={ref}
      className="py-20 bg-gradient-to-b from-dark to-brown/10"
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
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-light text-lg font-opensans">
            Experiencias que hablan por sí solas
          </p>
        </motion.div>

        {/* Carrusel de Reviews */}
        <div className="relative">
          {/* Reviews Grid con Carrusel */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {/* Mostrar 3 reviews a la vez */}
                {[0, 1, 2].map((offset) => {
                  const index = (currentReview + offset) % reviews.length;
                  const review = reviews[index];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: offset * 0.2 }}
                      className="bg-dark/50 backdrop-blur-sm p-8 rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/10"
                    >
                      {/* Stars */}
                      <div className="flex mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="text-gold text-xl" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-light text-lg mb-6 italic font-opensans">
                        "{review.review}"
                      </p>

                      {/* Reviewer Name */}
                      <p className="text-gold font-semibold font-playfair">
                        — {review.name}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles de Navegación */}
          <div className="flex items-center justify-center mt-10 gap-4">
            {/* Botón Anterior */}
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full bg-dark/80 border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
              aria-label="Reseñas anteriores"
            >
              <svg
                className="w-6 h-6 text-gold group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Indicadores (Dots) - mostrar grupos de 3 */}
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index * 3)}
                  className={`transition-all duration-300 rounded-full ${
                    Math.floor(currentReview / 3) === index
                      ? 'w-8 h-3 bg-gold'
                      : 'w-3 h-3 bg-gold/30 hover:bg-gold/50'
                  }`}
                  aria-label={`Ir al grupo ${index + 1}`}
                />
              ))}
            </div>

            {/* Botón Siguiente */}
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-dark/80 border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
              aria-label="Reseñas siguientes"
            >
              <svg
                className="w-6 h-6 text-gold group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
