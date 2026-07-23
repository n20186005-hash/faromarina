import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const siteDomain = process.env.CURRENT_SITE_DOMAIN || 'faromarina.org';

export default defineConfig({
  site: `https://${siteDomain}`,
  output: 'static',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'zh'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
