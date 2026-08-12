import { CalendarDays } from "lucide-react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";
import { planRows } from "@/lib/plans-data";

export function PlansWhichSection() {
  return (
    <section
      id="which-plan"
      className="telvis-section"
      aria-labelledby="which-plan-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="which-plan-heading"
          eyebrow="Compare options"
          title={
            <>
              Which IPTV Plan Is <TitleAccent>Right</TitleAccent> for You?
            </>
          }
          align="center"
        />

        <div className="telvis-feature-grid">
          {planRows.map((plan, index) => (
            <CardReveal
              key={plan.id}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={CalendarDays} className="is-large" />
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {plan.duration}
              </CardRevealPart>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                {plan.summary}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
