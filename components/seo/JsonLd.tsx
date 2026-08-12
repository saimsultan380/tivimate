import { buildBreadcrumbList, canonicalUrl, organizationLogoSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const homeUrl = canonicalUrl("/");

const organization = {
  "@type": "Organization",
  "@id": `${homeUrl}#organization`,
  name: siteConfig.name,
  url: homeUrl,
  logo: organizationLogoSchema(),
};

const website = {
  "@type": "WebSite",
  "@id": `${homeUrl}#website`,
  url: homeUrl,
  name: siteConfig.name,
  publisher: { "@id": `${homeUrl}#organization` },
  inLanguage: "en-GB",
};

const products = [
  {
    name: "TiviMate IPTV 1-Month Plan",
    sku: "tivimate-1-month",
  },
  {
    name: "TiviMate IPTV 3-Month Plan",
    sku: "tivimate-3-month",
  },
  {
    name: "TiviMate IPTV 6-Month Plan",
    sku: "tivimate-6-month",
  },
  {
    name: "TiviMate IPTV 12-Month Plan",
    sku: "tivimate-12-month",
  },
].map((plan) => ({
  "@type": "Product",
  name: plan.name,
  sku: plan.sku,
  brand: {
    "@type": "Brand",
    name: siteConfig.name,
  },
  description: siteConfig.description,
  offers: {
    "@type": "Offer",
    url: `${homeUrl}#plans`,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    seller: { "@id": `${homeUrl}#organization` },
  },
}));

const faqEntities = [
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
].map((faq) => ({
  "@type": "Question",
  name: faq.question,
  acceptedAnswer: {
    "@type": "Answer",
    text: faq.answer,
  },
}));

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildBreadcrumbList([{ name: "Home", path: "/" }]),
    organization,
    website,
    ...products,
    {
      "@type": "FAQPage",
      "@id": `${homeUrl}#faq`,
      mainEntity: faqEntities,
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
