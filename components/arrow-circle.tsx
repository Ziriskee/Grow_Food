import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

export function ArrowCircle({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full",
        className,
      )}
    >
      <ArrowUpRight
        strokeWidth={1.1}
        aria-hidden="true"
        className="h-[0.85em] w-[0.85em]"
      />
    </span>
  );
}
