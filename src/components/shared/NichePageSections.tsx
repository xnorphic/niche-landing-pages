"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { BeforeAfterSlider } from "@/components/shared/BeforeAfterSlider";
import { FooterTrust, TrustBar } from "@/components/shared/TrustBar";
import { GalleryTrack } from "@/components/shared/GalleryTrack";
import { SocialFollow } from "@/components/shared/SocialFollow";
import { TestimonialCarousel } from "@/components/shared/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import type { NicheConfig, PatientJourneyStep } from "@/lib/types";
import { imageSeed } from "@/lib/utils";

function ServicesGrid({ config }: { config: NicheConfig }) {
  return (
    <SectionReveal>
      <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
        Services
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {config.services.map((service) => (
          <a
            key={service.slug}
            href="#"
            data-phase2={`/services/${service.slug}`}
            className="niche-card group p-6 transition-transform hover:-translate-y-0.5"
          >
            <h3 className="text-lg font-medium">{service.title}</h3>
            <p className="niche-text-secondary mt-2 text-sm leading-relaxed">
              {service.description}
            </p>
            <span className="mt-4 inline-block text-sm text-[var(--niche-accent)]">
              Learn more
            </span>
          </a>
        ))}
      </div>
    </SectionReveal>
  );
}

function PatientJourney({ steps }: { steps: PatientJourneyStep[] }) {
  return (
    <SectionReveal>
      <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
        Patient journey
      </h2>
      <ol className="grid gap-4 md:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="niche-card p-6">
            <span className="text-sm font-medium text-[var(--niche-accent)]">
              Step {i + 1}
            </span>
            <h3 className="mt-2 text-lg font-medium">{step.title}</h3>
            <p className="niche-text-secondary mt-2 text-sm">{step.description}</p>
          </li>
        ))}
      </ol>
    </SectionReveal>
  );
}

function ServiceAreas({ areas }: { areas: string[] }) {
  return (
    <SectionReveal>
      <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">
        Service areas
      </h2>
      <ul className="flex flex-wrap gap-2">
        {areas.map((area) => (
          <li
            key={area}
            className="rounded-full border border-[var(--niche-border)] px-3 py-1.5 text-sm"
          >
            {area}
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}

export function SplitHero({
  config,
  imageSeedKey,
  imageSide = "right",
  overlay = false,
}: {
  config: NicheConfig;
  imageSeedKey: string;
  imageSide?: "left" | "right";
  overlay?: boolean;
}) {
  const copy = (
    <div className="flex flex-col justify-center py-10 md:py-0">
      <h1 className="max-w-xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
        {config.tagline}
      </h1>
      <p className="niche-text-secondary mt-4 max-w-md text-base leading-relaxed">
        {config.about.body.slice(0, 120)}…
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent("open-chatbot"))}
        >
          {config.primaryCta}
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() => window.dispatchEvent(new CustomEvent("open-chatbot"))}
        >
          {config.secondaryCta}
        </Button>
      </div>
      <TrustBar chips={config.trustChips} />
    </div>
  );

  const image = (
    <div className="relative min-h-[20rem] overflow-hidden md:min-h-[28rem]" style={{ borderRadius: "var(--niche-radius-card)" }}>
      <Image
        src={imageSeed(imageSeedKey, 1200, 900)}
        alt={`${config.businessName} hero photography`}
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {overlay ? (
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--niche-bg)]/80 via-[var(--niche-bg)]/40 to-transparent" />
      ) : null}
    </div>
  );

  return (
    <section
      id="hero"
      data-section="hero"
      className="niche-section niche-container grid min-h-[100dvh] items-center gap-8 pt-24 md:grid-cols-[1fr_1fr] md:gap-12 md:pt-28"
    >
      {imageSide === "left" ? (
        <>
          {image}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {image}
        </>
      )}
    </section>
  );
}

export function FullBleedHero({
  config,
  imageSeedKey,
}: {
  config: NicheConfig;
  imageSeedKey: string;
}) {
  return (
    <section id="hero" data-section="hero" className="relative min-h-[100dvh]">
      <Image
        src={imageSeed(imageSeedKey, 1600, 1000)}
        alt={`${config.businessName} project photography`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[var(--niche-bg)]/55" />
      <div className="niche-container relative flex min-h-[100dvh] max-w-2xl flex-col justify-end pb-16 pt-28">
        <h1 className="font-display text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
          {config.tagline}
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--niche-text)]/90">
          {config.about.body.slice(0, 100)}…
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-chatbot"))}
          >
            {config.primaryCta}
          </Button>
        </div>
        <TrustBar chips={config.trustChips} />
      </div>
    </section>
  );
}

export function NichePageBody({
  config,
  resultsSectionId = "results",
  resultsTitle = "Results",
  galleryTitle = "Gallery",
  testimonialTitle = "What clients say",
  showPatientJourney = false,
  showServiceAreas = false,
}: {
  config: NicheConfig;
  resultsSectionId?: string;
  resultsTitle?: string;
  galleryTitle?: string;
  testimonialTitle?: string;
  showPatientJourney?: boolean;
  showServiceAreas?: boolean;
}) {
  return (
    <>
      <section id="services" className="niche-section niche-container">
        <ServicesGrid config={config} />
      </section>

      <section id={resultsSectionId} className="niche-section niche-container">
        <SectionReveal>
          <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
            {resultsTitle}
          </h2>
        </SectionReveal>
        <div className="grid gap-10 lg:grid-cols-2">
          {config.beforeAfter.map((item) => (
            <BeforeAfterSlider
              key={item.caption}
              before={item.before}
              after={item.after}
              caption={item.caption}
              disclosure={config.beforeAfterDisclosure}
            />
          ))}
        </div>
        {showPatientJourney && config.patientJourney ? (
          <div className="mt-16">
            <PatientJourney steps={config.patientJourney} />
          </div>
        ) : null}
      </section>

      <section id="testimonials" className="niche-section niche-container">
        <TestimonialCarousel
          testimonials={config.testimonials}
          title={testimonialTitle}
        />
      </section>

      <section id="about" className="niche-section niche-container">
        <SectionReveal>
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {config.about.headline}
            </h2>
            <p className="niche-text-secondary text-base leading-relaxed">
              {config.about.body}
            </p>
          </div>
        </SectionReveal>
        {showServiceAreas && config.serviceAreas ? (
          <div className="mt-12">
            <ServiceAreas areas={config.serviceAreas} />
          </div>
        ) : null}
      </section>

      <section id="gallery" className="niche-section niche-container">
        <GalleryTrack images={config.gallery} title={galleryTitle} />
      </section>

      <section id="contact" className="niche-section niche-container">
        <SectionReveal>
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Stay connected
              </h2>
              <p className="niche-text-secondary mt-3 max-w-md text-sm">
                Follow our latest work and reach out when you are ready to begin.
              </p>
            </div>
            <SocialFollow links={config.social} />
          </div>
          <div className="mt-12">
            <FooterTrust {...config.footerTrust} />
          </div>
          <p className="niche-text-secondary mt-6 text-center text-xs">
            <Link href="/" className="hover:text-[var(--niche-accent)]">
              Back to all niches
            </Link>
          </p>
        </SectionReveal>
      </section>
    </>
  );
}
