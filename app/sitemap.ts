import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/lib/blog-posts";
import { canonicalUrl, indexableRoutes } from "@/lib/seo";
import { routes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = indexableRoutes
    .filter((path) => !path.startsWith("/blog/"))
    .map((path) => ({
      url: canonicalUrl(path),
      lastModified: new Date(),
      changeFrequency: (path === "/" ? "weekly" : "monthly") as
        | "weekly"
        | "monthly",
      priority: path === "/" ? 1 : 0.8,
    }));

  const blogEntries = getAllBlogSlugs().map((slug) => ({
    url: canonicalUrl(`${routes.blog}/${slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
