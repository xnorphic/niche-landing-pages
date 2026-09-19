export const CONSENT_KEY = "gridrank-cookie-consent";
export const CONSENT_EVENT = "gridrank-consent-change";
export const CONSENT_OPEN_EVENT = "gridrank-cookie-settings";

export type ConsentChoice = "essential" | "analytics";

export type ConsentRecord = {
  choice: ConsentChoice;
  at: string;
  version: 1;
};

export function readConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed?.choice === "essential" || parsed?.choice === "analytics") {
      return parsed;
    }
  } catch {
    return null;
  }
  return null;
}

export function writeConsent(choice: ConsentChoice): ConsentRecord {
  const record: ConsentRecord = {
    choice,
    at: new Date().toISOString(),
    version: 1,
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: record }));
  return record;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

export function applyAnalyticsConsent(choice: ConsentChoice) {
  const id = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
  if (choice !== "analytics" || !id) return;
  if (typeof window.clarity === "function") return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${id}`;
  script.dataset.consent = "analytics";
  document.head.appendChild(script);
}
