"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const EMAIL = "founder@gridrankagency.com";
const BOOKING_URL = "https://gridrankagency.com/booking";
const SERVICES_URL = "https://gridrankagency.com/services";

function mailto(subject?: string) {
  return subject
    ? `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`
    : `mailto:${EMAIL}`;
}

// Center nav destinations. Sub-pages do not exist yet on this standalone route,
// so informational links open an enquiry and "Case studies" points at the live
// demo builds (the /doctors, /interior, /hvac, /jewellery pages).
const NAV_LINKS: { label: string; href: string; internal?: boolean }[] = [
  { label: "Services", href: SERVICES_URL },
  { label: "Case studies", href: "/", internal: true },
  { label: "FAQ", href: mailto("Quick question — GridRank") },
  { label: "Contact", href: mailto() },
];

function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let i = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(
      () => {
        if (reduce) {
          setDisplayed(text);
          setDone(true);
          return;
        }
        interval = setInterval(() => {
          i += 1;
          setDisplayed(text.slice(0, i));
          if (i >= text.length) {
            if (interval) clearInterval(interval);
            setDone(true);
          }
        }, speed);
      },
      reduce ? 0 : startDelay,
    );

    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

function CopyIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" stroke="currentColor" />
      <rect x="1.5" y="1.5" width="7" height="7" rx="1.2" stroke="currentColor" />
    </svg>
  );
}

const WHITE_PILL =
  "gr-white-pill inline-flex items-center justify-center bg-white border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black transition-colors duration-200";

// Four action pills. Distinct intents so none duplicate the nav "Start a project".
const PILLS: { label: string; href: string; internal?: boolean }[] = [
  { label: "Book a consultation", href: BOOKING_URL },
  { label: "Send a brief hello", href: mailto() },
  { label: "How We Supercharge Your Business", href: SERVICES_URL },
  { label: "View a demo build", href: "/", internal: true },
];

export function GridRankHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pillsVisible, setPillsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const { displayed, done } = useTypewriter(
    "Glad to see someone with a creative side.\nYour website should be booking appointments while you run the business. So, what are we building?",
  );

  // Pills fade in 400ms after load, independent of the typewriter.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setPillsVisible(true), reduce ? 0 : 400);
    return () => clearTimeout(t);
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard unavailable — the email is still visible on the pill.
    }
  }, []);

  return (
    <div className="gridrank-root relative min-h-screen overflow-hidden text-white">
      {/* Deep-orange brand gradient background */}
      <div
        aria-hidden="true"
        className="gr-bg fixed inset-0"
        style={{ zIndex: 0 }}
      />

      {/* Navbar */}
      <nav
        className="fixed inset-x-0 top-0 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5"
        style={{ zIndex: 10 }}
      >
        <Link href="/gridrank" className="flex items-center gap-2.5">
          <Image
            src="/images/gridrank-logo.png"
            alt="GridRank Agency"
            width={44}
            height={44}
            priority
            className="h-9 w-9 sm:h-11 sm:w-11"
          />
          <span
            className="text-[21px] tracking-tight text-white sm:text-[26px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            GridRank
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center text-[23px] text-white md:flex">
          {NAV_LINKS.map((link, i) => (
            <span key={link.label} className="whitespace-nowrap">
              {link.internal ? (
                <Link
                  href={link.href}
                  className="transition-opacity hover:opacity-60"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="transition-opacity hover:opacity-60"
                >
                  {link.label}
                </a>
              )}
              {i < NAV_LINKS.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={mailto("Start a project — GridRank")}
          className="hidden text-[23px] text-white underline underline-offset-2 transition-opacity hover:opacity-60 md:inline-block"
        >
          Start a project
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className="h-[2px] w-6 bg-white transition-transform duration-300"
            style={
              menuOpen
                ? { transform: "translateY(7px) rotate(45deg)" }
                : undefined
            }
          />
          <span
            className="h-[2px] w-6 bg-white transition-opacity duration-300"
            style={menuOpen ? { opacity: 0 } : undefined}
          />
          <span
            className="h-[2px] w-6 bg-white transition-transform duration-300"
            style={
              menuOpen
                ? { transform: "translateY(-7px) rotate(-45deg)" }
                : undefined
            }
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 flex flex-col justify-center gap-8 bg-black/90 px-8 backdrop-blur-md transition-opacity duration-300 md:hidden"
        style={{
          zIndex: 9,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {NAV_LINKS.map((link) =>
          link.internal ? (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[32px] font-medium text-white"
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[32px] font-medium text-white"
            >
              {link.label}
            </a>
          ),
        )}
        <a
          href={mailto("Start a project — GridRank")}
          onClick={() => setMenuOpen(false)}
          className="text-[32px] font-medium text-white underline underline-offset-2"
        >
          Start a project
        </a>
      </div>

      {/* Hero */}
      <section
        className="relative flex h-screen flex-col justify-end overflow-hidden px-5 pb-12 sm:px-8 md:justify-center md:px-10 md:pb-0"
        style={{ zIndex: 1 }}
      >
        {/* Scrim for text legibility over the video */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 md:bg-gradient-to-r md:from-black/75 md:via-black/25 md:to-transparent"
        />

        <div className="relative z-10 max-w-xl">
          {/* Blurred intro label */}
          <p
            className="pointer-events-none mb-5 select-none sm:mb-6"
            style={{
              fontSize: "clamp(18px, 4vw, 26px)",
              lineHeight: 1.3,
              fontWeight: 400,
              color: "#fff",
              filter: "blur(4px)",
            }}
          >
            Hey there, meet GRID,
            <br />
            GridRank&apos;s enquiry concierge
          </p>

          {/* Typewriter line */}
          <p
            className="mb-5 text-white sm:mb-6"
            style={{
              fontSize: "clamp(18px, 4vw, 26px)",
              lineHeight: 1.35,
              fontWeight: 400,
              minHeight: 54,
              whiteSpace: "pre-line",
            }}
          >
            {displayed}
            {!done ? (
              <span className="gr-cursor ml-[2px] inline-block h-[1.1em] w-[2px] bg-white align-middle" />
            ) : null}
          </p>

          {/* Action pills */}
          <div
            className="flex flex-wrap gap-y-1"
            style={{
              opacity: pillsVisible ? 1 : 0,
              transform: pillsVisible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            {PILLS.map((pill) =>
              pill.internal ? (
                <Link key={pill.label} href={pill.href} className={WHITE_PILL}>
                  {pill.label}
                </Link>
              ) : (
                <a key={pill.label} href={pill.href} className={WHITE_PILL}>
                  {pill.label}
                </a>
              ),
            )}

            <button
              type="button"
              onClick={copyEmail}
              aria-label={`Copy email address ${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-transparent px-4 py-[0.3em] mx-[0.2em] mb-[0.4em] text-[13px] whitespace-nowrap text-white transition-colors duration-200 hover:bg-white hover:text-black sm:gap-3 sm:px-5 sm:text-[15px]"
            >
              <span>
                {copied ? "Copied " : "Reach us: "}
                <span className="underline underline-offset-1">{EMAIL}</span>
              </span>
              <CopyIcon />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
