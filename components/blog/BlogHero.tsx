"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function BlogHero() {
  return (
    <section
      className="telvis-hero telvis-hero-page telvis-blog-hero"
      aria-labelledby="blog-hero-heading"
    >
      <div className="telvis-container telvis-blog-hero-inner">
        <ScrollReveal
          delay={0.08}
          variant="text"
          className="telvis-blog-hero-reveal"
        >
          <h1 id="blog-hero-heading" className="telvis-h1 telvis-blog-hero-title">
            Blog
          </h1>
        </ScrollReveal>
      </div>
      <span className="telvis-section-end-line" aria-hidden="true" />
    </section>
  );
}
