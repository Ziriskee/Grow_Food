"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "plantguide-theme";
const DEFAULT_THEME: Theme = "dark";

function readTheme(): Theme {
  if (typeof document === "undefined") {
    return DEFAULT_THEME;
  }

  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function writeTheme(next: Theme) {
  document.documentElement.dataset.theme = next;

  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Storage may be unavailable in private mode.
    // The theme still applies for this page view.
  }
}

function subscribe(onStoreChange: () => void) {
  if (typeof document === "undefined") {
    return () => {};
  }

  const root = document.documentElement;

  const observer = new MutationObserver(onStoreChange);
  observer.observe(root, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  function handleStorage(event: StorageEvent) {
    if (event.key !== STORAGE_KEY) {
      return;
    }

    const next: Theme = event.newValue === "light" ? "light" : "dark";
    root.dataset.theme = next;
    onStoreChange();
  }

  window.addEventListener("storage", handleStorage);

  return () => {
    observer.disconnect();
    window.removeEventListener("storage", handleStorage);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => DEFAULT_THEME);

  const label =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  function toggle() {
    writeTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      title={label}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-colors duration-500 ease-editorial hover:bg-ink/5 hover:text-ink"
    >
      <span className="sr-only">{label}</span>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
      aria-hidden="true"
      className="h-[1.05rem] w-[1.05rem]"
    >
      <circle cx="10" cy="10" r="3.6" />
      <path d="M10 2.2v1.6M10 16.2v1.6M2.2 10h1.6M16.2 10h1.6M4.5 4.5l1.1 1.1M14.4 14.4l1.1 1.1M15.5 4.5l-1.1 1.1M5.6 14.4l-1.1 1.1" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-[1.05rem] w-[1.05rem]"
    >
      <path d="M16.8 12.6A7 7 0 0 1 7.4 3.2a7 7 0 1 0 9.4 9.4Z" />
    </svg>
  );
}
