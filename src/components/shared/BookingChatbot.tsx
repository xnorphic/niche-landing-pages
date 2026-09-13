"use client";

import { ChatCircle, X } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import type { BookingField, NicheConfig } from "@/lib/types";
import { whatsappHref } from "@/lib/utils";

type Intent = "booking" | "question";

const SESSION_KEY = "chatbot-opened";

function buildMessage(
  config: NicheConfig,
  intent: Intent,
  values: Record<string, string>,
) {
  const lines = [
    `Hello, I'm reaching out via ${config.businessName}.`,
    `Intent: ${intent === "booking" ? config.bookingIntent : config.questionIntent}`,
  ];
  for (const [key, value] of Object.entries(values)) {
    if (value.trim()) lines.push(`${key}: ${value.trim()}`);
  }
  return lines.join("\n");
}

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: BookingField;
  value: string;
  onChange: (v: string) => void;
}) {
  const id = `field-${field.name}`;
  if (field.type === "select") {
    return (
      <label className="grid gap-1.5 text-sm" htmlFor={id}>
        <span>{field.label}</span>
        <select
          id={id}
          required={field.required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="niche-input h-11 px-3"
        >
          <option value="">Select…</option>
          {field.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>
    );
  }
  if (field.type === "textarea") {
    return (
      <label className="grid gap-1.5 text-sm" htmlFor={id}>
        <span>{field.label}</span>
        <textarea
          id={id}
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="niche-input px-3 py-2"
        />
      </label>
    );
  }
  return (
    <label className="grid gap-1.5 text-sm" htmlFor={id}>
      <span>{field.label}</span>
      <input
        id={id}
        type={field.type}
        required={field.required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="niche-input h-11 px-3"
      />
    </label>
  );
}

export function BookingChatbot({ config }: { config: NicheConfig }) {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [intent, setIntent] = useState<Intent>("booking");
  const [values, setValues] = useState<Record<string, string>>({});
  const dialogRef = useRef<HTMLDivElement>(null);
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

  const tryAutoOpen = useCallback(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setOpen(true);
    setCollapsed(false);
  }, []);

  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      setCollapsed(false);
    };
    window.addEventListener("open-chatbot", onOpen);
    return () => window.removeEventListener("open-chatbot", onOpen);
  }, []);

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
      if (e.key === "Escape") {
        setOpen(false);
        setCollapsed(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildMessage(config, intent, values);
    const payload = { niche: config.id, intent, ...values, message };

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      /* stub — lead may still go via WhatsApp */
    }

    window.open(whatsappHref(whatsappNumber, message), "_blank", "noopener,noreferrer");
    setOpen(false);
    setCollapsed(true);
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
            initial={reduced ? false : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="niche-card fixed bottom-20 right-4 z-50 w-[min(100vw-2rem,24rem)] p-5 shadow-2xl md:bottom-24 md:right-6"
            style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h2 id="chatbot-title" className="text-lg font-semibold">
                  {config.businessName}
                </h2>
                <p className="niche-text-secondary text-sm">
                  How can we help you today?
                </p>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => {
                  setOpen(false);
                  setCollapsed(true);
                }}
                className="niche-btn-ghost inline-flex h-9 w-9 items-center justify-center"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            <div className="mb-4 flex gap-2">
              <Button
                type="button"
                variant={intent === "booking" ? "default" : "ghost"}
                size="sm"
                onClick={() => setIntent("booking")}
              >
                {config.bookingIntent}
              </Button>
              <Button
                type="button"
                variant={intent === "question" ? "default" : "ghost"}
                size="sm"
                onClick={() => setIntent("question")}
              >
                {config.questionIntent}
              </Button>
            </div>

            <form onSubmit={submit} className="grid gap-3">
              {config.bookingFields.map((field) => (
                <FieldInput
                  key={field.name}
                  field={field}
                  value={values[field.name] ?? ""}
                  onChange={(v) =>
                    setValues((prev) => ({ ...prev, [field.name]: v }))
                  }
                />
              ))}
              {config.chatbotDisclaimer ? (
                <p className="niche-text-secondary text-xs">
                  {config.chatbotDisclaimer}
                </p>
              ) : null}
              <Button type="submit" className="w-full">
                Continue on WhatsApp
              </Button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => {
          setCollapsed(false);
          setOpen(true);
        }}
        className="niche-btn-primary fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 px-5 py-3 shadow-lg md:bottom-6 md:right-6"
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
        aria-label="Open booking assistant"
      >
        <ChatCircle size={20} strokeWidth={1.5} weight="duotone" />
        <span className="text-sm font-medium">{config.primaryCta}</span>
      </button>
    </>
  );
}
