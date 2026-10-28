import { Box, Cpu, Smartphone, Tv, TvMinimal } from "lucide-react";
import Link from "next/link";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

const devices = [
  {
    title: "Amazon Firestick",
    body: "Install TiviMate on compatible Fire TV Stick models using an available supported installation method, then add your IPTV playlist.",
    icon: TvMinimal,
  },
  {
    title: "NVIDIA Shield TV",
    body: "Run TiviMate on this Android TV streaming device for convenient remote navigation and compatible IPTV playlist management.",
    icon: Cpu,
  },
  {
    title: "Google TV Streamer",
    body: "Use a compatible Google TV setup to access TiviMate and organize your supported IPTV channels on a television.",
    icon: Tv,
  },
  {
    title: "Xiaomi Mi Box S",
    body: "Check Play Store availability and device compatibility to install TiviMate and load your M3U playlist or supported login details.",
    icon: Box,
  },
  {
    title: "Sony BRAVIA Android TV",
    body: "Compatible Sony televisions running Android TV or Google TV can offer direct access to TiviMate without a separate streaming box.",
    icon: Tv,
  },
  {
    title: "TCL Android TV and Google TV",
    body: "Enjoy TiviMate on compatible TCL television models with supported operating systems and available app installation options.",
    icon: Tv,
  },
  {
    title: "onn. Google TV Streaming Box",
    body: "Check your model's compatibility and install TiviMate through an available supported method to manage IPTV playlists on your TV.",
    icon: Smartphone,
  },
  {
    title: "MECOOL Android TV Box",
    body: "Use a compatible MECOOL device to access TiviMate, configure your IPTV subscription, and organize supported channels and programme listings.",
    icon: Box,
  },
] as const;

export function DevicesSection() {
  return (
    <section
      id="devices"
      className="telvis-section telvis-section-devices"
      aria-labelledby="devices-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="devices-heading"
          eyebrow="Compatible devices"
          title={
            <>
              TiviMate IPTV Compatible <TitleAccent>Devices</TitleAccent>
            </>
          }
          lead="TiviMate IPTV Player is designed primarily for Android TV and compatible Fire TV devices. Choose a supported device to enjoy your IPTV playlists, browse channels, and access the electronic programme guide (EPG) on your television."
        />

        <div className="telvis-device-grid">
          {devices.map((device, index) => (
            <CardReveal
              key={device.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-device-card"
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={device.icon} className="is-large" />
              </CardRevealPart>
              <CardRevealPart variant="content">
                <h3 className="telvis-info-title">
                  {index + 1}. {device.title}
                </h3>
                <p className="telvis-info-body">{device.body}</p>
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>

        <ScrollReveal delay={0.12} variant="cta">
          <div className="telvis-inline-actions is-center">
            <Link href={routes.installation} className="telvis-cta-primary">
              Check Installation or Set Up Guides
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
