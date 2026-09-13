"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowsHorizontal } from "@phosphor-icons/react";

export function BeforeAfterSlider({
  before,
  after,
  caption,
  disclosure,
}: {
  before: string;
  after: string;
  caption: string;
  disclosure: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      updateFromClientX(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [updateFromClientX]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - 5));
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + 5));
    }
  };

  return (
    <figure className="space-y-3">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full select-none overflow-hidden"
        style={{ borderRadius: "var(--niche-radius-card)" }}
      >
        <Image src={after} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 72rem" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image src={before} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 72rem" />
        </div>
        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-[var(--niche-on-accent)]"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />
        <button
          type="button"
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-label="Compare before and after"
          onKeyDown={onKeyDown}
          onPointerDown={(e) => {
            dragging.current = true;
            updateFromClientX(e.clientX);
          }}
          className="absolute top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--niche-accent)] text-[var(--niche-on-accent)] shadow-lg"
          style={{ left: `${position}%` }}
        >
          <ArrowsHorizontal size={20} strokeWidth={1.5} />
        </button>
        <span className="absolute left-3 top-3 rounded-full bg-[var(--niche-surface)]/90 px-2 py-1 text-xs">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-[var(--niche-surface)]/90 px-2 py-1 text-xs">
          After
        </span>
      </div>
      <figcaption className="text-sm font-medium">{caption}</figcaption>
      <p className="niche-text-secondary text-xs">{disclosure}</p>
    </figure>
  );
}
