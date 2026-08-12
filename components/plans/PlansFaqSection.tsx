import { ChevronDown } from "lucide-react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";
import { planFaqs } from "@/lib/plans-data";

export function PlansFaqSection() {
  return (
    <section
      id="faq"
      className="telvis-section telvis-section-faq"
      aria-labelledby="plans-faq-heading"
    >
      <div className="telvis-section-inner telvis-faq-layout">
        <div className="telvis-faq-intro">
          <SectionHeader
            id="plans-faq-heading"
            eyebrow="FAQ"
            title={
              <>
                Frequently Asked <TitleAccent>Questions</TitleAccent>
              </>
            }
          />
        </div>

        <div className="telvis-faq-list">
          {planFaqs.map((faq, index) => (
            <CardReveal
              key={faq.question}
              as="details"
              delay={staggerDelay(index, 0.05)}
              className="telvis-glass telvis-faq-item"
            >
              <CardRevealPart as="summary" variant="content">
                <span>{faq.question}</span>
                <ChevronDown
                  className="telvis-faq-chevron"
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </CardRevealPart>
              <CardRevealPart as="p" variant="content">
                {faq.answer}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
