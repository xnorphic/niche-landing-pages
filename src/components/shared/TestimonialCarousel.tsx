"use client";

import { SectionReveal } from "@/components/shared/SectionReveal";
import type { Testimonial } from "@/lib/types";

export function TestimonialCarousel({
  testimonials,
  title,
}: {
  testimonials: Testimonial[];
  title: string;
}) {
  return (
    <SectionReveal>
      <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:gap-6">
        {testimonials.map((item) => (
          <figure
            key={`${item.name}-${item.role}`}
            className="niche-card min-w-[min(85vw,22rem)] shrink-0 snap-start p-6 md:min-w-[24rem]"
          >
            <blockquote className="text-base leading-relaxed">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-medium text-[var(--niche-text)]">
                {item.name}
              </span>
              <span className="niche-text-secondary"> · {item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionReveal>
  );
}
