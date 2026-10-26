import { buildBreadcrumbList, canonicalUrl, organizationLogoSchema } from "@/lib/seo";
import { homeFaqs } from "@/lib/home-faqs";
import { planRows } from "@/lib/plans-data";
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

const products = planRows.map((plan) => ({
  "@type": "Product",
  name: `TiviMate IPTV ${plan.duration} Plan`,
  sku: `tivimate-${plan.id}`,
  brand: {
    "@type": "Brand",
    name: siteConfig.name,
  },
  description: plan.summary,
  offers: {
    "@type": "Offer",
    url: `${homeUrl}#plans`,
    price: plan.price.replace("$", ""),
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    seller: { "@id": `${homeUrl}#organization` },
  },
}));

const faqEntities = homeFaqs.map((faq) => ({
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
    {
      "@type": "WebPage",
      "@id": `${homeUrl}#webpage`,
      url: homeUrl,
      name: siteConfig.title,
      description: siteConfig.description,
      isPartOf: { "@id": `${homeUrl}#website` },
      about: { "@id": `${homeUrl}#organization` },
      breadcrumb: { "@id": `${homeUrl}#breadcrumb` },
    },
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
