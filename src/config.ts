const siteDomain = process.env.CURRENT_SITE_DOMAIN || 'faromarina.org';

export const siteConfig = {
  name: 'Faro Marina Guide',
  domain: siteDomain,
  baseUrl: `https://${siteDomain}`,
  slug: 'faro-marina',
  locales: ['pt', 'en', 'zh'] as const,
};

export const ogLocale: Record<string, string> = {
  pt: 'pt_PT',
  en: 'en_US',
  zh: 'zh_CN',
};
