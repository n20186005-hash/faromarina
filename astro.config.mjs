import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const siteDomain = process.env.CURRENT_SITE_DOMAIN || 'faromarina.org';

export default defineConfig({
  site: `https://${siteDomain}`,
  output: 'static',
  // Force trailing-slash URLs everywhere (links, sitemap, build output) so the
  // canonical form matches what Google indexes. Cloudflare Pages then 301s the
  // bare /en -> /en/ (see public/_redirects) to consolidate ranking signals.
  trailingSlash: 'always',
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
