import {
  FolderHeart,
  ListPlus,
  ListVideo,
  LoaderCircle,
  MonitorPlay,
  Search,
  Settings2,
  Sparkles,
} from "lucide-react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";
import { setupSteps } from "@/lib/installation-data";

const stepIcons = [
  MonitorPlay,
  ListPlus,
  Search,
  LoaderCircle,
  ListVideo,
  Sparkles,
  FolderHeart,
  Settings2,
] as const;

export function GuideStepsSection() {
  return (
    <section
      id="setup-steps"
      className="telvis-section"
      aria-labelledby="setup-steps-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="setup-steps-heading"
          eyebrow="Setup steps"
          title={
            <>
              Connect IPTV to <TitleAccent>TiviMate</TitleAccent> Step by Step
            </>
          }
          lead="Follow these steps in order. Exact screens can vary by TiviMate version and device."
          align="center"
        />

        <ol className="telvis-steps">
          {setupSteps.map((step, index) => {
            const Icon = stepIcons[index] ?? MonitorPlay;
            return (
              <CardReveal
                key={step.number}
                as="li"
                delay={staggerDelay(index)}
                className="telvis-glass telvis-step-card"
              >
                <CardRevealPart variant="icon">
                  <div className="telvis-step-top">
                    <GlassIcon icon={Icon} />
                    <span className="telvis-step-number" aria-hidden="true">
                      {step.number}
                    </span>
                  </div>
                </CardRevealPart>
                <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                  Step {step.number} — {step.title}
                </CardRevealPart>
                <CardRevealPart variant="content" as="p" className="telvis-info-body">
                  {step.body}
                </CardRevealPart>
              </CardReveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
