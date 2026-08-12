import { Box, Cpu, Tv, TvMinimal } from "lucide-react";
import Link from "next/link";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

const devices = [
  {
    title: "Amazon Fire TV / Firestick",
    body: "Compatible Fire TV and Firestick devices can be used with TiviMate. Confirm your model and installation method before setup.",
    icon: TvMinimal,
  },
  {
    title: "Android TV",
    body: "TiviMate is designed for compatible Android TV devices and offers a TV-friendly interface for managing IPTV playlists.",
    icon: Tv,
  },
  {
    title: "Google TV devices",
    body: "Supported Google TV setups can run TiviMate where the device and OS requirements are met.",
    icon: Tv,
  },
  {
    title: "Android TV boxes",
    body: "Many Android TV boxes support TiviMate. Always check your particular device before ordering.",
    icon: Box,
  },
  {
    title: "NVIDIA Shield and similar hardware",
    body: "Compatible Android TV hardware such as NVIDIA Shield can be used where TiviMate is supported.",
    icon: Cpu,
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
              Compatible Devices for <TitleAccent>TiviMate</TitleAccent>
            </>
          }
          lead="TiviMate is designed for compatible Android TV devices. Its official information also distinguishes TV devices from phones and tablets. Your IPTV service can potentially be used on supported setups such as:"
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
                <h3 className="telvis-info-title">{device.title}</h3>
                <p className="telvis-info-body">{device.body}</p>
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>

        <ScrollReveal delay={0.08} variant="text">
          <p className="telvis-section-note">
            Always confirm your particular device and service compatibility before
            ordering.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12} variant="cta">
          <div className="telvis-inline-actions">
            <Link href={routes.installation} className="telvis-cta-primary">
              Open the TiviMate Setup Guide
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
