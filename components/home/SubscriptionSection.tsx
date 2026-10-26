import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes, supportConfig } from "@/lib/site";

export function SubscriptionSection() {
  return (
    <section
      id="download"
      className="telvis-section"
      aria-labelledby="download-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="download-heading"
          eyebrow="Official APK"
          title={
            <>
              Download the Official <TitleAccent>TiviMate</TitleAccent> IPTV
              Player APK
            </>
          }
          lead="Install the TiviMate IPTV player on a compatible Fire TV or Android TV device using the official download source. Open the Downloader app and enter the code below or visit the official TiviMate website to check the latest APK."
          align="center"
        />

        <div className="telvis-split" style={{ marginTop: 8 }}>
          <CardReveal delay={0.06} className="telvis-glass telvis-panel">
            <CardRevealPart variant="icon">
              <div className="telvis-panel-head">
                <GlassIcon icon={Download} />
                <h3 className="telvis-panel-title">TiviMate Downloader Code</h3>
              </div>
            </CardRevealPart>
            <CardRevealPart variant="content">
              <p
                className="telvis-plan-price"
                style={{ margin: "12px 0 8px", letterSpacing: "0.04em" }}
              >
                {supportConfig.downloaderCode}
              </p>
              <p className="telvis-info-body">
                Enter the code in the Downloader app&apos;s URL field and follow
                the on-screen instructions to continue.
              </p>
            </CardRevealPart>
          </CardReveal>

          <CardReveal delay={0.12} className="telvis-glass telvis-panel">
            <CardRevealPart variant="icon">
              <div className="telvis-panel-head">
                <GlassIcon icon={ExternalLink} />
                <h3 className="telvis-panel-title">Direct TiviMate APK Download</h3>
              </div>
            </CardRevealPart>
            <CardRevealPart variant="content">
              <p className="telvis-info-body" style={{ marginBottom: 16 }}>
                Prefer downloading on a computer or mobile device?
              </p>
              <a
                href={supportConfig.officialApkUrl}
                className="telvis-cta-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tivimate Installer APK
              </a>
            </CardRevealPart>
          </CardReveal>
        </div>

        <ScrollReveal delay={0.1} variant="cta">
          <div className="telvis-inline-actions is-row">
            <Link href={routes.installation} className="telvis-cta-outline">
              Free Installation Guide
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
