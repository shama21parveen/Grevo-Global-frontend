export function SectionTitle({
  eyebrow,
  title,
  accent,
  description,
  className = '',
}) {
  return (
    <div
      className={`mx-auto mb-6 grid max-w-[1003px] justify-items-center text-center ${className}`.trim()}
    >
      <div className="mb-3 inline-flex min-h-[27px] w-full max-w-[263px] items-center justify-center gap-[7px]">
        <span className="h-px flex-1 bg-brand-accent" />
        <p className="m-0 text-sm font-semibold uppercase tracking-[0.16em] text-brand-accent sm:text-base">
          {eyebrow}
        </p>
        <span className="h-px flex-1 bg-brand-accent" />
      </div>
      <h2 className="max-w-[915px] text-[28px] font-semibold leading-tight tracking-tight text-brand-ink sm:text-[34px] lg:text-[40px]">
        {title} <em className="font-semibold italic text-brand-accent">{accent}</em>
      </h2>
      <p className="mt-3 max-w-[1003px] text-sm leading-6 text-brand-muted sm:text-[15px]">
        {description}
      </p>
    </div>
  );
}
