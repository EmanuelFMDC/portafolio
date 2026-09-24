import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react/ssr";
import { site } from "@/content/site";

// Solo muestra los perfiles que ya tienen URL en site.ts.
export function SocialLinks({ className = "" }: { className?: string }) {
  const items = [
    { href: site.links.github, label: "GitHub", Icon: GithubLogo },
    { href: site.links.linkedin, label: "LinkedIn", Icon: LinkedinLogo },
  ].filter((item) => item.href);

  if (items.length === 0) return null;

  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="press grid size-10 place-items-center rounded-full text-muted hover:bg-surface hover:text-fg"
          >
            <Icon size={20} />
          </a>
        </li>
      ))}
    </ul>
  );
}
