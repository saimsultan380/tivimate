import type { Metadata } from "next";
import { PlansBeforeOrderingSection, PlansNeedTivimateSection } from "@/components/plans/PlansNeedTivimateSection";
import { PlansCompareSection } from "@/components/plans/PlansCompareSection";
import { PlansFaqSection } from "@/components/plans/PlansFaqSection";
import { PlansFinalCta } from "@/components/plans/PlansFinalCta";
import { PlansHero } from "@/components/plans/PlansHero";
import { PlansHowSection } from "@/components/plans/PlansHowSection";
import { PlansIncludedSection } from "@/components/plans/PlansIncludedSection";
import { PlansSchema } from "@/components/plans/PlansSchema";
import { PlansWhichSection } from "@/components/plans/PlansWhichSection";
import { canonicalUrl } from "@/lib/seo";
import { plansPageSeo } from "@/lib/plans-data";
import { brandAssets, routes, siteConfig } from "@/lib/site";

const pageUrl = canonicalUrl(routes.plans);

export const metadata: Metadata = {
  title: plansPageSeo.title,
  description: plansPageSeo.description,
  keywords: [...plansPageSeo.keywords],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: plansPageSeo.title,
    description: plansPageSeo.description,
    siteName: siteConfig.name,
    locale: "en_GB",
    images: [
      {
        url: brandAssets.ogImage,
        width: 1200,
        height: 630,
        alt: plansPageSeo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: plansPageSeo.title,
    description: plansPageSeo.description,
    images: [brandAssets.ogImage],
  },
};

export default function IptvPlansPage() {
  return (
    <>
      <PlansSchema />
      <main>
        <PlansHero />
        <PlansCompareSection />
        <PlansIncludedSection />
        <PlansWhichSection />
        <PlansHowSection />
        <PlansNeedTivimateSection />
        <PlansBeforeOrderingSection />
        <PlansFaqSection />
        <PlansFinalCta />
      </main>
    </>
  );
}
