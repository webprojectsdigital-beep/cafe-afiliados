// src/data/home.ts
// DATOS PROVISIONALES. En los pasos 7 y 9 los reemplazamos
// por contenido real leído desde archivos Markdown.

export const CATEGORIAS = [
  {
    href: '/cafeteras/',
    nombre: 'Cafeteras',
    texto: 'Espresso, italianas, de goteo y superautomáticas.',
  },
  {
    href: '/molinillos/',
    nombre: 'Molinillos',
    texto: 'Manuales y eléctricos. De aquí sale buena parte del sabor.',
  },
  {
    href: '/accesorios/',
    nombre: 'Accesorios',
    texto: 'Básculas, jarras, tampers y todo lo que ayuda a afinar.',
  },
  {
    href: '/cafe-en-grano/',
    nombre: 'Café en grano',
    texto: 'Para elegir qué comprar y no acabar con un paquete que no te gusta.',
  },
];

export const DESTACADOS = [
  {
    href: '/resenas/ejemplo-1/',
    nombre: 'Producto de ejemplo 1',
    categoria: 'Cafeteras',
    resumen: 'Texto de relleno. Aquí irá una frase corta sobre para quién es el producto.',
    etiqueta: 'Mejor calidad-precio',
  },
  {
    href: '/resenas/ejemplo-2/',
    nombre: 'Producto de ejemplo 2',
    categoria: 'Molinillos',
    resumen: 'Texto de relleno. Aquí irá una frase corta sobre para quién es el producto.',
    etiqueta: 'Nuestra elección',
  },
  {
    href: '/resenas/ejemplo-3/',
    nombre: 'Producto de ejemplo 3',
    categoria: 'Accesorios',
    resumen: 'Texto de relleno. Aquí irá una frase corta sobre para quién es el producto.',
    etiqueta: 'Para empezar',
  },
];

export const GUIAS = [
  {
    href: '/guias/ejemplo-1/',
    titulo: 'Cómo elegir una cafetera espresso sin equivocarte',
    extracto: 'Lo que importa de verdad al comparar modelos y lo que es puro marketing.',
    fecha: '2026-10-01',
  },
  {
    href: '/guias/ejemplo-2/',
    titulo: 'Por qué el molinillo importa más que la cafetera',
    extracto: 'Una molienda pareja cambia la taza más que gastar el doble en la máquina.',
    fecha: '2026-09-24',
  },
  {
    href: '/guias/ejemplo-3/',
    titulo: 'Cómo limpiar y descalcificar tu cafetera',
    extracto: 'Cada cuánto hacerlo y qué productos usar para no estropear nada.',
    fecha: '2026-09-17',
  },
];
