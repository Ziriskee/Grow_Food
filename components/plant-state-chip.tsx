import Link from "next/link";
import { getState } from "@/lib/states";

export function PlantStateChip({ slug }: { slug: string }) {
  const state = getState(slug);
  if (!state) return null;

  return (
    <Link
      href={`/states/${state.slug}`}
      className="rounded-full border border-hairline px-3 py-1 text-[0.75rem] text-ink-soft transition-colors duration-500 ease-editorial hover:border-moss-soft hover:text-ink"
    >
      {state.name}
    </Link>
  );
}
