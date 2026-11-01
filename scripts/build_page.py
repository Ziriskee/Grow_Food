"""Render a crop JSON record as a self-contained HTML page.

Usage: python scripts/build_page.py data/crops/ugu.json web
No dependencies, no external assets. Open the output directly in a browser.
"""
import html
import json
import os
import sys

CATEGORY_COLOR = {
    "Leafy Vegetables": "#1f6b3a",
    "Vegetables": "#b4531f",
    "Legumes": "#7a5b12",
    "Grains & Oilseeds": "#8a6d1f",
    "Roots & Tubers": "#6b4a2f",
    "Fruits & Trees": "#a33b2a",
    "Herbs & Spices": "#4f6b1f",
}


def e(v):
    return html.escape(str(v), quote=True)


def badge(practice):
    return (
        f'<span class="badge badge-{e(practice["type"])}">{e(practice["type"])}</span>'
        f'<span class="grade" title="Evidence grade">{e(practice["grade"])}</span>'
    )


def source_links(ids, sources_by_id):
    parts = []
    for sid in ids:
        s = sources_by_id.get(sid)
        if not s:
            parts.append(f'<span class="missing">{e(sid)}</span>')
            continue
        label = s.get("short") or f'{s["publisher"].split("(")[0].strip()} {s["year"]}'
        parts.append(f'<a href="{e(s["url"])}" target="_blank" rel="noopener">{e(label)}</a>')
    return " · ".join(parts)


def build(crop_path, out_dir):
    crop = json.load(open(crop_path, encoding="utf-8"))
    sources_by_id = {s["id"]: s for s in crop["sources"]}
    color = CATEGORY_COLOR.get(crop["category"], "#1f6b3a")

    facts = []
    planting = crop["planting"]
    if "seedRatePerHa" in planting:
        lo, hi = planting["seedRatePerHa"]
        facts.append(("Seed rate", f"{lo:,}–{hi:,} seeds/ha"))
    for sp in planting.get("spacings", []):
        lo, hi = sp["cm"]
        facts.append((sp["system"], f"{lo} × {hi} cm"))
    if "ph" in crop["soil"]:
        lo, hi = crop["soil"]["ph"]
        facts.append(("Soil pH", f"{lo}–{hi}"))
    harvest = crop["harvest"]
    if "firstHarvestWeeks" in harvest:
        facts.append(("First harvest", f"{harvest['firstHarvestWeeks']} weeks"))

    practices = "".join(
        f"""
        <li class="practice">
          <div class="practice-head">{badge(p)}</div>
          <p>{e(p["claim"])}</p>
          {f'<p class="context">{e(p["context"])}</p>' if p.get("context") else ""}
          <div class="sources">{source_links(p["sourceIds"], sources_by_id)}</div>
        </li>"""
        for p in crop["practices"]
    )

    problems = "".join(
        f"""
        <div class="problem">
          <h3>{e(p["name"])} <span class="kind">{e(p["kind"])}</span></h3>
          <p>{e(p["control"])}</p>
          <div class="sources">{source_links(p["sourceIds"], sources_by_id)}</div>
        </div>"""
        for p in crop["pestsAndDiseases"]["problems"]
    )

    econ = crop.get("economics")
    econ_html = ""
    if econ:
        rows = []
        if "totalCostNaira" in econ:
            rows.append(("Total cost", f"₦{econ['totalCostNaira']:,}"))
        if "totalRevenueNaira" in econ:
            rows.append(("Total revenue", f"₦{econ['totalRevenueNaira']:,}"))
        if "netReturnNaira" in econ:
            rows.append(("Net return", f"₦{econ['netReturnNaira']:,}"))
        if "benefitCostRatio" in econ:
            rows.append(("Benefit–cost ratio", f"{econ['benefitCostRatio']}"))
        if "meanFarmSizeHa" in econ:
            rows.append(("Mean farm size", f"{econ['meanFarmSizeHa']} ha"))
        rows_html = "".join(f"<tr><th>{e(k)}</th><td>{e(v)}</td></tr>" for k, v in rows)
        econ_html = f"""
        <section>
          <h2>What it returned</h2>
          <p class="meta">{e(econ.get("location", ""))} · {e(econ.get("dataYear", ""))}</p>
          <table class="econ">{rows_html}</table>
          <p class="caveat"><strong>Read this before using the numbers.</strong> {e(econ["caveat"])}</p>
          <div class="sources">{source_links(econ["sourceIds"], sources_by_id)}</div>
        </section>"""

    questions = "".join(f"<li>{e(q)}</li>" for q in crop["openQuestions"])
    sources_list = "".join(
        f"""
        <li>
          <strong>{e(s["title"])}</strong><br>
          {e(s["publisher"])}, {e(s["year"])}.
          <a href="{e(s["url"])}" target="_blank" rel="noopener">Open source</a>
          {f'<br><span class="note">{e(s["note"])}</span>' if s.get("note") else ""}
          <span class="accessed">accessed {e(s["accessed"])}</span>
        </li>"""
        for s in crop["sources"]
    )

    safety = crop["safety"]
    review = crop["review"]

    page = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(crop["name"])} · sourced growing guide · GRO</title>
