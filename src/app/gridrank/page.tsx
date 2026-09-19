import { GridRankHero } from "@/components/gridrank/GridRankHero";
import { getSiteUrl } from "@/lib/seo";

export default function GridRankPage() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GridRank Agency",
    url: `${getSiteUrl()}/gridrank`,
    email: "hello@gridrank.agency",
    description:
      "Conversion-focused website and growth agency for clinics, consultants, and service businesses. Websites connected to WhatsApp, social lead forms, booking calendars, notifications, and SEO foundations.",
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
    ],
    knowsAbout: [
      "Website design",
      "Appointment booking integration",
      "WhatsApp enquiry funnels",
      "SEO foundations",
      "Conversion strategy",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />
      <GridRankHero />
    </>
  );
}
