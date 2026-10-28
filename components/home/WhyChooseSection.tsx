import {
  Gauge,
  Heart,
  LayoutGrid,
  ListVideo,
  MonitorPlay,
  RefreshCw,
  ScrollText,
  Waypoints,
} from "lucide-react";
import Link from "next/link";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

const reasons = [
  {
    title: "TV-Friendly Electronic Programme Guide",
    body: "Navigate your TiviMate IPTV player with a familiar grid-style guide designed for remote control.",
    icon: ListVideo,
  },
  {
    title: "Smooth Live TV Navigation",
    body: "Switch between channels efficiently, with playback performance depending on your device and IPTV service.",
    icon: MonitorPlay,
  },
  {
    title: "Auto Frame Rate Support",
    body: "Enjoy smoother motion when supported devices and streams allow refresh-rate matching.",
    icon: Gauge,
  },
  {
    title: "Advanced M3U Playlist Customization",
    body: "Organize channels, hide unwanted categories, and manage supported playlists in your TiviMate Premium IPTV player.",
    icon: LayoutGrid,
  },
  {
    title: "Multiple IPTV Playlist Management",
    body: "Manage compatible playlists and organize available channels within one convenient IPTV player interface.",
    icon: Waypoints,
  },
  {
    title: "Personalized Channel Favorites",
    body: "Keep frequently watched channels accessible through customized favorites and supported playlist settings.",
    icon: Heart,
  },
  {
    title: "Flexible IPTV Provider Compatibility",
    body: "Choose an IPTV provider for TiviMate that supports compatible playlists and reliable access methods.",
    icon: RefreshCw,
  },
  {
    title: "Simple TiviMate Setup Guidance",
    body: "Follow straightforward instructions for the TiviMate IPTV player app, including playlist configuration and device setup.",
    icon: ScrollText,
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
          eyebrow="IPTV setup advantages"
          title={
            <>
              Why Choose <TitleAccent>TiviMate</TitleAccent> IPTV Player for Your
              IPTV Setup?
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

        <ScrollReveal delay={0.1} variant="cta">
          <div className="telvis-inline-actions is-center">
            <Link href={routes.plans} className="telvis-cta-primary">
              Get Started With TiviMate
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
