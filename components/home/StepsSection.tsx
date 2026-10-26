import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { blogPostPath, blogSlugs } from "@/lib/blog-posts";
import { routes } from "@/lib/site";

const comparisonRows = [
  ["IPTV playlist support", "Limited", "Multiple playlists"],
  ["Live TV playback", "Yes", "Yes"],
  ["Electronic Programme Guide (EPG)", "Basic support", "Additional EPG options"],
  ["Channel search", "Yes", "Yes"],
  ["Favorite channels", "Limited options", "Advanced management"],
  [
    "Catch-up TV",
    "Limited or unavailable",
    "Supported with compatible services",
  ],
  ["Recording", "Limited or unavailable", "Supported"],
  [
    "Multiview",
    "Not available or limited",
    "Supported on compatible devices",
  ],
  ["Playlist management", "Basic", "Advanced"],
  ["Customization options", "Limited", "More options"],
  ["Parental controls", "Limited", "Additional controls"],
  ["IPTV subscription included", "No", "No"],
] as const;

export function StepsSection() {
  return (
    <section
      id="free-vs-premium"
      className="telvis-section telvis-section-steps"
      aria-labelledby="free-vs-premium-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="free-vs-premium-heading"
          eyebrow="Feature comparison"
          title={
            <>
              TiviMate Free vs. Premium: Best{" "}
              <TitleAccent>Feature</TitleAccent> Comparison
            </>
          }
          lead="TiviMate offers a free version for basic IPTV playback and a Premium upgrade that unlocks additional features. Compare the options below to decide which version suits your viewing needs. Feature availability may vary by app version."
          align="center"
        />

        <ScrollReveal delay={0.06} variant="media">
          <div className="telvis-table-wrap">
            <table className="telvis-table">
              <thead>
                <tr>
                  <th scope="col">Features</th>
                  <th scope="col">TiviMate Free</th>
                  <th scope="col">TiviMate Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([feature, free, premium]) => (
                  <tr key={feature}>
                    <th scope="row">{feature}</th>
                    <td>{free}</td>
                    <td>{premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} variant="text">
          <p className="telvis-section-note is-center">
            <strong>Which should you choose?</strong> The free version is a good
            starting point for basic IPTV playback. TiviMate Premium is worth
            considering if you need advanced playlist management, recording,
            multiview, or additional customization.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.14} variant="cta">
          <div className="telvis-inline-actions is-row">
            <Link href={routes.plans} className="telvis-cta-primary">
              Explore Tivimate Subscription Plans
            </Link>
            <Link
              href={blogPostPath(blogSlugs.premiumVsFree)}
              className="telvis-cta-outline"
            >
              Read Full Premium vs Free Guide
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
