import { Leaf } from "lucide-react";

export function LeafMark({ className }: { className?: string }) {
  return <Leaf strokeWidth={0.9} aria-hidden="true" className={className} />;
}
