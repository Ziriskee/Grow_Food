"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowCircle } from "./arrow-circle";
import { LeafMark } from "./leaf-mark";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

const links = [
  { href: "/plants", label: "Find a plant" },
  { href: "/#covers", label: "What's on a page" },
  { href: "/#companions", label: "Combining" },
  { href: "/#stance", label: "How it's written" },
];

const FOCUSABLE = 'a[href], button:not([disabled])';

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const items = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      );
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-4 z-40 px-4 sm:top-6">
      <nav
        aria-label="Primary"
        className="relative z-40 mx-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-full bg-paper/75 py-2 pl-4 pr-2 ring-1 ring-hairline backdrop-blur-xl sm:pl-5 border-moss border "
      >
        <Link
          href="/#top"
          className="flex items-center gap-2.5 rounded-full py-1 pr-2 text-ink transition-opacity duration-500 ease-editorial hover:opacity-70"
        >
          <LeafMark className="h-5 w-5 text-moss" />
          <span className="font-display text-lg tracking-[-0.01em]">
            Plantguide
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="link-grow pb-0.5 text-[0.8125rem] text-ink-soft transition-colors duration-500 ease-editorial hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/plants"
            className="group hidden items-center gap-2 rounded-full bg-moss py-2 pl-4 pr-2 text-[0.8125rem] text-paper transition-colors duration-500 ease-editorial hover:bg-ink sm:inline-flex"
          >
            Search
            <ArrowCircle className="h-6 w-6 bg-paper/15 text-[0.7rem] transition-transform duration-700 ease-editorial group-hover:-translate-y-px group-hover:translate-x-0.5" />
          </Link>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors duration-500 ease-editorial hover:bg-ink/5 lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-500 ease-editorial ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition-opacity duration-300 ease-editorial ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-500 ease-editorial ${
                  open ? "-translate-y-[8px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="menu-panel fixed inset-0 z-30 flex flex-col justify-center bg-paper/95 px-8 pb-16 pt-24 backdrop-blur-2xl lg:hidden"
        >
          <ul className="mx-auto flex w-full max-w-sm flex-col gap-2">
            {links.map((link, index) => (
              <li
                key={link.href}
                className="menu-link"
                style={{ animationDelay: `${120 + index * 80}ms` }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-hairline py-5 font-display text-3xl tracking-[-0.02em] text-ink"
                >
                  <span className="text-[0.625rem] uppercase tracking-[0.2em] text-clay">
                    0{index + 1}
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-12 w-full max-w-sm text-[0.8125rem] leading-relaxed text-ink-faint">
            Global growing information. No market figures, no yield promises.
          </p>
        </div>
      ) : null}
    </header>
  );
}
