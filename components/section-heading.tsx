import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
  /** Constrain heading width; long display headings read badly at full width. */
  wide?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
  wide = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(wide ? "max-w-4xl" : "max-w-2xl", className)}>
      <p className="text-[0.625rem] uppercase tracking-[0.22em] text-clay">
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.35rem)] leading-[1.02] tracking-[-0.03em] text-balance text-ink">
        {title}
      </h2>
      {lead ? (
        <p className="mt-6 max-w-[54ch] text-[1rem] leading-[1.7] text-ink-soft">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
