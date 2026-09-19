import Link from "next/link";
import type { ReactNode } from "react";
import { CookieSettingsButton } from "@/components/gridrank/CookieConsent";
import { GRIDRANK_EMAIL } from "@/lib/gridrank";

export function GridRankLegal({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="gr-page relative z-[2] min-h-dvh bg-[#0b0b0b] pt-24 text-white">
      <div className="gr-band" style={{ paddingTop: "2rem" }}>
        <p className="gr-kicker">
          <Link href="/gridrank">GridRank Agency</Link>
        </p>
        <h1 className="gr-h2">{title}</h1>
        <p className="gr-lead">Last updated {updated}.</p>
        {children}
        <p className="gr-lead" style={{ marginTop: "2rem" }}>
          Questions:{" "}
          <a href={`mailto:${GRIDRANK_EMAIL}`}>{GRIDRANK_EMAIL}</a>
          {" · "}
          <CookieSettingsButton />
        </p>
      </div>
    </article>
  );
}
