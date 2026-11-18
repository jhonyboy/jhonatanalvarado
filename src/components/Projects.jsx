import { PROFILE, PROJECTS } from '../data/profile';
import { useLanguage } from '../i18n/useLanguage';
import { Icon } from './ui/Icon';
import Reveal from './ui/Reveal';
import Section, { SectionHeading } from './ui/Section';

const COVER_TONES = {
  primary: 'from-primary/20 via-base-200 to-base-100',
  accent: 'from-accent/20 via-base-200 to-base-100',
  secondary: 'from-secondary/15 via-base-200 to-base-100',
  neutral: 'from-warning/15 via-base-200 to-base-100',
};

export default function Projects() {
  const { t } = useLanguage();
  const projects = t.projects;

  return (
    <Section id="proyectos">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow={projects.eyebrow}
          title={projects.title}
          subtitle={projects.subtitle}
        />

        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-base-300 bg-base-100/70 px-4 py-2 text-sm font-medium text-base-content/70 transition-colors hover:border-primary/40 hover:text-primary"
        >
          <Icon name="code" className="size-4" />
          GitHub
          <Icon name="arrow-up-right" className="size-3.5" />
        </a>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {PROJECTS.map((project, index) => {
          const copy = projects.items[project.id];
          const Wrapper = project.url ? 'a' : 'div';
          const linkProps = project.url
            ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
            : {};
          const isLive = project.status === 'live';

          return (
            <Reveal key={project.id} delay={index * 70} className="group h-full min-w-0">
              <Wrapper
                {...linkProps}
                className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div
                  className={`relative flex aspect-[16/7] items-end overflow-hidden bg-gradient-to-br p-5 ${COVER_TONES[project.tone]}`}
                >
                  <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 -top-10 select-none font-display text-[7.5rem] font-extrabold leading-none text-base-content/10"
                  >
                    {project.mark}
                  </span>

                  <div className="relative flex w-full items-end justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-base-content/60">
                        {copy.type}
                      </p>
                      <p className="mt-1 truncate font-mono text-xs text-base-content/65">
                        {project.domain}
                      </p>
                    </div>
                    <span
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                        isLive
                          ? 'border-success/25 bg-success/10 text-success'
                          : 'border-warning/25 bg-warning/10 text-warning'
                      }`}
                    >
                      <span
                        className={`size-1.5 rounded-full ${isLive ? 'bg-success' : 'bg-warning'}`}
                      />
                      {isLive ? projects.live : projects.wip}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold">{copy.title}</h3>
                    <span className="shrink-0 font-mono text-xs text-base-content/55">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-base-content/65">
                    {copy.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <ul className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-base-300 bg-base-200/60 px-2.5 py-1 font-mono text-[11px] text-base-content/65"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    {project.url ? (
                      <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary">
                        {projects.visit}
                        <Icon
                          name="arrow-up-right"
                          className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    ) : (
                      <span className="inline-flex shrink-0 items-center gap-1 text-xs text-base-content/50">
                        <Icon name="terminal" className="size-3.5" />
                        {projects.wip}
                      </span>
                    )}
                  </div>
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
