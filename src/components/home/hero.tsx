import { ArrowRight, DownloadSimple, MapPin } from "@phosphor-icons/react/ssr";
import { facts, site } from "@/content/site";
import { SocialLinks } from "@/components/social-links";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 md:pt-24 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
      <div>
        <p className="enter text-muted" style={{ "--i": 0 } as React.CSSProperties}>
          {site.name}
        </p>
        <h1
          className="enter mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          <span className="block">{site.role}</span>
          <span className="block text-muted">{site.stackLine}</span>
        </h1>
        <p
          className="enter mt-6 max-w-[46ch] text-lg leading-relaxed text-muted"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          {site.tagline}
        </p>
        <div
          className="enter mt-10 flex flex-wrap items-center gap-3"
          style={{ "--i": 3 } as React.CSSProperties}
        >
          <a
            href={site.cvPath}
            download
            className="press inline-flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-bg hover:bg-fg/85"
          >
            <DownloadSimple size={18} />
            Descargar CV
          </a>
          <a
            href="#contacto"
            className="press inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-sm font-medium hover:border-fg"
          >
            Contacto
            <ArrowRight size={16} />
          </a>
          <SocialLinks className="ml-1" />
        </div>
      </div>

      <dl
        className="enter grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-1"
        style={{ "--i": 4 } as React.CSSProperties}
      >
        {facts.map((fact) => (
          <div key={fact.label} className="flex items-baseline gap-4 bg-bg px-6 py-5">
            <dt className="order-2 text-sm leading-snug text-muted">{fact.label}</dt>
            <dd className="order-1 font-mono text-3xl font-medium tracking-tight tabular-nums text-accent">
              {fact.value}
            </dd>
          </div>
        ))}
        <div className="flex items-center gap-3 bg-bg px-6 py-5 text-sm text-muted sm:col-span-3 lg:col-span-1">
          <dt className="sr-only">Ubicación</dt>
          <MapPin size={18} aria-hidden className="shrink-0 text-faint" />
          <dd>{site.location}</dd>
        </div>
      </dl>
    </section>
  );
}
