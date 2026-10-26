// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  // Cambiaremos esto por tu dominio real en el Paso 16.
  // Lo necesitan el sitemap y las URLs canónicas.
  site: "https://example.com",

  // Cada página será una carpeta con su index.html (/guias/molinillos/index.html).
  // Funciona sin configuración extra en Apache, que es lo que usa Banahosting.
  build: {
    format: "directory",
  },

  // URLs siempre con barra final. Evita contenido duplicado
  // (/guias y /guias/ contando como dos páginas distintas).
  trailingSlash: "always",
});
