import { Icon } from './Icons';

export function FeatureCard({
  title,
  description,
  items,
  icon,
  className = '',
}) {
  return (
    <article
      className={`rounded-[10px] bg-white px-4 py-5 text-center shadow-feature-card ring-1 ring-black/5 ${className}`.trim()}
    >
      <div className="mx-auto mb-4 grid h-[60px] w-[60px] place-items-center rounded-full bg-brand-success text-white">
        <Icon name={icon} className="h-[26px] w-[26px]" />
      </div>
      <h3 className="mx-auto max-w-[344px] text-[18px] font-semibold leading-snug text-brand-ink">
        {title}
      </h3>
      <p className="mx-auto mt-2 max-w-[344px] text-[15px] leading-6 text-brand-muted-light">
        {description}
      </p>
      <ul className="mx-auto mt-4 grid max-w-[344px] gap-3 text-left">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-[15px] font-medium leading-snug text-brand-ink"
          >
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-success text-white">
              <Icon name="check" className="h-[11px] w-[11px]" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
