import { InteriorHome } from "@/components/niches/interior/InteriorHome";
import { interiorConfig } from "@/lib/niches/interior";

export default function InteriorPage() {
  return <InteriorHome config={interiorConfig} />;
}
