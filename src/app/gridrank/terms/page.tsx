import type { Metadata } from "next";
import { GridRankLegal } from "@/components/gridrank/GridRankLegal";
import { GRIDRANK_NAME } from "@/lib/gridrank";
import { getSiteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: `Terms and Conditions | ${GRIDRANK_NAME}` },
  description:
    "Terms for using the GridRank Agency website and engaging the agency. Paid work is governed by a written proposal. Results are not guaranteed.",
  alternates: { canonical: "/gridrank/terms" },
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms and Conditions",
            url: `${getSiteUrl()}/gridrank/terms`,
          }),
        }}
      />
      <GridRankLegal title="Terms and Conditions" updated="20 September 2026">
        <p className="gr-lead">
          This website is aimed at business customers. Service descriptions are
          general. Paid work is governed by a written proposal, statement of
          work, or invoice. Promotional consultation prices can expire.
          GridRank may decline projects that are not a good fit.
        </p>
        <p className="gr-lead">
          You may not misuse, attack, scrape abusively, or introduce malware
          into the site. Site design, copy, logos, and code are protected
          intellectual property. Client project ownership or licensing is set
          by the relevant project agreement. Third-party tools (WhatsApp,
          calendars, advertising platforms, analytics) operate under their own
          terms.
        </p>
        <p className="gr-lead">
          Results are not guaranteed. Industry compliance — including
          healthcare privacy — remains the client&apos;s responsibility.
          Liability is limited to the extent permitted by law. These terms use
          England and Wales as the governing-law framework, subject to
          mandatory local protections in the UAE, the UK, and the US.
        </p>
      </GridRankLegal>
    </>
  );
}
