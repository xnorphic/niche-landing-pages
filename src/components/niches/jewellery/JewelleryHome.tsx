"use client";

import { NicheShell } from "@/components/shared/NicheShell";
import {
  NichePageBody,
  SplitHero,
} from "@/components/shared/NichePageSections";
import type { NicheConfig } from "@/lib/types";

export function JewelleryHome({ config }: { config: NicheConfig }) {
  return (
    <NicheShell config={config}>
      <SplitHero
        config={config}
        imageSeedKey="jewellery-macro-hero"
        imageSide="right"
      />
      <NichePageBody
        config={config}
        resultsSectionId="restoration"
        resultsTitle="Redesign and restoration"
        galleryTitle="Atelier gallery"
        testimonialTitle="Client stories"
      />
    </NicheShell>
  );
}
