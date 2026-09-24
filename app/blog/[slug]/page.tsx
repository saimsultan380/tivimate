import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { BlogFinalCta } from "@/components/blog/BlogFinalCta";
import { BlogPostSchema } from "@/components/blog/BlogSchema";
import {
  getAllBlogSlugs,
  getBlogPost,
} from "@/lib/blog-posts";
import { absoluteAssetUrl, canonicalUrl } from "@/lib/seo";
import { routes, siteConfig } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  const pageUrl = canonicalUrl(`${routes.blog}/${post.slug}`);
  const imageUrl = absoluteAssetUrl(post.image);

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      url: pageUrl,
      title: post.title,
      description: post.description,
      siteName: siteConfig.name,
      locale: "en_GB",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogPostSchema slug={post.slug} />
      <main>
        <BlogArticle post={post} />
        <BlogFinalCta />
      </main>
    </>
  );
}
