import { ArrowRight, ListChecks } from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

export function SetupIntroSection() {
  return (
    <section
      id="setup-intro"
      className="telvis-section"
      aria-labelledby="setup-intro-heading"
    >
      <div className="telvis-section-inner">
        <div className="telvis-split">
          <div className="telvis-split-copy">
            <SectionHeader
              id="setup-intro-heading"
              eyebrow="How it fits together"
              title={
                <>
                  IPTV for Your <TitleAccent>TiviMate</TitleAccent> Setup
                </>
              }
              lead="TiviMate gives you a dedicated interface for managing and watching compatible IPTV playlists. Your IPTV subscription provides the service and content, while TiviMate acts as the player through which you access it."
            />
            <ScrollReveal delay={0.08} variant="text">
              <p className="telvis-section-lead">
                If you already have TiviMate installed, you can move directly to
                choosing a suitable subscription and setting up your access.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.12} variant="cta">
              <div className="telvis-inline-actions is-row">
                <Link href={routes.plans} className="telvis-cta-primary">
                  View IPTV Plans
                </Link>
                <Link href={routes.installation} className="telvis-cta-outline">
                  Open Setup Guide
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <CardReveal delay={0.1} className="telvis-glass telvis-panel">
            <CardRevealPart variant="icon">
              <div className="telvis-panel-head">
                <GlassIcon icon={ListChecks} />
                <h3 className="telvis-panel-title">The setup is simple</h3>
              </div>
            </CardRevealPart>
            <CardRevealPart variant="content" as="p" className="telvis-info-body">
              Choose your plan → Receive your access details → Add them to
              TiviMate → Load your playlist → Start watching
            </CardRevealPart>
          </CardReveal>
        </div>
      </div>
    </section>
  );
}
