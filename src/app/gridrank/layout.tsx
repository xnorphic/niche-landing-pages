import type { Metadata } from "next";
import { CookieConsent } from "@/components/gridrank/CookieConsent";
import {
  GRIDRANK_DESCRIPTION,
  GRIDRANK_KEYWORDS,
  GRIDRANK_TITLE,
} from "@/lib/gridrank";
import { getSiteUrl } from "@/lib/seo";
import "./gridrank.css";

const site = getSiteUrl();
const pageUrl = `${site}/gridrank`;

export const metadata: Metadata = {
  title: { absolute: GRIDRANK_TITLE },
  description: GRIDRANK_DESCRIPTION,
  keywords: [...GRIDRANK_KEYWORDS],
  authors: [{ name: "GridRank Agency", url: pageUrl }],
  creator: "GridRank Agency",
  publisher: "GridRank Agency",
  category: "Digital agency",
  alternates: { canonical: "/gridrank" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: GRIDRANK_TITLE,
    description: GRIDRANK_DESCRIPTION,
    url: "/gridrank",
    siteName: "GridRank Agency",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: GRIDRANK_TITLE,
    description: GRIDRANK_DESCRIPTION,
  },
};

export default function GridRankLayout({ children }: LayoutProps<"/gridrank">) {
  return (
    <>
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
      <div className="gridrank-root">
        {children}
        <CookieConsent />
      </div>
    </>
  );
}
