import {
  BadgeInfo,
  Headphones,
  MonitorSmartphone,
  ScrollText,
  Waypoints,
} from "lucide-react";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";

const reasons = [
  {
    title: "Clear Information",
    body: "We explain the difference between the IPTV service and the TiviMate player so you know exactly what you’re purchasing.",
    icon: BadgeInfo,
  },
  {
    title: "Simple Setup",
    body: "Our installation instructions are written for real users rather than technical experts.",
    icon: ScrollText,
  },
  {
    title: "Flexible Plans",
    body: "Choose a subscription duration that fits your requirements.",
    icon: Waypoints,
  },
  {
    title: "Device Guidance",
    body: "Find setup information for the devices commonly used with TiviMate.",
    icon: MonitorSmartphone,
  },
  {
    title: "Support",
    body: "If you have trouble configuring your subscription, our support team is available to help according to our support policy.",
    icon: Headphones,
  },
] as const;

export function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="telvis-section telvis-section-why"
      aria-labelledby="why-choose-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="why-choose-heading"
          eyebrow="What makes us different"
          title={
            <>
              What Makes Our <TitleAccent>IPTV</TitleAccent> Setup Different?
            </>
          }
          align="center"
        />

        <div className="telvis-why-grid">
          {reasons.map((reason, index) => (
            <CardReveal
              key={reason.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-why-card"
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={reason.icon} className="is-large" />
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {reason.title}
              </CardRevealPart>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                {reason.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
