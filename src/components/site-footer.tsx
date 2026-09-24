import { site } from "@/content/site";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          {site.name}. {site.location}.
        </p>
        <SocialLinks className="-ml-2.5 sm:ml-0" />
      </div>
    </footer>
  );
}
