import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

export function BlogFinalCta() {
  return (
    <section
      id="get-started"
      className="telvis-section telvis-final-cta"
      aria-labelledby="blog-final-cta-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-final-panel">
          <CardRevealPart>
            <SectionHeader
              id="blog-final-cta-heading"
              eyebrow="Next step"
              title={
                <>
                  Ready to Set Up <TitleAccent>TiviMate</TitleAccent>?
                </>
              }
              lead="Use the installation guide for step-by-step setup, or compare IPTV plans if you still need a subscription."
              align="center"
              animate={false}
            />
          </CardRevealPart>

          <CardRevealPart>
            <div className="telvis-actions telvis-final-actions">
              <Link href={routes.installation} className="telvis-cta-primary">
                <BookOpen size={16} strokeWidth={2} aria-hidden="true" />
                <span>Open Installation Guide</span>
              </Link>
              <Link href={routes.plans} className="telvis-cta-secondary">
                View IPTV Plans
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
