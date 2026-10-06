import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";
import { routes, supportConfig } from "@/lib/site";

export function GuideFinalCta() {
  return (
    <section
      id="need-help"
      className="telvis-section telvis-final-cta"
      aria-labelledby="guide-help-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-final-panel">
          <CardRevealPart>
            <SectionHeader
              id="guide-help-heading"
              eyebrow="Need help?"
              title={
                <>
                  Still Stuck With <TitleAccent>TiviMate</TitleAccent> Setup?
                </>
              }
              lead="If you’ve checked your credentials and followed the setup steps but still cannot connect, message us on WhatsApp."
              align="center"
              animate={false}
            />
          </CardRevealPart>

          <CardRevealPart>
            <div className="telvis-actions telvis-final-actions">
              <WhatsAppCta
                href={supportConfig.whatsappUrl}
                className="telvis-cta-primary"
                aria-label="Contact support on WhatsApp"
              >
                <MessageCircle size={16} strokeWidth={2} aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </WhatsAppCta>
              <Link href={routes.plans} className="telvis-cta-secondary">
                View IPTV Plans
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
