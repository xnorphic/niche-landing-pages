import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter_Tight, Space_Grotesk } from "next/font/google";
import { JsonLd } from "@/components/shared/JsonLd";
import { NicheThemeInit } from "@/components/shared/NicheThemeInit";
import { hvacConfig } from "@/lib/niches/hvac";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: hvacConfig.seo.title,
  description: hvacConfig.seo.description,
  alternates: { canonical: "/hvac" },
};

export default function HvacLayout({ children }: LayoutProps<"/hvac">) {
  return (
    <div className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <NicheThemeInit nicheId="hvac" defaultTheme={hvacConfig.defaultTheme} />
      <JsonLd config={hvacConfig} />
      {children}
    </div>
  );
}
