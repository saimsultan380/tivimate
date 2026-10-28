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
import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

const features = [
  {
    title: "TV-Friendly Interface and Navigation",
    body: "Navigate IPTV channels using a clean interface designed for television screens and remote controls, making large playlists easier to browse.",
    icon: Tv,
  },
  {
    title: "Electronic Programme Guide (EPG)",
    body: "View channel schedules and upcoming programmes when your IPTV provider supplies compatible EPG data.",
    icon: ListVideo,
  },
  {
    title: "Favorite Channels",
    body: "Add frequently watched channels to your favorites list for quicker access to your preferred content.",
    icon: Heart,
  },
  {
    title: "Channel Search and Categories",
    body: "Find channels more easily using supported search features and organized playlist categories instead of scrolling through long lists.",
    icon: Search,
  },
  {
    title: "Multiple IPTV Playlists",
    body: "Manage multiple supported IPTV playlists within the application, depending on your TiviMate version and available features.",
    icon: LayoutGrid,
  },
  {
    title: "Catch-Up TV Support",
    body: "Access previously broadcast programmes when your IPTV service provides compatible catch-up functionality.",
    icon: Clapperboard,
  },
  {
    title: "Multiview Functionality",
    body: "Use supported multiview features to watch multiple streams simultaneously, subject to your device, application version, and content source.",
    icon: MonitorPlay,
  },
  {
    title: "Personalized Playback Settings",
    body: "Adjust available playback and interface settings to create an IPTV viewing experience that suits your preferences.",
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
              Why Choose <TitleAccent>TiviMate</TitleAccent> IPTV Player for Your
              IPTV Subscription?
            </>
          }
          lead="TiviMate IPTV Player offers a TV-friendly way to organize and watch content through compatible IPTV playlists. If you are looking for an IPTV provider for TiviMate, consider choosing us because of the following reasons:"
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
            Important: TiviMate is an IPTV player, not an IPTV content provider.
            You need a separate compatible IPTV subscription for channels and
            streams. TiviMate Premium unlocks additional player features but does
            not include channels or a subscription.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12} variant="cta">
          <div className="telvis-inline-actions is-center">
            <Link href={routes.plans} className="telvis-cta-primary">
              View IPTV Plans
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
