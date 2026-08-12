import {
  Clapperboard,
  Film,
  Headphones,
  ListVideo,
  MonitorPlay,
  Radio,
  Trophy,
  Tv,
  Users,
} from "lucide-react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";

const inclusions = [
  { title: "Live TV", icon: Tv },
  { title: "Sports", icon: Trophy },
  { title: "Movies", icon: Film },
  { title: "TV series", icon: Clapperboard },
  { title: "EPG", icon: ListVideo },
  { title: "Catch-up", icon: Radio },
  { title: "Available HD/FHD/4K streams", icon: MonitorPlay },
  { title: "Supported playlist access", icon: ListVideo },
  { title: "Connection allowance confirmed at checkout", icon: Users },
  { title: "Support included with your subscription", icon: Headphones },
] as const;

export function PlansIncludedSection() {
  return (
    <section
      id="included"
      className="telvis-section"
      aria-labelledby="plans-included-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="plans-included-heading"
          eyebrow="What’s included"
          title={
            <>
              What&apos;s <TitleAccent>Included</TitleAccent>?
            </>
          }
          lead="Your selected plan includes the services and features stated on the plan. Depending on the actual package, this may include:"
          align="center"
        />

        <div className="telvis-feature-grid">
          {inclusions.map((item, index) => (
            <CardReveal
              key={item.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={item.icon} />
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {item.title}
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
