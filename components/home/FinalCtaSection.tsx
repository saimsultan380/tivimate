import { ArrowRight, MonitorPlay } from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

export function FinalCtaSection() {
  return (
    <section
      id="get-started"
      className="telvis-section telvis-final-cta"
      aria-labelledby="final-cta-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-final-panel">
          <CardRevealPart>
            <SectionHeader
              id="final-cta-heading"
              eyebrow="Get started"
              title={
                <>
                  Buy The Discounted IPTV Subscription for Your{" "}
                  <TitleAccent>TiviMate</TitleAccent> Player
                </>
              }
              lead="Ready to upgrade your streaming setup? Choose an IPTV subscription for TiviMate, compare available plans, and get started with a compatible IPTV service according to your viewing needs."
              align="center"
              animate={false}
            />
          </CardRevealPart>

          <CardRevealPart>
            <div className="telvis-actions telvis-final-actions">
              <Link href={routes.plans} className="telvis-cta-primary">
                <MonitorPlay size={16} strokeWidth={2} aria-hidden="true" />
                <span>View IPTV Subscription Plans</span>
              </Link>
              <Link href={routes.installation} className="telvis-cta-secondary">
                Free Installation Guide
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