<style>
  :root {{
    --ink: #16211a;
    --muted: #5b6b5f;
    --line: #d9e2da;
    --accent: {color};
    --paper: #fbfaf6;
    --warn: #8a3b12;
    --warn-bg: #fff3e8;
    --ok: #1f6b3a;
  }}
  * {{ box-sizing: border-box; }}
  body {{
    margin: 0; background: var(--paper); color: var(--ink);
    font: 16px/1.6 "Segoe UI", system-ui, -apple-system, sans-serif;
  }}
  header.site {{
    display: flex; justify-content: space-between; align-items: center;
    padding: 14px 22px; border-bottom: 1px solid var(--line);
    font-size: 13px; letter-spacing: .14em; text-transform: uppercase;
  }}
  header.site strong {{ color: var(--accent); letter-spacing: .22em; }}
  main {{ max-width: 820px; margin: 0 auto; padding: 34px 22px 80px; }}
  .kicker {{
    color: var(--accent); font-size: 12px; font-weight: 700;
    letter-spacing: .18em; text-transform: uppercase;
  }}
  h1 {{ font-size: clamp(34px, 6vw, 54px); line-height: 1.02; margin: 8px 0 6px; }}
  .latin {{ font-style: italic; color: var(--muted); margin: 0 0 18px; }}
  .local {{ display: flex; flex-wrap: wrap; gap: 6px; margin: 0 0 22px; padding: 0; list-style: none; }}
  .local li {{
    border: 1px solid var(--line); border-radius: 999px; padding: 4px 10px;
    font-size: 13px; background: #fff;
  }}
  .lede {{ font-size: 19px; max-width: 62ch; }}
  .facts {{
    display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 10px; margin: 26px 0; padding: 0; list-style: none;
  }}
  .facts li {{
    background: #fff; border: 1px solid var(--line); border-radius: 10px; padding: 12px 14px;
  }}
  .facts .k {{ display: block; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); }}
  .facts .v {{ font-size: 18px; font-weight: 650; }}
  section {{ margin: 34px 0; }}
  h2 {{ font-size: 13px; letter-spacing: .16em; text-transform: uppercase; color: var(--accent); margin: 0 0 12px; }}
  h3 {{ font-size: 17px; margin: 0 0 4px; }}
  p {{ margin: 8px 0; }}
  .meta {{ color: var(--muted); font-size: 14px; }}
  .sources {{ font-size: 12px; color: var(--muted); margin-top: 8px; }}
  .sources a {{ color: var(--accent); }}
  .banned {{
    background: var(--warn-bg); border: 1px solid #f0cdb4; border-left: 5px solid var(--warn);
    border-radius: 8px; padding: 16px 18px; margin: 18px 0;
  }}
  .banned h3 {{ color: var(--warn); margin-top: 0; }}
  .banned ul {{ margin: 8px 0 0; padding-left: 20px; }}
  .practice {{ list-style: none; border-top: 1px solid var(--line); padding: 16px 0; }}
  .practice p {{ margin: 6px 0; }}
  .practice-head {{ display: flex; gap: 8px; align-items: center; }}
  .badge {{
    font-size: 10px; letter-spacing: .1em; text-transform: uppercase; font-weight: 700;
    padding: 3px 8px; border-radius: 999px; color: #fff; background: var(--muted);
  }}
  .badge-research {{ background: #24506b; }}
  .badge-extension {{ background: var(--ok); }}
  .badge-farmer {{ background: #8a5a12; }}
  .badge-editorial {{ background: #5a4b6b; }}
  .badge-traditional {{ background: #6b4a2f; }}
  .grade {{
    font-size: 11px; font-weight: 700; border: 1px solid var(--line);
    border-radius: 4px; padding: 1px 6px; color: var(--muted); background: #fff;
  }}
  .context {{ color: var(--muted); font-size: 13px; }}
  .problem {{ background: #fff; border: 1px solid var(--line); border-radius: 10px; padding: 14px 16px; margin: 10px 0; }}
  .kind {{ font-size: 11px; text-transform: uppercase; letter-spacing: .1em; color: var(--muted); font-weight: 400; }}
  table.econ {{ width: 100%; border-collapse: collapse; background: #fff; border: 1px solid var(--line); }}
  table.econ th, table.econ td {{ text-align: left; padding: 10px 14px; border-bottom: 1px solid var(--line); }}
  table.econ th {{ font-weight: 500; color: var(--muted); width: 45%; }}
  .caveat {{ background: #fff; border: 1px solid var(--line); border-radius: 8px; padding: 12px 14px; font-size: 14px; }}
  ol.questions {{ padding-left: 20px; }}
  ol.questions li {{ margin: 8px 0; }}
  ol.source-list {{ padding-left: 20px; }}
  ol.source-list li {{ margin: 12px 0; font-size: 14px; }}
  .note {{ color: var(--muted); }}
  .accessed {{ display: block; color: var(--muted); font-size: 12px; }}
  footer.review {{
    border-top: 1px solid var(--line); margin-top: 46px; padding-top: 18px;
    font-size: 13px; color: var(--muted); display: grid; gap: 4px;
  }}
  .stamp {{ color: var(--ok); font-weight: 600; }}
  @media print {{ header.site, footer.review {{ display: none; }} body {{ background: #fff; }} }}
</style>
</head>
<body>
<header class="site"><strong>GRO</strong><span>Grow your own · Nigeria</span></header>
<main>
  <p class="kicker">{e(crop["category"])} · sourced profile</p>
  <h1>{e(crop["name"])}</h1>
  <p class="latin">{e(crop["scientificName"])}</p>
  <ul class="local">{"".join(f'<li>{e(n["name"])} · {e(n["language"])}</li>' for n in crop["localNames"])}</ul>
  <p class="lede">{e(crop["description"])}</p>

  <ul class="facts">
    {"".join(f'<li><span class="k">{e(k)}</span><span class="v">{e(v)}</span></li>' for k, v in facts)}
    <li><span class="k">Difficulty</span><span class="v">{e(crop["difficulty"])}</span></li>
  </ul>
  <p class="meta"><strong>States in this record:</strong> {e(", ".join(crop["states"]))}</p>
  <div class="sources">State list basis: {e(crop["statesProvenance"]["basis"])} · confidence {e(crop["statesProvenance"]["confidence"])} · {e(crop["statesProvenance"].get("note", ""))}</div>

  <section>
    <h2>Climate and soil</h2>
    <p>{e(crop["climate"].get("note", ""))}</p>
    <p>{e(crop["soil"].get("texture", ""))}</p>
    <div class="sources">{source_links(crop["climate"]["sourceIds"], sources_by_id)}</div>
  </section>

  <section>
    <h2>Planting</h2>
    <p>{e(planting.get("nursery", ""))}</p>
    <p>{e(planting.get("note", ""))}</p>
    <div class="sources">{source_links(planting["sourceIds"], sources_by_id)}</div>
  </section>

  <section>
    <h2>Water and nutrition</h2>
    <p>{e(crop["water"].get("note", ""))}</p>
    <p>{e(crop["nutrition"].get("note", ""))}</p>
    <div class="sources">{source_links(crop["nutrition"]["sourceIds"], sources_by_id)}</div>
  </section>

  <section>
    <h2>Pests and diseases</h2>
    <div class="banned">
      <h3>Before any spray</h3>
      <p>{e(safety["pesticidePolicy"])}</p>
      <ul>
        <li><strong>Banned or phased out:</strong> {e(safety["bannedInputsNote"])}</li>
        <li><strong>PPE:</strong> {e(safety["ppe"])}</li>
        <li><strong>Pre-harvest interval:</strong> {e(safety["preHarvestInterval"])}</li>
        {f'<li><strong>Water warning:</strong> {e(safety["wastewaterWarning"])}</li>' if safety.get("wastewaterWarning") else ""}
      </ul>
    </div>
    <p>{e(crop["pestsAndDiseases"]["ipmFirst"])}</p>
    {problems}
  </section>

  <section>
    <h2>Harvest and after</h2>
    <p>{e(harvest.get("note", ""))}</p>
    <p>{e(crop["postHarvest"].get("note", ""))}</p>
    <div class="sources">{source_links(harvest["sourceIds"], sources_by_id)}</div>
  </section>

  {econ_html}

  <section>
    <h2>What we know, and how well</h2>
    <ul style="list-style:none;padding:0;margin:0">{practices}</ul>
  </section>

  <section>
    <h2>Open questions</h2>
    <p class="meta">These are the things this page cannot yet answer. They are next season's field work.</p>
    <ol class="questions">{questions}</ol>
  </section>

  <section>
    <h2>Sources</h2>
    <ol class="source-list">{sources_list}</ol>
  </section>

  <footer class="review">
    <span class="stamp">Reviewed {e(review["reviewedAt"])} · pesticide status checked {e(review["pesticideCheckedAt"])}</span>
    <span>Next review {e(review["nextReview"])} · season {e(review["season"])} · reviewed by {e(review["reviewedBy"])}</span>
    <span>Figures are for the stated season and location, not a guarantee. If a number here is wrong, send the source that corrects it.</span>
  </footer>
</main>
</body>
</html>
"""

    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, f'{crop["id"]}.html')
    with open(out_path, "w", encoding="utf-8") as fh:
        fh.write(page)
    return out_path


if __name__ == "__main__":
    crop_path = sys.argv[1] if len(sys.argv) > 1 else os.path.join("data", "crops", "ugu.json")
    out_dir = sys.argv[2] if len(sys.argv) > 2 else "web"
    print(build(crop_path, out_dir))
