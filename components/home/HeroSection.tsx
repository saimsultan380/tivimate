"use client";

import Image from "next/image";
import Link from "next/link";
import { MonitorPlay, Settings, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { routes, siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="telvis-hero" aria-labelledby="telvis-hero-heading">
      <div className="telvis-container">
        <div className="telvis-content is-hero-stack">
          <div className="telvis-copy-col">
            <ScrollReveal delay={0.05} variant="text">
              <div className="telvis-eyebrow">
                <span className="telvis-eyebrow-dot" />
                TiviMate IPTV Player
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} variant="text">
              <h1 id="telvis-hero-heading" className="telvis-h1">
                <span className="telvis-h1-accent">TiviMate</span> IPTV Player:
                Best IPTV App for IPTV Streaming | IPTV for TiviMate
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.18} variant="text">
              <div className="telvis-copy">
                <p>
                  Looking for a reliable TiviMate IPTV player experience?
                  Discover a compatible IPTV service for your Tivimate IPTV
                  player. Get a flexible IPTV subscription to use with Tivimate.
                  Whether you use Tivi IPTV or want to get more from your
                  TiviMate Premium features, find flexible plans, easy setup
                  guidance, and support for compatible devices.
                </p>
                <p>
                  Choose a suitable subscription and enjoy a more organized
                  Tivimate IPTV USA viewing experience at home.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.26} variant="cta">
              <div className="telvis-actions">
                <Link href={routes.plans} className="telvis-cta-primary">
                  <MonitorPlay size={16} strokeWidth={2} aria-hidden="true" />
                  <span>Explore Tivimate Subscription Plans</span>
                </Link>

                <Link href={routes.installation} className="telvis-cta-secondary">
                  <Settings size={16} strokeWidth={2} aria-hidden="true" />
                  <span>Free Installation Guides</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.16} variant="media" className="telvis-hero-image-wrap">
            <Image
              src="/hero-image.jpeg"
              alt={siteConfig.h1}
              width={1200}
              height={900}
              className="telvis-hero-image"
              priority
              sizes="(max-width: 767px) 100vw, 720px"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.32} variant="text" className="telvis-hero-trust-wrap">
            <div className="telvis-glass telvis-hero-trust-card">
              <span className="telvis-hero-trust-icon" aria-hidden="true">
                <ShieldCheck size={22} strokeWidth={2.25} />
              </span>
              <div className="telvis-hero-trust-copy">
                <strong>
                  Compatible IPTV service for TiviMate users worldwide.
                </strong>
                <span>Flexible plans • Easy setup • 24/7 Support</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <span className="telvis-section-end-line" aria-hidden="true" />
    </section>
  );
}
