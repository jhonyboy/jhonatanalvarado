import { PROFILE } from '../data/profile';
import { useLanguage } from '../i18n/useLanguage';
import { Icon } from './ui/Icon';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-base-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent font-mono text-[11px] font-bold text-primary-content">
            JA
          </span>
          <p className="text-xs leading-relaxed text-base-content/65">
            © {year} {PROFILE.name}. {t.footer.rights}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-center text-xs text-base-content/60 sm:text-right">{t.footer.built}</p>
          <a
            href="#inicio"
            aria-label={t.a11y.backToTop}
            title={t.a11y.backToTop}
            className="grid size-8 shrink-0 place-items-center rounded-full border border-base-300 text-base-content/50 transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Icon name="arrow-up" className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
