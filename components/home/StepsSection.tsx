import {
  KeyRound,
  ListPlus,
  LoaderCircle,
  MonitorPlay,
  MousePointerClick,
  PlayCircle,
} from "lucide-react";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "1",
    title: "Select Your Subscription",
    body: "Choose the plan that suits you.",
    icon: MousePointerClick,
  },
  {
    number: "2",
    title: "Receive Your Access",
    body: "Your subscription details are provided after activation.",
    icon: KeyRound,
  },
  {
    number: "3",
    title: "Open TiviMate",
    body: "Launch the player on your compatible device.",
    icon: MonitorPlay,
  },
  {
    number: "4",
    title: "Add Your Playlist",
    body: "Enter the supported information supplied with your subscription.",
    icon: ListPlus,
  },
  {
    number: "5",
    title: "Allow the Playlist to Load",
    body: "TiviMate will retrieve the available information from the configured source.",
    icon: LoaderCircle,
  },
  {
    number: "6",
    title: "Start Watching",
    body: "Browse your available categories and channels through the TiviMate interface.",
    icon: PlayCircle,
  },
] as const;

export function StepsSection() {
  return (
    <section
      id="steps"
      className="telvis-section telvis-section-steps"
      aria-labelledby="steps-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="steps-heading"
          eyebrow="How it works"
          title={
            <>
              How IPTV Works With <TitleAccent>TiviMate</TitleAccent>
            </>
          }
          lead="You don’t need to be an IPTV expert."
          align="center"
        />

        <ol className="telvis-steps">
          {steps.map((step, index) => (
            <CardReveal
              key={step.number}
              as="li"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-step-card"
            >
              <CardRevealPart variant="icon">
                <div className="telvis-step-top">
                  <GlassIcon icon={step.icon} />
                  <span className="telvis-step-number" aria-hidden="true">
                    {step.number}
                  </span>
                </div>
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {step.number}. {step.title}
              </CardRevealPart>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                {step.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
