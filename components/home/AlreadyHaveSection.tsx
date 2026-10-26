import { BookOpen, Headphones, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

const paths = [
  {
    title: "Buy an IPTV Subscription",
    body: "Explore available plans and choose a compatible IPTV service for your Tv mate IPTV player.",
    href: routes.plans,
    cta: "View IPTV Plans",
    icon: ShoppingCart,
  },
  {
    title: "Set Up Your IPTV Playlist",
    body: "Already subscribed? Follow our step-by-step guide to connect your IPTV service to TiviMate.",
    href: routes.installation,
    cta: "Open Installation Guide",
    icon: BookOpen,
  },
  {
    title: "Need Technical Assistance?",
    body: "Contact our support team with your device details and a brief description of the issue.",
    href: routes.contact,
    cta: "Contact Support",
    icon: Headphones,
  },
] as const;

export function AlreadyHaveSection() {
  return (
    <section
      id="already-have"
      className="telvis-section"
      aria-labelledby="already-have-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="already-have-heading"
          eyebrow="Next step"
          title={
            <>
              Already Using <TitleAccent>TiviMate</TitleAccent> IPTV Player?
            </>
          }
          lead="Whether you need an IPTV subscription, help setting up your playlist, or assistance with a connection issue, choose the next step that suits your needs."
          align="center"
        />

        <div className="telvis-why-grid">
          {paths.map((path, index) => (
            <CardReveal
              key={path.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-why-card"
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={path.icon} className="is-large" />
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {path.title}
              </CardRevealPart>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                {path.body}
              </CardRevealPart>
              <CardRevealPart variant="content">
                <Link href={path.href} className="telvis-text-link">
                  {path.cta}
                </Link>
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
