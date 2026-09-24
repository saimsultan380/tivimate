import {
  absoluteAssetUrl,
  buildBreadcrumbList,
  canonicalUrl,
  organizationLogoSchema,
} from "@/lib/seo";
import { blogPageSeo } from "@/lib/blog-data";
import { blogListingCards, blogPosts } from "@/lib/blog-posts";
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
        itemListElement: blogListingCards.map((card, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: card.title,
          url: canonicalUrl(card.href.split("#")[0] || routes.blog),
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

type BlogPostSchemaProps = {
  slug: string;
};

export function BlogPostSchema({ slug }: BlogPostSchemaProps) {
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return null;

  const postUrl = canonicalUrl(`${routes.blog}/${post.slug}`);
  const imageUrl = absoluteAssetUrl(post.image);

  const postJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Blog", path: routes.blog },
        { name: post.title, path: `${routes.blog}/${post.slug}` },
      ]),
      {
        "@type": "BlogPosting",
        "@id": `${postUrl}#article`,
        headline: post.title,
        description: post.description,
        image: [imageUrl],
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        author: {
          "@type": "Organization",
          name: siteConfig.name,
          url: homeUrl,
        },
        publisher: {
          "@type": "Organization",
          "@id": `${homeUrl}#organization`,
          name: siteConfig.name,
          logo: organizationLogoSchema(),
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": postUrl,
        },
        isPartOf: { "@id": `${homeUrl}#website` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
    />
  );
}
