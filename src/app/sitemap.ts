import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1 },
    ...projects.map((p) => ({
      url: `${siteUrl}/proyectos/${p.slug}`,
      priority: 0.8,
    })),
  ];
}
