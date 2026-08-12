"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { brandAssets, navLinks, routes } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="telvis-header-sticky">
      <div className="telvis-header-inner">
        <nav
          className={`telvis-navbar${open ? " is-menu-open" : ""}`}
          aria-label="Primary"
        >
          <div className="telvis-navbar-bar">
            <Link href="/" className="telvis-brand" onClick={() => setOpen(false)}>
              <Image
                src={brandAssets.logo}
                alt="TiviMate"
                width={160}
                height={48}
                className="telvis-logo"
                priority
              />
            </Link>

            <div className="telvis-nav-center" aria-label="Desktop navigation">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="telvis-nav-link">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="telvis-nav-actions">
              <Link
                href={routes.plans}
                className="telvis-nav-cta telvis-nav-cta-desktop"
              >
                View IPTV Plans
              </Link>

              <button
                type="button"
                className="telvis-menu"
                aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={open}
                aria-controls="telvis-mobile-menu"
                onClick={() => setOpen((value) => !value)}
              >
                <span className="telvis-menu-lines">
                  <span />
                  <span />
                  <span />
                </span>
              </button>
            </div>
          </div>

          {open ? (
            <div id="telvis-mobile-menu" className="telvis-mobile-menu">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="telvis-mobile-link"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href={routes.plans}
                className="telvis-nav-cta telvis-nav-cta-menu"
                onClick={() => setOpen(false)}
              >
                View IPTV Plans
              </Link>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
