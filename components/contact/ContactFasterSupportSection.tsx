import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { CardReveal, CardRevealList, CardRevealListItem, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { fasterSupportItems } from "@/lib/contact-data";

export function ContactFasterSupportSection() {
  return (
    <section
      id="faster-support"
      className="telvis-section"
      aria-labelledby="faster-support-heading"
    >
      <div className="telvis-section-inner">
        <div className="telvis-split">
          <div className="telvis-split-copy">
            <SectionHeader
              id="faster-support-heading"
              eyebrow="Faster replies"
              title={
                <>
                  For Faster <TitleAccent>Support</TitleAccent>
                </>
              }
              lead="When contacting us about a technical issue, include the details below so we can help more quickly."
            />
            <ScrollReveal delay={0.08} variant="text">
              <p className="telvis-section-note">
                Please never send your account password or other sensitive
                credentials through the contact form.
              </p>
            </ScrollReveal>
          </div>

          <CardReveal delay={0.1} className="telvis-glass telvis-panel">
            <CardRevealPart variant="icon">
              <div className="telvis-panel-head">
                <GlassIcon icon={AlertTriangle} />
                <h3 className="telvis-panel-title">Include these details</h3>
              </div>
            </CardRevealPart>
            <CardRevealList className="telvis-check-list">
              {fasterSupportItems.map((item) => (
                <CardRevealListItem key={item.label}>
                  <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                  <span>
                    <strong>{item.label}</strong> {item.detail}
                  </span>
                </CardRevealListItem>
              ))}
            </CardRevealList>
          </CardReveal>
        </div>
      </div>
    </section>
  );
}
