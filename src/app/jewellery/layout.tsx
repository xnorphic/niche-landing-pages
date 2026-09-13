import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { JsonLd } from "@/components/shared/JsonLd";
import { NicheThemeInit } from "@/components/shared/NicheThemeInit";
import { jewelleryConfig } from "@/lib/niches/jewellery";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});
const body = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: jewelleryConfig.seo.title,
  description: jewelleryConfig.seo.description,
  alternates: { canonical: "/jewellery" },
};

export default function JewelleryLayout({ children }: LayoutProps<"/jewellery">) {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <NicheThemeInit nicheId="jewellery" defaultTheme={jewelleryConfig.defaultTheme} />
      <JsonLd config={jewelleryConfig} />
      {children}
    </div>
  );
}
