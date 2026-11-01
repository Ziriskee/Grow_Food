import Link from "next/link";
import type { Plant } from "@/lib/plants";
import { cn } from "@/lib/cn";
import { ArrowCircle } from "./arrow-circle";

type SpecimenCardProps = {
  plant: Plant;
  className?: string;
};

/**
 * Double-bezel specimen card: a paper plate sitting in a thin shell, so it
 * reads as a physical object rather than a box with a border.
 *
 * The whole card is the link target. A card that only navigates from its title
 * is a common miss: on a phone the title is a small tap target and the rest of
 * the card looks dead.
 */
export function SpecimenCard({ plant, className }: SpecimenCardProps) {
  return (
    <Link
      href={`/plants/${plant.slug}`}
      className={cn(
        "group block rounded-[1.75rem] bg-ink/[0.035] p-1.5 ring-1 ring-hairline",
        "transition-transform duration-700 ease-editorial hover:-translate-y-1",
        className,
      )}
    >
      <article className="flex h-full flex-col rounded-[calc(1.75rem-0.375rem)] bg-paper-raised p-6 shadow-[inset_0_1px_0_var(--pg-inset)]">
        <div className="flex items-start justify-between gap-4">
          <p className="text-[0.625rem] font-medium uppercase tracking-[0.22em] text-clay">
            {plant.category}
          </p>
          <ArrowCircle className="h-6 w-6 shrink-0 bg-ink/[0.06] text-[0.7rem] text-ink-faint transition-transform duration-700 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay" />
        </div>

        <h3 className="mt-5 font-display text-2xl leading-tight tracking-[-0.015em] text-ink">
          {plant.name}
        </h3>
        <p className="mt-1 font-display text-sm italic text-ink-faint">
          {plant.latin}
        </p>

        <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
          {plant.blurb}
        </p>

        <dl className="mt-auto grid grid-cols-2 gap-x-4 gap-y-3 border-t border-hairline/70 pt-5 text-[0.75rem]">
          <div>
            <dt className="uppercase tracking-[0.14em] text-ink-faint">Light</dt>
            <dd className="mt-1 text-ink-soft">{plant.facts.light}</dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.14em] text-ink-faint">Water</dt>
            <dd className="mt-1 text-ink-soft">{plant.facts.water}</dd>
          </div>
        </dl>
      </article>
    </Link>
  );
}
