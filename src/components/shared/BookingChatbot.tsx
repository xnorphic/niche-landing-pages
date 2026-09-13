"use client";

import { ChatCircle, X } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import type { NicheConfig } from "@/lib/types";
import { whatsappHref } from "@/lib/utils";

const SESSION_KEY = "chatbot-opened";

type LeadValues = {
  name: string;
  email: string;
  phone: string;
};

const EMPTY_LEAD: LeadValues = { name: "", email: "", phone: "" };

function newCaptcha() {
  return {
    a: Math.floor(Math.random() * 8) + 1,
    b: Math.floor(Math.random() * 8) + 1,
  };
}

function buildMessage(config: NicheConfig, values: LeadValues) {
  const lines = [
    `Hello, I'm reaching out via ${config.businessName}.`,
    `Intent: ${config.bookingIntent}`,
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim()}`,
  ];
  return lines.join("\n");
}

export function BookingChatbot({ config }: { config: NicheConfig }) {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [values, setValues] = useState<LeadValues>(EMPTY_LEAD);
  // Deterministic initial value (never shown) so SSR/hydration stay stable;
  // a real random captcha is generated in openDialog before the dialog appears.
  const [captcha, setCaptcha] = useState({ a: 0, b: 0 });
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [error, setError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

  const close = useCallback(() => {
    setOpen(false);
    setCollapsed(true);
  }, []);

  const openDialog = useCallback(() => {
    setCaptcha(newCaptcha());
    setCaptchaAnswer("");
    setError(null);
    setOpen(true);
    setCollapsed(false);
  }, []);

  const tryAutoOpen = useCallback(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    openDialog();
  }, [openDialog]);

  useEffect(() => {
    const onOpen = () => openDialog();
    window.addEventListener("open-chatbot", onOpen);
    return () => window.removeEventListener("open-chatbot", onOpen);
  }, [openDialog]);

  useEffect(() => {
    const timer = setTimeout(tryAutoOpen, 12000);
    const onScroll = () => {
      const depth =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      if (depth >= 0.55) {
        tryAutoOpen();
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [tryAutoOpen]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const setField = (key: keyof LeadValues, v: string) =>
    setValues((prev) => ({ ...prev, [key]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Number(captchaAnswer.trim()) !== captcha.a + captcha.b) {
      setError("That answer isn't quite right. Please try again.");
      setCaptcha(newCaptcha());
      setCaptchaAnswer("");
      return;
    }
    setError(null);

    const message = buildMessage(config, values);
    const payload = { niche: config.id, intent: "booking", ...values, message };

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      /* stub — lead may still go via WhatsApp */
    }

    window.open(
      whatsappHref(whatsappNumber, message),
      "_blank",
      "noopener,noreferrer",
    );
    close();
  };

  return (
    <>
      <AnimatePresence>
        {open && !collapsed ? (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="chatbot-title"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={
              reduced
                ? { duration: 0 }
                : { type: "spring", stiffness: 100, damping: 20 }
            }
            className="niche-glass fixed bottom-20 right-4 z-50 flex max-h-[calc(100dvh-6rem)] w-[min(100vw-2rem,20rem)] flex-col overflow-hidden md:bottom-24 md:right-6"
            style={{ borderRadius: "var(--niche-radius-card)" }}
          >
            <div className="flex items-start justify-between gap-3 px-5 pt-5">
              <div>
                <h2 id="chatbot-title" className="text-base font-semibold">
                  {config.businessName}
                </h2>
                <p className="niche-text-secondary text-xs">
                  Leave your details and we will be in touch.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={close}
                className="niche-glass-input inline-flex h-8 w-8 shrink-0 items-center justify-center"
                style={{ borderRadius: "9999px" }}
              >
                <X size={16} weight="bold" />
              </button>
            </div>

            <form
              onSubmit={submit}
              className="grid gap-3 overflow-y-auto px-5 pb-5 pt-4"
              style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
            >
              <label className="grid gap-1 text-sm" htmlFor="lead-name">
                <span>Full name</span>
                <input
                  id="lead-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={values.name}
                  onChange={(e) => setField("name", e.target.value)}
                  className="niche-glass-input h-10 px-3 text-sm"
                />
              </label>

              <label className="grid gap-1 text-sm" htmlFor="lead-email">
                <span>Email</span>
                <input
                  id="lead-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => setField("email", e.target.value)}
                  className="niche-glass-input h-10 px-3 text-sm"
                />
              </label>

              <label className="grid gap-1 text-sm" htmlFor="lead-phone">
                <span>Phone number</span>
                <input
                  id="lead-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={values.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  className="niche-glass-input h-10 px-3 text-sm"
                />
              </label>

              <label className="grid gap-1 text-sm" htmlFor="lead-captcha">
                <span>
                  Quick check: what is {captcha.a} + {captcha.b}?
                </span>
                <input
                  id="lead-captcha"
                  type="text"
                  inputMode="numeric"
                  required
                  autoComplete="off"
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                  aria-invalid={error ? true : undefined}
                  className="niche-glass-input h-10 px-3 text-sm"
                />
              </label>

              {error ? (
                <p className="text-xs" style={{ color: "var(--niche-accent)" }}>
                  {error}
                </p>
              ) : null}

              {config.chatbotDisclaimer ? (
                <p className="niche-text-secondary text-xs">
                  {config.chatbotDisclaimer}
                </p>
              ) : null}

              <Button type="submit" className="mt-1 w-full">
                Continue on WhatsApp
              </Button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={openDialog}
        className="niche-btn-primary fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 px-5 py-3 shadow-lg md:bottom-6 md:right-6"
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
        aria-label="Open booking assistant"
      >
        <ChatCircle size={20} weight="duotone" />
        <span className="text-sm font-medium">{config.primaryCta}</span>
      </button>
    </>
  );
}
