import type { APIRoute } from 'astro';
import { siteConfig } from '../config';

export const GET: APIRoute = () => {
  const { baseUrl, locales } = siteConfig;
  const xDefault = `${baseUrl}/pt/`;
  const legalPages = ['privacy-policy', 'terms-of-service', 'cookie-settings'];
  const paths = locales.flatMap((l) => [`${l}/`, ...legalPages.map((p) => `${l}/${p}/`)]);
  const urls = paths
    .map((p) => {
      const loc = `${baseUrl}/${p}`;
      const alts = locales
        .map((a) => `      <xhtml:link rel="alternate" hreflang="${a}" href="${baseUrl}/${a}/"/>`)
        .join('\n');
      return `  <url>\n    <loc>${loc}</loc>\n${alts}\n      <xhtml:link rel="alternate" hreflang="x-default" href="${xDefault}"/>\n  </url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
