import {
  buildBreadcrumbList,
  canonicalUrl,
  organizationLogoSchema,
} from "@/lib/seo";
import { planFaqs, planRows, plansPageSeo } from "@/lib/plans-data";
import { routes, siteConfig } from "@/lib/site";

const pageUrl = canonicalUrl(routes.plans);
const homeUrl = canonicalUrl("/");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildBreadcrumbList([
      { name: "Home", path: "/" },
      { name: "IPTV Plans", path: routes.plans },
    ]),
    {
      "@type": "Organization",
      "@id": `${homeUrl}#organization`,
      name: siteConfig.name,
      url: homeUrl,
      logo: organizationLogoSchema(),
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: plansPageSeo.title,
      description: plansPageSeo.description,
      isPartOf: { "@id": `${homeUrl}#website` },
      about: { "@id": `${homeUrl}#organization` },
    },
    ...planRows.map((plan) => ({
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
        url: `${pageUrl}#plans`,
        price: plan.price.replace("$", ""),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: { "@id": `${homeUrl}#organization` },
      },
    })),
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: planFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export function PlansSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
