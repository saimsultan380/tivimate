import {
  buildBreadcrumbList,
  canonicalUrl,
  organizationLogoSchema,
} from "@/lib/seo";
import { installationFaqs, installationPageSeo } from "@/lib/installation-data";
import { routes, siteConfig } from "@/lib/site";

const pageUrl = canonicalUrl(routes.installation);
const homeUrl = canonicalUrl("/");

const howToSteps = [
  "Open TiviMate on your compatible TV device.",
  "Add your playlist using the supported option in TiviMate.",
  "Enter the IPTV details supplied with your subscription.",
  "Allow the playlist to load channel lists and categories.",
  "Check your channels and configure EPG where available.",
  "Create favorites and customize supported settings.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildBreadcrumbList([
      { name: "Home", path: "/" },
      { name: "Installation Guide", path: routes.installation },
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
      name: installationPageSeo.title,
      description: installationPageSeo.description,
      isPartOf: { "@id": `${homeUrl}#website` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "HowTo",
      "@id": `${pageUrl}#howto`,
      name: "TiviMate IPTV Setup Guide",
      description: installationPageSeo.description,
      step: howToSteps.map((text, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: `Step ${index + 1}`,
        text,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: installationFaqs.map((faq) => ({
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

export function GuideSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
