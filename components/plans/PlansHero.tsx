"use client";

import Image from "next/image";
import Link from "next/link";
import { MonitorPlay, Settings, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { routes } from "@/lib/site";

export function PlansHero() {
  return (
    <section className="telvis-hero" aria-labelledby="plans-hero-heading">
      <div className="telvis-container">
        <div className="telvis-content is-hero-stack">
          <div className="telvis-copy-col">
            <ScrollReveal delay={0.05} variant="text">
              <div className="telvis-eyebrow">
                <span className="telvis-eyebrow-dot" />
                TiviMate IPTV Subscription
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} variant="text">
              <h1 id="plans-hero-heading" className="telvis-h1">
                <span className="telvis-h1-accent">TiviMate</span> IPTV
                Subscription
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.18} variant="text">
              <div className="telvis-copy">
                <p>
                  Already using TiviMate? Compare our IPTV plans, get your access
                  details and add the service to your player. TiviMate is the
                  player — your subscription provides the content access.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.26} variant="cta">
              <div className="telvis-actions">
                <Link href="#plans" className="telvis-cta-primary">
                  <MonitorPlay size={16} strokeWidth={2} aria-hidden="true" />
                  <span>Choose Your Plan</span>
                </Link>

                <Link href={routes.installation} className="telvis-cta-secondary">
                  <Settings size={16} strokeWidth={2} aria-hidden="true" />
                  <span>View Installation Guide</span>
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
                <strong>Clear plans for TiviMate users.</strong>
                <span>Compare duration • Connections • Setup guidance</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <span className="telvis-section-end-line" aria-hidden="true" />
    </section>
  );
}
