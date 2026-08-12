import type { Metadata } from "next";
import { BlogCategorySection } from "@/components/blog/BlogCategorySection";
import { BlogFinalCta } from "@/components/blog/BlogFinalCta";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogNewGuidesSection } from "@/components/blog/BlogNewGuidesSection";
import { BlogSchema } from "@/components/blog/BlogSchema";
import { blogCategories, blogPageSeo } from "@/lib/blog-data";
import { brandAssets, routes, siteConfig } from "@/lib/site";
import { canonicalUrl } from "@/lib/seo";

const pageUrl = canonicalUrl(routes.blog);

export const metadata: Metadata = {
  title: blogPageSeo.title,
  description: blogPageSeo.description,
  keywords: [...blogPageSeo.keywords],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: blogPageSeo.title,
    description: blogPageSeo.description,
    siteName: siteConfig.name,
    locale: "en_GB",
    images: [
      {
        url: brandAssets.ogImage,
        width: 1200,
        height: 630,
        alt: blogPageSeo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: blogPageSeo.title,
    description: blogPageSeo.description,
    images: [brandAssets.ogImage],
  },
};

export default function BlogPage() {
  return (
    <>
      <BlogSchema />
      <main>
        <BlogHero />
        {blogCategories.map((category) => (
          <BlogCategorySection key={category.id} category={category} />
        ))}
        <BlogNewGuidesSection />
        <BlogFinalCta />
      </main>
    </>
  );
}
