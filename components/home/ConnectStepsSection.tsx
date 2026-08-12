import {
  FolderHeart,
  KeyRound,
  ListPlus,
  MonitorPlay,
  MousePointerClick,
  Sparkles,
} from "lucide-react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";

const steps = [
  {
    title: "Choose a Plan",
    body: "Select the subscription duration that suits your viewing requirements.",
    icon: MousePointerClick,
  },
  {
    title: "Receive Your Details",
    body: "Once your order has been processed, you’ll receive the information needed to configure your service.",
    icon: KeyRound,
  },
  {
    title: "Open TiviMate",
    body: "Launch TiviMate on your compatible device.",
    icon: MonitorPlay,
  },
  {
    title: "Add Your IPTV",
    body: "Enter the supported playlist or login information provided with your subscription.",
    icon: ListPlus,
  },
  {
    title: "Load Your Content",
    body: "Once the connection is successful, your available content will appear inside the player.",
    icon: Sparkles,
  },
  {
    title: "Customize Your Experience",
    body: "Set up favorites, organize categories and configure the interface around the way you watch.",
    icon: FolderHeart,
  },
] as const;

export function ConnectStepsSection() {
  return (
    <section
      id="connect"
      className="telvis-section"
      aria-labelledby="connect-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="connect-heading"
          eyebrow="Simple setup"
          title={
            <>
              A Simple Way to Connect IPTV With{" "}
              <TitleAccent>TiviMate</TitleAccent>
            </>
          }
          lead="We focus on making the process easy to understand, especially if you’re new to IPTV."
          align="center"
        />

        <div className="telvis-feature-grid">
          {steps.map((step, index) => (
            <CardReveal
              key={step.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={step.icon} />
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {index + 1}. {step.title}
              </CardRevealPart>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                {step.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
