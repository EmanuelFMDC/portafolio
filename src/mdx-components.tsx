import type { MDXComponents } from "mdx/types";

// Estilos de los casos de proyecto. Se aplican a todo archivo .mdx.
const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="mt-14 text-xl font-semibold tracking-tight text-fg first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 font-semibold text-fg">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 leading-relaxed text-muted">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 space-y-3 text-muted">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-3 pl-5 text-muted">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="relative pl-5 leading-relaxed before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-line-strong">
      {children}
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-fg">{children}</strong>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-fg underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[0.875em] text-fg">
      {children}
    </code>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
