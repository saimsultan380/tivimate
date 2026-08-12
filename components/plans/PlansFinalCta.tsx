import { ArrowRight, MonitorPlay } from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

export function PlansFinalCta() {
  return (
    <section
      id="get-started"
      className="telvis-section telvis-final-cta"
      aria-labelledby="plans-final-cta-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-final-panel">
          <CardRevealPart>
            <SectionHeader
              id="plans-final-cta-heading"
              eyebrow="Get started"
              title={
                <>
                  Ready to Choose Your <TitleAccent>IPTV</TitleAccent> Plan?
                </>
              }
              lead="Choose the subscription that fits your needs and follow our installation guide once your access details are ready."
              align="center"
              animate={false}
            />
          </CardRevealPart>

          <CardRevealPart>
            <div className="telvis-actions telvis-final-actions">
              <Link href="#plans" className="telvis-cta-primary">
                <MonitorPlay size={16} strokeWidth={2} aria-hidden="true" />
                <span>Choose Your IPTV Plan</span>
              </Link>
              <Link href={routes.installation} className="telvis-cta-secondary">
                Open Installation Guide
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
