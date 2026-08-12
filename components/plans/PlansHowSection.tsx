import {
  KeyRound,
  ListPlus,
  LoaderCircle,
  MonitorPlay,
  MousePointerClick,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";
import { routes } from "@/lib/site";

const steps = [
  {
    number: "1",
    title: "Order",
    body: "Choose the subscription that fits your needs.",
    icon: MousePointerClick,
  },
  {
    number: "2",
    title: "Activation",
    body: "Your order is processed and your service is prepared.",
    icon: KeyRound,
  },
  {
    number: "3",
    title: "Receive Details",
    body: "You’ll receive the access information for your subscription.",
    icon: ListPlus,
  },
  {
    number: "4",
    title: "Add to TiviMate",
    body: "Enter the supported playlist or login details in TiviMate.",
    icon: MonitorPlay,
  },
  {
    number: "5",
    title: "Load Playlist",
    body: "Allow TiviMate to retrieve your available categories and channels.",
    icon: LoaderCircle,
  },
  {
    number: "6",
    title: "Watch",
    body: "Browse and start watching through the TiviMate interface.",
    icon: PlayCircle,
  },
] as const;

export function PlansHowSection() {
  return (
    <section
      id="how-it-works"
      className="telvis-section"
      aria-labelledby="plans-how-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="plans-how-heading"
          eyebrow="How it works"
          title={
            <>
              How Your Subscription Works With{" "}
              <TitleAccent>TiviMate</TitleAccent>
            </>
          }
          lead="After purchasing: Order → Activation → Receive Details → Add to TiviMate → Load Playlist → Watch"
          align="center"
        />

        <ol className="telvis-steps">
          {steps.map((step, index) => (
            <CardReveal
              key={step.number}
              as="li"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-step-card"
            >
              <CardRevealPart variant="icon">
                <div className="telvis-step-top">
                  <GlassIcon icon={step.icon} />
                  <span className="telvis-step-number" aria-hidden="true">
                    {step.number}
                  </span>
                </div>
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {step.number}. {step.title}
              </CardRevealPart>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                {step.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </ol>

        <ScrollReveal delay={0.1} variant="text">
          <p className="telvis-section-lead is-center" style={{ marginTop: 28 }}>
            Our installation guide explains the setup process step by step.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.14} variant="cta">
          <div className="telvis-inline-actions" style={{ justifyContent: "center" }}>
            <Link href={routes.installation} className="telvis-cta-primary">
              View Installation Guide
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
