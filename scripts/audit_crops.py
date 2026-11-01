"""Audit the GRO crop dataset for provenance, unsafe agronomy and structural gaps.

Run:  python scripts/audit_crops.py "path/to/crops.js"
Writes: reports/audit.md, reports/audit.csv
"""
import csv
import os
import re
import sys
from collections import Counter, defaultdict

DEFAULT_SRC = (
    r"C:\Users\HP\Documents\My_websites\GRO - Grow your own food"
    r"\fu7ru9-h0kxc4242-arcedawebapps1.vercel.app\js\crops.js"
)

STATES = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
    "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
    "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi",
    "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
    "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT",
]

# NAFDAC: carbofuran banned immediately (2023); paraquat effective 2024-01-01;
# chlorpyrifos 2024-11-01; atrazine 2025-01-01. Source: NAFDAC press release 2023-05-02.
BANNED = ["carbofuran", "furadan", "paraquat", "gramoxone", "atrazine",
          "chlorpyrifos", "dichlorvos", "ddvp"]
RESTRICTED_HAZARD = ["glyphosate", "cypermethrin", "mancozeb", "imidacloprid",
                     "lambda-cyhalothrin", "deltamethrin", "dimethoate",
                     "endosulfan", "monocrotophos", "methomyl", "carbaryl"]

NUM_UNIT = re.compile(
    r"(?P<num>\d+(?:[.,]\d+)?(?:\s*[-\u2013]\s*\d+(?:[.,]\d+)?)?)"
    r"\s*(?P<unit>kg/ha|t/ha|g/plant|ml/l|ml/10l|cm|mm|m\b|°c|ph|weeks?|days?|months?|%|kg|g\b)",
    re.I,
)

CROP_RE = re.compile(r"\{id:'(?P<id>[^']+)'", re.S)

FIELDS = ["desc", "soil", "states", "season", "water", "harvest", "diff",
          "climate", "landPrep", "seedPrep", "planting", "spacing",
          "watering", "fertilizer", "weeds", "pests", "diseases",
          "management", "harvesting", "postHarvest", "growingPeriod", "tips"]


def field(block: str, name: str) -> str:
    m = re.search(r"(?:^|[,\s])" + name + r":'((?:[^'\\]|\\.)*)'", block, re.S)
    return m.group(1) if m else ""


def array_field(block: str, name: str) -> list:
    m = re.search(r"(?:^|[,\s])" + name + r":\[([^\]]*)\]", block, re.S)
    if not m:
        return []
    return [s.strip().strip("'\"") for s in m.group(1).split(",") if s.strip()]


def split_crops(src: str):
    starts = [m.start() for m in CROP_RE.finditer(src)]
    for i, s in enumerate(starts):
        e = starts[i + 1] if i + 1 < len(starts) else len(src)
        block = src[s:e]
        cid = CROP_RE.match(block).group("id")
        yield cid, block


def main() -> None:
    src_path = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_SRC
    src = open(src_path, encoding="utf-8").read()
    crops = list(split_crops(src))

    rows = []
    chemical_hits = defaultdict(list)
    unit_counts = Counter()
    crops_with_sources = 0
    crops_with_varieties = 0
    crops_with_yield = 0
    state_errors = []
    duplicate_states = []
    long_tips = []
    num_claims = 0
    state_coverage = Counter()

    for cid, block in crops:
        text = " ".join(field(block, f) for f in FIELDS if f != "states")
        states = array_field(block, "states")
        unknown = [s for s in states if s not in STATES]
        if unknown:
            state_errors.append((cid, unknown))
        dupes = [s for s, n in Counter(states).items() if n > 1]
        if dupes:
            duplicate_states.append((cid, dupes))
        for s in states:
            state_coverage[s] += 1
        for s in BANNED + RESTRICTED_HAZARD:
            if re.search(r"\b" + re.escape(s) + r"\b", text, re.I):
                chemical_hits[s].append(cid)
        for m in NUM_UNIT.finditer(text):
            num_claims += 1
            unit_counts[m.group("unit").lower()] += 1
        has_source = bool(re.search(r"\bsource|according to|cited|reference\b", text, re.I))
        if has_source:
            crops_with_sources += 1
        if re.search(r"\bvariet(y|ies)\b|\bTMS\b|\bTDr\b|\bUMU", text):
            crops_with_varieties += 1
        if re.search(r"\bt/ha\b|tonnes? per hectare|tons? per hectare", text, re.I):
            crops_with_yield += 1
        tips = field(block, "tips")
        if tips:
            long_tips.append((cid, len(tips)))
        rows.append({
            "id": cid,
            "name": field(block, "name"),
            "category": field(block, "cat"),
            "n_states": len(states),
            "unknown_states": ";".join(unknown),
            "duplicate_states": ";".join(dupes),
            "empty_fields": ";".join(f for f in FIELDS if not field(block, f) and not array_field(block, f)),
            "has_source": has_source,
            "numbers": len(NUM_UNIT.findall(text)),
        })

    os.makedirs("reports", exist_ok=True)
    with open("reports/audit.csv", "w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=list(rows[0]))
        w.writeheader()
        w.writerows(rows)

    cats = Counter(r["category"] for r in rows)
    lines = []
    add = lines.append
    add("# GRO dataset audit\n")
    add(f"- File: `{src_path}`")
    add(f"- Crops parsed: **{len(rows)}**")
    add(f"- Numeric agronomic claims found: **{num_claims}**")
    add(f"- Crops with any named source: **{crops_with_sources} / {len(rows)}**")
    add(f"- Crops naming a variety: **{crops_with_varieties} / {len(rows)}**")
    add(f"- Crops giving a yield figure: **{crops_with_yield} / {len(rows)}**")
    add(f"- State-list errors: **{len(state_errors)}**")
    add(f"- Duplicate state entries: **{len(duplicate_states)}**")
    add("")
    add("## Categories\n")
    for c, n in sorted(cats.items(), key=lambda x: -x[1]):
        add(f"- {c}: {n}")
    add("")
    add("## States with the thinnest crop coverage\n")
    for s, n in sorted(state_coverage.items(), key=lambda x: x[1])[:8]:
        add(f"- {s}: {n} crops")
    add("")
    add("## Units used in claims\n")
    for u, n in unit_counts.most_common():
        add(f"- {u}: {n}")
    add("")
    add("## Banned / high-hazard active ingredients mentioned\n")
    if chemical_hits:
        for chem, ids in sorted(chemical_hits.items()):
            add(f"- **{chem}** — {len(ids)} crops: {', '.join(ids)}")
    else:
        add("- None found in crop text.")
    add("")
    add("## State list problems\n")
    if state_errors:
        for cid, bad in state_errors:
            add(f"- `{cid}`: {', '.join(bad)}")
    else:
        add("- All state names match the 36 states + FCT.")
    if duplicate_states:
        for cid, dupes in duplicate_states:
            add(f"- `{cid}` lists {', '.join(dupes)} twice")
    add("")
    add("## Shortest tips (thin content risk)\n")
    for cid, n in sorted(long_tips, key=lambda x: x[1])[:10]:
        add(f"- `{cid}`: {n} chars")
    add("")
    add("## Missing fields\n")
    missing = Counter()
    for r in rows:
        for f in r["empty_fields"].split(";"):
            if f:
                missing[f] += 1
    for f, n in missing.most_common():
        add(f"- {f}: {n} crops")
    add("")

    open("reports/audit.md", "w", encoding="utf-8").write("\n".join(lines))
    print("\n".join(lines))


if __name__ == "__main__":
    main()
