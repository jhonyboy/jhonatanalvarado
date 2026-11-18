const base = import.meta.env.BASE_URL;

export const PROFILE = {
  name: 'Jhonatan Alvarado Godinez',
  shortName: 'Jhonatan Alvarado',
  email: 'alvaradogodinez@gmail.com',
  phone: '6631083003',
  phoneDisplay: '663 108 30 03',
  phoneHref: 'tel:+526631083003',
  location: 'Tijuana, B.C., México',
  linkedin: 'https://www.linkedin.com/in/jhonatan-alvarado-godinez-351a9318a/',
  github: 'https://github.com/jhonyboy',
  cv: {
    es: `${base}cv/Jhonatan-Alvarado-CV-ES.pdf`,
    en: `${base}cv/Jhonatan-Alvarado-CV-EN.pdf`,
  },
};

export const NAV_IDS = ['inicio', 'sobre-mi', 'habilidades', 'experiencia', 'proyectos', 'contacto'];

export const SKILL_GROUPS = [
  {
    id: 'backend',
    icon: 'server',
    items: ['NestJS', 'Node.js', 'TypeScript', 'Java', 'Spring Boot', 'Hibernate / JPA', 'PHP', 'C#'],
  },
  {
    id: 'frontend',
    icon: 'layout',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'databases',
    icon: 'database',
    items: ['MariaDB', 'SQL Server', 'MySQL', 'TypeORM'],
  },
  {
    id: 'tools',
    icon: 'sliders',
    items: ['Git', 'GitHub', 'Jira', 'Scrum', 'APIs REST'],
  },
];

export const EXPERIENCE = [
  {
    id: 'octane',
    company: 'Octane Systems',
    period: 'Oct 2025 — Feb 2026',
    tags: ['Full Stack', 'API REST', 'SQL', 'Scrum'],
  },
  {
    id: 'protec',
    company: 'Promotora Tecnológica Protec',
    period: '2023 — 2025',
    tags: ['Node.js', 'TypeScript', 'PHP', 'SQL Server'],
  },
  {
    id: 'dynamic',
    company: 'Dynamic Network',
    period: '2018 — 2023',
    tags: ['Java', 'HTML/CSS', 'MySQL'],
  },
];

export const PROJECTS = [
  {
    id: 'armenta',
    year: '2026',
    url: 'https://serviciosaduanalesarmenta.com/',
    mark: 'SA',
    domain: 'serviciosaduanalesarmenta.com',
    tone: 'primary',
    status: 'live',
    tags: [],
  },
  {
    id: 'futbol',
    year: '2026',
    url: 'https://futbolmexicano.lat/',
    mark: 'FM',
    domain: 'futbolmexicano.lat',
    tone: 'accent',
    status: 'live',
    tags: [],
  },
  {
    id: 'mobile',
    year: '2026',
    url: null,
    mark: 'RN',
    domain: 'React Native',
    tone: 'secondary',
    status: 'wip',
    tags: ['React Native'],
  },
  {
    id: 'cddtij',
    year: '2026',
    url: 'https://cddtij.com/',
    mark: 'CD',
    domain: 'cddtij.com',
    tone: 'neutral',
    status: 'live',
    tags: ['PHP', 'JavaScript'],
  },
];

export const EDUCATION = {
  school: 'Instituto Tecnológico de Tijuana',
  period: '2012 — 2018',
};
