import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { projects, type Project } from "@/content/projects";
import { freelanceSites } from "@/content/site";
import { ImageSlot } from "@/components/image-slot";
import { SectionHeading } from "@/components/home/section-heading";

function StackList({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-faint">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="reveal group relative">
      <ImageSlot
        src={project.image}
        alt={`Captura de ${project.title}`}
        sizes="(min-width: 1024px) 560px, 100vw"
        className="transition-transform duration-500 ease-[var(--ease-out)] group-hover:-translate-y-1"
      />
      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            <Link
              href={`/proyectos/${project.slug}`}
              className="after:absolute after:inset-0"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 max-w-[52ch] leading-relaxed text-muted">
            {project.summary}
          </p>
        </div>
        <ArrowUpRight
          size={22}
          aria-hidden
          className="mt-1 shrink-0 text-faint transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>
      <div className="mt-4">
        <StackList items={project.stack} />
      </div>
    </article>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <article className="reveal group relative flex flex-col justify-between gap-8 rounded-2xl border border-line p-6 transition-colors hover:border-line-strong sm:p-8">
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight">
            <Link
              href={`/proyectos/${project.slug}`}
              className="after:absolute after:inset-0 after:rounded-2xl"
            >
              {project.title}
            </Link>
          </h3>
          <ArrowUpRight
            size={20}
            aria-hidden
            className="mt-0.5 shrink-0 text-faint transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </div>
        <p className="mt-2 leading-relaxed text-muted">{project.summary}</p>
      </div>
      <StackList items={project.stack} />
    </article>
  );
}

export function Projects() {
  const [first, second, ...rest] = projects;

  return (
    <section
      aria-labelledby="proyectos"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28"
    >
      <SectionHeading
        id="proyectos"
        title="Proyectos"
        intro="Los dos marketplaces son productos reales en desarrollo. Las capturas se muestran sin marcas ni datos de clientes."
      />

      <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-10">
        <FeaturedCard project={first} />
        <FeaturedCard project={second} />
      </div>

      <div
        className={`mt-10 grid gap-4 md:grid-cols-2 ${rest.length % 3 === 0 ? "lg:grid-cols-3" : ""}`}
      >
        {rest.map((project) => (
          <CompactCard key={project.slug} project={project} />
        ))}
      </div>

      {freelanceSites.length > 0 && (
        <div className="mt-20">
          <h3 className="font-semibold">Sitios web en línea</h3>
          <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {freelanceSites.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <ImageSlot
                    src={s.image}
                    alt={`Captura de ${s.name}`}
                    sizes="(min-width: 768px) 25vw, 50vw"
                  />
                  <span className="mt-3 block text-sm text-muted group-hover:text-fg">
                    {s.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
