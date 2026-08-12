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
                  Ready to Use IPTV With <TitleAccent>TiviMate</TitleAccent>?
                </>
              }
              lead="Choose your plan, receive your access details and follow our simple setup instructions."
              align="center"
              animate={false}
            />
          </CardRevealPart>

          <CardRevealPart>
            <div className="telvis-actions telvis-final-actions">
              <Link href={routes.plans} className="telvis-cta-primary">
                <MonitorPlay size={16} strokeWidth={2} aria-hidden="true" />
                <span>View IPTV Plans</span>
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
