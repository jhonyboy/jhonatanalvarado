import { useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-theme';
const THEME_NAMES = {
  light: 'portfolio-light',
  dark: 'portfolio-dark',
};

function getInitialTheme() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  } catch {
    // localStorage puede no estar disponible (modo privado, por ejemplo)
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const isDark = theme === 'dark';

    document.documentElement.dataset.theme = isDark ? THEME_NAMES.dark : THEME_NAMES.light;
    document.documentElement.style.colorScheme = theme;

    const themeColor = document.querySelector('meta[name="theme-color"]');
    themeColor?.setAttribute('content', isDark ? '#0b1120' : '#ffffff');

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // La preferencia no persiste, pero el sitio sigue funcionando
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}
