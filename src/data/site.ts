// src/data/site.ts
// Cambiar un dato aquí lo cambia en toda la web.
export const SITE = {
  name: 'Tueste Lento',
  tagline: 'Cafeteras, molinillos y todo lo que mejora tu taza',
  description:
    'Reseñas sinceras, comparativas y guías para elegir tu cafetera, tu molinillo y tus accesorios de café.',
  lang: 'es',
  locale: 'es_ES',
  url: 'https://example.com', // el dominio real lo ponemos en el Paso 16
  email: 'hola@example.com',
};

// Menú principal. Lo usan la cabecera y el pie de página.
export const NAV = [
  { href: '/cafeteras/', label: 'Cafeteras' },
  { href: '/molinillos/', label: 'Molinillos' },
  { href: '/accesorios/', label: 'Accesorios' },
  { href: '/cafe-en-grano/', label: 'Café en grano' },
  { href: '/comparativas/', label: 'Comparativas' },
  { href: '/guias/', label: 'Guías' },
];

// Enlaces legales y de información. Van en el pie.
export const LEGAL = [
  { href: '/sobre-mi/', label: 'Sobre mí' },
  { href: '/aviso-de-afiliacion/', label: 'Aviso de afiliación' },
  { href: '/contacto/', label: 'Contacto' },
  { href: '/privacidad/', label: 'Privacidad' },
  { href: '/cookies/', label: 'Cookies' },
];
