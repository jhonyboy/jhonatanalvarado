import { useEffect, useMemo, useState } from 'react';
import { LanguageContext } from './context';
import { en } from './en';
import { es } from './es';

const DICTIONARIES = { es, en };
const STORAGE_KEY = 'portfolio-lang';

function getInitialLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') {
      return stored;
    }
  } catch {
    // localStorage puede no estar disponible (modo privado, por ejemplo)
  }

  return window.navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);
  const t = DICTIONARIES[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', t.meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    ogTitle?.setAttribute('content', t.meta.title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    ogDescription?.setAttribute('content', t.meta.description);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    twitterTitle?.setAttribute('content', t.meta.title);

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    twitterDescription?.setAttribute('content', t.meta.description);

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // La preferencia no persiste, pero el sitio sigue funcionando
    }
  }, [lang, t]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
