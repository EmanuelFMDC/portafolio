import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/ssr";
import { getProject, projects } from "@/content/projects";
import { ImageSlot } from "@/components/image-slot";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { default: Case } = await import(`@/content/projects/${slug}.mdx`);

  const links = [
    project.demo && { href: project.demo, label: "Ver demo" },
    project.repo && { href: project.repo, label: "Ver código" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6 md:pt-14">
      <Link
        href="/#proyectos"
        className="press -ml-3 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-muted hover:text-fg"
      >
        <ArrowLeft size={16} aria-hidden />
        Proyectos
      </Link>

      <header className="mt-10">
        <h1 className="enter text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
          {project.title}
        </h1>
        <p
          className="enter mt-5 text-lg leading-relaxed text-muted"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          {project.summary}
        </p>

        <dl
          className="enter mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-[auto_1fr] sm:gap-x-16"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          <div>
            <dt className="text-sm text-faint">Rol</dt>
            <dd className="mt-1">{project.role}</dd>
          </div>
          {project.stack.length > 0 && (
            <div>
              <dt className="text-sm text-faint">Stack</dt>
              <dd className="mt-1">{project.stack.join(", ")}</dd>
            </div>
          )}
        </dl>

        {links.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="press inline-flex h-10 items-center gap-1.5 rounded-full border border-line-strong px-4 text-sm font-medium hover:border-fg"
                >
                  {l.label}
                  <ArrowUpRight size={16} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <ImageSlot
        src={project.image}
        alt={`Captura de ${project.title}`}
        size={project.imageSize}
        priority
        sizes="(min-width: 768px) 720px, 100vw"
        className="mt-12"
      />

      <div className="mt-14">
        <Case />
      </div>
    </article>
  );
}
