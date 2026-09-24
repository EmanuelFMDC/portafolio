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

  // Regla de estilo del sitio: nada de rayas largas en el texto visible.
  it("no usa raya (—) ni guion medio (–) en el texto", () => {
    const texts = [
      JSON.stringify(siteContent),
      JSON.stringify(projects),
      ...projects.map((p) =>
        readFileSync(join(projectsDir, `${p.slug}.mdx`), "utf8"),
      ),
    ];
    for (const text of texts) {
      expect(text).not.toMatch(/[—–]/);
    }
  });
});
