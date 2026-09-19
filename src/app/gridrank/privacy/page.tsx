import type { Metadata } from "next";
import { GridRankLegal } from "@/components/gridrank/GridRankLegal";
import { GRIDRANK_EMAIL, GRIDRANK_NAME } from "@/lib/gridrank";
import { getSiteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: `Privacy Policy | ${GRIDRANK_NAME}` },
  description:
    "How GridRank Agency collects and uses enquiry, booking, and optional analytics information for visitors in the UK, UAE, and the US. Analytics run only after you accept.",
  alternates: { canonical: "/gridrank/privacy" },
};

export default function PrivacyPage() {
  const url = `${getSiteUrl()}/gridrank/privacy`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            url,
            about: GRIDRANK_NAME,
          }),
        }}
      />
      <GridRankLegal title="Privacy Policy" updated="20 September 2026">
        <p className="gr-lead">
          {GRIDRANK_NAME} is responsible for this website. Privacy enquiries go
          to {GRIDRANK_EMAIL}. This notice is written for UK GDPR, the UAE
          Personal Data Protection Law (PDPL), and US state privacy rules. It
          is not a substitute for legal advice on your own business.
        </p>

        <h2 className="gr-h2">Information we collect</h2>
        <ul className="gr-list">
          <li>
            <h3>Enquiry information</h3>
            <p>
              Name, work email, optional phone or WhatsApp number, business
              name, market, project description, and website URL when you
              contact us.
            </p>
          </li>
          <li>
            <h3>Booking information</h3>
            <p>
              Details you give a scheduling tool when you book a consultation.
              That tool processes the data under its own terms.
            </p>
          </li>
          <li>
            <h3>Technical and usage information</h3>
            <p>
              Only if you accept analytics. Then Microsoft Clarity may record
              how you use the page so we can improve it. If you choose
              Essential only, we do not load that script.
            </p>
          </li>
          <li>
            <h3>Messages</h3>
            <p>
              Email, WhatsApp, or social messages you send us, used to reply.
            </p>
          </li>
        </ul>

        <h2 className="gr-h2">Sensitive data</h2>
        <p className="gr-lead">
          This website does not intentionally collect health data or
          children&apos;s data. Do not submit patient records or medical
          information through public forms. For healthcare enquiries we can
          route you to a call or a dedicated booking tool.
        </p>

        <h2 className="gr-h2">Why we process it</h2>
        <p className="gr-lead">
          To respond to enquiries and prepare a scope and quote (legitimate
          interests / contract steps). To keep the site secure. To improve the
          site through consented analytics. To meet legal obligations. We do
          not sell personal information.
        </p>

        <h2 className="gr-h2">Cookies</h2>
        <p className="gr-lead">
          Essential storage remembers your cookie choice so we do not ask on
          every visit. Optional analytics cookies or similar identifiers are
          used only after you click Accept analytics. You can reopen Cookie
          settings in the footer and switch to Essential only. The banner
          appears after the second scroll if you have not chosen yet.
        </p>

        <h2 className="gr-h2">Sharing and transfers</h2>
        <p className="gr-lead">
          We share information with providers needed for hosting, email, form
          storage, scheduling, and consented analytics. Because we serve the
          UAE, UK, and US, data may be processed outside your country, using
          safeguards where required.
        </p>

        <h2 className="gr-h2">Retention and rights</h2>
        <p className="gr-lead">
          Enquiry records are kept only as long as needed to handle the request
          and a reasonable follow-up, plus any project, dispute, tax, or legal
          need. Depending on where you are, you may ask to access, correct,
          delete, restrict, or object to processing, request a copy, or
          withdraw analytics consent. Contact {GRIDRANK_EMAIL}. You may also
          complain to the UK ICO, the UAE Data Office, or your US state
          attorney general.
        </p>

        <h2 className="gr-h2">Security</h2>
        <p className="gr-lead">
          The site uses HTTPS, access controls, and least-privilege practices.
          No transmission method is completely secure.
        </p>
      </GridRankLegal>
    </>
  );
}
