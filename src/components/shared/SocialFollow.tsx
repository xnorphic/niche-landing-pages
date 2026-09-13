"use client";

import { FacebookLogo, InstagramLogo, TiktokLogo } from "@phosphor-icons/react";
import type { SocialLink } from "@/lib/types";

const icons = {
  instagram: InstagramLogo,
  facebook: FacebookLogo,
  tiktok: TiktokLogo,
} as const;

export function SocialFollow({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => {
        const Icon = icons[link.platform];
        const isPlaceholder = link.url.startsWith("{{");
        return (
          <a
            key={link.platform}
            href={isPlaceholder ? "#" : link.url}
            aria-label={`Follow on ${link.platform}`}
            className="niche-btn-ghost inline-flex h-11 w-11 items-center justify-center"
            {...(isPlaceholder ? { "data-mock": "true" } : { target: "_blank", rel: "noopener noreferrer" })}
          >
            <Icon size={20} strokeWidth={1.5} />
          </a>
        );
      })}
    </div>
  );
}
