"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Headphones, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { routes } from "@/lib/site";

export function GuideHero() {
  return (
    <section className="telvis-hero" aria-labelledby="guide-hero-heading">
      <div className="telvis-container">
        <div className="telvis-content is-hero-static">
          <div className="telvis-copy-col">
            <ScrollReveal delay={0.05} variant="text">
              <div className="telvis-eyebrow">
                <span className="telvis-eyebrow-dot" />
                TiviMate IPTV Setup
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} variant="text">
              <h1 id="guide-hero-heading" className="telvis-h1">
                <span className="telvis-h1-accent">TiviMate</span> IPTV Setup
                Guide
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.18} variant="text">
              <div className="telvis-copy">
                <p>Have your IPTV subscription ready?</p>
                <p>
                  This guide explains how to connect your IPTV service to TiviMate
                  and configure the basic settings needed to start watching.
                </p>
                <p>
                  The exact screens can vary depending on your TiviMate version,
                  device and IPTV service, but the general setup process remains
                  straightforward.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.26} variant="cta">
              <div className="telvis-actions">
                <Link href="#setup-steps" className="telvis-cta-primary">
                  <BookOpen size={18} strokeWidth={2} aria-hidden="true" />
                  <span>Start Setup Steps</span>
                </Link>

                <Link href={routes.contact} className="telvis-cta-secondary">
                  <Headphones size={18} strokeWidth={2} aria-hidden="true" />
                  <span>Contact Support</span>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.32} variant="text">
              <div className="telvis-glass telvis-hero-trust-card">
                <span className="telvis-hero-trust-icon" aria-hidden="true">
                  <ShieldCheck size={22} strokeWidth={2.25} />
                </span>
                <div className="telvis-hero-trust-copy">
                  <strong>Step-by-step TiviMate IPTV setup.</strong>
                  <span>Add playlist • Configure EPG • Troubleshoot issues</span>
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
