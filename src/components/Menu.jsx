import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { getAssetPath } from '../utils/paths';

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentCategory, setCurrentCategory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % menuCategories.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentCategory((prev) => 
      prev === 0 ? menuCategories.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentCategory((prev) => (prev + 1) % menuCategories.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentCategory(index);
  };

  const menuCategories = [
    {
      title: '☕ CAFÉS CALIENTES',
      items: [
        { name: 'Espresso', price: '$35' },
        { name: 'Americano', price: '$38' },
        { name: 'Café de Olla', price: '$40' },
        { name: 'Cappuccino', price: '$45' },
        { name: 'Latte', price: '$48' },
        { name: 'Vainilla Latte', price: '$52' },
        { name: 'Caramel Latte', price: '$55' },
        { name: 'Mocca', price: '$52' },
        { name: 'Chocolate Caliente', price: '$50' },
        { name: 'Flat White', price: '$50' },
        { name: 'Macchiato', price: '$45' },
        { name: 'Café Vienés (con crema batida)', price: '$58' },
        { name: 'Té Caliente (chai, frutos rojos, menta, manzanilla)', price: '$38' },
      ],
    },
    {
      title: '🧊 CAFÉS FRÍOS',
      items: [
        { name: 'Iced Americano', price: '$45' },
        { name: 'Iced Latte', price: '$52' },
        { name: 'Iced Caramel', price: '$55' },
        { name: 'Iced Vainilla', price: '$55' },
        { name: 'Frappé de Café', price: '$65' },
        { name: 'Frappé de Oreo', price: '$70' },
        { name: 'Frappé de Moka', price: '$68' },
        { name: 'Cold Brew', price: '$58' },
        { name: 'Café Tonic', price: '$65' },
        { name: 'Affogato (helado + espresso)', price: '$60' },
      ],
    },
    {
      title: '🥤 BEBIDAS FRÍAS',
      items: [
        { name: 'Refrescos', price: '$25' },
        { name: 'Aguas naturales o de sabor', price: '$28' },
        { name: 'Jugos naturales', price: '$35' },
        { name: 'Smoothies (fresa, mango, plátano, frutos rojos)', price: '$55' },
        { name: 'Batidos con leche vegetal', price: '$58' },
        { name: 'Malteadas (vainilla, chocolate, fresa, galleta)', price: '$62' },
      ],
    },
    {
      title: '🍔 COMIDAS & SNACKS',
      items: [
        { name: 'Hamburguesa Clásica', price: '$85' },
        { name: 'Hamburguesa BBQ', price: '$95' },
        { name: 'Hamburguesa Doble', price: '$110' },
        { name: 'Hamburguesa Vegetariana', price: '$95' },
        { name: 'Hot Dog Especial', price: '$65' },
        { name: 'Baguette Caprese', price: '$75' },
        { name: 'Baguette de Pollo', price: '$78' },
        { name: 'Sandwich Club', price: '$72' },
        { name: 'Panini de Pavo y Queso', price: '$75' },
        { name: 'Papas a la Francesa', price: '$40' },
        { name: 'Aros de Cebolla', price: '$45' },
        { name: 'Nachos con Queso', price: '$55' },
        { name: 'Nuggets de Pollo', price: '$60' },
      ],
    },
    {
      title: '🍳 DESAYUNOS',
      items: [
        { name: 'Chilaquiles Verdes o Rojos', price: '$75' },
        { name: 'Omelette de Queso y Jamón', price: '$70' },
        { name: 'Hot Cakes con Miel', price: '$65' },
        { name: 'Bowl de Yogurt con Frutas y Granola', price: '$60' },
        { name: 'Tostadas Francesas con Frutas', price: '$68' },
        { name: 'Sandwich de Desayuno', price: '$72' },
      ],
    },
    {
      title: '🧇 POSTRES',
      items: [
        { name: 'Crepa de Nutella', price: '$60' },
        { name: 'Crepa de Fresa con Crema', price: '$58' },
        { name: 'Crepa de Cajeta con Nuez', price: '$60' },
        { name: 'Waffle con Miel y Frutas', price: '$65' },
        { name: 'Waffle de Chocolate', price: '$68' },
        { name: 'Brownie con Helado', price: '$70' },
        { name: 'Cheesecake', price: '$75' },
        { name: 'Pastel del Día', price: '$70' },
        { name: 'Pan de Plátano Casero', price: '$45' },
        { name: 'Galletas Artesanales', price: '$35' },
      ],
    },
    {
      title: '🍦 HELADOS',
      items: [
        { name: 'Vaso o Cono (1 bola)', price: '$35' },
        { name: 'Doble (2 bolas)', price: '$45' },
        { name: 'Banana Split', price: '$75' },
        { name: 'Sundae de Chocolate o Caramelo', price: '$60' },
        { name: 'Malteada con Helado', price: '$65' },
        { name: 'Helado con Brownie', price: '$70' },
        { name: 'Copa Grano & Aroma (3 bolas + topping especial)', price: '$80' },
      ],
    },
    {
      title: '🥐 PANES & REPOSTERÍA',
      items: [
        { name: 'Croissant de Mantequilla', price: '$35' },
        { name: 'Croissant de Chocolate', price: '$40' },
        { name: 'Concha Artesanal', price: '$30' },
        { name: 'Pan de Elote', price: '$40' },
        { name: 'Muffin de Arándano o Chocolate', price: '$38' },
        { name: 'Roles de Canela', price: '$42' },
        { name: 'Pan Integral con Mermelada', price: '$38' },
        { name: 'Pan de Nuez o Zanahoria', price: '$45' },
      ],
    },
    {
      title: '🍹 BEBIDAS DE TEMPORADA',
      items: [
        { name: 'Pumpkin Spice Latte', price: '$65' },
        { name: 'Chocolate Caliente con Malvaviscos', price: '$55' },
        { name: 'Frappé de Menta', price: '$70' },
        { name: 'Pink Latte', price: '$58' },
        { name: 'Cold Matcha Latte', price: '$60' },
      ],
    },
  ];

  return (
    <section
      id="menu"
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
            Sabores que inspiran
          </h2>
          <p className="text-light text-lg font-opensans">
            Descubre nuestro menú completo: cafés, bebidas, comidas, postres y más
          </p>
        </motion.div>

        {/* Carrusel de Categorías */}
        <div className="relative max-w-3xl mx-auto mb-12">
          {/* Contenedor del Carrusel con altura fija reducida */}
          <div className="relative overflow-hidden rounded-2xl h-[380px] md:h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-gradient-to-br from-dark via-brown/30 to-dark backdrop-blur-sm p-5 md:p-6 border border-gold/30 shadow-2xl h-full overflow-y-auto scrollbar-thin"
              >
                {/* Título de la Categoría */}
                <div className="text-center mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gold mb-1.5 font-playfair">
                    {menuCategories[currentCategory].title}
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
                </div>

                {/* Items del Menú */}
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 max-w-2xl mx-auto">
                  {menuCategories[currentCategory].items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex justify-between items-center text-light font-opensans py-1 border-b border-gold/10 hover:border-gold/30 transition-all group"
                    >
                      <span className="text-xs md:text-sm group-hover:text-gold transition-colors">
                        {item.name}
                      </span>
                      <span className="text-gold font-bold text-sm md:text-base ml-3 whitespace-nowrap">
                        {item.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles de Navegación */}
          <div className="flex items-center justify-center mt-8 gap-4">
            {/* Botón Anterior */}
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full bg-dark/80 border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
              aria-label="Categoría anterior"
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

            {/* Indicadores (Dots) */}
            <div className="flex gap-2">
              {menuCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentCategory
                      ? 'w-8 h-3 bg-gold'
                      : 'w-3 h-3 bg-gold/30 hover:bg-gold/50'
                  }`}
                  aria-label={`Ir a categoría ${index + 1}`}
                />
              ))}
            </div>

            {/* Botón Siguiente */}
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-dark/80 border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
              aria-label="Categoría siguiente"
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

          {/* Contador de Categorías */}
          <div className="text-center mt-2">
            <span className="text-gold/60 text-sm font-opensans">
              {currentCategory + 1} / {menuCategories.length}
            </span>
          </div>
        </div>

        {/* Featured Images */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative overflow-hidden rounded-lg shadow-2xl group"
          >
            <img
              src={getAssetPath('assets/menu/Gemini_Generated_Image_z7y49fz7y49fz7y4.png')}
              alt="Café especial"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative overflow-hidden rounded-lg shadow-2xl group"
          >
            <img
              src={getAssetPath('assets/menu/Gemini_Generated_Image_z7y49fz7y49fz7y4-2.png')}
              alt="Bebida fría"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
