"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { staggerDelay } from "@/lib/motion";
import { blogListingCards } from "@/lib/blog-posts";

export function BlogPostsSection() {
  return (
    <section
      id="blog-posts"
      className="telvis-section telvis-blog-posts"
      aria-labelledby="blog-posts-heading"
    >
      <div className="telvis-section-inner">
        <h2 id="blog-posts-heading" className="sr-only">
          Latest blog posts
        </h2>

        <div className="telvis-blog-grid">
          {blogListingCards.map((card, index) => (
            <CardReveal
              key={card.href}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-blog-card"
            >
              <Link href={card.href} className="telvis-blog-card-media-link">
                <span className="telvis-blog-card-media">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    width={800}
                    height={500}
                    className="telvis-blog-card-image"
                    sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 380px"
                  />
                </span>
              </Link>

              <CardRevealPart className="telvis-blog-card-body">
                <h3 className="telvis-info-title telvis-blog-card-title">
                  <Link href={card.href}>{card.title}</Link>
                </h3>

                <p className="telvis-info-body">{card.excerpt}</p>

                <Link href={card.href} className="telvis-text-link">
                  Read Guide
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    style={{ marginLeft: 6, display: "inline" }}
                  />
                </Link>
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
