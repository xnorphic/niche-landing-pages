"use client";

import { useEffect } from "react";
import type { NicheId } from "@/lib/types";

export function NicheThemeInit({
  nicheId,
  defaultTheme,
}: {
  nicheId: NicheId;
  defaultTheme: "light" | "dark" | "system";
}) {
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-niche", nicheId);

    const stored = localStorage.getItem(`theme-${nicheId}`) as
      | "light"
      | "dark"
      | null;

    let theme: "light" | "dark";
    if (stored) {
      theme = stored;
    } else if (defaultTheme === "system") {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } else {
      theme = defaultTheme;
    }

    root.setAttribute("data-theme", theme);

    return () => {
      root.removeAttribute("data-niche");
      root.removeAttribute("data-theme");
    };
  }, [nicheId, defaultTheme]);

  return null;
}
