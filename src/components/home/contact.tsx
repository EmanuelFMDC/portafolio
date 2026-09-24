import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/ssr";
import { bio, site } from "@/content/site";

export function Contact() {
  const channels = [
    site.email && {
      href: `mailto:${site.email}`,
      label: site.email,
      Icon: Envelope,
      external: false,
    },
    site.links.linkedin && {
      href: site.links.linkedin,
      label: "LinkedIn",
      Icon: LinkedinLogo,
      external: true,
    },
    site.links.github && {
      href: site.links.github,
      label: "GitHub",
      Icon: GithubLogo,
      external: true,
    },
  ].filter(Boolean) as {
    href: string;
    label: string;
    Icon: typeof Envelope;
    external: boolean;
  }[];

  return (
    <section aria-labelledby="sobre-mi" className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-16 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <h2 id="sobre-mi" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Sobre mí
          </h2>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted">
            {bio}
          </p>
        </div>

        <div className="reveal">
          <h2 id="contacto" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Contacto
          </h2>
          <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-muted">
            Busco un puesto de frontend React y TypeScript. {site.location}.
          </p>
          {channels.length > 0 && (
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {channels.map(({ href, label, Icon, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external && { target: "_blank", rel: "noreferrer" })}
                    className="group flex items-center gap-4 py-4 text-fg"
                  >
                    <Icon size={20} aria-hidden className="text-faint transition-colors group-hover:text-accent" />
                    <span className="underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-line-strong">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
