import { PROFILE } from '../data/profile';
import { useLanguage } from '../i18n/useLanguage';
import { BrandIcon, Icon } from './ui/Icon';
import Reveal from './ui/Reveal';

export default function Hero() {
  const { t, lang } = useLanguage();
  const hero = t.hero;

  return (
    <section id="inicio" className="relative isolate overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-28 right-[-12%] -z-10 size-[30rem] rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[-18%] -z-10 size-[26rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-success">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              {hero.availability}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 font-mono text-sm text-base-content/60">{hero.greeting}</p>
            <h1 className="mt-2 text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
              {hero.firstName}
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                {hero.lastName}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 font-mono text-sm font-medium text-primary sm:text-base">
              {hero.role}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-base-content/70 sm:text-lg">
              {hero.summary}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-content shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
              >
                {hero.ctaProjects}
                <Icon name="arrow-right" className="size-4" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-base-300 bg-base-100/70 px-6 py-3 text-sm font-semibold text-base-content transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                {hero.ctaContact}
              </a>
              <a
                href={PROFILE.cv[lang]}
                download
                className="group inline-flex items-center gap-2 px-2 py-2 text-sm font-medium text-base-content/60 transition-colors hover:text-primary"
              >
                <Icon
                  name="download"
                  className="size-4 transition-transform group-hover:translate-y-0.5"
                />
                {hero.ctaCv}
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-base-content/60">
              <span className="inline-flex items-center gap-2">
                <Icon name="map-pin" className="size-4 text-primary" />
                {hero.location}
              </span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Icon name="mail" className="size-4 text-primary" />
                <span className="break-all">{PROFILE.email}</span>
              </a>
              <span className="flex items-center gap-1">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub (${t.a11y.external})`}
                  className="grid size-8 place-items-center rounded-full border border-base-300 bg-base-100/60 text-base-content/60 transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <BrandIcon name="github" className="size-4" />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn (${t.a11y.external})`}
                  className="grid size-8 place-items-center rounded-full border border-base-300 bg-base-100/60 text-base-content/60 transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <BrandIcon name="linkedin" className="size-4" />
                </a>
              </span>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal delay={200} className="relative" aria-hidden="true">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/25 via-transparent to-accent/25 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-base-300 bg-base-200/80 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-2 border-b border-base-300/80 px-4 py-3">
                <span className="size-3 rounded-full bg-error/80" />
                <span className="size-3 rounded-full bg-warning/80" />
                <span className="size-3 rounded-full bg-success/80" />
                <span className="ml-2 font-mono text-xs text-base-content/50">
                  {hero.code.file}
                </span>
                <Icon name="code" className="ml-auto size-4 text-base-content/30" />
              </div>
              <div className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:p-6 sm:text-sm">
                <pre className="min-w-max">
                  <code>
                    <span className="text-base-content/40">{`// ${hero.code.comment}`}</span>
                    {'\n'}
                    <span className="text-primary">const</span>{' '}
                    <span className="text-base-content">jhonatan</span>{' '}
                    <span className="text-base-content/50">=</span> {'{'}
                    {'\n  '}
                    <span className="text-primary">name</span>
                    <span className="text-base-content/50">:</span>{' '}
                    <span className="text-success">&quot;{hero.code.name}&quot;</span>
                    <span className="text-base-content/50">,</span>
                    {'\n  '}
                    <span className="text-primary">role</span>
                    <span className="text-base-content/50">:</span>{' '}
                    <span className="text-success">&quot;{hero.code.role}&quot;</span>
                    <span className="text-base-content/50">,</span>
                    {'\n  '}
                    <span className="text-primary">focus</span>
                    <span className="text-base-content/50">:</span>{' '}
                    <span className="text-success">&quot;{hero.code.focus}&quot;</span>
                    <span className="text-base-content/50">,</span>
                    {'\n  '}
                    <span className="text-primary">stack</span>
                    <span className="text-base-content/50">:</span>{' '}
                    <span className="text-success">&quot;{hero.code.stack}&quot;</span>
                    <span className="text-base-content/50">,</span>
                    {'\n  '}
                    <span className="text-primary">location</span>
                    <span className="text-base-content/50">:</span>{' '}
                    <span className="text-success">&quot;{hero.code.location}&quot;</span>
                    <span className="text-base-content/50">,</span>
                    {'\n  '}
                    <span className="text-primary">available</span>
                    <span className="text-base-content/50">:</span>{' '}
                    <span className="text-warning">{hero.code.available}</span>
                    <span className="text-base-content/50">,</span>
                    {'\n'}
                    {'}'}
                    <span className="text-base-content/50">;</span>
                  </code>
                </pre>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={300}
            className="mt-6 grid grid-cols-3 divide-x divide-base-300 rounded-2xl border border-base-300 bg-base-100/70 p-4 backdrop-blur"
          >
            {hero.stats.map((stat) => (
              <div key={stat.label} className="px-2 text-center">
                <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wide text-base-content/65 sm:text-[11px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
