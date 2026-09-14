"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { BeforeAfterSlider } from "@/components/shared/BeforeAfterSlider";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { Button } from "@/components/ui/button";
import { NicheIcon } from "@/lib/icons";
import type {
  FeatureItem,
  GalleryImage,
  NicheConfig,
  ProcessStep,
  ServiceItem,
  Stat,
  Testimonial,
} from "@/lib/types";

function openChat() {
  window.dispatchEvent(new CustomEvent("open-chatbot"));
}

/* -------------------------------------------------------------------------- */
/*  Stars                                                                     */
/* -------------------------------------------------------------------------- */

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <NicheIcon
          key={i}
          name="Star"
          size={size}
          weight={i < Math.round(rating) ? "fill" : "regular"}
          className={
            i < Math.round(rating)
              ? "text-[var(--niche-accent)]"
              : "text-[var(--niche-border)]"
          }
        />
      ))}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

export function NicheHero({ config }: { config: NicheConfig }) {
  const reduced = useReducedMotion();
  // `initial`/`animate` are kept deterministic (not derived from the
  // reduced-motion hook) so the SSR markup and first client render match.
  // Only the transition duration reacts to the motion preference.
  const enter = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: reduced
      ? { duration: 0 }
      : { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <section
      id="hero"
      data-section="hero"
      className="niche-container grid items-center gap-10 pb-16 pt-14 md:min-h-[calc(100dvh-4.5rem)] md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:pb-20 md:pt-16"
    >
      <motion.div {...enter} className="flex flex-col">
        <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--niche-border)] bg-[var(--niche-surface)] px-3.5 py-1.5 text-xs font-medium tracking-wide text-[var(--niche-text-secondary)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--niche-accent)]" />
          {config.heroEyebrow}
        </span>

        <h1 className="max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          {config.heroHeadline}{" "}
          <span className="text-[var(--niche-accent)]">{config.heroHeadlineAccent}</span>
        </h1>

        <p className="niche-text-secondary mt-5 max-w-md text-base leading-relaxed md:text-lg">
          {config.heroSubtext}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button type="button" size="lg" onClick={openChat}>
            {config.primaryCta}
          </Button>
          <Button type="button" variant="ghost" size="lg" onClick={openChat}>
            <NicheIcon name="Phone" size={18} weight="bold" />
            {config.secondaryCta}
          </Button>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
          <div className="flex -space-x-2.5">
            {config.avatars.slice(0, 4).map((src, i) => (
              <span
                key={i}
                className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[var(--niche-bg)]"
              >
                <Image src={src} alt="" fill sizes="40px" className="object-cover" />
              </span>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Stars rating={Number(config.reviewSummary.score)} />
              <span className="text-sm font-semibold">{config.reviewSummary.score}</span>
            </div>
            <span className="niche-text-secondary text-xs">
              {config.reviewSummary.count} {config.reviewSummary.platform} reviews
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={
          reduced
            ? { duration: 0 }
            : { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }
        }
        className="relative"
      >
        <div
          className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[5/4]"
          style={{ borderRadius: "var(--niche-radius-card)" }}
        >
          <Image
            src={config.heroImage}
            alt={`${config.businessName} in ${config.city}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div
          className="absolute -bottom-5 -left-4 flex items-center gap-3 border border-[var(--niche-border)] bg-[var(--niche-surface)] px-5 py-4 shadow-lg shadow-black/5 md:-left-8"
          style={{ borderRadius: "var(--niche-radius-card)" }}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--niche-accent)] text-[var(--niche-on-accent)]">
            <NicheIcon name={config.stats[0]?.icon ?? "ShieldCheck"} size={22} weight="fill" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-2xl font-semibold">
              {config.stats[0]?.value}
            </span>
            <span className="niche-text-secondary text-xs">{config.stats[0]?.label}</span>
          </span>
        </div>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Feature strip (icon + label row)                                          */
/* -------------------------------------------------------------------------- */

export function FeatureStrip({ features }: { features: FeatureItem[] }) {
  return (
    <div className="border-y border-[var(--niche-border)] bg-[var(--niche-surface)]">
      <div className="niche-container grid gap-y-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[var(--niche-border)]">
        {features.map((f) => (
          <div key={f.title} className="flex items-start gap-3.5 lg:px-6 lg:first:pl-0">
            <span className="mt-0.5 text-[var(--niche-accent)]">
              <NicheIcon name={f.icon} size={26} weight="regular" />
            </span>
            <span>
              <span className="block text-sm font-semibold">{f.title}</span>
              <span className="niche-text-secondary mt-0.5 block text-xs leading-relaxed">
                {f.description}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section heading                                                           */
/* -------------------------------------------------------------------------- */

function Heading({
  eyebrow,
  title,
  intro,
  center,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--niche-accent)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="niche-text-secondary mt-4 text-base leading-relaxed">{intro}</p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Service cards                                                             */
/* -------------------------------------------------------------------------- */

export function ServiceCards({
  services,
  headline,
  intro,
  eyebrow,
}: {
  services: ServiceItem[];
  headline: string;
  intro: string;
  eyebrow?: string;
}) {
  return (
    <section id="services" className="niche-section niche-container">
      <SectionReveal>
        <Heading eyebrow={eyebrow} title={headline} intro={intro} center />
      </SectionReveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <SectionReveal key={service.slug} delay={i * 0.05}>
            <div className="niche-card group flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--niche-accent)]/10 text-[var(--niche-accent)] transition-colors group-hover:bg-[var(--niche-accent)] group-hover:text-[var(--niche-on-accent)]">
                <NicheIcon name={service.icon} size={24} weight="regular" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="niche-text-secondary mt-2 flex-1 text-sm leading-relaxed">
                {service.description}
              </p>
              <button
                type="button"
                onClick={openChat}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--niche-accent)]"
              >
                Ask about this
                <NicheIcon name="ArrowRight" size={15} weight="bold" />
              </button>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stat band                                                                 */
/* -------------------------------------------------------------------------- */

export function StatBand({
  stats,
  headline,
  tone = "surface",
}: {
  stats: Stat[];
  headline: string;
  tone?: "surface" | "accent";
}) {
  const accent = tone === "accent";
  return (
    <section id="stats" className="niche-section niche-container">
      <SectionReveal>
        <div
          className={
            accent
              ? "relative overflow-hidden bg-[var(--niche-accent)] text-[var(--niche-on-accent)]"
              : "border border-[var(--niche-border)] bg-[var(--niche-surface)]"
          }
          style={{ borderRadius: "var(--niche-radius-card)" }}
        >
          <div className="px-6 py-12 md:px-12 md:py-14">
            <p
              className={
                "mx-auto max-w-2xl text-center font-display text-xl font-medium md:text-2xl " +
                (accent ? "" : "")
              }
            >
              {headline}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                    {s.value}
                  </div>
                  <div
                    className={
                      "mt-2 text-sm " +
                      (accent ? "opacity-80" : "niche-text-secondary")
                    }
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Process timeline                                                          */
/* -------------------------------------------------------------------------- */

export function ProcessTimeline({
  steps,
  headline,
  intro,
  eyebrow,
}: {
  steps: ProcessStep[];
  headline: string;
  intro: string;
  eyebrow?: string;
}) {
  return (
    <section id="process" className="niche-section niche-container">
      <SectionReveal>
        <Heading eyebrow={eyebrow} title={headline} intro={intro} />
      </SectionReveal>
      <div className="relative mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <SectionReveal key={step.title} delay={i * 0.08}>
            <div className="relative flex h-full flex-col p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--niche-border)] text-[var(--niche-accent)]">
                  <NicheIcon name={step.icon} size={22} weight="regular" />
                </span>
                <span className="niche-text-secondary font-display text-3xl font-semibold tabular-nums">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="niche-text-secondary mt-2 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Feature split (image + bullets + badge)                                   */
/* -------------------------------------------------------------------------- */

export function FeatureSplit({
  feature,
  businessName,
  imageSide = "left",
}: {
  feature: NicheConfig["feature"];
  businessName: string;
  imageSide?: "left" | "right";
}) {
  const image = (
    <div className="relative">
      <div
        className="relative aspect-[4/3] w-full overflow-hidden"
        style={{ borderRadius: "var(--niche-radius-card)" }}
      >
        <Image
          src={feature.image}
          alt={`${businessName} team at work`}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover"
        />
      </div>
      <div
        className="absolute -bottom-5 right-4 flex items-center gap-3 bg-[var(--niche-accent)] px-5 py-4 text-[var(--niche-on-accent)] shadow-lg shadow-black/10 md:-right-6"
        style={{ borderRadius: "var(--niche-radius-card)" }}
      >
        <span className="font-display text-3xl font-semibold">{feature.badgeValue}</span>
        <span className="max-w-[7rem] text-xs leading-tight opacity-90">
          {feature.badgeLabel}
        </span>
      </div>
    </div>
  );

  const copy = (
    <div className="flex flex-col justify-center">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--niche-accent)]">
        {feature.eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
        {feature.headline}
      </h2>
      <p className="niche-text-secondary mt-4 text-base leading-relaxed">{feature.body}</p>
      <ul className="mt-6 grid gap-3">
        {feature.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm">
            <span className="mt-0.5 text-[var(--niche-accent)]">
              <NicheIcon name="CheckCircle" size={20} weight="fill" />
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button type="button" onClick={openChat}>
          Learn more about us
        </Button>
      </div>
    </div>
  );

  return (
    <section id="about" className="niche-section niche-container">
      <SectionReveal>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
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
        </div>
      </SectionReveal>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Reviews wall                                                              */
/* -------------------------------------------------------------------------- */

export function ReviewsWall({
  testimonials,
  headline,
  summary,
}: {
  testimonials: Testimonial[];
  headline: string;
  summary: NicheConfig["reviewSummary"];
}) {
  return (
    <section id="testimonials" className="niche-section niche-container">
      <SectionReveal>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Heading title={headline} />
          <div className="flex items-center gap-4 rounded-full border border-[var(--niche-border)] bg-[var(--niche-surface)] px-5 py-3">
            <NicheIcon name="GoogleLogo" size={26} weight="bold" />
            <div className="leading-tight">
              <div className="flex items-center gap-2">
                <span className="font-display text-xl font-semibold">{summary.score}</span>
                <Stars rating={Number(summary.score)} size={15} />
              </div>
              <span className="niche-text-secondary text-xs">
                {summary.count} verified reviews
              </span>
            </div>
          </div>
        </div>
      </SectionReveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <SectionReveal key={`${t.name}-${i}`} delay={i * 0.05}>
            <figure className="niche-card flex h-full flex-col p-6">
              <Stars rating={t.rating} />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--niche-border)] pt-4">
                <span className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={t.avatar} alt="" fill sizes="40px" className="object-cover" />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="niche-text-secondary block text-xs">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Room / project gallery with labels                                       */
/* -------------------------------------------------------------------------- */

export function GalleryTiles({
  images,
  headline,
  intro,
  eyebrow,
}: {
  images: GalleryImage[];
  headline: string;
  intro?: string;
  eyebrow?: string;
}) {
  return (
    <section id="gallery" className="niche-section niche-container">
      <SectionReveal>
        <Heading eyebrow={eyebrow} title={headline} intro={intro} />
      </SectionReveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((img, i) => (
          <SectionReveal key={img.src} delay={i * 0.05}>
            <div
              className="group relative aspect-[3/4] overflow-hidden"
              style={{ borderRadius: "var(--niche-radius-card)" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {img.label ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-neutral-900">
                    {img.label}
                  </span>
                </>
              ) : null}
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA band                                                                  */
/* -------------------------------------------------------------------------- */

export function CtaBand({
  headline,
  body,
  primaryCta,
}: {
  headline: string;
  body: string;
  primaryCta: string;
}) {
  return (
    <section id="contact" className="niche-section niche-container">
      <SectionReveal>
        <div
          className="relative overflow-hidden bg-[var(--niche-accent)] px-6 py-14 text-center text-[var(--niche-on-accent)] md:px-12 md:py-20"
          style={{ borderRadius: "var(--niche-radius-card)" }}
        >
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {headline}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed opacity-90">
              {body}
            </p>
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={openChat}
                className="inline-flex h-12 items-center justify-center rounded-[var(--niche-radius-button)] bg-[var(--niche-bg)] px-8 text-base font-semibold text-[var(--niche-text)] transition-transform active:scale-[0.98]"
              >
                {primaryCta}
              </button>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Service area band                                                         */
/* -------------------------------------------------------------------------- */

export function ServiceAreaBand({
  areas,
  city,
}: {
  areas: string[];
  city: string;
}) {
  return (
    <section className="niche-section niche-container">
      <SectionReveal>
        <div
          className="border border-[var(--niche-border)] bg-[var(--niche-surface)] px-6 py-10 md:px-10"
          style={{ borderRadius: "var(--niche-radius-card)" }}
        >
          <div className="flex items-center gap-2 text-[var(--niche-accent)]">
            <NicheIcon name="MapPin" size={20} weight="fill" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">
              Proudly serving {city} & nearby
            </span>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {areas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-[var(--niche-border)] px-4 py-2 text-sm font-medium"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </SectionReveal>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Appointment bar (doctors)                                                 */
/* -------------------------------------------------------------------------- */

export function AppointmentBar({ config }: { config: NicheConfig }) {
  const [values, setValues] = useState({ name: "", phone: "", date: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    openChat();
  };
  return (
    <section className="niche-container -mt-4 md:-mt-8">
      <div
        className="grid gap-6 bg-[var(--niche-accent)] px-6 py-8 text-[var(--niche-on-accent)] md:grid-cols-[1fr_1.6fr] md:items-center md:px-10"
        style={{ borderRadius: "var(--niche-radius-card)" }}
      >
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
            Convenient & easy
          </span>
          <h2 className="mt-2 font-display text-2xl font-semibold leading-tight md:text-3xl">
            Book your {config.city} visit in a few clicks
          </h2>
        </div>
        <form
          onSubmit={submit}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]"
        >
          <input
            aria-label="Full name"
            placeholder="Full name"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            className="h-11 rounded-[var(--niche-radius-input)] bg-[var(--niche-bg)] px-3.5 text-sm text-[var(--niche-text)] placeholder:text-[var(--niche-text-secondary)]"
          />
          <input
            aria-label="Phone number"
            placeholder="Phone number"
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            className="h-11 rounded-[var(--niche-radius-input)] bg-[var(--niche-bg)] px-3.5 text-sm text-[var(--niche-text)] placeholder:text-[var(--niche-text-secondary)]"
          />
          <input
            aria-label="Preferred date"
            placeholder="Preferred date"
            value={values.date}
            onChange={(e) => setValues((v) => ({ ...v, date: e.target.value }))}
            className="h-11 rounded-[var(--niche-radius-input)] bg-[var(--niche-bg)] px-3.5 text-sm text-[var(--niche-text)] placeholder:text-[var(--niche-text-secondary)]"
          />
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-[var(--niche-radius-button)] bg-[var(--niche-bg)] px-6 text-sm font-semibold text-[var(--niche-text)] transition-transform active:scale-[0.98] sm:col-span-2 lg:col-span-1"
          >
            Find a time
          </button>
        </form>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

export function SiteFooter({ config }: { config: NicheConfig }) {
  return (
    <footer className="border-t border-[var(--niche-border)] bg-[var(--niche-surface)]">
      <div className="niche-container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
        <div>
          <div className="font-display text-lg font-semibold">{config.businessName}</div>
          <p className="niche-text-secondary mt-3 max-w-xs text-sm leading-relaxed">
            {config.about.headline}
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm">
            <Stars rating={Number(config.reviewSummary.score)} size={15} />
            <span className="niche-text-secondary">
              {config.reviewSummary.score} · {config.reviewSummary.count} reviews
            </span>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold">Explore</div>
          <ul className="mt-4 grid gap-2.5">
            {config.navAnchors.map((a) => (
              <li key={a.id}>
                <a
                  href={`#${a.id}`}
                  className="niche-text-secondary text-sm hover:text-[var(--niche-accent)]"
                >
                  {a.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">Visit & contact</div>
          <ul className="niche-text-secondary mt-4 grid gap-2.5 text-sm">
            <li className="flex items-start gap-2">
              <NicheIcon name="MapPin" size={17} className="mt-0.5 text-[var(--niche-accent)]" />
              {config.footerTrust.address}
            </li>
            <li>{config.footerTrust.license}</li>
            <li className="pt-1">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-chatbot"))}
                className="font-medium text-[var(--niche-accent)]"
              >
                {config.primaryCta}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--niche-border)]">
        <div className="niche-container flex flex-col items-center justify-between gap-3 py-6 text-xs md:flex-row">
          <p className="niche-text-secondary">{config.footerTrust.privacyNote}</p>
          <Link href="/" className="niche-text-secondary hover:text-[var(--niche-accent)]">
            Back to all niches
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  Before / after transformations                                            */
/* -------------------------------------------------------------------------- */

export function TransformationSection({
  config,
  headline,
  intro,
  eyebrow,
}: {
  config: NicheConfig;
  headline: string;
  intro?: string;
  eyebrow?: string;
}) {
  return (
    <section id="results" className="niche-section niche-container">
      <SectionReveal>
        <Heading eyebrow={eyebrow} title={headline} intro={intro} />
      </SectionReveal>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {config.beforeAfter.map((item, i) => (
          <SectionReveal key={item.caption} delay={i * 0.08}>
            <BeforeAfterSlider
              before={item.before}
              after={item.after}
              caption={item.caption}
              disclosure={config.beforeAfterDisclosure}
            />
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
