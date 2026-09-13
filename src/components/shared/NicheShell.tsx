"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { SmoothScroll } from "@/components/shared/SmoothScroll";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import type { NicheConfig } from "@/lib/types";

const BookingChatbot = dynamic(
  () =>
    import("@/components/shared/BookingChatbot").then((m) => m.BookingChatbot),
  { ssr: false },
);

export function NicheShell({
  config,
  children,
  onPrimaryCta,
}: {
  config: NicheConfig;
  children: React.ReactNode;
  onPrimaryCta?: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const openChat = () => {
    onPrimaryCta?.();
    window.dispatchEvent(new CustomEvent("open-chatbot"));
  };

  return (
    <SmoothScroll>
      <div className="niche-page min-h-[100dvh]">
        <header className="sticky top-0 z-40 border-b border-[var(--niche-border)] bg-[var(--niche-bg)]/90 backdrop-blur-md">
          <div className="niche-container flex h-[4.5rem] items-center justify-between gap-4">
            <Link
              href={`/${config.slug}`}
              className="text-sm font-semibold tracking-tight md:text-base"
            >
              {config.businessName}
            </Link>
            <nav className="hidden items-center gap-6 lg:flex" aria-label="Page sections">
              {config.navAnchors.map((anchor) => (
                <a
                  key={anchor.id}
                  href={`#${anchor.id}`}
                  className="niche-text-secondary text-sm hover:text-[var(--niche-text)]"
                >
                  {anchor.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle nicheId={config.id} defaultTheme={config.defaultTheme} />
              <Button
                type="button"
                className="hidden sm:inline-flex"
                onClick={openChat}
              >
                {config.primaryCta}
              </Button>
              <button
                type="button"
                className="niche-btn-ghost inline-flex h-10 w-10 items-center justify-center lg:hidden"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((v) => !v)}
              >
                {menuOpen ? (
                  <X size={20} strokeWidth={1.5} />
                ) : (
                  <List size={20} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
          {menuOpen ? (
            <nav
              className="niche-container border-t border-[var(--niche-border)] py-4 lg:hidden"
              aria-label="Mobile navigation"
            >
              <ul className="grid gap-3">
                {config.navAnchors.map((anchor) => (
                  <li key={anchor.id}>
                    <a
                      href={`#${anchor.id}`}
                      className="block py-1 text-sm"
                      onClick={() => setMenuOpen(false)}
                    >
                      {anchor.label}
                    </a>
                  </li>
                ))}
                <li>
                  <Button type="button" className="mt-2 w-full" onClick={openChat}>
                    {config.primaryCta}
                  </Button>
                </li>
              </ul>
            </nav>
          ) : null}
        </header>
        <main>{children}</main>
        <BookingChatbot config={config} />
      </div>
    </SmoothScroll>
  );
}
