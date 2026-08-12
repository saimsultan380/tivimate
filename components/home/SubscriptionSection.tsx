import {
  Clapperboard,
  Film,
  FolderOpen,
  ListVideo,
  MonitorPlay,
  Radio,
  Trophy,
  Tv,
} from "lucide-react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";

const inclusions = [
  { title: "Live TV", icon: Tv },
  { title: "Sports", icon: Trophy },
  { title: "Movies", icon: Film },
  { title: "TV series", icon: Clapperboard },
  { title: "Programme information", icon: ListVideo },
  { title: "Catch-up where available", icon: Radio },
  { title: "Different content categories", icon: FolderOpen },
  { title: "Available HD, Full HD or 4K streams", icon: MonitorPlay },
] as const;

export function SubscriptionSection() {
  return (
    <section
      id="subscription"
      className="telvis-section"
      aria-labelledby="subscription-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="subscription-heading"
          eyebrow="IPTV subscription"
          title={
            <>
              IPTV Subscription for <TitleAccent>TiviMate</TitleAccent>
            </>
          }
          lead="Looking for an IPTV subscription because TiviMate is already your preferred player? Our service provides the IPTV access described in each plan and can be used with TiviMate where the required playlist or login method is supported."
          align="center"
        />

        <ScrollReveal variant="text">
          <p className="telvis-section-lead is-center" style={{ marginBottom: 28 }}>
            Depending on your selected service and plan, your subscription may
            provide access to:
          </p>
        </ScrollReveal>

        <div className="telvis-bento">
          {inclusions.map((item, index) => (
            <CardReveal
              key={item.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-bento-card"
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
            Supported IPTV playlist access depends on your plan. Only the exact
            content, quality, connections and features your service actually
            provides are included.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
