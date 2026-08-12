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
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

const plans = [
  {
    id: "1-month",
    title: "1 Month",
    price: "Contact for price",
    summary: "A flexible option for viewers who prefer a shorter commitment.",
    features: [
      "Connection allowance confirmed at checkout",
      "Content and features as listed for this plan",
      "Support included with your subscription",
      "Activation details provided after order",
    ],
    cta: "Choose 1 Month",
    href: "/checkout?plan=1-month",
    featured: false,
  },
  {
    id: "3-month",
    title: "3 Months",
    price: "Contact for price",
    summary:
      "A longer option for regular IPTV viewers who want extended access.",
    features: [
      "Connection allowance confirmed at checkout",
      "Content and features as listed for this plan",
      "Support included with your subscription",
      "Activation details provided after order",
    ],
    cta: "Choose 3 Months",
    href: "/checkout?plan=3-month",
    featured: false,
  },
  {
    id: "6-month",
    title: "6 Months",
    price: "Contact for price",
    summary: "Suitable for viewers looking for a longer subscription period.",
    features: [
      "Connection allowance confirmed at checkout",
      "Content and features as listed for this plan",
      "Support included with your subscription",
      "Activation details provided after order",
    ],
    cta: "Choose 6 Months",
    href: "/checkout?plan=6-month",
    featured: true,
  },
  {
    id: "12-month",
    title: "12 Months",
    price: "Contact for price",
    summary:
      "Our longest subscription option for customers who want extended access.",
    features: [
      "Connection allowance confirmed at checkout",
      "Content and features as listed for this plan",
      "Support included with your subscription",
      "Activation details provided after order",
    ],
    cta: "Choose 12 Months",
    href: "/checkout?plan=12-month",
    featured: false,
  },
] as const;

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
              Choose Your <TitleAccent>IPTV</TitleAccent> Plan
            </>
          }
          lead="Find a subscription that matches the way you watch."
          align="center"
        />

        <div className="telvis-plan-grid">
          {plans.map((plan, index) => (
            <CardReveal
              key={plan.id}
              as="article"
              delay={staggerDelay(index)}
              className={`telvis-glass telvis-plan-card${plan.featured ? " is-featured" : ""}`}
            >
              <CardRevealPart variant="icon">
                <div className="telvis-plan-top">
                  <GlassIcon icon={CalendarDays} />
                  <p className="telvis-plan-duration">{plan.title}</p>
                </div>
              </CardRevealPart>
              <CardRevealPart variant="content">
                <h3 className="telvis-plan-title">
                  <span className="telvis-plan-price">{plan.price}</span>
                </h3>
                <p className="telvis-plan-summary">{plan.summary}</p>
              </CardRevealPart>
              <CardRevealList className="telvis-feature-list">
                {plan.features.map((feature) => (
                  <CardRevealListItem key={feature}>
                    <Check size={16} strokeWidth={2.25} aria-hidden="true" />
                    <span>{feature}</span>
                  </CardRevealListItem>
                ))}
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

        <ScrollReveal delay={0.08} variant="cta">
          <div className="telvis-inline-actions is-row">
            <Link href={routes.installation} className="telvis-cta-outline">
              How to Set Up TiviMate
            </Link>
            <Link href={routes.contact} className="telvis-cta-primary">
              Ask About Plans
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
