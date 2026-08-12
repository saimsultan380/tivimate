import { brandAssets, siteConfig } from "@/lib/site";

/** Force https + non-www absolute URL with trailing slash (canonical format). */
export function canonicalUrl(path: string = "/"): string {
  const base = siteConfig.url
    .trim()
    .replace(/^http:\/\//i, "https://")
    .replace(/^https:\/\/www\./i, "https://")
    .replace(/\/$/, "");

  if (!path || path === "/") {
    return `${base}/`;
  }

  const normalized = path.split("#")[0].split("?")[0];
  const segment = normalized.replace(/^\/+|\/+$/g, "");

  if (!segment) {
    return `${base}/`;
  }

  return `${base}/${segment}/`;
}

/** Absolute sitemap URL (no trailing slash on the .xml file). */
export function sitemapUrl(): string {
  return `${siteConfig.url
    .trim()
    .replace(/^http:\/\//i, "https://")
    .replace(/^https:\/\/www\./i, "https://")
    .replace(/\/$/, "")}/sitemap.xml`;
}

/** Absolute URL for a static asset in /public. */
export function absoluteAssetUrl(assetPath: string): string {
  const base = canonicalUrl("/").replace(/\/$/, "");
  const normalized = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${base}${normalized}`;
}

export function organizationLogoSchema() {
  const logoUrl = absoluteAssetUrl(brandAssets.logo512);

  return {
    "@type": "ImageObject",
    "@id": logoUrl,
    url: logoUrl,
    contentUrl: logoUrl,
    width: 512,
    height: 512,
    caption: siteConfig.name,
  };
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  const currentPath = items[items.length - 1]?.path ?? "/";

  return {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl(currentPath)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

/** Routes included in sitemap.xml (indexable pages only). */
export const indexableRoutes = [
  "/",
  "/iptv-plans",
  "/blog",
  "/contact-us",
  "/installation-guide",
] as const;
