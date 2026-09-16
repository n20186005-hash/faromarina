import pt from './pt.json';
import en from './en.json';
import zh from './zh.json';
import de from './de.json';
import es from './es.json';
import fr from './fr.json';
import nl from './nl.json';

export const defaultLang = 'pt';
export const languagesList = ['pt', 'en', 'zh', 'de', 'es', 'fr', 'nl'] as const;

export const languages: Record<string, string> = {
  pt: 'Português',
  en: 'English',
  zh: '中文',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  nl: 'Nederlands',
};

const ui: Record<string, any> = { pt, en, zh, de, es, fr, nl };

export function getLangFromUrl(url: URL): string {
  const seg = url.pathname.split('/').filter(Boolean);
  const lang = seg[0];
  return (languagesList as readonly string[]).includes(lang) ? lang : defaultLang;
}

export function getI18n(url: URL) {
  const lang = getLangFromUrl(url);
  const messages = ui[lang];
  const t = (key: string): string => {
    const found = key
      .split('.')
      .reduce<any>((o, i) => (o == null ? undefined : o[i]), messages);
    return found ?? '';
  };
  return { lang, messages, t };
}

export function buildAlternates(path = ''): Record<string, string> {
  const siteDomain = process.env.CURRENT_SITE_DOMAIN || 'faromarina.org';
  const base = `https://${siteDomain}`;
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  const mk = (l: string) => `${base}/${l}/${clean ? clean + '/' : ''}`;
  const out: Record<string, string> = {};
  for (const l of languagesList) out[l] = mk(l);
  out.xDefault = mk('pt');
  return out;
}

export function htmlLangAttr(lang: string): string {
  if (lang === 'zh') return 'zh-CN';
  if (lang === 'pt') return 'pt-PT';
  return lang;
}
