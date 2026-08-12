import { CheckCircle2, KeyRound, MonitorSmartphone, Tv } from "lucide-react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";
import { accessDetailItems, beforeStartingItems } from "@/lib/installation-data";

const icons = [Tv, MonitorSmartphone, KeyRound] as const;

export function GuideBeforeSection() {
  return (
    <section
      id="before-starting"
      className="telvis-section"
      aria-labelledby="before-starting-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="before-starting-heading"
          eyebrow="Before you begin"
          title={
            <>
              What You Need Before <TitleAccent>Starting</TitleAccent>
            </>
          }
          align="center"
        />

        <div className="telvis-feature-grid">
          {beforeStartingItems.map((item, index) => {
            const Icon = icons[index] ?? Tv;
            return (
              <CardReveal
                key={item.title}
                as="article"
                delay={staggerDelay(index)}
                className="telvis-glass telvis-feature-tile"
              >
                <CardRevealPart variant="icon">
                  <GlassIcon icon={Icon} />
                </CardRevealPart>
                <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                  {item.title}
                </CardRevealPart>
                <CardRevealPart variant="content" as="p" className="telvis-info-body">
                  {item.body}
                </CardRevealPart>
              </CardReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.1} variant="media">
          <div className="telvis-glass telvis-panel" style={{ marginTop: 24 }}>
            <h3 className="telvis-panel-title">Access information can include:</h3>
            <ul className="telvis-check-list">
              {accessDetailItems.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="telvis-section-note" style={{ marginTop: 18 }}>
              Only use IPTV content you are authorized to access.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
