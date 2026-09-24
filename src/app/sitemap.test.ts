import { describe, expect, it } from "vitest";
import { projects } from "@/content/projects";
import { siteUrl } from "@/lib/site-url";
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("incluye el inicio y todos los casos de proyecto", () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls).toContain(siteUrl);
    for (const p of projects) {
      expect(urls).toContain(`${siteUrl}/proyectos/${p.slug}`);
    }
    expect(urls).toHaveLength(projects.length + 1);
  });
});
