import {
  buildBreadcrumbList,
  canonicalUrl,
  organizationLogoSchema,
} from "@/lib/seo";
import { blogCategories, blogPageSeo } from "@/lib/blog-data";
import { routes, siteConfig } from "@/lib/site";

const pageUrl = canonicalUrl(routes.blog);
const homeUrl = canonicalUrl("/");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildBreadcrumbList([
      { name: "Home", path: "/" },
      { name: "Blog", path: routes.blog },
    ]),
    {
      "@type": "Organization",
      "@id": `${homeUrl}#organization`,
      name: siteConfig.name,
      url: homeUrl,
      logo: organizationLogoSchema(),
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: blogPageSeo.title,
      description: blogPageSeo.description,
      isPartOf: { "@id": `${homeUrl}#website` },
      about: { "@id": `${homeUrl}#organization` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: blogCategories
          .flatMap((category) => category.articles)
          .map((article, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: article.title,
            url: canonicalUrl(article.href.split("#")[0] || routes.blog),
          })),
      },
    },
  ],
};

export function BlogSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
