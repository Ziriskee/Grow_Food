"""Validate GRO crop records.

Rules enforced:
  * required sections and source resolution
  * any object containing numbers must carry sourceIds (provenance at the claim)
  * practices must be graded; "farmer" practices need consent + attribution
  * banned actives may only appear in a warning context
  * review dates must be current (<= 730 days) and ordered
  * at least one institutional/peer-reviewed/regulator source per crop

Run: python scripts/validate_crops.py [data/crops]
Exit code 1 on any error.
"""
import json
import os
import re
import sys
from datetime import date, datetime, timedelta

BANNED = [
    "carbofuran", "furadan", "paraquat", "gramoxone", "atrazine",
    "chlorpyrifos", "dichlorvos", "ddvp",
]
WARNING_WORDS = re.compile(
    r"ban|banned|do not use|not registered|illegal|prohibited|must not|never use",
    re.I,
)

REQUIRED = [
    "id", "name", "scientificName", "category", "localNames", "description",
    "agroEcologies", "states", "statesProvenance", "difficulty", "climate",
    "soil", "planting", "water", "nutrition", "pestsAndDiseases", "harvest",
    "postHarvest", "safety", "practices", "openQuestions", "sources", "review",
]
GRADES = {"A", "B", "C", "D", "E"}
PRACTICE_TYPES = {"research", "extension", "farmer", "traditional", "editorial"}
SOURCE_TYPES = {
    "peer-reviewed", "government", "institutional", "ngo",
    "farmer-network", "dataset", "regulator",
}


def is_number(v):
    return isinstance(v, (int, float)) and not isinstance(v, bool)


def has_number(v):
    if is_number(v):
        return True
    if isinstance(v, list):
        return any(is_number(x) for x in v)
    return False


def walk(node, path, errors, source_ids, name):
    if path in {"sources", "review"}:
        return
    if isinstance(node, dict):
        if any(has_number(v) for v in node.values()):
            ids = node.get("sourceIds", [])
            if not ids:
                errors.append(f"{name}: {path} has numeric claims without sourceIds")
            else:
                for sid in ids:
                    if sid not in source_ids:
                        errors.append(f"{name}: {path} references unknown source '{sid}'")
        for k, v in node.items():
            walk(v, f"{path}.{k}" if path else k, errors, source_ids, name)
    elif isinstance(node, list):
        for i, v in enumerate(node):
            walk(v, f"{path}[{i}]", errors, source_ids, name)


def scan_banned(node, path, errors):
    if isinstance(node, str):
        for term in BANNED:
            if re.search(r"\b" + term + r"\b", node, re.I):
                if not WARNING_WORDS.search(node) and not path.startswith("safety"):
                    errors.append(
                        f"{path}: mentions banned active '{term}' without a warning context"
                    )
    elif isinstance(node, dict):
        for k, v in node.items():
            scan_banned(v, f"{path}.{k}" if path else k, errors)
    elif isinstance(node, list):
        for i, v in enumerate(node):
            scan_banned(v, f"{path}[{i}]", errors)


def parse_date(value):
    return datetime.strptime(value, "%Y-%m-%d").date()


def validate(path, seen_ids):
    errors = []
    try:
        crop = json.load(open(path, encoding="utf-8"))
    except json.JSONDecodeError as exc:
        return [f"{path}: invalid JSON ({exc})"]

    name = os.path.basename(path)
    for key in REQUIRED:
        if key not in crop:
            errors.append(f"{name}: missing required section '{key}'")
    if errors:
        return errors

    if crop["id"] in seen_ids:
        errors.append(f"{name}: duplicate crop id '{crop['id']}'")
    seen_ids.add(crop["id"])
    if not re.fullmatch(r"[a-z0-9-]+", crop["id"]):
        errors.append(f"{name}: id must be lowercase-slug")

    sources = crop["sources"]
    source_ids = [s.get("id") for s in sources]
    if len(source_ids) != len(set(source_ids)):
        errors.append(f"{name}: duplicate source ids")
    for s in sources:
        for key in ("id", "title", "publisher", "year", "url", "type", "accessed"):
            if key not in s:
                errors.append(f"{name}: source '{s.get('id', '?')}' missing {key}")
        if s.get("type") not in SOURCE_TYPES:
            errors.append(f"{name}: source '{s.get('id')}' has invalid type")
        if not str(s.get("url", "")).startswith("https://"):
            errors.append(f"{name}: source '{s.get('id')}' url must be https")
        try:
            parse_date(s.get("accessed", ""))
        except ValueError:
            errors.append(f"{name}: source '{s.get('id')}' has invalid accessed date")

    strong = {"government", "institutional", "peer-reviewed", "regulator"}
    if not any(s.get("type") in strong for s in sources):
        errors.append(f"{name}: needs at least one government/institutional/peer-reviewed/regulator source")

    walk(crop, "", errors, set(source_ids), name)
    scan_banned(crop, "", errors)

    for i, p in enumerate(crop["practices"]):
        label = f"{name}: practice[{i}]"
        for key in ("claim", "type", "grade", "confidence", "sourceIds"):
            if key not in p:
                errors.append(f"{label} missing {key}")
                continue
        if p.get("type") not in PRACTICE_TYPES:
            errors.append(f"{label} invalid type")
        if p.get("grade") not in GRADES:
            errors.append(f"{label} invalid grade")
        for sid in p.get("sourceIds", []):
            if sid not in source_ids:
                errors.append(f"{label} unknown source '{sid}'")
        if p.get("type") == "farmer":
            att = p.get("attribution")
            if not att:
                errors.append(f"{label} is farmer testimony without attribution")
            else:
                for key in ("name", "state", "recordedAt", "consent"):
                    if key not in att:
                        errors.append(f"{label} attribution missing {key}")
                if att.get("consent") is not True:
                    errors.append(f"{label} attribution has no consent")

    review = crop["review"]
    try:
        reviewed = parse_date(review["reviewedAt"])
        nxt = parse_date(review["nextReview"])
        checked = parse_date(review["pesticideCheckedAt"])
    except (KeyError, ValueError) as exc:
        errors.append(f"{name}: invalid review dates ({exc})")
    else:
        if nxt <= reviewed:
            errors.append(f"{name}: nextReview must be after reviewedAt")
        if reviewed > date.today() + timedelta(days=1):
            errors.append(f"{name}: reviewedAt is in the future")
        if date.today() - reviewed > timedelta(days=730):
            errors.append(f"{name}: record older than 24 months; re-review")
        if checked > date.today() + timedelta(days=1):
            errors.append(f"{name}: pesticideCheckedAt is in the future")

    if len(crop["openQuestions"]) < 1:
        errors.append(f"{name}: needs at least one open question")

    return errors


def main():
    root = sys.argv[1] if len(sys.argv) > 1 else os.path.join("data", "crops")
    files = sorted(
        os.path.join(root, f) for f in os.listdir(root) if f.endswith(".json")
    )
    if not files:
        print(f"No crop records found in {root}")
        return 1

    seen = set()
    all_errors = []
    for f in files:
        errs = validate(f, seen)
        all_errors.extend(errs)
        status = "OK  " if not errs else "FAIL"
        print(f"[{status}] {os.path.basename(f)}")
        for e in errs:
            print(f"       - {e}")

    print(f"\n{len(files)} record(s), {len(all_errors)} error(s)")
    return 1 if all_errors else 0


if __name__ == "__main__":
    sys.exit(main())
