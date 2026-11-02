"use client";

import { Moon, Sun } from "lucide-react";
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
      className="flex h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-colors duration-500 ease-editorial hover:bg-ink/5 hover:text-ink border"
    >
      <span className="sr-only">{label}</span>
      {theme === "dark" ? (
        <Sun
          strokeWidth={1.1}
          aria-hidden="true"
          className="h-[1.05rem] w-[1.05rem]"
        />
      ) : (
        <Moon
          strokeWidth={1.1}
          aria-hidden="true"
          className="h-[1.05rem] w-[1.05rem]"
        />
      )}
    </button>
  );
}

