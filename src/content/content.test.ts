import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { projects } from "./projects";
import * as siteContent from "./site";

const projectsDir = join(__dirname, "projects");

describe("contenido", () => {
  it("cada proyecto tiene un slug único y su archivo MDX", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(existsSync(join(projectsDir, `${slug}.mdx`)), slug).toBe(true);
    }
  });

  it("las imágenes referenciadas existen en /public", () => {
    const publicDir = join(__dirname, "..", "..", "public");
    const images = [
      ...projects.map((p) => p.image),
      ...siteContent.freelanceSites.map((s) => s.image),
    ].filter((src): src is string => Boolean(src));
    for (const src of images) {
      expect(existsSync(join(publicDir, src)), src).toBe(true);
    }
  });

  // Rayas largas: regla de estilo del sitio.
  // Guion no separable (U+2011): Geist no lo incluye y se ve como un cuadro.
  it("no usa raya (—), guion medio (–) ni guion no separable en el texto", () => {
    const texts = [
      JSON.stringify(siteContent),
      JSON.stringify(projects),
      ...projects.map((p) =>
        readFileSync(join(projectsDir, `${p.slug}.mdx`), "utf8"),
      ),
    ];
    for (const text of texts) {
      expect(text).not.toMatch(/[—–‑]/);
    }
  });
});
