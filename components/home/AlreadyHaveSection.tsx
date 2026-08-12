import { BookOpen, Headphones, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

const paths = [
  {
    title: "Looking for IPTV?",
    body: "View the available subscription plans.",
    href: routes.plans,
    cta: "View IPTV Plans",
    icon: ShoppingCart,
  },
  {
    title: "Already have your subscription?",
    body: "Follow the installation guide.",
    href: routes.installation,
    cta: "Open Installation Guide",
    icon: BookOpen,
  },
  {
    title: "Having trouble?",
    body: "Contact support and tell us what device you’re using and what you’re experiencing.",
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
              Already Have <TitleAccent>TiviMate</TitleAccent>?
            </>
          }
          lead="If TiviMate is already installed, you’re ready to move to the next step."
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
