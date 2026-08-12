import type { Metadata } from "next";
import { GuideBeforeSection } from "@/components/installation/GuideBeforeSection";
import { GuideDevicesSection } from "@/components/installation/GuideDevicesSection";
import { GuideFaqSection } from "@/components/installation/GuideFaqSection";
import { GuideFinalCta } from "@/components/installation/GuideFinalCta";
import { GuideHero } from "@/components/installation/GuideHero";
import { GuideProblemsSection } from "@/components/installation/GuideProblemsSection";
import { GuideSchema } from "@/components/installation/GuideSchema";
import { GuideStepsSection } from "@/components/installation/GuideStepsSection";
import { installationPageSeo } from "@/lib/installation-data";
import { brandAssets, routes, siteConfig } from "@/lib/site";
import { canonicalUrl } from "@/lib/seo";

const pageUrl = canonicalUrl(routes.installation);

export const metadata: Metadata = {
  title: installationPageSeo.title,
  description: installationPageSeo.description,
  keywords: [...installationPageSeo.keywords],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: installationPageSeo.title,
    description: installationPageSeo.description,
    siteName: siteConfig.name,
    locale: "en_GB",
    images: [
      {
        url: brandAssets.ogImage,
        width: 1200,
        height: 630,
        alt: installationPageSeo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: installationPageSeo.title,
    description: installationPageSeo.description,
    images: [brandAssets.ogImage],
  },
};

export default function InstallationGuidePage() {
  return (
    <>
      <GuideSchema />
      <main>
        <GuideHero />
        <GuideBeforeSection />
        <GuideStepsSection />
        <GuideDevicesSection />
        <GuideProblemsSection />
        <GuideFaqSection />
        <GuideFinalCta />
      </main>
    </>
  );
}
