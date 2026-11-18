export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const centered = align === 'center';

  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p
        className={`mb-3 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary ${
          centered ? 'justify-center' : ''
        }`}
      >
        {!centered && <span className="h-px w-6 bg-primary" aria-hidden="true" />}
        {eyebrow}
        {centered && <span className="h-px w-6 bg-primary" aria-hidden="true" />}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-base-content/70 sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
