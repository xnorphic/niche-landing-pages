"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { hubNiches } from "@/lib/niches";
import { imageSeed } from "@/lib/utils";

export function NicheHub() {
  const reduced = useReducedMotion();

  return (
    <div className="min-h-[100dvh] bg-[#f0f0ee] text-[#1a1a18]">
      <header className="mx-auto flex w-[min(100%-2rem,72rem)] items-center justify-between py-8">
        <p className="text-sm font-medium tracking-tight">Niche Landing Pages</p>
        <p className="text-xs text-[#5c5c58]">Phase 1 · 2026 themes</p>
      </header>

      <main className="mx-auto w-[min(100%-2rem,72rem)] pb-20">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-2xl"
        >
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Four niches. Four distinct design systems.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#5c5c58]">
            Explore polished landing pages for doctors, interior designers, HVAC,
            and fine jewellery. Each route ships its own palette, typography, and
            motion profile.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {hubNiches.map((niche, index) => (
            <motion.article
              key={niche.id}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: reduced ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={niche.href}
                className="group relative block overflow-hidden rounded-2xl bg-[#e8e8e4] ring-1 ring-[#d8d8d2] transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={imageSeed(niche.image, 900, 560)}
                    alt={`${niche.name} landing page preview`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 opacity-30 mix-blend-multiply"
                    style={{ backgroundColor: niche.accent }}
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight">
                      {niche.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[#5c5c58]">
                      {niche.designRead}
                    </p>
                  </div>
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#f0f0ee]"
                    style={{ backgroundColor: niche.accent }}
                  >
                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}
