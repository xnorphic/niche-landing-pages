"use client";

import { NicheShell } from "@/components/shared/NicheShell";
import {
  CtaBand,
  FeatureSplit,
  FeatureStrip,
  NicheHero,
  ProcessTimeline,
  ReviewsWall,
  ServiceCards,
  SiteFooter,
  StatBand,
} from "@/components/shared/sections";
import type { NicheConfig } from "@/lib/types";

export function JewelleryHome({ config }: { config: NicheConfig }) {
  return (
    <NicheShell config={config}>
      <NicheHero config={config} />
      <FeatureStrip features={config.features} />
      <ServiceCards
        services={config.services}
        headline={config.servicesHeadline}
        intro={config.servicesIntro}
      />
      <FeatureSplit
        feature={config.feature}
        businessName={config.businessName}
        imageSide="right"
      />
      <StatBand stats={config.stats} headline={config.statsHeadline} />
      <ProcessTimeline
        steps={config.process}
        headline={config.processHeadline}
        intro={config.processIntro}
      />
      <ReviewsWall
        testimonials={config.testimonials}
        headline={config.testimonialsHeadline}
        summary={config.reviewSummary}
      />
      <CtaBand
        headline={config.ctaHeadline}
        body={config.ctaBody}
        primaryCta={config.primaryCta}
      />
      <SiteFooter config={config} />
    </NicheShell>
  );
}
