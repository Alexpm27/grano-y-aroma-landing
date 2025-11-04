# 📂 Estructura del Proyecto - Grano y Aroma

## Árbol de Directorios

```
grano-y-aroma-landing/
├── public/
│   └── assets/
│       ├── logo/           # Logo de la cafetería
│       ├── banner/         # Imagen del hero section
│       ├── fachada/        # Imagen de la fachada
│       ├── interior/       # Imágenes del interior
│       ├── galeria/        # 4 imágenes para la galería
│       └── menu/           # Imágenes de productos del menú
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Barra de navegación con scroll effect
│   │   ├── Hero.jsx        # Banner principal con CTA
│   │   ├── About.jsx       # Sección sobre nosotros
│   │   ├── Menu.jsx        # Menú de productos con precios
│   │   ├── Gallery.jsx     # Galería de imágenes 2x2
│   │   ├── Reviews.jsx     # Testimonios de clientes
│   │   ├── Contact.jsx     # Contacto, ubicación y mapa
│   │   ├── Footer.jsx      # Footer con redes sociales
│   │   └── ScrollToTop.jsx # Botón flotante para volver arriba
│   ├── App.jsx             # Componente principal que integra todo
│   ├── main.jsx            # Entry point de React
│   └── index.css           # Estilos globales con Tailwind
├── index.html              # HTML principal con meta tags SEO
├── package.json            # Dependencias del proyecto
└── README.md              # Documentación del proyecto
```

## 🧩 Componentes Detallados

### 1. Navbar.jsx
- **Funcionalidad**: Navegación fija con efecto blur al hacer scroll
- **Estado**: Detecta scroll para cambiar estilos
- **Características**:
  - Logo + nombre de la cafetería
  - Menú responsive (desktop/mobile)
  - Links con scroll suave a cada sección
  - Animación de entrada con Framer Motion

### 2. Hero.jsx
- **Funcionalidad**: Banner principal full-screen
- **Características**:
  - Imagen de fondo con overlay oscuro
  - Título principal animado
  - Eslogan de la cafetería
  - Botón CTA "Visítanos hoy"
  - Indicador de scroll animado

### 3. About.jsx
- **Funcionalidad**: Presentación de la cafetería
- **Layout**: Grid 2 columnas (texto + imagen)
- **Características**:
  - Texto descriptivo sobre la cafetería
  - Imagen del interior
  - Botón para ir al menú
  - Efectos decorativos con formas geométricas
  - Animaciones al entrar en viewport

### 4. Menu.jsx
- **Funcionalidad**: Muestra productos y precios
- **Layout**: 3 columnas de categorías
- **Categorías**:
  - Cafés Espresso (5 productos)
  - Bebidas Frías (3 productos)
  - Postres (3 productos)
- **Características**:
  - Cards con hover effects
  - 2 imágenes destacadas al final
  - Hover zoom en imágenes

### 5. Gallery.jsx
- **Funcionalidad**: Galería de fotos del ambiente
- **Layout**: Grid 2x2 responsive
- **Características**:
  - 4 imágenes del ambiente
  - Efecto zoom al hacer hover
  - Overlay con descripción
  - Lazy loading de imágenes

### 6. Reviews.jsx
- **Funcionalidad**: Testimonios de clientes
- **Layout**: 3 tarjetas en grid
- **Características**:
  - 3 opiniones con nombre
  - Estrellas de rating (5/5)
  - Cards con hover effects
  - Animación escalonada al entrar

### 7. Contact.jsx
- **Funcionalidad**: Información de contacto y ubicación
- **Layout**: 2 columnas (info + mapa)
- **Información incluida**:
  - Dirección física
  - Horarios de atención
  - Teléfono
  - Email
  - Instagram y Facebook
  - Botón de WhatsApp para pedidos
  - Mapa de Google Maps embebido

### 8. Footer.jsx
- **Funcionalidad**: Footer con información básica
- **Características**:
  - Logo centrado
  - Links a redes sociales (Instagram, Facebook, WhatsApp)
  - Copyright y ubicación
  - Iconos con hover effects

### 9. ScrollToTop.jsx
- **Funcionalidad**: Botón flotante para volver arriba
- **Características**:
  - Aparece después de 300px de scroll
  - Animación de entrada/salida
  - Posicionado en esquina inferior derecha
  - Scroll suave al hacer clic

## 🎨 Paleta de Colores

```css
--color-dark: #1B1B1B    /* Fondo principal */
--color-gold: #C7A86D    /* Acentos y detalles */
--color-light: #F7F7F7   /* Texto principal */
--color-brown: #5C4033   /* Color secundario */
```

## 🔤 Tipografía

- **Títulos**: Playfair Display (serif elegante)
- **Texto**: Open Sans (sans-serif moderna)

## 📦 Dependencias Principales

```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "framer-motion": "^x.x.x",
  "react-icons": "^x.x.x",
  "tailwindcss": "^4.1.16"
}
```

## 🚀 Animaciones

Todas las secciones incluyen:
- **Fade-in**: Aparición suave al entrar en viewport
- **Slide-up**: Deslizamiento desde abajo
- **Hover effects**: Zoom, cambio de color, sombras
- **Scroll smooth**: Navegación suave entre secciones

## 📱 Responsive Design

- **Mobile**: < 768px (stack vertical, menú hamburguesa)
- **Tablet**: 768px - 1024px (2 columnas)
- **Desktop**: > 1024px (layouts completos)

## 🔍 SEO

Meta tags incluidos en `index.html`:
- Título optimizado
- Descripción atractiva
- Palabras clave relevantes
- Favicon personalizado
- Open Graph (futuro)

## 🌐 Links Importantes

- **Desarrollo**: http://localhost:5173/
- **Instagram**: @granoyaroma.mx
- **Facebook**: Grano y Aroma Café
- **WhatsApp**: +52 961 555 4321
