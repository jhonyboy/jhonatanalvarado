import { EXPERIENCE } from '../data/profile';
import { useLanguage } from '../i18n/useLanguage';
import { Icon } from './ui/Icon';
import Reveal from './ui/Reveal';
import Section, { SectionHeading } from './ui/Section';

export default function Experience() {
  const { t } = useLanguage();
  const experience = t.experience;

  return (
    <Section id="experiencia">
      <SectionHeading
        eyebrow={experience.eyebrow}
        title={experience.title}
        subtitle={experience.subtitle}
      />

      <ol className="mt-10 space-y-6 border-l border-base-300 pl-6 sm:pl-8">
        {EXPERIENCE.map((job) => {
          const copy = experience.jobs[job.id];

          return (
            <li key={job.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[30px] top-7 size-3 rounded-full bg-primary ring-4 ring-base-100 sm:-left-[38px]"
              />

              <Reveal className="rounded-2xl border border-base-300 bg-base-100 p-6 transition-colors duration-300 hover:border-primary/30 sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold sm:text-xl">{job.company}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{copy.role}</p>
                  </div>

                  <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-base-300 bg-base-200/60 px-3 py-1 font-mono text-[11px] text-base-content/65">
                    <Icon name="calendar" className="size-3.5" />
                    {job.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {copy.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2.5 text-sm leading-relaxed text-base-content/70"
                    >
                      <Icon name="check" className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-base-300 bg-base-200/60 px-2.5 py-1 font-mono text-[11px] text-base-content/65"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
