import Link from "next/link";
import {
  GRIDRANK_BOOKING,
  GRIDRANK_EMAIL,
  GRIDRANK_FAQS,
  GRIDRANK_MARKETS,
  GRIDRANK_PROCESS,
  GRIDRANK_SERVICES,
  GRIDRANK_SERVICES_PREVIEW,
} from "@/lib/gridrank";

export function GridRankContent() {
  return (
    <div className="gr-page relative z-[2] bg-[#0b0b0b] text-white">
      <section className="gr-band" aria-labelledby="gr-promise">
        <p className="gr-kicker">The website as an enquiry system</p>
        <h2 id="gr-promise" className="gr-h2">
          A website should book appointments while you run the business.
        </h2>
        <p className="gr-lead">
          GridRank Agency builds animated, high-converting websites for clinics,
          consultants, and local service businesses. Each site is connected to
          WhatsApp, Instagram, Facebook, and a booking calendar so an enquiry
          does not sit unnoticed in an inbox or a disconnected contact form.
        </p>
        <p className="gr-lead">
          Built for professionals in Dubai, the United Kingdom, Canada, and the
          United States who need the site to work as part of the business, not
          as a digital business card.
        </p>
      </section>

      <section className="gr-band" aria-labelledby="gr-funnel">
        <p className="gr-kicker">The outcome</p>
        <h2 id="gr-funnel" className="gr-h2">
          New enquiry. Booked appointment. Automatic confirmation.
        </h2>
        <ol className="gr-steps">
          <li>
            <span>01</span> A WhatsApp or form enquiry arrives
          </li>
          <li>
            <span>02</span> The visitor books against live availability
          </li>
          <li>
            <span>03</span> Confirmation and reminders go out automatically
          </li>
        </ol>
      </section>

      <section className="gr-band" aria-labelledby="gr-services">
        <p className="gr-kicker">Core services</p>
        <h2 id="gr-services" className="gr-h2">
          Website, booking, and enquiry funnels — connected before launch.
        </h2>
        <ul className="gr-list">
          {GRIDRANK_SERVICES_PREVIEW.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
        <a className="gr-text-link" href={GRIDRANK_SERVICES}>
          How we supercharge your business
        </a>
      </section>

      <section className="gr-band" aria-labelledby="gr-markets">
        <p className="gr-kicker">Markets</p>
        <h2 id="gr-markets" className="gr-h2">
          Practical local knowledge, not a list of flags.
        </h2>
        <ul className="gr-list gr-list-2">
          {GRIDRANK_MARKETS.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="gr-band" aria-labelledby="gr-process">
        <p className="gr-kicker">How the agency works</p>
        <h2 id="gr-process" className="gr-h2">
          Map the funnel. Design one action. Connect the tools. Hand it over.
        </h2>
        <ol className="gr-list">
          {GRIDRANK_PROCESS.map((item, i) => (
            <li key={item.title}>
              <h3>
                <span className="gr-num">0{i + 1}</span> {item.title}
              </h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="gr-band" aria-labelledby="gr-faq" id="faq">
        <p className="gr-kicker">Questions we hear first</p>
        <h2 id="gr-faq" className="gr-h2">
          WhatsApp, remote work, and Google rankings.
        </h2>
        <dl className="gr-faq">
          {GRIDRANK_FAQS.map((item) => (
            <div key={item.question}>
              <dt>{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="gr-band gr-cta" aria-labelledby="gr-close">
        <h2 id="gr-close" className="gr-h2">
          Ready to stop losing enquiries?
        </h2>
        <p className="gr-lead">
          Describe the business and we reply within one working day with a
          recommended scope and a fixed quote. Enquiry details are used only to
          respond. They are not sold.
        </p>
        <div className="gr-cta-row">
          <a href={GRIDRANK_BOOKING}>Book a consultation</a>
          <a href={`mailto:${GRIDRANK_EMAIL}`}>Start a project</a>
          <a href={`mailto:${GRIDRANK_EMAIL}`}>{GRIDRANK_EMAIL}</a>
        </div>
      </section>

      <footer className="gr-footer">
        <p>
          GridRank Agency designs and builds conversion-focused websites for
          clinics, consultants, and service businesses, then connects those
          sites to WhatsApp, social lead channels, booking calendars,
          notifications, and SEO foundations.
        </p>
        <nav aria-label="Footer">
          <Link href="/gridrank">Home</Link>
          <a href={GRIDRANK_SERVICES}>Services</a>
          <Link href="/">Case studies</Link>
          <a href="#faq">FAQ</a>
          <a href={`mailto:${GRIDRANK_EMAIL}`}>Contact</a>
          <a href={GRIDRANK_BOOKING}>Start a project</a>
        </nav>
        <p className="gr-fine">
          Dubai &amp; UAE · United Kingdom · Canada · United States · Response
          within one working day · © {new Date().getFullYear()} GridRank Agency
        </p>
      </footer>
    </div>
  );
}
