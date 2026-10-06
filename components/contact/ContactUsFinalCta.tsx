import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";
import { routes, supportConfig } from "@/lib/site";

export function ContactUsFinalCta() {
  return (
    <section
      id="get-started"
      className="telvis-section telvis-final-cta"
      aria-labelledby="contact-final-cta-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-final-panel">
          <CardRevealPart>
            <SectionHeader
              id="contact-final-cta-heading"
              eyebrow="We’re here to help"
              title={
                <>
                  We&apos;re Here to <TitleAccent>Help</TitleAccent>
                </>
              }
              lead="Whether you’re choosing a plan, setting up your IPTV or troubleshooting an issue, message us on WhatsApp for faster support."
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
              <Link href={routes.installation} className="telvis-cta-secondary">
                View Installation Guide
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
