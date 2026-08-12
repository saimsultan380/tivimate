import { CheckCircle2 } from "lucide-react";
import { CardReveal, CardRevealList, CardRevealListItem, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { newGuideChecklist } from "@/lib/blog-data";
import { ListChecks } from "lucide-react";

export function BlogNewGuidesSection() {
  return (
    <section
      id="new-guides"
      className="telvis-section"
      aria-labelledby="new-guides-heading"
    >
      <div className="telvis-section-inner">
        <div className="telvis-split">
          <div className="telvis-split-copy">
            <SectionHeader
              id="new-guides-heading"
              eyebrow="Publishing standard"
              title={
                <>
                  New <TitleAccent>Guides</TitleAccent>
                </>
              }
              lead="Keep this section updated with your newest articles. Each article should provide clear, practical help without unnecessary filler."
            />
          </div>

          <CardReveal delay={0.1} className="telvis-glass telvis-panel">
            <CardRevealPart variant="icon">
              <div className="telvis-panel-head">
                <GlassIcon icon={ListChecks} />
                <h3 className="telvis-panel-title">Each article should provide:</h3>
              </div>
            </CardRevealPart>
            <CardRevealList className="telvis-check-list">
              {newGuideChecklist.map((item) => (
                <CardRevealListItem key={item}>
                  <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                  <span>{item}</span>
                </CardRevealListItem>
              ))}
            </CardRevealList>
          </CardReveal>
        </div>
      </div>
    </section>
  );
}
