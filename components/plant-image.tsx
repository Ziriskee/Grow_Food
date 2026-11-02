"use client";

import Image from "next/image";
import { useState } from "react";
import type { PlantImage as PlantImageRecord } from "@/lib/plants";
import { cn } from "@/lib/cn";

type PlantImageProps = {
  image: PlantImageRecord;
  /** Wrapper classes: aspect ratio, rounding, ring. */
  className?: string;
  sizes: string;
  priority?: boolean;
};

/**
 * One image with its three states:
 * loading  -> skeleton in the exact shape of the photo (no layout shift)
 * loaded   -> photo fades in over the skeleton
 * error    -> plain-language reason + retry, text content stays complete
 */
export function PlantImage({
  image,
  className,
  sizes,
  priority = false,
}: PlantImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading",
  );
  const [attempt, setAttempt] = useState(0);

  return (
    <div className={cn("relative overflow-hidden bg-ink/[0.05]", className)}>
      {status === "error" ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <p className="text-[0.8125rem] leading-relaxed text-ink-soft">
            This photo did not load. It is usually a connection blip on our side
            — the text on this page is complete without it.
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus("loading");
              setAttempt((value) => value + 1);
            }}
            className="rounded-full border border-hairline px-4 py-1.5 text-[0.75rem] text-ink-soft transition-colors duration-500 ease-editorial hover:border-moss-soft hover:text-ink"
          >
            Try again
          </button>
        </div>
      ) : (
        <>
          {status === "loading" ? (
            <div
              aria-hidden="true"
              className="absolute inset-0 animate-pulse bg-ink/[0.08]"
            />
          ) : null}

          <Image
            src={attempt > 0 ? `${image.src}?retry=${attempt}` : image.src}
            alt={image.alt || ""}
            fill
            sizes={sizes}
            priority={priority}
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("error")}
            className={cn(
              "object-cover transition-opacity duration-700 ease-editorial",
              status === "loaded" ? "opacity-100" : "opacity-0",
            )}
          />
        </>
      )}
    </div>
  );
}
