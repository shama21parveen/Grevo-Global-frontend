export function ImageServiceCard({
  title,
  imageSrc,
  imageAlt,
}) {
  return (
    <article className="group mx-auto w-full max-w-[374px] overflow-hidden rounded-[10px_72px_10px_10px] bg-white shadow-service-card ring-1 ring-red-100/70">
      <div className="relative h-[220px] overflow-hidden rounded-t-[10px] rounded-tr-[72px] bg-white sm:h-[246px]">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div className="flex min-h-[132px] items-center justify-center px-4 py-6 text-center">
        <h3 className="max-w-[344px] text-[18px] font-semibold leading-[1.35] text-brand-ink">
          {title}
        </h3>
      </div>
    </article>
  );
}
