import { CalendarDays, Check } from "lucide-react";
import {
  CardReveal,
  CardRevealList,
  CardRevealListItem,
  CardRevealPart,
} from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";
import { staggerDelay } from "@/lib/motion";
import { planCardFeatures, planRows } from "@/lib/plans-data";

export function PlansCompareSection() {
  return (
    <section
      id="plans"
      className="telvis-section telvis-section-plans"
      aria-labelledby="plans-compare-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="plans-compare-heading"
          eyebrow="IPTV plans"
          title={
            <>
              Choose Your <TitleAccent>IPTV</TitleAccent> Plan
            </>
          }
          lead="Select the subscription period that fits your needs."
          align="center"
        />

        <div className="telvis-plan-grid">
          {planRows.map((plan, index) => (
            <CardReveal
              key={plan.id}
              as="article"
              delay={staggerDelay(index)}
              className={`telvis-glass telvis-plan-card${plan.featured ? " is-featured" : ""}`}
            >
              <CardRevealPart variant="icon">
                <div className="telvis-plan-top">
                  <GlassIcon icon={CalendarDays} />
                  <p className="telvis-plan-duration">{plan.label}</p>
                </div>
              </CardRevealPart>
              <CardRevealPart variant="content">
                <h3 className="telvis-plan-title">
                  <span className="telvis-plan-price">{plan.price}</span>
                </h3>
                <p className="telvis-plan-meta">{plan.duration}</p>
                <p className="telvis-plan-summary">{plan.summary}</p>
              </CardRevealPart>
              <CardRevealList className="telvis-feature-list">
                {planCardFeatures.map((feature) => (
                  <CardRevealListItem key={feature}>
                    <Check size={16} strokeWidth={2.25} aria-hidden="true" />
                    <span>{feature}</span>
                  </CardRevealListItem>
                ))}
              </CardRevealList>
              <CardRevealPart variant="content">
                <WhatsAppCta
                  href={plan.href}
                  className={
                    plan.featured
                      ? "telvis-cta-primary telvis-plan-cta"
                      : "telvis-cta-glass telvis-plan-cta"
                  }
                  aria-label={`${plan.cta} on WhatsApp`}
                >
                  {plan.cta}
                </WhatsAppCta>
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>

        <ScrollReveal delay={0.08} variant="text">
          <p className="telvis-section-note is-center">
            Choose a plan to continue on WhatsApp and complete your order.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
