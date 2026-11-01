import { cn } from "@/lib/cn";

export function ArrowCircle({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full",
        className,
      )}
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        aria-hidden="true"
        className="h-[0.85em] w-[0.85em]"
      >
        <path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" />
      </svg>
    </span>
  );
}
