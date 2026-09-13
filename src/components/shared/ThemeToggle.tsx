"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useCallback, useSyncExternalStore } from "react";

const THEME_EVENT = "niche-theme-change";

function clientTheme(
  nicheId: string,
  defaultTheme: "light" | "dark" | "system",
): "light" | "dark" {
  const applied = document.documentElement.getAttribute("data-theme");
  if (applied === "light" || applied === "dark") return applied;
  const stored = localStorage.getItem(`theme-${nicheId}`);
  if (stored === "light" || stored === "dark") return stored;
  if (defaultTheme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return defaultTheme === "dark" ? "dark" : "light";
}

export function ThemeToggle({
  nicheId,
  defaultTheme = "system",
}: {
  nicheId: string;
  defaultTheme?: "light" | "dark" | "system";
}) {
  // Deterministic server snapshot so the SSR markup and the first hydration
  // render match; React swaps in the real client value right after hydration.
  const serverTheme: "light" | "dark" = defaultTheme === "dark" ? "dark" : "light";

  const subscribe = useCallback((onChange: () => void) => {
    window.addEventListener(THEME_EVENT, onChange);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener(THEME_EVENT, onChange);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  const theme = useSyncExternalStore(
    subscribe,
    () => clientTheme(nicheId, defaultTheme),
    () => serverTheme,
  );

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(`theme-${nicheId}`, next);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="niche-btn-ghost inline-flex h-10 w-10 items-center justify-center"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
