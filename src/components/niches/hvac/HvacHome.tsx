"use client";

import { NicheShell } from "@/components/shared/NicheShell";
import {
  CtaBand,
  FeatureSplit,
  FeatureStrip,
  NicheHero,
  ProcessTimeline,
  ReviewsWall,
  ServiceAreaBand,
  ServiceCards,
  SiteFooter,
  StatBand,
} from "@/components/shared/sections";
import type { NicheConfig } from "@/lib/types";

export function HvacHome({ config }: { config: NicheConfig }) {
  return (
    <NicheShell config={config}>
      <NicheHero config={config} />
      <FeatureStrip features={config.features} />
      <StatBand
        stats={config.stats}
        headline={config.statsHeadline}
        tone="accent"
      />
      <ServiceCards
        services={config.services}
        headline={config.servicesHeadline}
        intro={config.servicesIntro}
      />
      <ProcessTimeline
        steps={config.process}
        headline={config.processHeadline}
        intro={config.processIntro}
      />
      <FeatureSplit
        feature={config.feature}
        businessName={config.businessName}
        imageSide="left"
      />
      <ReviewsWall
        testimonials={config.testimonials}
        headline={config.testimonialsHeadline}
        summary={config.reviewSummary}
      />
      {config.serviceAreas ? (
        <ServiceAreaBand areas={config.serviceAreas} city={config.city} />
      ) : null}
      <CtaBand
        headline={config.ctaHeadline}
        body={config.ctaBody}
        primaryCta={config.primaryCta}
      />
      <SiteFooter config={config} />
    </NicheShell>
  );
}
