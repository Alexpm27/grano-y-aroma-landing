import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { getAssetPath } from '../utils/paths';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        {/* Logo and Name */}
        <div className="text-center mb-6">
          <img
            src={getAssetPath('assets/logo/WhatsApp Image 2025-10-26 at 21.48.59.jpeg')}
            alt="Grano y Aroma Logo"
            className="h-16 w-16 object-contain mx-auto mb-4 rounded-full"
          />
          <h3 className="text-2xl font-bold text-gold font-playfair">
            Grano y Aroma
          </h3>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://instagram.com/granoyaroma.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-light transition-colors duration-300 transform hover:scale-110"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            href="https://facebook.com/granoyaromacafe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-light transition-colors duration-300 transform hover:scale-110"
          >
            <FaFacebookF className="text-3xl" />
          </a>
          <a
            href="https://wa.me/5219615554321?text=Hola!%20Quiero%20hacer%20un%20pedido%20en%20Grano%20y%20Aroma."
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-light transition-colors duration-300 transform hover:scale-110"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-light/70 font-opensans">
          <p className="text-sm">
            © 2025 Grano y Aroma — Tuxtla Gutiérrez, Chiapas.
          </p>
          <p className="text-sm mt-2">
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
