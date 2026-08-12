import type { Metadata } from "next";
import { AlreadyHaveSection } from "@/components/home/AlreadyHaveSection";
import { ConnectStepsSection } from "@/components/home/ConnectStepsSection";
import { DevicesSection } from "@/components/home/DevicesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { PlansSection } from "@/components/home/PlansSection";
import { SetupIntroSection } from "@/components/home/SetupIntroSection";
import { StepsSection } from "@/components/home/StepsSection";
import { SubscriptionSection } from "@/components/home/SubscriptionSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { WhyTivimateSection } from "@/components/home/WhyTivimateSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { canonicalUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: canonicalUrl("/"),
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <main>
        <HeroSection />
        <SetupIntroSection />
        <ConnectStepsSection />
        <WhyTivimateSection />
        <SubscriptionSection />
        <PlansSection />
        <StepsSection />
        <DevicesSection />
        <AlreadyHaveSection />
        <WhyChooseSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
    </>
  );
}
