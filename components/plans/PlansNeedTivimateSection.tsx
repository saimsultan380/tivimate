import { CheckCircle2, Info, MonitorSmartphone } from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealList, CardRevealListItem, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { beforeOrderingChecks } from "@/lib/plans-data";
import { routes } from "@/lib/site";

export function PlansNeedTivimateSection() {
  return (
    <section
      id="need-tivimate"
      className="telvis-section"
      aria-labelledby="need-tivimate-heading"
    >
      <div className="telvis-section-inner">
        <div className="telvis-split">
          <div className="telvis-split-copy">
            <SectionHeader
              id="need-tivimate-heading"
              eyebrow="Player & service"
              title={
                <>
                  Do I Need <TitleAccent>TiviMate</TitleAccent>?
                </>
              }
              lead="TiviMate is a separate media player. If you already use TiviMate and your device is compatible, you can use it to access a supported IPTV playlist from your subscription."
            />
            <ScrollReveal delay={0.08} variant="text">
              <p className="telvis-section-lead">
                If you&apos;re not using TiviMate yet, check your device
                compatibility and follow the appropriate installation
                instructions.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.12} variant="cta">
              <div className="telvis-inline-actions is-row">
                <Link href={routes.installation} className="telvis-cta-primary">
                  Open Setup Guide
                </Link>
                <Link href={routes.home} className="telvis-cta-outline">
                  Back to Homepage
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <CardReveal delay={0.1} className="telvis-glass telvis-panel">
            <CardRevealPart variant="icon">
              <div className="telvis-panel-head">
                <GlassIcon icon={MonitorSmartphone} />
                <h3 className="telvis-panel-title">Player vs subscription</h3>
              </div>
            </CardRevealPart>
            <CardRevealPart variant="content" as="p" className="telvis-info-body">
              TiviMate organises and plays supported IPTV playlists. Your IPTV
              subscription provides the service, access details and content
              source you add to the player.
            </CardRevealPart>
          </CardReveal>
        </div>
      </div>
    </section>
  );
}

export function PlansBeforeOrderingSection() {
  return (
    <section
      id="before-ordering"
      className="telvis-section"
      aria-labelledby="before-ordering-heading"
    >
      <div className="telvis-section-inner">
        <div className="telvis-split">
          <div className="telvis-split-copy">
            <SectionHeader
              id="before-ordering-heading"
              eyebrow="Before you buy"
              title={
                <>
                  Before <TitleAccent>Ordering</TitleAccent>
                </>
              }
              lead="Please check the points below before choosing a plan."
            />
          </div>

          <CardReveal delay={0.1} className="telvis-glass telvis-panel">
            <CardRevealPart variant="icon">
              <div className="telvis-panel-head">
                <GlassIcon icon={Info} />
                <h3 className="telvis-panel-title">Checklist</h3>
              </div>
            </CardRevealPart>
            <CardRevealList className="telvis-check-list">
              {beforeOrderingChecks.map((item) => (
                <CardRevealListItem key={item}>
                  <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                  <span>{item}</span>
                </CardRevealListItem>
              ))}
            </CardRevealList>
          </CardReveal>
        </div>
      </div>
    </section>
  );
}
