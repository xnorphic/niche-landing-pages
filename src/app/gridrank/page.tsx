import { GridRankContent } from "@/components/gridrank/GridRankContent";
import { GridRankHero } from "@/components/gridrank/GridRankHero";
import {
  GRIDRANK_DESCRIPTION,
  GRIDRANK_EMAIL,
  GRIDRANK_FAQS,
  GRIDRANK_NAME,
  GRIDRANK_SERVICES,
  GRIDRANK_SERVICES_PREVIEW,
} from "@/lib/gridrank";
import { breadcrumbJsonLd, getSiteUrl } from "@/lib/seo";

export default function GridRankPage() {
  const site = getSiteUrl();
  const url = `${site}/gridrank`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${url}#org`,
        name: GRIDRANK_NAME,
        url,
        email: GRIDRANK_EMAIL,
        description: GRIDRANK_DESCRIPTION,
        areaServed: [
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "United States" },
        ],
        knowsAbout: [
          "Lead-generation websites",
          "Appointment booking integration",
          "WhatsApp enquiry funnels",
          "SEO foundations",
          "Conversion strategy",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "GridRank services",
          itemListElement: GRIDRANK_SERVICES_PREVIEW.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title,
              description: item.body,
              url: GRIDRANK_SERVICES,
            },
          })),
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        url,
        name: "GridRank Agency homepage",
        description: GRIDRANK_DESCRIPTION,
        isPartOf: { "@id": `${url}#website` },
        about: { "@id": `${url}#org` },
        inLanguage: "en",
      },
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        url,
        name: GRIDRANK_NAME,
        publisher: { "@id": `${url}#org` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: GRIDRANK_FAQS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      breadcrumbJsonLd([
        { name: "Home", url: site },
        { name: GRIDRANK_NAME, url },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <GridRankHero />
      <GridRankContent />
    </>
  );
}
