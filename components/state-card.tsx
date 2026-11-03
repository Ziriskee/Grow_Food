import Link from "next/link";
import type { NigerianState } from "@/lib/states";
import { cn } from "@/lib/cn";
import { ArrowCircle } from "./arrow-circle";

type StateCardProps = {
  state: NigerianState;
  className?: string;
};

export function StateCard({ state, className }: StateCardProps) {
  return (
    <Link
      href={`/states/${state.slug}`}
      className={cn(
        "group block rounded-[1.75rem] bg-ink/[0.035] p-1.5 ring-1 ring-hairline",
        "transition-transform duration-700 ease-editorial hover:-translate-y-1",
        className,
      )}
    >
      <article className="flex h-full flex-col rounded-[calc(1.75rem-0.375rem)] bg-paper-raised p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="text-[0.625rem] font-medium uppercase tracking-[0.22em] text-clay">
            {state.zone}
          </p>
          <ArrowCircle className="h-6 w-6 shrink-0 bg-ink/[0.06] text-[0.7rem] text-ink-faint transition-transform duration-700 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay" />
        </div>

        <h3 className="mt-5 font-display text-2xl leading-tight tracking-[-0.015em] text-ink">
          {state.name}
        </h3>

        <p className="mt-1 text-[0.8125rem] text-ink-faint">
          Capital: {state.capital}
        </p>

        <p className="mt-4 line-clamp-3 text-[0.875rem] leading-relaxed text-ink-soft">
          {state.farmingNote}
        </p>
      </article>
    </Link>
  );
}
