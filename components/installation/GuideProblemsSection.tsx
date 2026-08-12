import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { CardReveal, CardRevealList, CardRevealListItem, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";
import { commonProblems } from "@/lib/installation-data";

export function GuideProblemsSection() {
  return (
    <section
      id="troubleshooting"
      className="telvis-section"
      aria-labelledby="problems-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="problems-heading"
          eyebrow="Troubleshooting"
          title={
            <>
              Common <TitleAccent>TiviMate</TitleAccent> IPTV Problems
            </>
          }
          lead="Use these checks before assuming the player itself is the issue."
          align="center"
        />

        <div className="telvis-feature-grid">
          {commonProblems.map((problem, index) => (
            <CardReveal
              key={problem.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={AlertTriangle} />
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {problem.title}
              </CardRevealPart>
              {problem.intro ? (
                <CardRevealPart variant="content" as="p" className="telvis-info-body">
                  {problem.intro}
                </CardRevealPart>
              ) : null}
              <CardRevealList className="telvis-check-list">
                {problem.items.map((item) => (
                  <CardRevealListItem key={item}>
                    <CheckCircle2 size={16} strokeWidth={2} aria-hidden="true" />
                    <span>{item}</span>
                  </CardRevealListItem>
                ))}
              </CardRevealList>
              {"note" in problem && problem.note ? (
                <CardRevealPart variant="content" as="p" className="telvis-info-body">
                  {problem.note}
                </CardRevealPart>
              ) : null}
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
