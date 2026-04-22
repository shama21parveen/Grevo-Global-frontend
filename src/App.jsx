import { FeatureCard } from './components/FeatureCard';
import { ImageServiceCard } from './components/ImageServiceCard';
import { Navbar } from './components/Navbar';
import { SectionTitle } from './components/SectionTitle';
import heroPattern from './assets/1.png';
import statsPattern from './assets/22.png';
import {
  highlightServices,
  lifecycleSolutions,
  stats,
} from './data/content';

function App() {
  return (
    <div
      className="min-h-screen bg-white font-sans text-brand-ink antialiased"
      id="top"
    >
      <div className="min-h-screen overflow-hidden bg-white">
        <Navbar />

        <main>
          <section
            className="relative isolate overflow-hidden bg-brand-green"
            id="services"
          >
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-10"
              src={heroPattern}
              alt=""
              aria-hidden="true"
            />
            <div className="relative mx-auto flex min-h-[251px] max-w-[980px] flex-col items-center justify-center px-5 py-12 text-center text-white">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-[42px]">
                Our Services
              </h1>
              <p className="mt-3 max-w-[898px] text-base font-light leading-relaxed sm:text-[18px]">
                Delivering advanced shredder and recycling machinery designed
                for performance, durability, and environmental responsibility.
              </p>
            </div>
          </section>

          <section className="bg-white px-4 py-12 sm:px-6 lg:px-[34px] lg:pb-5">
            <SectionTitle
              eyebrow="Our Services"
              title="Advanced Engineering & Plant"
              accent="Solutions"
              description="Delivering reliable industrial machinery, waste processing systems, and integrated biomass plant solutions for sustainable operations."
            />
            <div
              className="mx-auto grid max-w-[1188px] gap-7 lg:grid-cols-3"
              id="about"
            >
              {highlightServices.map((service) => (
                <ImageServiceCard key={service.title} {...service} />
              ))}
            </div>
          </section>

          <section className="bg-white px-4 pb-11 pt-3 sm:px-6 lg:px-[34px]">
            <SectionTitle
              className="max-w-[1048px]"
              eyebrow="What We Offer"
              title="Delivering Complete Plant"
              accent="Lifecycle Solutions"
              description="Delivering engineering services, integrated plant solutions, and reliable industrial support for efficient and sustainable operations."
            />
            <div
              className="mx-auto grid max-w-[1150px] gap-7 md:grid-cols-2 xl:grid-cols-3"
              id="products"
            >
              {lifecycleSolutions.map((solution, index) => (
                <FeatureCard
                  key={solution.title}
                  className={
                    index === lifecycleSolutions.length - 1
                      ? 'md:col-span-2 md:mx-auto md:max-w-[420px] xl:col-span-1 xl:col-start-2 xl:max-w-none'
                      : ''
                  }
                  {...solution}
                />
              ))}
            </div>
          </section>
        </main>

        <footer
          className="relative overflow-hidden bg-[linear-gradient(90deg,#0a121a_0%,#26456c_24%,#325a8e_50%,#26456c_76%,#0a121a_100%)] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-6 lg:py-20"
          id="contact"
        >
          <img
            className="pointer-events-none absolute -left-20 top-0 h-[180px] w-[180px] opacity-70 mix-blend-screen grayscale brightness-105 contrast-90 sm:-top-5 sm:h-[260px] sm:w-[260px] lg:-top-[124px] lg:left-[-111px] lg:h-[391px] lg:w-[391px] lg:opacity-45"
            src={statsPattern}
            alt=""
            aria-hidden="true"
          />
          <img
            className="pointer-events-none absolute right-[-80px] top-0 h-[180px] w-[180px] scale-x-[-1] opacity-70 mix-blend-screen grayscale brightness-105 contrast-90 sm:-top-5 sm:h-[260px] sm:w-[260px] lg:-top-[124px] lg:right-[-111px] lg:h-[391px] lg:w-[391px] lg:opacity-45"
            src={statsPattern}
            alt=""
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-[972px] grid-cols-1 justify-items-center gap-8 text-center sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10 lg:grid-cols-4 lg:items-start lg:justify-items-start lg:gap-[72px] lg:text-left">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-w-[120px] flex-col gap-1"
              >
                <strong className="text-[42px] font-semibold leading-none sm:text-5xl lg:text-[58px]">
                  {stat.value}
                </strong>
                <span className="text-sm font-normal text-brand-blue">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <div id="blogs" />
        </footer>
      </div>
    </div>
  );
}

export default App;
