import {
  buildBreadcrumbList,
  canonicalUrl,
  organizationLogoSchema,
} from "@/lib/seo";
import { contactFaqs, contactPageSeo } from "@/lib/contact-data";
import { routes, siteConfig, supportConfig } from "@/lib/site";

const pageUrl = canonicalUrl(routes.contact);
const homeUrl = canonicalUrl("/");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildBreadcrumbList([
      { name: "Home", path: "/" },
      { name: "Contact Us", path: routes.contact },
    ]),
    {
      "@type": "Organization",
      "@id": `${homeUrl}#organization`,
      name: siteConfig.name,
      url: homeUrl,
      logo: organizationLogoSchema(),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: supportConfig.email,
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "ContactPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: contactPageSeo.title,
      description: contactPageSeo.description,
      isPartOf: { "@id": `${homeUrl}#website` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: contactFaqs.map((faq) => ({
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

export function ContactUsSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
