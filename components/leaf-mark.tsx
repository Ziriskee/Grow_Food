export function LeafMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.5 3.5C11 3.5 4.5 9 4.5 20.5c8 0 16-5.5 16-17Z" />
      <path d="M4.5 20.5C8 15.5 12.5 11 20.5 3.5" opacity={0.55} />
    </svg>
  );
}
