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
    name: "Dental & Implant Care",
    blurb: "Same-day appointments, gentle care, and a lifetime implant guarantee.",
    accent: doctorsConfig.accentPreview,
    image: doctorsConfig.heroImage,
  },
  {
    id: "interior" as const,
    href: "/interior",
    name: "Interior Design Studio",
    blurb: "340+ homes transformed, delivered on schedule and styled to the last detail.",
    accent: interiorConfig.accentPreview,
    image: interiorConfig.heroImage,
  },
  {
    id: "hvac" as const,
    href: "/hvac",
    name: "Heating & Cooling",
    blurb: "24/7 emergency service with upfront pricing and same-day repairs.",
    accent: hvacConfig.accentPreview,
    image: hvacConfig.heroImage,
  },
  {
    id: "jewellery" as const,
    href: "/jewellery",
    name: "Fine Jewellery Atelier",
    blurb: "Bespoke engagement rings and heirloom restoration, crafted by hand.",
    accent: jewelleryConfig.accentPreview,
    image: jewelleryConfig.heroImage,
  },
];

export function getNicheConfig(id: NicheId): NicheConfig {
  return nicheConfigs[id];
}
