import { useEffect, useState } from 'react';
import { NAV_IDS } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../i18n/useLanguage';
import { Icon } from './ui/Icon';

const LANGUAGES = ['es', 'en'];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection(NAV_IDS);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const themeLabel = theme === 'dark' ? t.a11y.toLight : t.a11y.toDark;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-base-300/70 bg-base-100/85 shadow-sm backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label={t.a11y.mainNav}
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-5 sm:px-8"
      >
        <a href="#inicio" className="group inline-flex items-center gap-2.5" aria-label={t.nav.inicio}>
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent font-mono text-sm font-bold text-primary-content shadow-md shadow-primary/20 transition-transform duration-300 group-hover:-rotate-6">
            JA
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            jhonatan<span className="text-primary">.alvarado</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_IDS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative block rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active === id
                    ? 'text-primary'
                    : 'text-base-content/65 hover:text-base-content'
                }`}
              >
                {t.nav[id]}
                <span
                  className={`absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-primary transition-opacity ${
                    active === id ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label={t.a11y.language}
            className="flex items-center rounded-full border border-base-300 bg-base-200/70 p-0.5 text-[11px] font-semibold"
          >
            {LANGUAGES.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors ${
                  lang === code
                    ? 'bg-base-100 text-primary shadow-sm'
                    : 'text-base-content/55 hover:text-base-content'
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="grid size-9 place-items-center rounded-full border border-base-300 bg-base-200/70 text-base-content/70 transition-colors hover:text-primary"
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="size-4" />
          </button>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            className="grid size-9 place-items-center rounded-full border border-base-300 bg-base-200/70 text-base-content/70 transition-colors hover:text-primary lg:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} className="size-4" />
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-base-300/60 bg-base-100/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <nav aria-label={t.a11y.mobileNav} className="mx-auto w-full max-w-6xl px-5 py-3 sm:px-8">
          <ul className="grid gap-1">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    active === id
                      ? 'bg-primary/10 text-primary'
                      : 'text-base-content/70 hover:bg-base-200'
                  }`}
                >
                  {t.nav[id]}
                  <Icon name="arrow-up-right" className="size-4 opacity-40" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
