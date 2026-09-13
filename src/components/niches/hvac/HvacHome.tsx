"use client";

import { NicheShell } from "@/components/shared/NicheShell";
import {
  NichePageBody,
  SplitHero,
} from "@/components/shared/NichePageSections";
import type { NicheConfig } from "@/lib/types";

export function HvacHome({ config }: { config: NicheConfig }) {
  return (
    <NicheShell config={config}>
      <SplitHero
        config={config}
        imageSeedKey="hvac-tech-hero"
        imageSide="left"
      />
      <NichePageBody
        config={config}
        testimonialTitle="Homeowner reviews"
        galleryTitle="Recent work"
        showServiceAreas
      />
    </NicheShell>
  );
}
