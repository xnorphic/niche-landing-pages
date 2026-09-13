import { getSiteUrl } from "@/lib/seo";
import type { NicheConfig } from "@/lib/types";

export function JsonLd({ config }: { config: NicheConfig }) {
  const site = getSiteUrl();
  const url = `${site}/${config.slug}`;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": config.schemaType,
    name: config.businessName,
    description: config.seo.description,
    url,
    image: `${site}${config.heroImage}`,
    telephone: config.secondaryCta,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.footerTrust.address,
      addressLocality: config.city,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: config.reviewSummary.score,
      reviewCount: config.reviewSummary.count,
      bestRating: "5",
    },
    priceRange: "$$",
    sameAs: config.social
      .map((s) => s.url)
      .filter((u) => !u.startsWith("{{")),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site },
      {
        "@type": "ListItem",
        position: 2,
        name: config.businessName,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
