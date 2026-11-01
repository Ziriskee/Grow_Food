# AGENTS.md

Two things live in this repo:

1. **The plant guide site** — a Next.js app (TSX, Tailwind v4, App Router) at the
   repo root. `app/` holds routes, `components/` holds UI, `lib/` holds data and
   types. This is the product.
2. **The sourcing layer** — `data/`, `docs/`, `scripts/`, `web/`. Sourced
   Nigerian crop records and the validator that guards them. `data/crops/*.json`
   is the source of truth; `web/*.html` is generated output.

## Commands

```powershell
npm run dev          # http://localhost:3000
npm run build        # production build — must pass before a change is "done"
npm run typecheck    # tsc --noEmit
```

The crop tooling is separate: Python 3, stdlib only, no dependencies.

```powershell
python scripts\validate_crops.py        # CI gate; exit 1 on any error
python scripts\validate_crops.py data\crops   # validate a specific folder
python scripts\build_page.py            # data/crops/ugu.json -> web/ugu.html
python scripts\audit_crops.py           # audits the external mirror's crops.js
python scripts\audit_crops.py "<path-to-crops.js>"
```

Regenerate `web/*.html` after editing a crop; never hand-edit the generated HTML.

## Site conventions

- **Design tokens only.** Colours, fonts and easing live in the `@theme` block of
  `app/globals.css`. Do not put raw hex values in components.
- **Content boundaries.** No market prices, no income figures, no "yields up
  to". Traditional/herbal mixing is labelled as traditional use and is never
  framed as treatment or medical advice.
- **No invented citations.** If a claim rests on ordinary horticultural
  practice rather than a study, say so. Never add a reference to borrow
  authority.
- **Server components by default.** `"use client"` only where state or effects
  are genuinely needed — currently the nav, the search, and the scroll reveal.
- **Accessibility is part of done.** Keyboard reachable, visible focus ring,
  labelled controls, `aria-live` on changing result counts, and no information
  carried by colour alone.
- **`npm run build` must pass** before a change is reported as finished. There
  is no test suite yet; a green build and a browser check are the current gate.

## What is where

- `app/` — routes. `app/page.tsx` is the landing page; `app/layout.tsx` sets the
  fonts, metadata and the paper background.
- `components/` — UI. One component per file, presentation split from state.
- `lib/plants/` — canonical full plant records, types, and exports.
- `lib/cn.ts` — class-name join used by every component.
- `public/` — static assets (currently empty; no images are used).
- `data/crops/<id>.json` — one fully sourced crop record (only `ugu` so far).
- `data/schema/crop.schema.json` — editor aid only. **`scripts/validate_crops.py`
  is the authoritative gate**; schema edits do not change validation behaviour.
- `data/corrections.json` — public correction log. Record fixes here as well as
  in the crop; do not silently overwrite old claims.
- `docs/EDITORIAL-STANDARD.md` — evidence grades, pesticide and money rules.
- `docs/SOURCE-REGISTRY.md` — which institution is citable for what.
- `docs/AUDIT.md` — what is wrong with the existing 112-crop dataset.
- `reports/` — generated audit output.
- `scripts/audit_crops.py` defaults to the HTTrack mirror at
  `C:\Users\HP\Documents\My_websites\GRO - Grow your own food\...\js\crops.js`.
  That mirror is the only copy of the old 112-crop data and is not in this repo.

## Non-negotiable record rules

The validator enforces these; do not work around them:

- Any object containing a number must carry a non-empty `sourceIds` array that
  resolves to `sources[]`. This is per claim block, not per page.
- Banned actives may appear only in warning language: carbofuran/Furadan,
  paraquat/Gramoxone, atrazine, chlorpyrifos, dichlorvos/DDVP.
- `practices[].type == "farmer"` requires `attribution` with name/pseudonym,
  state, recorded date and `consent: true`.
- `review.reviewedAt` must be within 730 days; `nextReview` after `reviewedAt`.
- At least one source must be government, institutional, peer-reviewed or
  regulator; every source URL must be `https://`.
- Every record needs at least one `openQuestions` entry.

Numeric provenance is skipped for the top-level `sources` and `review` blocks
(years and dates) by design.

## Editorial traps

- **Never invent farmer quotes, names or outcomes.** No interview, no quote.
  Use `docs/FARMER-VOICE-PROTOCOL.md` and `docs/INTERVIEW-KIT.md`.
- **Do not copy institute pesticide sections verbatim.** NIHORT's ugu guide
  recommends carbofuran; NAFDAC banned it in 2023. Cite the institute for
  agronomy and NAFDAC for what is legal.
- Keep research, extension, farmer and editorial voices labelled separately;
  do not merge them into one confident paragraph.
- Naira figures need year, market, unit and a caveat. Never present 2022 costs
  as current.
- Prefer "in a 2022 trial in Okigwe, n = ..." over "farmers earn ...".
- Do not name a variety that is not NASC-released or explicitly a landrace.

## Windows gotchas

- PowerShell console is cp1252: printing `°`, emoji, en dashes or raw crop text
  raises `UnicodeEncodeError`. Write UTF-8 to files; avoid printing crop prose.
- Some source/PDF filenames contain em dashes or odd characters; resolve them
  with `glob` in Python instead of typing the path.
- `web/ugu.html` is self-contained on purpose: `fetch()` fails from `file://`,
  so the page does not load JSON at runtime.

## Adding a crop

1. Copy `data/crops/ugu.json`, change `id`/names, rewrite every section.
2. Add sources with title, publisher, year, `https://` URL, type, accessed date.
3. Attach `sourceIds` to every numeric block; type and grade every practice.
4. Set `review` dates and `pesticideCheckedAt`.
5. Run the validator, then `build_page.py`.
6. Add an entry to `data/corrections.json` if you changed an existing claim.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
