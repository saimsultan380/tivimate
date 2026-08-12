"use client";

import Image from "next/image";
import Link from "next/link";
import {
  brandAssets,
  footerLegalLinks,
  footerQuickLinks,
  navLinks,
  routes,
  siteConfig,
} from "@/lib/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const trustHighlights = [
  "Easy Setup",
  "TiviMate Compatible",
  "Flexible Plans",
  "24/7 Support",
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="telvis-footer">
      <div className="telvis-footer-inner">
        <div className="telvis-footer-top">
          <ScrollReveal variant="text" className="telvis-footer-brand-col">
            <Link href="/" className="telvis-footer-brand">
              <Image
                src={brandAssets.logo}
                alt="TiviMate"
                width={180}
                height={54}
                className="telvis-footer-logo"
              />
            </Link>

            <p className="telvis-footer-about">{siteConfig.description}</p>
          </ScrollReveal>

          <div className="telvis-footer-columns">
            <ScrollReveal delay={0.06} variant="text" className="telvis-footer-col">
              <h2 className="telvis-footer-heading">Pages</h2>
              <nav className="telvis-footer-links" aria-label="Footer pages">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="telvis-footer-link">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </ScrollReveal>

            <ScrollReveal delay={0.12} variant="text" className="telvis-footer-col">
              <h2 className="telvis-footer-heading">Get Started</h2>
              <nav className="telvis-footer-links" aria-label="Footer quick links">
                {footerQuickLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="telvis-footer-link">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </ScrollReveal>

            <ScrollReveal delay={0.18} variant="text" className="telvis-footer-col">
              <h2 className="telvis-footer-heading">Support</h2>
              <nav className="telvis-footer-links" aria-label="Footer support">
                <Link href={routes.contact} className="telvis-footer-link">
                  Contact Us
                </Link>
                <Link href={routes.installation} className="telvis-footer-link">
                  Installation Guide
                </Link>
                <p className="telvis-footer-note">
                  Need help configuring your subscription in TiviMate? Tell us your
                  device and what you&apos;re experiencing.
                </p>
              </nav>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.08} variant="text">
          <div className="telvis-footer-trust">
            {trustHighlights.map((item, index) => (
              <span key={item} className="telvis-footer-trust-item">
                {item}
                {index < trustHighlights.length - 1 ? (
                  <span className="telvis-footer-trust-sep" aria-hidden="true">
                    ·
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} variant="text">
          <p className="telvis-footer-disclaimer">
            TiviMate is a separate media player application. An IPTV subscription
            provides the service and content source; TiviMate is the player used to
            access compatible playlists. Always confirm device and service
            compatibility before ordering.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12} variant="text">
          <div className="telvis-footer-bottom">
            <p className="telvis-footer-copy">
              © {year} {siteConfig.name}. All rights reserved.
            </p>

            <nav className="telvis-footer-legal" aria-label="Legal">
              {footerLegalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="telvis-footer-legal-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
