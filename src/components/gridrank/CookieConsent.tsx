"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  applyAnalyticsConsent,
  CONSENT_EVENT,
  CONSENT_OPEN_EVENT,
  readConsent,
  writeConsent,
  type ConsentChoice,
} from "@/lib/gridrank-consent";

function subscribeConsent(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  return () => window.removeEventListener(CONSENT_EVENT, onChange);
}

function consentSnapshot(): ConsentChoice | "" {
  return readConsent()?.choice ?? "";
}

export function CookieConsent() {
  const choice = useSyncExternalStore(
    subscribeConsent,
    consentSnapshot,
    () => "" as const,
  );
  const hasChoice = choice === "essential" || choice === "analytics";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (choice === "analytics" || choice === "essential") {
      applyAnalyticsConsent(choice);
    }
  }, [choice]);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (hasChoice) return;

    let scrolls = 0;
    let locked = false;

    const markScroll = () => {
      if (locked) return;
      locked = true;
      scrolls += 1;
      if (scrolls >= 2) setOpen(true);
      window.setTimeout(() => {
        locked = false;
      }, 480);
    };

    const onKey = (e: KeyboardEvent) => {
      if (
        e.key === "PageDown" ||
        e.key === "ArrowDown" ||
        e.key === " " ||
        e.key === "Spacebar"
      ) {
        markScroll();
      }
    };

    window.addEventListener("wheel", markScroll, { passive: true });
    window.addEventListener("touchmove", markScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", markScroll);
      window.removeEventListener("touchmove", markScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, [hasChoice]);

  const choose = (next: ConsentChoice) => {
    writeConsent(next);
    applyAnalyticsConsent(next);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="gr-cookie"
      role="dialog"
      aria-modal="false"
      aria-labelledby="gr-cookie-title"
      aria-describedby="gr-cookie-copy"
    >
      <h2 id="gr-cookie-title">Cookies and analytics</h2>
      <p id="gr-cookie-copy">
        Essential cookies keep this site working and remember this choice. Optional
        analytics (Microsoft Clarity, only if you accept) help us see how the
        page is used. We do not sell personal information. Under UK GDPR, UAE
        PDPL, and US state privacy laws you can refuse analytics with one click
        and change your mind later. Formal legal advice for your own business
        remains yours.
      </p>
      <p className="gr-cookie-note">
        Do not send patient records or children&apos;s data through public forms.{" "}
        <Link href="/gridrank/privacy">Privacy Policy</Link>
        {" · "}
        <Link href="/gridrank/terms">Terms</Link>
      </p>
      <div className="gr-cookie-actions">
        <button type="button" onClick={() => choose("essential")}>
          Essential only
        </button>
        <button type="button" onClick={() => choose("analytics")}>
          Accept analytics
        </button>
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="gr-cookie-reset"
      onClick={() => {
        window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
      }}
    >
      Cookie settings
    </button>
  );
}
