"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  GRIDRANK_BOOKING,
  GRIDRANK_EMAIL,
  GRIDRANK_SERVICES,
} from "@/lib/gridrank";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4";
const SENSITIVITY = 0.8;
const INTRO_FADE_MS = 720;

function mailto(subject?: string) {
  return subject
    ? `mailto:${GRIDRANK_EMAIL}?subject=${encodeURIComponent(subject)}`
    : `mailto:${GRIDRANK_EMAIL}`;
}

const NAV_LINKS: { label: string; href: string; internal?: boolean }[] = [
  { label: "Services", href: GRIDRANK_SERVICES },
  { label: "Case studies", href: "/", internal: true },
  { label: "FAQ", href: "#faq" },
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
  "gr-white-pill inline-flex items-center justify-center bg-white border border-black/10 rounded-full text-[12px] min-[400px]:text-[13px] sm:text-[15px] px-3.5 sm:px-5 py-[0.35em] mx-[0.15em] mb-[0.4em] whitespace-nowrap hover:bg-black transition-colors duration-200";

const PILLS: { label: string; href: string; internal?: boolean }[] = [
  { label: "Book a consultation", href: GRIDRANK_BOOKING },
  { label: "Send a brief hello", href: mailto() },
  { label: "How We Supercharge Your Business", href: GRIDRANK_SERVICES },
  { label: "View a demo build", href: "/", internal: true },
];

export function GridRankHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef(0);
  const seekingRef = useRef(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [introIn, setIntroIn] = useState(false);
  const [restIn, setRestIn] = useState(false);
  const [copied, setCopied] = useState(false);
  const [frosted, setFrosted] = useState(false);

  const { displayed, done } = useTypewriter(
    "Glad to see someone with a creative side.\nYour website should be booking appointments while you run the business. So, what are we building?",
    38,
    INTRO_FADE_MS + 160,
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const intro = setTimeout(() => setIntroIn(true), reduce ? 0 : 40);
    const rest = setTimeout(() => setRestIn(true), reduce ? 0 : INTRO_FADE_MS);
    return () => {
      clearTimeout(intro);
      clearTimeout(rest);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    let scrolls = 0;
    let locked = false;

    const apply = () => {
      if (window.scrollY < 40) {
        scrolls = 0;
        setFrosted(false);
        return;
      }
      const leftHero = window.scrollY >= window.innerHeight * 0.55;
      setFrosted(scrolls >= 2 || leftHero);
    };

    const markScroll = () => {
      if (locked) return;
      locked = true;
      scrolls += 1;
      apply();
      window.setTimeout(() => {
        locked = false;
      }, 480);
    };

    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("wheel", markScroll, { passive: true });
    window.addEventListener("touchmove", markScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", apply);
      window.removeEventListener("wheel", markScroll);
      window.removeEventListener("touchmove", markScroll);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.pause();

    let ready = video.readyState >= 1 && Number.isFinite(video.duration);
    let stuckTimer: ReturnType<typeof setTimeout> | undefined;

    const duration = () => {
      const dur = video.duration;
      return Number.isFinite(dur) && dur > 0 ? dur : 0;
    };

    const seek = () => {
      const dur = duration();
      if (!dur || !ready) return;
      const next = Math.max(0, Math.min(dur, targetTimeRef.current));
      if (Math.abs(video.currentTime - next) < 0.01) {
        seekingRef.current = false;
        return;
      }
      seekingRef.current = true;
      video.currentTime = next;
      if (stuckTimer) clearTimeout(stuckTimer);
      stuckTimer = setTimeout(() => {
        seekingRef.current = false;
      }, 180);
    };

    const onSeeked = () => {
      if (stuckTimer) clearTimeout(stuckTimer);
      seekingRef.current = false;
      if (!duration()) return;
      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.01) {
        seek();
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      const dur = duration();
      if (!dur || !ready) return;
      if (prevXRef.current === null) {
        prevXRef.current = e.clientX;
        return;
      }
      const delta = e.clientX - prevXRef.current;
      prevXRef.current = e.clientX;
      const offset = (delta / window.innerWidth) * SENSITIVITY * dur;
      targetTimeRef.current = Math.max(
        0,
        Math.min(dur, targetTimeRef.current + offset),
      );
      if (!seekingRef.current) seek();
    };

    const onReady = () => {
      ready = true;
      video.pause();
      if (!Number.isFinite(targetTimeRef.current)) {
        targetTimeRef.current = 0;
      }
    };

    video.addEventListener("loadedmetadata", onReady);
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);
    video.addEventListener("seeked", onSeeked);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    if (video.readyState === 0) {
      video.load();
    } else {
      onReady();
    }

    return () => {
      if (stuckTimer) clearTimeout(stuckTimer);
      video.removeEventListener("loadedmetadata", onReady);
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("seeked", onSeeked);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(GRIDRANK_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard unavailable — the email is still visible on the pill.
    }
  }, []);

  return (
    <>
      <nav
        className={`gr-nav fixed inset-x-0 top-0 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5${frosted ? " is-frosted" : ""}`}
        style={{
          zIndex: 10,
          paddingTop: "max(1rem, env(safe-area-inset-top))",
        }}
        aria-label="Primary"
      >
        <Link href="/gridrank" className="flex min-w-0 items-center gap-2 sm:gap-2.5">
          <Image
            src="/images/gridrank-logo.png"
            alt="GridRank Agency logo"
            width={44}
            height={44}
            priority
            className="h-8 w-8 shrink-0 sm:h-11 sm:w-11"
          />
          <span
            className="truncate text-[19px] tracking-tight text-white sm:text-[26px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            GridRank
          </span>
        </Link>

        <div className="hidden items-center text-[18px] text-white lg:flex xl:text-[23px]">
          {NAV_LINKS.map((link, i) => (
            <span key={link.label} className="whitespace-nowrap">
              {link.internal || link.href.startsWith("#") ? (
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

        <a
          href={mailto("Start a project — GridRank")}
          className="hidden text-[18px] text-white underline underline-offset-2 transition-opacity hover:opacity-60 lg:inline-block xl:text-[23px]"
        >
          Start a project
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <span className="flex flex-col items-center justify-center gap-[5px]">
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
          </span>
        </button>
      </nav>

      <div
        className="fixed inset-0 flex flex-col justify-center gap-6 overflow-y-auto bg-black/90 px-6 backdrop-blur-md transition-opacity duration-300 sm:px-8 lg:hidden"
        style={{
          zIndex: 9,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          paddingTop: "max(5rem, env(safe-area-inset-top))",
          paddingBottom: "max(2rem, env(safe-area-inset-bottom))",
        }}
      >
        {NAV_LINKS.map((link) =>
          link.internal || link.href.startsWith("#") ? (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[28px] font-medium text-white sm:text-[32px]"
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[28px] font-medium text-white sm:text-[32px]"
            >
              {link.label}
            </a>
          ),
        )}
        <a
          href={mailto("Start a project — GridRank")}
          onClick={() => setMenuOpen(false)}
          className="text-[28px] font-medium text-white underline underline-offset-2 sm:text-[32px]"
        >
          Start a project
        </a>
      </div>

      <header className="relative min-h-dvh overflow-hidden bg-black text-white">
        <h1 className="sr-only">
          GridRank Agency builds websites that book appointments while you work
          for clinics, consultants, and service businesses in Dubai, the UK,
          Canada, and the US
        </h1>

        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 h-full w-full object-cover"
          style={{ zIndex: 0, objectPosition: "72% center" }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>

      <section
        className="relative flex min-h-dvh flex-col justify-end overflow-hidden px-5 pb-[max(3rem,env(safe-area-inset-bottom))] sm:px-8 md:justify-center md:px-10 md:pb-16"
        style={{ zIndex: 1 }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15 md:bg-gradient-to-r md:from-black/80 md:via-black/30 md:to-transparent"
        />

        <div className="relative z-10 w-full max-w-xl">
          <p
            className={`gr-enter mb-5 sm:mb-6 ${introIn ? "is-in" : ""}`}
            style={{
              fontSize: "clamp(17px, 4.2vw, 26px)",
              lineHeight: 1.3,
              fontWeight: 400,
              color: "#fff",
            }}
          >
            Hey there, meet GRID,
            <br />
            GridRank&apos;s enquiry concierge
          </p>

          <div className={`gr-enter ${restIn ? "is-in" : ""}`}>
            <p
              className="mb-5 text-white sm:mb-6"
              style={{
                fontSize: "clamp(17px, 4.2vw, 26px)",
                lineHeight: 1.35,
                fontWeight: 400,
                minHeight: "2.7em",
                whiteSpace: "pre-line",
              }}
            >
              {displayed}
              {!done ? (
                <span className="gr-cursor ml-[2px] inline-block h-[1.1em] w-[2px] bg-white align-middle" />
              ) : null}
            </p>

            <div className="flex flex-wrap gap-y-1">
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
                aria-label={`Copy email address ${GRIDRANK_EMAIL}`}
                className="mx-[0.15em] mb-[0.4em] inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-white bg-transparent px-3.5 py-[0.35em] text-[12px] text-white transition-colors duration-200 hover:bg-white hover:text-black min-[400px]:text-[13px] sm:gap-3 sm:px-5 sm:text-[15px]"
              >
                <span className="min-w-0 break-all sm:break-normal">
                  {copied ? "Copied " : "Reach us: "}
                  <span className="underline underline-offset-1">
                    {GRIDRANK_EMAIL}
                  </span>
                </span>
                <CopyIcon />
              </button>
            </div>
          </div>
        </div>
      </section>
      </header>
    </>
  );
}
