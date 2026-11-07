"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Plant } from "@/lib/plants";
import { cn } from "@/lib/cn";
import { dailySeed, seededShuffle } from "@/lib/random";
import { SpecimenCard } from "./specimen-card";

const ROTATE_MS = 5000;
const SWIPE_PX = 40;
const MAX_DOTS = 5;

const tilts = ["-rotate-[1.8deg]", "rotate-[1.1deg]", "rotate-[-0.7deg]"];

type SpecimenPagerProps = {
  plants: Plant[];
};

/**
 * One card slot that crossfades through the whole index.
 * The order is shuffled once per day from a date seed, applied inside a
 * requestAnimationFrame callback so the first client paint always matches
 * the server render: no hydration mismatch, no setState in the effect body.
 */
export function SpecimenPager({ plants }: SpecimenPagerProps) {
  const [order, setOrder] = useState<Plant[]>(plants);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const count = order.length;

  useEffect(() => {
    if (count < 2) return;

    const frame = requestAnimationFrame(() => {
      setOrder(seededShuffle(plants, dailySeed()));
      setIndex(0);
    });

    return () => cancelAnimationFrame(frame);
  }, [plants, count]);

  const go = useCallback(
    (next: number) => setIndex((next + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % count),
      ROTATE_MS,
    );

    return () => window.clearInterval(id);
  }, [paused, count]);

  if (count === 0) return null;

  return (
    <div
      className="relative mx-auto w-full h-full mb-28 max-w-90 max-h-150 max-lg:hidden "
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(event) => {
        touchX.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchX.current === null) return;
        const delta = event.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(delta) < SWIPE_PX) return;
        go(delta < 0 ? index + 1 : index - 1);
      }}
    >
      <div
        className="grid"
        aria-roledescription="carousel"
        aria-label="Plants from the index"
      >
        {order.map((plant, i) => (
          <div
            key={plant.slug}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}: ${plant.name}`}
            aria-hidden={i === index ? undefined : true}
            className={cn(
              "[grid-area:1/1] transition-[opacity,visibility] duration-700 ease-editorial",
              i === index
                ? "visible opacity-100"
                : "pointer-events-none invisible opacity-0",
            )}
          >
            <SpecimenCard plant={plant} className={tilts[i % tilts.length]} />
          </div>
        ))}
      </div>

      {count > 1 ? (
        <div className=" flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous plant"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors duration-500 ease-editorial hover:bg-ink/5 hover:text-ink"
          >
            <ChevronLeft
              className="h-4 w-4"
              strokeWidth={1.4}
              aria-hidden="true"
            />
          </button>

          {count <= MAX_DOTS ? (
            <div className="flex items-center gap-2">
              {order.map((plant, i) => (
                <button
                  key={plant.slug}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show ${plant.name}`}
                  aria-current={i === index ? "true" : undefined}
                  className={cn(
                    "h-2 rounded-full transition-all duration-500 ease-editorial",
                    i === index
                      ? "w-6 bg-moss"
                      : "w-2 bg-ink/20 hover:bg-ink/40",
                  )}
                />
              ))}
            </div>
          ) : (
            <p className="text-[0.75rem] tabular-nums text-ink-faint">
              {index + 1} / {count}
            </p>
          )}

          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next plant"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors duration-500 ease-editorial hover:bg-ink/5 hover:text-ink"
          >
            <ChevronRight
              className="h-4 w-4"
              strokeWidth={1.4}
              aria-hidden="true"
            />
          </button>
        </div>
      ) : null}
    </div>
  );
}
