const siteDomain = process.env.CURRENT_SITE_DOMAIN || 'faromarina.org';

export const siteConfig = {
  name: 'Faro Marina Guide',
  domain: siteDomain,
  baseUrl: `https://${siteDomain}`,
  slug: 'faro-marina',
  locales: ['pt', 'en', 'zh', 'de', 'es', 'fr', 'nl'] as const,
};

export const ogLocale: Record<string, string> = {
  pt: 'pt_PT',
  en: 'en_US',
  zh: 'zh_CN',
  de: 'de_DE',
  es: 'es_ES',
  fr: 'fr_FR',
  nl: 'nl_NL',
};
