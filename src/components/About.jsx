import workspace from '../assets/workspace.jpg';
import { useLanguage } from '../i18n/useLanguage';
import Section, { SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';

export default function About() {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <Section id="sobre-mi">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />

          <div className="mt-6 space-y-4 text-base leading-relaxed text-base-content/70">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-8 grid gap-3 sm:grid-cols-2">
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-base-300 bg-base-200/50 px-4 py-3"
              >
                <dt className="font-mono text-[10px] uppercase tracking-wider text-base-content/60">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Reveal delay={120} className="relative">
          <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-200">
            <img
              src={workspace}
              alt={about.imageAlt}
              loading="lazy"
              decoding="async"
              width="1600"
              height="1067"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 rounded-2xl border border-base-300 bg-base-100/95 px-4 py-3 shadow-xl backdrop-blur">
            <p className="font-display text-2xl font-bold text-primary">{about.badge.value}</p>
            <p className="text-xs text-base-content/65">{about.badge.label}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
