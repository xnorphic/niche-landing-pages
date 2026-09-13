"use client";

import { NicheShell } from "@/components/shared/NicheShell";
import {
  CtaBand,
  FeatureSplit,
  FeatureStrip,
  GalleryTiles,
  NicheHero,
  ProcessTimeline,
  ReviewsWall,
  ServiceCards,
  SiteFooter,
  StatBand,
  TransformationSection,
} from "@/components/shared/sections";
import type { NicheConfig } from "@/lib/types";

export function InteriorHome({ config }: { config: NicheConfig }) {
  return (
    <NicheShell config={config}>
      <NicheHero config={config} />
      <FeatureStrip features={config.features} />
      <GalleryTiles
        images={config.gallery}
        headline={config.galleryHeadline}
      />
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
      <TransformationSection
        config={config}
        headline={config.beforeAfterHeadline}
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
