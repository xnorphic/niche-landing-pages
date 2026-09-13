import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { JsonLd } from "@/components/shared/JsonLd";
import { NicheThemeInit } from "@/components/shared/NicheThemeInit";
import { interiorConfig } from "@/lib/niches/interior";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: interiorConfig.seo.title,
  description: interiorConfig.seo.description,
  alternates: { canonical: "/interior" },
};

export default function InteriorLayout({ children }: LayoutProps<"/interior">) {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <NicheThemeInit nicheId="interior" defaultTheme={interiorConfig.defaultTheme} />
      <JsonLd config={interiorConfig} />
      {children}
    </div>
  );
}
