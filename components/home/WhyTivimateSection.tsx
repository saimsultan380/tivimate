import {
  Clapperboard,
  Heart,
  LayoutGrid,
  ListVideo,
  MonitorPlay,
  Search,
  Settings2,
  Tv,
} from "lucide-react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";

const features = [
  {
    title: "TV-Friendly Navigation",
    body: "Browse your content using an interface designed for television screens and remote controls.",
    icon: Tv,
  },
  {
    title: "Electronic Programme Guide",
    body: "Where programme information is supplied by your IPTV service, you can use the EPG to view schedules and upcoming programmes.",
    icon: ListVideo,
  },
  {
    title: "Favorites",
    body: "Keep the channels you watch most frequently within easy reach.",
    icon: Heart,
  },
  {
    title: "Search",
    body: "Find channels and other available content without manually scrolling through your entire playlist.",
    icon: Search,
  },
  {
    title: "Multiple Playlists",
    body: "Manage supported playlists within the same application.",
    icon: LayoutGrid,
  },
  {
    title: "Catch-Up",
    body: "Where supported by the service and playlist, access available programmes after their original broadcast.",
    icon: Clapperboard,
  },
  {
    title: "Multiview",
    body: "Use supported multiview functionality when your device, application and content source allow it.",
    icon: MonitorPlay,
  },
  {
    title: "Personalization",
    body: "Adjust supported settings and organize your viewing experience around your preferences.",
    icon: Settings2,
  },
] as const;

export function WhyTivimateSection() {
  return (
    <section
      id="why-tivimate"
      className="telvis-section"
      aria-labelledby="why-tivimate-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="why-tivimate-heading"
          eyebrow="Why TiviMate"
          title={
            <>
              Why Use <TitleAccent>TiviMate</TitleAccent> for IPTV?
            </>
          }
          lead="If you already like the TiviMate interface, there is no reason to change your player simply because you’re looking for a new IPTV subscription. TiviMate is built around television viewing and provides features intended to make large IPTV playlists easier to navigate."
          align="center"
        />

        <div className="telvis-feature-grid">
          {features.map((feature, index) => (
            <CardReveal
              key={feature.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={feature.icon} />
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {feature.title}
              </CardRevealPart>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                {feature.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>

        <ScrollReveal delay={0.08} variant="text">
          <p className="telvis-section-note is-center">
            TiviMate itself does not provide the TV channels or media content.
            Users add their own compatible content sources.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
