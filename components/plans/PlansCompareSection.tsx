import { CalendarDays, Check } from "lucide-react";
import Link from "next/link";
import {
  CardReveal,
  CardRevealList,
  CardRevealListItem,
  CardRevealPart,
} from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";
import { planRows } from "@/lib/plans-data";

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
                <CardRevealListItem>
                  <Check size={16} strokeWidth={2.25} aria-hidden="true" />
                  <span>{plan.connections}</span>
                </CardRevealListItem>
                <CardRevealListItem>
                  <Check size={16} strokeWidth={2.25} aria-hidden="true" />
                  <span>Features as listed for this plan</span>
                </CardRevealListItem>
                <CardRevealListItem>
                  <Check size={16} strokeWidth={2.25} aria-hidden="true" />
                  <span>Support included with your subscription</span>
                </CardRevealListItem>
                <CardRevealListItem>
                  <Check size={16} strokeWidth={2.25} aria-hidden="true" />
                  <span>Activation details provided after order</span>
                </CardRevealListItem>
              </CardRevealList>
              <CardRevealPart variant="content">
                <Link
                  href={plan.href}
                  className={
                    plan.featured
                      ? "telvis-cta-primary telvis-plan-cta"
                      : "telvis-cta-glass telvis-plan-cta"
                  }
                >
                  {plan.cta}
                </Link>
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>

        <ScrollReveal delay={0.08} variant="text">
          <p className="telvis-section-note is-center">
            All plan details should be displayed clearly before checkout.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
