import { ChevronDown } from "lucide-react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";

const faqs = [
  {
    question: "What is TiviMate?",
    answer:
      "TiviMate is a media player designed for compatible TV devices. It allows users to organize and play supported IPTV playlists and other compatible media sources.",
  },
  {
    question: "Does TiviMate provide IPTV channels?",
    answer:
      "No. TiviMate is the player. You need a separate content source or IPTV subscription.",
  },
  {
    question: "Can I use an IPTV subscription with TiviMate?",
    answer:
      "Yes, when the service provides a playlist or login method supported by TiviMate.",
  },
  {
    question: "Do I need to download another IPTV player?",
    answer:
      "If your subscription works with TiviMate and your device is compatible, you can use TiviMate as your player.",
  },
  {
    question: "Can I use IPTV on Firestick with TiviMate?",
    answer:
      "Compatible Fire TV setups can be used with TiviMate. Your specific device and installation method should be checked before setup.",
  },
  {
    question: "How do I add my IPTV subscription to TiviMate?",
    answer:
      "Open TiviMate, select the playlist/add option and enter the supported details supplied by your IPTV provider.",
  },
  {
    question: "Does my IPTV subscription include TiviMate?",
    answer:
      "TiviMate is a separate application. The IPTV subscription and the player serve different purposes.",
  },
  {
    question: "What happens after I order?",
    answer:
      "You’ll receive your subscription/access information according to the activation process described on the relevant plan.",
  },
] as const;

export function FaqSection() {
  return (
    <section
      id="faq"
      className="telvis-section telvis-section-faq"
      aria-labelledby="faq-heading"
    >
      <div className="telvis-section-inner telvis-faq-layout">
        <div className="telvis-faq-intro">
          <SectionHeader
            id="faq-heading"
            eyebrow="FAQ"
            title={
              <>
                <TitleAccent>TiviMate</TitleAccent> IPTV Frequently Asked
                Questions
              </>
            }
          />
        </div>

        <div className="telvis-faq-list">
          {faqs.map((faq, index) => (
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
