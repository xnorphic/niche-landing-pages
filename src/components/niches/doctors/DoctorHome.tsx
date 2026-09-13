"use client";

import { NicheShell } from "@/components/shared/NicheShell";
import {
  NichePageBody,
  SplitHero,
} from "@/components/shared/NichePageSections";
import type { NicheConfig } from "@/lib/types";

export function DoctorHome({ config }: { config: NicheConfig }) {
  return (
    <NicheShell config={config}>
      <SplitHero
        config={config}
        imageSeedKey="doctor-clinic-hero"
        imageSide="right"
      />
      <NichePageBody
        config={config}
        testimonialTitle="Patient stories"
        galleryTitle="Our clinic"
        showPatientJourney
      />
    </NicheShell>
  );
}
