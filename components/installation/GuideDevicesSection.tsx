import { CheckCircle2, Tv, TvMinimal } from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealList, CardRevealListItem, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { androidTvSteps, firestickFlow } from "@/lib/installation-data";
import { routes } from "@/lib/site";

export function GuideDevicesSection() {
  return (
    <section
      id="devices"
      className="telvis-section"
      aria-labelledby="guide-devices-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="guide-devices-heading"
          eyebrow="Device guides"
          title={
            <>
              TiviMate IPTV on <TitleAccent>Firestick</TitleAccent> & Android TV
            </>
          }
          lead="Use the same core setup flow on compatible TV devices, then check device-specific notes below."
          align="center"
        />

        <div className="telvis-split telvis-split-equal">
          <CardReveal delay={0.05} className="telvis-glass telvis-panel">
            <CardRevealPart variant="icon">
              <div className="telvis-panel-head">
                <GlassIcon icon={TvMinimal} />
                <h3 className="telvis-panel-title">TiviMate IPTV on Firestick</h3>
              </div>
            </CardRevealPart>
            <CardRevealPart variant="content" as="p" className="telvis-info-body">
              The general process is:
            </CardRevealPart>
            <CardRevealPart variant="content" as="p" className="telvis-info-body">
              {firestickFlow}
            </CardRevealPart>
            <CardRevealPart variant="content" as="p" className="telvis-info-body">
              For device-specific installation instructions, use our Firestick
              guide.
            </CardRevealPart>
            <CardRevealPart variant="content" className="telvis-panel-cta">
              <Link href="#setup-steps" className="telvis-cta-primary">
                Read the Firestick Setup Guide
              </Link>
            </CardRevealPart>
          </CardReveal>

          <CardReveal delay={0.12} className="telvis-glass telvis-panel">
            <CardRevealPart variant="icon">
              <div className="telvis-panel-head">
                <GlassIcon icon={Tv} />
                <h3 className="telvis-panel-title">TiviMate IPTV on Android TV</h3>
              </div>
            </CardRevealPart>
            <CardRevealPart variant="content" as="p" className="telvis-info-body">
              On compatible Android TV devices:
            </CardRevealPart>
            <CardRevealList className="telvis-check-list">
              {androidTvSteps.map((item) => (
                <CardRevealListItem key={item}>
                  <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                  <span>{item}</span>
                </CardRevealListItem>
              ))}
            </CardRevealList>
          </CardReveal>
        </div>

        <ScrollReveal delay={0.1} variant="cta">
          <div className="telvis-inline-actions" style={{ justifyContent: "center" }}>
            <Link href={routes.plans} className="telvis-cta-outline">
              View IPTV Plans
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
