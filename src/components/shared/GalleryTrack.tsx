"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/shared/SectionReveal";
import type { GalleryImage } from "@/lib/types";

export function GalleryTrack({
  images,
  title,
}: {
  images: GalleryImage[];
  title: string;
}) {
  return (
    <SectionReveal>
      <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4">
        {images.map((image) => (
          <div
            key={image.src}
            className="relative aspect-[3/4] min-w-[min(75vw,18rem)] shrink-0 snap-start overflow-hidden md:min-w-[20rem]"
            style={{ borderRadius: "var(--niche-radius-card)" }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 75vw, 20rem"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </SectionReveal>
  );
}
