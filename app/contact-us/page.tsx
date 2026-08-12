import type { Metadata } from "next";
import { ContactFasterSupportSection } from "@/components/contact/ContactFasterSupportSection";
import { ContactHelpSection } from "@/components/contact/ContactHelpSection";
import { ContactUsFaq } from "@/components/contact/ContactUsFaq";
import { ContactUsFinalCta } from "@/components/contact/ContactUsFinalCta";
import { ContactUsForm } from "@/components/contact/ContactUsForm";
import { ContactUsHero } from "@/components/contact/ContactUsHero";
import { ContactUsSchema } from "@/components/contact/ContactUsSchema";
import { contactPageSeo } from "@/lib/contact-data";
import { brandAssets, routes, siteConfig } from "@/lib/site";
import { canonicalUrl } from "@/lib/seo";

const pageUrl = canonicalUrl(routes.contact);

export const metadata: Metadata = {
  title: contactPageSeo.title,
  description: contactPageSeo.description,
  keywords: [...contactPageSeo.keywords],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: contactPageSeo.title,
    description: contactPageSeo.description,
    siteName: siteConfig.name,
    locale: "en_GB",
    images: [
      {
        url: brandAssets.ogImage,
        width: 1200,
        height: 630,
        alt: contactPageSeo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: contactPageSeo.title,
    description: contactPageSeo.description,
    images: [brandAssets.ogImage],
  },
};

export default function ContactUsPage() {
  return (
    <>
      <ContactUsSchema />
      <main>
        <ContactUsHero />
        <ContactHelpSection />
        <ContactUsForm />
        <ContactFasterSupportSection />
        <ContactUsFaq />
        <ContactUsFinalCta />
      </main>
    </>
  );
}
