import { Logo } from './Logo';
import { navigationItems } from '../data/content';

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-white/95 shadow-header backdrop-blur">
      <div className="mx-auto flex min-h-[90px] w-full max-w-[1240px] flex-col items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:px-7">
        <Logo />
        <div className="flex w-full flex-col items-center gap-3 lg:w-auto lg:flex-row lg:gap-5">
          <nav
            className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-black sm:gap-x-6 sm:text-base lg:w-auto lg:flex-nowrap lg:justify-end lg:gap-[37px] lg:text-[18px]"
            aria-label="Primary"
          >
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors duration-200 hover:text-brand-success-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-success-hover/40 ${
                  item.label === 'Services'
                    ? 'font-semibold text-brand-accent-strong'
                    : 'font-normal text-black'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-brand-cta px-5 py-2 text-base font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-cta-hover sm:text-[18px]"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}
