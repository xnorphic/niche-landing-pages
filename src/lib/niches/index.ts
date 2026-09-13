import type { NicheConfig, NicheId } from "@/lib/types";
import { doctorsConfig } from "./doctors";
import { hvacConfig } from "./hvac";
import { interiorConfig } from "./interior";
import { jewelleryConfig } from "./jewellery";

export const nicheConfigs: Record<NicheId, NicheConfig> = {
  doctors: doctorsConfig,
  interior: interiorConfig,
  hvac: hvacConfig,
  jewellery: jewelleryConfig,
};

export const hubNiches = [
  {
    id: "doctors" as const,
    href: "/doctors",
    name: "Doctors",
    designRead: doctorsConfig.designRead,
    accent: doctorsConfig.accentPreview,
    image: "doctor-clinic-hero",
  },
  {
    id: "interior" as const,
    href: "/interior",
    name: "Interior Designers",
    designRead: interiorConfig.designRead,
    accent: interiorConfig.accentPreview,
    image: "interior-penthouse-hero",
  },
  {
    id: "hvac" as const,
    href: "/hvac",
    name: "HVAC",
    designRead: hvacConfig.designRead,
    accent: hvacConfig.accentPreview,
    image: "hvac-tech-hero",
  },
  {
    id: "jewellery" as const,
    href: "/jewellery",
    name: "Jewellery",
    designRead: jewelleryConfig.designRead,
    accent: jewelleryConfig.accentPreview,
    image: "jewellery-macro-hero",
  },
];

export function getNicheConfig(id: NicheId): NicheConfig {
  return nicheConfigs[id];
}
