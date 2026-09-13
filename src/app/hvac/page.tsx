import { HvacHome } from "@/components/niches/hvac/HvacHome";
import { hvacConfig } from "@/lib/niches/hvac";

export default function HvacPage() {
  return <HvacHome config={hvacConfig} />;
}
