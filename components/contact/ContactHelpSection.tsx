import { CheckCircle2, Headphones, MonitorPlay, ShoppingCart } from "lucide-react";
import { CardReveal, CardRevealList, CardRevealListItem, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";
import { contactHelpTopics } from "@/lib/contact-data";

const icons = [ShoppingCart, MonitorPlay, Headphones] as const;

export function ContactHelpSection() {
  return (
    <section
      id="how-can-we-help"
      className="telvis-section"
      aria-labelledby="help-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="help-heading"
          eyebrow="Support topics"
          title={
            <>
              How Can We <TitleAccent>Help</TitleAccent>?
            </>
          }
          align="center"
        />

        <div className="telvis-feature-grid">
          {contactHelpTopics.map((topic, index) => {
            const Icon = icons[index] ?? Headphones;
            return (
              <CardReveal
                key={topic.title}
                as="article"
                delay={staggerDelay(index)}
                className="telvis-glass telvis-feature-tile"
              >
                <CardRevealPart variant="icon">
                  <GlassIcon icon={Icon} />
                </CardRevealPart>
                <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                  {topic.title}
                </CardRevealPart>
                <CardRevealPart variant="content" as="p" className="telvis-info-body">
                  {topic.intro}
                </CardRevealPart>
                <CardRevealList className="telvis-check-list">
                  {topic.items.map((item) => (
                    <CardRevealListItem key={item}>
                      <CheckCircle2 size={16} strokeWidth={2} aria-hidden="true" />
                      <span>{item}</span>
                    </CardRevealListItem>
                  ))}
                </CardRevealList>
              </CardReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
