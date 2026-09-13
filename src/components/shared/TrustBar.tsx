import type { TrustChip } from "@/lib/types";

export function TrustBar({ chips }: { chips: TrustChip[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Trust markers">
      {chips.map((chip) => (
        <li
          key={chip.label}
          className="rounded-full border border-[var(--niche-border)] bg-[var(--niche-surface)] px-3 py-1.5 text-xs text-[var(--niche-text-secondary)]"
        >
          {chip.mock ? (
            <span data-mock="true">{chip.label}</span>
          ) : (
            chip.label
          )}
        </li>
      ))}
    </ul>
  );
}

export function FooterTrust({
  license,
  address,
  privacyNote,
  reviewLink,
}: {
  license: string;
  address: string;
  privacyNote: string;
  reviewLink?: string;
}) {
  return (
    <div className="niche-text-secondary grid gap-4 border-t border-[var(--niche-border)] pt-8 text-sm md:grid-cols-2">
      <div className="space-y-2">
        <p>{license}</p>
        <p>{address}</p>
      </div>
      <div className="space-y-2 md:text-right">
        <p>{privacyNote}</p>
        {reviewLink ? (
          <a href="#" className="text-[var(--niche-accent)] hover:underline">
            {reviewLink}
          </a>
        ) : null}
      </div>
    </div>
  );
}
