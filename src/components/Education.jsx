import { EDUCATION } from '../data/profile';
import { useLanguage } from '../i18n/useLanguage';
import { Icon } from './ui/Icon';
import Reveal from './ui/Reveal';
import Section, { SectionHeading } from './ui/Section';

export default function Education() {
  const { t } = useLanguage();
  const education = t.education;

  return (
    <Section
      id="educacion"
      className="border-y border-base-300/60 bg-base-200/40 py-14 sm:py-16"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionHeading eyebrow={education.eyebrow} title={education.title} />

        <Reveal
          delay={100}
          className="flex items-start gap-4 rounded-2xl border border-base-300 bg-base-100 p-6 sm:gap-5 sm:p-7"
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
            <Icon name="graduation-cap" className="size-5" />
          </span>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
              {education.type}
            </p>
            <h3 className="mt-1 text-lg font-semibold sm:text-xl">{education.degree}</h3>
            <p className="mt-1 text-sm text-base-content/70">{EDUCATION.school}</p>
            <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-base-content/60">
              <Icon name="calendar" className="size-3.5" />
              {EDUCATION.period}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-base-content/60">
              {education.description}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
