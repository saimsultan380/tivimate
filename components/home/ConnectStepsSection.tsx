import {
  FolderHeart,
  KeyRound,
  ListPlus,
  LoaderCircle,
  MonitorPlay,
  MousePointerClick,
} from "lucide-react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";

const steps = [
  {
    title: "Choose Your IPTV Subscription Plan",
    body: "Compare available IPTV subscription plans and select a duration that suits your viewing preferences and budget.",
    icon: MousePointerClick,
  },
  {
    title: "Receive Your IPTV Login Details",
    body: "After your order is processed, receive the playlist URL, Xtream Codes API credentials, or other supported connection details.",
    icon: KeyRound,
  },
  {
    title: "Open the TiviMate IPTV Player",
    body: "Launch TiviMate on your compatible Android TV or Fire TV device to begin configuring your IPTV playlist.",
    icon: MonitorPlay,
  },
  {
    title: "Add Your M3U Playlist or Xtream Codes API",
    body: "Choose a supported connection method and enter the IPTV playlist URL or login credentials supplied by your provider.",
    icon: ListPlus,
  },
  {
    title: "Load IPTV Channels and EPG",
    body: "Allow TiviMate to process your playlist and load available channels, categories, and electronic programme guide information where supported.",
    icon: LoaderCircle,
  },
  {
    title: "Customize Your TiviMate Experience",
    body: "Organize IPTV channels, create favorites, adjust playback settings, and personalize the TiviMate interface to suit your viewing preferences.",
    icon: FolderHeart,
  },
] as const;

export function ConnectStepsSection() {
  return (
    <section
      id="setup-steps"
      className="telvis-section"
      aria-labelledby="setup-steps-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="setup-steps-heading"
          eyebrow="Simple setup"
          title={
            <>
              How to Set Up an IPTV Subscription on{" "}
              <TitleAccent>TiviMate</TitleAccent>
            </>
          }
          lead="Connect your compatible IPTV service to the TiviMate IPTV player in six simple steps."
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
