"use client";

import { useDeferredValue, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { featuredPlants, type Plant } from "@/lib/plants";
import {
  getCategorySlug,
  plantCategories,
  type PlantCategorySlug,
} from "@/lib/categories";
import { cn } from "@/lib/cn";
import { SpecimenCard } from "./specimen-card";

const suggestions = ["tomato", "herb", "tropical", "mediterranean"];

type GuideSearchProps = {
  /** The index to search; /plants passes the full list. */
  plants: Plant[];
  /** Show category sections when nothing is typed or filtered. */
  grouped?: boolean;
  noun?: string;
};

export function GuideSearch({
  plants,
  grouped = false,
  noun = "entries",
}: GuideSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | PlantCategorySlug
  >("all");
  const deferredQuery = useDeferredValue(query);
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const hasQuery = query.trim().length > 0;

  const results = useMemo(() => {
    const needle = deferredQuery.trim().toLowerCase();

    return plants?.filter((plant) => {
      const matchesCategory =
        selectedCategory === "all" ||
        getCategorySlug(plant.category) === selectedCategory;

      if (!matchesCategory) return false;
      if (!needle) return true;

      return [
        plant.name,
        plant.latin,
        plant.family,
        plant.category,
        plant.zones.join(" "),
        plant.blurb,
      ]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }, [plants, deferredQuery, selectedCategory]);

  /**
   * Empty-state escapes derived from the live data, so they never repeat the
   * always-visible "Try" row. Always valid searches, always different.
   */
  const closeSearches = useMemo(() => {
    const blocked = new Set(
      suggestions.map((suggestion) => suggestion.toLowerCase()),
    );
    return plants
      ?.filter((plant) => !blocked.has(plant.name.toLowerCase()))
      .slice(0, 4)
      .map((plant) => plant.name);
  }, [plants]);

  const showGroups = grouped && !hasQuery && selectedCategory === "all";

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

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-ink-faint">
          Category
        </span>

        <button
          type="button"
          onClick={() => setSelectedCategory("all")}
          aria-pressed={selectedCategory === "all"}
          className={cn(
            "rounded-full border px-3 py-1 text-[0.75rem] transition-colors duration-500 ease-editorial",
            selectedCategory === "all"
              ? "border-moss bg-moss text-paper"
              : "border-hairline text-ink-soft hover:border-moss-soft hover:text-ink",
          )}
        >
          All
        </button>

        {plantCategories.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => setSelectedCategory(category.slug)}
            aria-pressed={selectedCategory === category.slug}
            className={cn(
              "rounded-full border px-3 py-1 text-[0.75rem] transition-colors duration-500 ease-editorial",
              selectedCategory === category.slug
                ? "border-moss bg-moss text-paper"
                : "border-hairline text-ink-soft hover:border-moss-soft hover:text-ink",
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <p aria-live="polite" className="text-[0.8125rem] text-ink-faint">
          {hasQuery
            ? `${results?.length} ${
                results?.length === 1 ? "entry matches" : "entries match"
              } “${query.trim()}”`
            : `${results?.length} ${noun} in the guide`}
        </p>

      </div>

      {results?.length > 0 ? (
        showGroups ? (
          <div className="mt-10 flex flex-col gap-14">
            {plantCategories.map((category) => {
              const categoryPlants = results?.filter(
                (plant) => getCategorySlug(plant.category) === category.slug,
              );

              if (categoryPlants?.length === 0) return null;

              return (
                <section
                  key={category.slug}
                  aria-labelledby={`category-${category.slug}`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h2
                      id={`category-${category.slug}`}
                      className="font-display text-3xl tracking-[-0.02em] text-ink"
                    >
                      {category.name}
                    </h2>
                    <p className="text-[0.8125rem] text-ink-faint">
                      {categoryPlants?.length}{" "}
                      {categoryPlants?.length === 1 ? "entry" : "entries"}
                    </p>
                  </div>

                  <p className="mt-3 max-w-[70ch] text-[0.9375rem] leading-relaxed text-ink-soft">
                    {category.description}
                  </p>

                  <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {categoryPlants?.map((plant) => (
                      <li key={plant.slug}>
                        <SpecimenCard plant={plant} className="h-full" />
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        ) : (
          <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {results?.map((plant) => (
              <li key={plant.slug}>
                <SpecimenCard plant={plant} className="h-full" />
              </li>
            ))}
          </ul>
        )
      ) : (
        <div
          role="status"
          className="mt-5 rounded-[1.75rem] border border-dashed border-hairline px-6 py-16 text-center"
        >
          <p className="font-display text-2xl tracking-[-0.015em] text-ink">
            Nothing under “{query.trim()}”
          </p>
          <p className="mx-auto mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-ink-soft">
            No entry matches yet. The index is still growing, so a gap means the
            plant is not here yet — not that the search is broken.
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
          {closeSearches?.length > 0 ? (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-ink-faint">
                Close searches
              </span>
              {closeSearches?.map((suggestion) => (
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
          ) : null}
        </div>
      )}
    </div>
  );
}
