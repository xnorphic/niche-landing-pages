import { JewelleryHome } from "@/components/niches/jewellery/JewelleryHome";
import { jewelleryConfig } from "@/lib/niches/jewellery";

export default function JewelleryPage() {
  return <JewelleryHome config={jewelleryConfig} />;
}
