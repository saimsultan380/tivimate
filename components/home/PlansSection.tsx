import { CalendarDays, Check } from "lucide-react";
import Link from "next/link";
import { GlassIcon } from "@/components/ui/GlassIcon";
import {
  CardReveal,
  CardRevealList,
  CardRevealListItem,
  CardRevealPart,
} from "@/components/ui/CardReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";
import { staggerDelay } from "@/lib/motion";
import { planCardFeatures, planRows } from "@/lib/plans-data";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes, supportConfig } from "@/lib/site";

export function PlansSection() {
  return (
    <section
      id="plans"
      className="telvis-section telvis-section-plans"
      aria-labelledby="plans-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="plans-heading"
          eyebrow="IPTV plans"
          title={
            <>
              TiviMate IPTV Player Subscription Plans: Choose Your{" "}
              <TitleAccent>IPTV</TitleAccent> Package
            </>
          }
          lead="Choose a reliable IPTV provider for TiviMate with flexible subscription plans. Explore our IPTV subscription plans for TiviMate, compare packages, and choose the right IPTV service."
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
                  <p className="telvis-plan-duration">{plan.duration}</p>
                </div>
              </CardRevealPart>
              <CardRevealPart variant="content">
                <h3 className="telvis-plan-title">
                  <span className="telvis-plan-price">{plan.price}</span>
                </h3>
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

        <ScrollReveal delay={0.08} variant="cta">
          <div className="telvis-inline-actions is-row">
            <Link href={routes.installation} className="telvis-cta-outline">
              Free Installation Guides
            </Link>
            <WhatsAppCta
              href={supportConfig.plansUrl}
              className="telvis-cta-primary"
              aria-label="Ask about plans on WhatsApp"
            >
              Ask About Plans
            </WhatsAppCta>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
