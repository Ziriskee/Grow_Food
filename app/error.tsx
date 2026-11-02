"use client";

export default function PageError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-5 py-24">
      <div className="w-full max-w-md rounded-[1.75rem] bg-ink/[0.035] p-1.5 ring-1 ring-hairline">
        <div className="rounded-[calc(1.75rem-0.375rem)] bg-paper-raised p-8 text-center">
          <p className="text-[0.625rem] uppercase tracking-[0.22em] text-clay">
            Something went wrong
          </p>
          <h1 className="mt-4 font-display text-3xl tracking-[-0.02em] text-ink">
            This page failed to render.
          </h1>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
            The fault is on our side, not your connection. Your device and
            network are fine.
          </p>
          {error.digest ? (
            <p className="mt-2 text-[0.75rem] text-ink-faint">
              Reference: {error.digest}
            </p>
          ) : null}
          <button
            type="button"
            onClick={reset}
            className="mt-7 rounded-full bg-moss px-5 py-2.5 text-[0.8125rem] text-paper transition-colors duration-500 ease-editorial hover:bg-ink"
          >
            Try again
          </button>
          <p className="mt-4 text-[0.8125rem] text-ink-faint">
            or{" "}
            <a
              href="/"
              className="link-grow pb-0.5 text-ink-soft transition-colors duration-500 ease-editorial hover:text-ink"
            >
              back to the guide
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
