# Plantguide

A field guide to growing food and herbs wherever you are: what a plant needs,
what it gives back, what goes wrong, and which neighbours help it or ruin it.

Global scope. No market figures, no yield promises, no citations invented to
look authoritative. Built with Next.js (App Router), TypeScript and Tailwind v4.

## Quick start

```powershell
npm install
npm run dev        # http://localhost:3000
npm run build      # must pass before a change is considered done
npm run typecheck  # tsc --noEmit
```

## What is built so far

| Route | State |
| --- | --- |
| `/` | **Built.** Hero, searchable featured entries, what each plant page holds, the two kinds of "combining", editorial stance, footer. |
| `/plants` | **Built.** Browse and filter the full index. |
| `/plants/[slug]` | **Built.** The plant page itself. |
| `/learn`, `/about` | Planned. |

The landing page was approved as the first slice, so everything else is
deliberately absent rather than stubbed. Search on the landing page filters featured entries from the canonical plant records in `lib/plants/`. The `/plants` route browses the full index, and
`/plants/[slug]` renders each plant record.

## Where things live

| Path | Purpose |
| --- | --- |
| `app/` | Routes. `page.tsx` (landing), `layout.tsx` (fonts, metadata), `globals.css` (design tokens). |
| `components/` | One component per file; state kept in the few components that need it. |
| `lib/plants/` | Canonical full plant records, types, and exports. |
| `lib/cn.ts` | Class-name helper. |
| `docs/adr/` | Architecture decision records. |
| `data/`, `scripts/`, `web/`, `docs/` | The crop sourcing layer, described below. |

## The content rules that shape the UI

- **Two kinds of "combining" stay separate.** Companion planting is horticulture
  and appears as good/bad neighbour sections. Herbal mixing appears in its own
  block, labelled traditional use, with a boundary statement and no medical
  promise.
- **No invented sources.** Where a point rests on ordinary horticultural practice
  rather than a study, the page says that instead of borrowing a citation.
- **Nothing that reads like a sales sheet.** No prices, no income figures, no
  "yields up to".

---

# Sourcing layer — Nigerian crop records

This half of the repo predates the site and still applies to `data/crops`. It is
the working base for rebuilding GRO's crop content so that every recommendation
can be traced, challenged and corrected.

| Path | Purpose |
| --- | --- |
| `docs/SOURCE-REGISTRY.md` | Vetted Nigerian and regional sources, tiered by what they are good for. |
| `docs/EDITORIAL-STANDARD.md` | The rules a claim must pass before it goes on a page. |
| `docs/FARMER-VOICE-PROTOCOL.md` | How to collect, verify, credit and pay farmers for tips. |
| `docs/INTERVIEW-KIT.md` | Printable one-page interview and consent form. |
| `docs/AUDIT.md` | What is wrong with the existing 112-crop dataset, with numbers. |
| `docs/INTEGRATION.md` | How to move the live site from flat strings to sourced records. |
| `data/schema/crop.schema.json` | Machine-checkable shape of a crop record. |
| `data/crops/ugu.json` | A complete, fully cited reference record (fluted pumpkin). |
| `data/corrections.json` | Public correction log, seeded with the ugu fixes. |
| `scripts/audit_crops.py` | Re-runnable audit of the existing `crops.js`. |
| `scripts/validate_crops.py` | Fails the build when a record lacks provenance or contains banned actives. |
| `scripts/build_page.py` | Renders a crop JSON record as a static, self-contained page. |
| `web/ugu.html` | The rendered reference page — open it to see the standard. |
| `reports/audit.md`, `reports/audit.csv` | Current audit output. |

```powershell
python scripts\audit_crops.py        # audit the existing dataset
python scripts\validate_crops.py     # validate every record in data/crops
```

Both scripts are dependency-free Python 3.

## The honest framing

Corporate input sellers do shape what gets recommended: most extension material
still ends with a pesticide or fertiliser rate, and sponsored "best practice"
content rarely mentions that the cheapest fix is often agronomy. That bias is
real and worth naming.

But "uncensored" is not a source quality. A farmer's WhatsApp claim and a
fertiliser company's leaflet can both be wrong. The thing that protects farmers
is **provenance plus field validation**: who said it, where, when, on how many
plants, and did it survive a second season. That is what this layer enforces.

The clearest proof that even trusted institutions need checking sits in NIHORT's
own ugu guide: it still recommends Furadan (carbofuran) for nematodes. NAFDAC
banned carbofuran outright in 2023. A site that copies "official" guides without
checking the regulator would hand farmers a banned neurotoxin. See `docs/AUDIT.md`.

## What "done" looks like for one crop

1. Every number and every input recommendation links to a source.
2. Research recommendations, extension advice and farmer practice are labelled
   separately, never blended into one confident voice.
3. Pesticides are named only if NAFDAC-registered on the date of review, with
   pre-harvest interval and PPE, and IPM is offered first.
4. Varieties carry their NASC release name or are called landraces.
5. Money figures carry a year, a market and a caveat.
6. A farmer tip carries a name, state, date and consent, or it is not published.
7. The page shows when it was last reviewed and what changed.

## What the audit found

The current site has **112 crops and 916 numeric agronomic claims**, and **zero
named sources**. It names no released variety and gives a yield figure for only
four crops. The structure is good; the evidence layer is missing. Details and a
crop-by-crop comparison in `docs/AUDIT.md`.

No farmer quotes are included anywhere in this repo, because none have been
collected under consent yet. Inventing them would defeat the purpose of the
whole layer.
