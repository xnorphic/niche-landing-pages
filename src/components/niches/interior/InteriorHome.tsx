"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NicheShell } from "@/components/shared/NicheShell";
import {
  FullBleedHero,
  NichePageBody,
} from "@/components/shared/NichePageSections";
import type { NicheConfig } from "@/lib/types";

gsap.registerPlugin(ScrollTrigger);

export function InteriorHome({ config }: { config: NicheConfig }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.to("[data-interior-parallax]", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-section='hero']",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef}>
      <NicheShell config={config}>
        <div data-interior-parallax>
          <FullBleedHero config={config} imageSeedKey="interior-penthouse-hero" />
        </div>
        <NichePageBody
          config={config}
          resultsSectionId="transformations"
          resultsTitle="Transformations"
          galleryTitle="Portfolio"
          testimonialTitle="Client stories"
        />
      </NicheShell>
    </div>
  );
}
