"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, ListChecks, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { routes } from "@/lib/site";

export function BlogHero() {
  return (
    <section className="telvis-hero" aria-labelledby="blog-hero-heading">
      <div className="telvis-container">
        <div className="telvis-content is-hero-static">
          <div className="telvis-copy-col">
            <ScrollReveal delay={0.05} variant="text">
              <div className="telvis-eyebrow">
                <span className="telvis-eyebrow-dot" />
                TiviMate IPTV Blog
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} variant="text">
              <h1 id="blog-hero-heading" className="telvis-h1">
                <span className="telvis-h1-accent">TiviMate</span> IPTV Guides
                & Tutorials
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.18} variant="text">
              <div className="telvis-copy">
                <p>Welcome to our TiviMate IPTV resource hub.</p>
                <p>
                  Find practical guides covering installation, IPTV setup,
                  playlists, EPG, device compatibility, troubleshooting and
                  everyday TiviMate questions.
                </p>
                <p>
                  Our aim is simple: give you the information you need without
                  unnecessary technical language or filler.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.26} variant="cta">
              <div className="telvis-actions">
                <Link href="#installation-setup" className="telvis-cta-primary">
                  <BookOpen size={18} strokeWidth={2} aria-hidden="true" />
                  <span>Browse Guides</span>
                </Link>

                <Link href={routes.installation} className="telvis-cta-secondary">
                  <ListChecks size={18} strokeWidth={2} aria-hidden="true" />
                  <span>Open Setup Guide</span>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.32} variant="text">
              <div className="telvis-glass telvis-hero-trust-card">
                <span className="telvis-hero-trust-icon" aria-hidden="true">
                  <ShieldCheck size={22} strokeWidth={2.25} />
                </span>
                <div className="telvis-hero-trust-copy">
                  <strong>Practical TiviMate IPTV resources.</strong>
                  <span>Setup • Troubleshooting • Tips • Buying guides</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.16} variant="media" className="telvis-hero-image-wrap">
            <Image
              src="/hero-image.jpeg"
              alt="TiviMate IPTV Player interface with Live TV, EPG Guide, Catch Up and Favourites"
              width={1200}
              height={900}
              className="telvis-hero-image"
              priority
              sizes="(max-width: 767px) 100vw, 520px"
            />
          </ScrollReveal>
        </div>
      </div>
      <span className="telvis-section-end-line" aria-hidden="true" />
    </section>
  );
}
