import type { Metadata } from "next";
import "./gridrank.css";

export const metadata: Metadata = {
  title: "GridRank Agency — Websites that book appointments while you work",
  description:
    "GridRank builds animated, high-converting websites for clinics, consultants, and service businesses in Dubai, the UK, Canada, and the US, wired to WhatsApp, social lead forms, booking calendars, and notifications so enquiries turn into appointments.",
  alternates: { canonical: "/gridrank" },
  openGraph: {
    title: "GridRank Agency — Websites that book appointments while you work",
    description:
      "Animated, high-converting websites connected to WhatsApp, booking calendars, and social lead funnels for clinics, consultants, and service businesses.",
    url: "/gridrank",
    type: "website",
  },
};

export default function GridRankLayout({ children }: LayoutProps<"/gridrank">) {
  return (
    <>
      {/* HelveticaNow display + body faces (self-hosted CDN). React hoists these into <head>. */}
      <link
        rel="stylesheet"
        precedence="default"
        href="https://db.onlinewebfonts.com/c/5ac3fe7c6abd2f62067f266d89671492?family=HelveticaNowDisplay-Medium"
      />
      <link
        rel="stylesheet"
        precedence="default"
        href="https://db.onlinewebfonts.com/c/1aa3377e489837a26d019bba501e779d?family=HelveticaNowDisplayW01-Rg"
      />
      {children}
    </>
  );
}
