import { useEffect, useRef, useState } from 'react';
import { PROFILE } from '../data/profile';
import { useLanguage } from '../i18n/useLanguage';
import { BrandIcon, Icon } from './ui/Icon';
import Reveal from './ui/Reveal';
import Section, { SectionHeading } from './ui/Section';

function ContactRow({ href, icon, brand, label, value, external = false }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-center gap-4 rounded-xl border border-base-300 bg-base-100/70 px-4 py-3 transition-colors hover:border-primary/40 hover:bg-base-100"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
        {brand ? (
          <BrandIcon name={brand} className="size-4" />
        ) : (
          <Icon name={icon} className="size-4" />
        )}
      </span>

      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[10px] uppercase tracking-wider text-base-content/60">
          {label}
        </span>
        <span className="block break-all text-sm font-medium">{value}</span>
      </span>

      <Icon
        name="arrow-up-right"
        className="size-4 shrink-0 text-base-content/30 transition-colors group-hover:text-primary"
      />
    </a>
  );
}

function CopyEmailButton() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-base-300 bg-base-100/70 px-5 py-3 text-sm font-semibold text-base-content transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
      >
        <Icon name={copied ? 'check' : 'copy'} className="size-4" />
        {copied ? t.contact.copied : t.contact.copy}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? t.a11y.emailCopied : ''}
      </span>
    </>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const contact = t.contact;

  return (
    <Section id="contacto" className="pb-12">
      <Reveal className="relative overflow-hidden rounded-3xl border border-base-300 bg-base-200/50 p-6 sm:p-10 lg:p-12">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-28 -left-20 size-72 rounded-full bg-accent/10 blur-3xl"
        />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow={contact.eyebrow}
              title={contact.title}
              subtitle={contact.subtitle}
            />

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-content shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
              >
                {contact.send}
                <Icon name="mail" className="size-4" />
              </a>
              <CopyEmailButton />
            </div>
          </div>

          <div className="grid gap-3">
            <ContactRow
              href={`mailto:${PROFILE.email}`}
              icon="mail"
              label={contact.labels.email}
              value={PROFILE.email}
            />
            <ContactRow
              href={PROFILE.phoneHref}
              icon="phone"
              label={contact.labels.phone}
              value={PROFILE.phoneDisplay}
            />
            <ContactRow
              href={PROFILE.linkedin}
              brand="linkedin"
              label={contact.labels.social}
              value="LinkedIn"
              external
            />
            <ContactRow
              href={PROFILE.github}
              brand="github"
              label={contact.labels.social}
              value="GitHub"
              external
            />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
