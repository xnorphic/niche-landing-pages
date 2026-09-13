"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useState } from "react";

function readTheme(
  nicheId: string,
  defaultTheme: "light" | "dark" | "system",
): "light" | "dark" {
  if (typeof window === "undefined") return defaultTheme === "dark" ? "dark" : "light";
  const stored = localStorage.getItem(`theme-${nicheId}`) as "light" | "dark" | null;
  if (stored) return stored;
  if (defaultTheme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return defaultTheme;
}

export function ThemeToggle({
  nicheId,
  defaultTheme = "system",
}: {
  nicheId: string;
  defaultTheme?: "light" | "dark" | "system";
}) {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    readTheme(nicheId, defaultTheme),
  );

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(`theme-${nicheId}`, next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="niche-btn-ghost inline-flex h-10 w-10 items-center justify-center"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon size={18} strokeWidth={1.5} />
      ) : (
        <Sun size={18} strokeWidth={1.5} />
      )}
    </button>
  );
}
