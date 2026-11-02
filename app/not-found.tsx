import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-5 py-24">
      <div className="w-full max-w-md rounded-[1.75rem] bg-ink/[0.035] p-1.5 ring-1 ring-hairline">
        <div className="rounded-[calc(1.75rem-0.375rem)] bg-paper-raised p-8 text-center">
          <p className="text-[0.625rem] uppercase tracking-[0.22em] text-clay">
            Page not found
          </p>
          <h1 className="mt-4 font-display text-3xl tracking-[-0.02em] text-ink">
            There is no page at this address.
          </h1>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
            The link may be old, or the plant entry has not been published yet.
            Nothing is wrong on your side.
          </p>
          <Link
            href="/plants"
            className="mt-7 inline-block rounded-full bg-moss px-5 py-2.5 text-[0.8125rem] text-paper transition-colors duration-500 ease-editorial hover:bg-ink"
          >
            Browse all plants
          </Link>
          <p className="mt-4 text-[0.8125rem] text-ink-faint">
            or{" "}
            <Link
              href="/#guide"
              className="link-grow pb-0.5 text-ink-soft transition-colors duration-500 ease-editorial hover:text-ink"
            >
              search the guide
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
