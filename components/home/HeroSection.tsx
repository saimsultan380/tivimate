"use client";

import Image from "next/image";
import Link from "next/link";
import { MonitorPlay, Settings, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { routes } from "@/lib/site";

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
                <span className="telvis-h1-accent">IPTV UK</span> – Premium IPTV
                Subscription from £9.99 with Free 24-Hour Trial
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.18} variant="text">
              <div className="telvis-copy">
                <p>
                  Already using TiviMate and looking for an IPTV subscription to
                  add to your player?
                </p>
                <p>
                  Get started with an IPTV service designed for a simple setup on
                  compatible devices. Choose your preferred plan, receive your
                  access details and follow our step-by-step guide to connect your
                  subscription to TiviMate.
                </p>
                <p>
                  Whether you&apos;re using a Fire TV device, Android TV or another
                  compatible setup, our goal is to make the process
                  straightforward from subscription to setup.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.26} variant="cta">
              <div className="telvis-actions">
                <Link href={routes.plans} className="telvis-cta-primary">
                  <MonitorPlay size={16} strokeWidth={2} aria-hidden="true" />
                  <span>View IPTV Plans</span>
                </Link>

                <Link href={routes.installation} className="telvis-cta-secondary">
                  <Settings size={16} strokeWidth={2} aria-hidden="true" />
                  <span>How to Set Up TiviMate</span>
                </Link>
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
              sizes="(max-width: 767px) 100vw, 720px"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.32} variant="text" className="telvis-hero-trust-wrap">
            <div className="telvis-glass telvis-hero-trust-card">
              <span className="telvis-hero-trust-icon" aria-hidden="true">
                <ShieldCheck size={22} strokeWidth={2.25} />
              </span>
              <div className="telvis-hero-trust-copy">
                <strong>Trusted IPTV service for TiviMate users worldwide.</strong>
                <span>Easy setup • Reliable streaming • 24/7 Support</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <span className="telvis-section-end-line" aria-hidden="true" />
    </section>
  );
}
