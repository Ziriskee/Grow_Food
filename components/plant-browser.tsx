"use client";

import { useDeferredValue, useId, useMemo, useRef, useState } from "react";
import type { Plant } from "@/lib/plants";
import { SpecimenCard } from "./specimen-card";

type PlantBrowserProps = {
  plants: Plant[];
  suggestions?: string[];
  /** Label above the result count, e.g. "entries in the guide". */
  noun?: string;
};

export function PlantBrowser({
  plants,
  suggestions = ["tomato", "herb", "tropical", "mediterranean"],
  noun = "entries",
}: PlantBrowserProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const needle = deferredQuery.trim().toLowerCase();
    if (!needle) return plants;

    return plants.filter((plant) =>
      [
        plant.name,
        plant.latin,
        plant.family,
        plant.category,
        plant.zones.join(" "),
        plant.facts.light,
        plant.facts.water,
        plant.blurb,
      ]
        .join(" ")
        .toLowerCase()
        .includes(needle),
    );
  }, [plants, deferredQuery]);

  const hasQuery = query.trim().length > 0;

  return (
    <div>
      <form
        role="search"
        onSubmit={(event) => event.preventDefault()}
        className="rounded-[2rem] bg-ink/[0.04] p-1.5 ring-1 ring-hairline transition-colors duration-500 ease-editorial focus-within:ring-clay/45"
      >
        <div className="flex items-center gap-3 rounded-[calc(2rem-0.375rem)] bg-paper-raised px-5 py-3">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.1}
            strokeLinecap="round"
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-ink-faint"
          >
            <circle cx="8.5" cy="8.5" r="5.5" />
            <path d="m13 13 4 4" />
          </svg>

          <label htmlFor={inputId} className="sr-only">
            Search plants by name, family, category or climate
          </label>
          <input
            ref={inputRef}
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try “tomato”, “herb”, or “tropical”"
            autoComplete="off"
            spellCheck={false}
            className="w-full bg-transparent text-[0.9375rem] text-ink outline-none placeholder:text-ink-faint [&::-webkit-search-cancel-button]:hidden"
          />

          {hasQuery ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="shrink-0 rounded-full px-3 py-1 text-[0.6875rem] uppercase tracking-[0.14em] text-ink-faint transition-colors duration-500 ease-editorial hover:text-clay"
            >
              Clear
            </button>
          ) : null}
        </div>
      </form>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-ink-faint">
          Try
        </span>
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => {
              setQuery(suggestion);
              inputRef.current?.focus();
            }}
            className="rounded-full border border-hairline px-3 py-1 text-[0.75rem] text-ink-soft transition-colors duration-500 ease-editorial hover:border-moss-soft hover:text-ink"
          >
            {suggestion}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="mt-8 text-[0.8125rem] text-ink-faint">
        {hasQuery
          ? `${results.length} ${
              results.length === 1 ? "entry matches" : "entries match"
            } “${query.trim()}”`
          : `${results.length} ${noun} in the guide`}
      </p>

      {results.length > 0 ? (
        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((plant) => (
            <li key={plant.slug}>
              <SpecimenCard plant={plant} className="h-full" />
            </li>
          ))}
        </ul>
      ) : (
        <div
          role="status"
          className="mt-5 rounded-[1.75rem] border border-dashed border-hairline px-6 py-16 text-center"
        >
          <p className="font-display text-2xl tracking-[-0.015em] text-ink">
            Nothing under “{query.trim()}”
          </p>
          <p className="mx-auto mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-ink-soft">
            The index is still growing. Try a plant name, a family such as
            “Lamiaceae”, or a climate such as “temperate”.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="mt-7 rounded-full bg-moss px-5 py-2.5 text-[0.8125rem] text-paper transition-colors duration-500 ease-editorial hover:bg-ink"
          >
            Show every entry
          </button>
        </div>
      )}
    </div>
  );
}
