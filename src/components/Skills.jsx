import { SKILL_GROUPS } from '../data/profile';
import { useLanguage } from '../i18n/useLanguage';
import { Icon } from './ui/Icon';
import Reveal from './ui/Reveal';
import Section, { SectionHeading } from './ui/Section';

export default function Skills() {
  const { t } = useLanguage();
  const skills = t.skills;

  return (
    <Section id="habilidades" className="border-y border-base-300/60 bg-base-200/40">
      <SectionHeading eyebrow={skills.eyebrow} title={skills.title} subtitle={skills.subtitle} />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {SKILL_GROUPS.map((group, index) => (
          <Reveal
            key={group.id}
            delay={index * 60}
            className="rounded-2xl border border-base-300 bg-base-100 p-6 transition-colors duration-300 hover:border-primary/30"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon name={group.icon} className="size-5" />
              </span>
              <h3 className="text-lg font-semibold">{skills.groups[group.id]}</h3>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-base-300 bg-base-200/60 px-3 py-1 text-sm text-base-content/80 transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal
        delay={120}
        className="mt-4 flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
            <Icon name="languages" className="size-5" />
          </span>
          <h3 className="text-lg font-semibold">{skills.groups.languages}</h3>
        </div>

        <ul className="flex flex-wrap gap-2">
          {skills.languagesItems.map((language) => (
            <li
              key={language.name}
              className="rounded-full border border-base-300 bg-base-200/60 px-3 py-1 text-sm text-base-content/80"
            >
              {language.name}
              <span className="text-base-content/60"> · {language.level}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
