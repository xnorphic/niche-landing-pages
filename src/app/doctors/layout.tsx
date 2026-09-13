import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/shared/JsonLd";
import { NicheThemeInit } from "@/components/shared/NicheThemeInit";
import { doctorsConfig } from "@/lib/niches/doctors";

const body = Geist({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: doctorsConfig.seo.title,
  description: doctorsConfig.seo.description,
  alternates: { canonical: "/doctors" },
};

export default function DoctorsLayout({ children }: LayoutProps<"/doctors">) {
  return (
    <div className={`${body.variable} ${mono.variable}`} style={{ ["--font-display" as string]: "var(--font-body)" }}>
      <NicheThemeInit nicheId="doctors" defaultTheme={doctorsConfig.defaultTheme} />
      <JsonLd config={doctorsConfig} />
      {children}
    </div>
  );
}
