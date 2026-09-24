import { experience, learning, stack } from "@/content/site";
import { SectionHeading } from "@/components/home/section-heading";

export function Experience() {
  return (
    <section
      aria-labelledby="experiencia"
      className="border-t border-line"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div>
          <SectionHeading id="experiencia" title="Experiencia" />
          <ol className="mt-12 space-y-12">
            {experience.map((job) => (
              <li
                key={job.company}
                className="reveal grid gap-2 sm:grid-cols-[9.5rem_1fr] sm:gap-8"
              >
                <p className="font-mono text-sm tabular-nums text-faint sm:pt-1">
                  {job.period}
                </p>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {job.company}
                  </h3>
                  <p className="text-muted">{job.role}</p>
                  <ul className="mt-4 space-y-2.5">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="relative pl-5 leading-relaxed text-muted before:absolute before:left-0 before:top-[0.75em] before:h-px before:w-2.5 before:bg-line-strong"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Stack
          </h2>
          <dl className="mt-12 space-y-7">
            {stack.map((g) => (
              <div key={g.group} className="reveal">
                <dt className="text-sm font-medium text-faint">{g.group}</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
            <div className="reveal">
              <dt className="text-sm font-medium text-faint">Aprendiendo ahora</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {learning.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-dashed border-line-strong px-3 py-1 text-sm text-muted"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
