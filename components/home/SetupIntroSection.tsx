import { ArrowRight, KeyRound, Link2, Server } from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";
import { routes } from "@/lib/site";

const connectionMethods = [
  {
    title: "Xtream Codes API",
    body: "Connect to TiviMate using the server URL, username, and password provided by your IPTV provider to load supported channels, categories, and EPG information.",
    icon: KeyRound,
  },
  {
    title: "M3U Playlist",
    body: "An M3U playlist contains links to media streams and may include channel names and categories, allowing TiviMate to organize compatible IPTV content.",
    icon: Link2,
  },
  {
    title: "Stalker Portal",
    body: "A Stalker Portal is middleware used by certain IPTV services to manage access. Check compatibility and provider requirements, as TiviMate may not support it natively.",
    icon: Server,
  },
] as const;

export function SetupIntroSection() {
  return (
    <section
      id="what-is-tivimate"
      className="telvis-section"
      aria-labelledby="what-is-tivimate-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="what-is-tivimate-heading"
          eyebrow="About the player"
          title={
            <>
              What Is <TitleAccent>TiviMate</TitleAccent> IPTV Player?
            </>
          }
          lead="TiviMate IPTV Player is an IPTV player designed primarily for Android TV devices, offering a TV-friendly interface to organize and watch content from compatible IPTV playlists. Instead of providing its own channels, the Tv mate IPTV player connects to a separate IPTV service through supported playlist or login methods. Depending on the provider and app version, these may include an Xtream Codes API, an M3U playlist, or a Stalker Portal."
        />

        <div className="telvis-feature-grid">
          {connectionMethods.map((method, index) => (
            <CardReveal
              key={method.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={method.icon} />
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {method.title}
              </CardRevealPart>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                {method.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>

        <ScrollReveal delay={0.08} variant="text">
          <p className="telvis-section-note is-center">
            The TiviMate IPTV player provides the interface for browsing
            compatible playlists, switching channels, and viewing programme
            information. TiviMate Premium unlocks additional features within the
            application, depending on the version and license. It does not supply
            TV channels or replace a separate IPTV subscription.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12} variant="cta">
          <div className="telvis-inline-actions is-row">
            <Link href={routes.plans} className="telvis-cta-primary">
              Buy Premium TiviMate IPTV Player
            </Link>
            <Link href={routes.installation} className="telvis-cta-outline">
              Open Setup Guide
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
