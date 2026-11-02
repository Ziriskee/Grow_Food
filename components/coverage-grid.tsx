import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type CoverItem = {
  index: string;
  title: string;
  body: string;
  span: string;
  tone?: "clay";
};

const items: CoverItem[] = [
  {
    index: "01",
    title: "How to grow it",
    body: "Sowing to harvest in stages: depth, spacing, light, water, feeding, and the two or three points where this plant usually fails. Written for a bed, a pot or a field — not one idealised farm.",
    span: "md:col-span-4",
  },
  {
    index: "02",
    title: "What it gives",
    body: "Nutrition, and what the plant does for the ground: nitrogen, ground cover, pollinator support, shade.",
    span: "md:col-span-2",
  },
  {
    index: "03",
    title: "Effects and cautions",
    body: "Toxicity to people and animals, sap and spines, how it spreads when left alone, and what overuse actually does.",
    span: "md:col-span-2",
  },
  {
    index: "04",
    title: "Good neighbours",
    body: "And the mechanism behind each pairing. A companion list without a reason is just a rumour with a table.",
    span: "md:col-span-2",
  },
  {
    index: "05",
    title: "Bad neighbours",
    body: "Competition for light and water, shared pests, and the plants that suppress the soil around them.",
    span: "md:col-span-2",
  },
  {
    index: "06",
    title: "What it is mixed with",
    body: "Kept in its own block, because mixing plant material for medicine is not the same as planting two crops beside each other. Labelled as traditional use, with what is reported to go wrong.",
    span: "md:col-span-6",
    tone: "clay",
  },
];

export function CoverageGrid() {
  return (
    <section id="covers" className="scroll-mt-30 py-18 md:py-20">
      <div className="mx-auto w-full max-w-335 px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What's on a page"
            title={
              <>
                Six answers, in the order
                <br className="hidden sm:block" /> you would ask them.
              </>
            }
            lead="Most plant pages answer the question nobody asked, in one confident paragraph. These are built as separate columns so you can see which part is horticulture and which part is not."
            wide
          />
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-6">
          {items.map((item, index) => (
            <Reveal
              key={item.index}
              delay={index * 60}
              className={cn("flex", item.span)}
            >
              <div
                className={cn(
                  "w-full rounded-[1.75rem] p-1.5 ring-1",
                  item.tone === "clay"
                    ? "bg-clay/[0.06] ring-clay/25"
                    : "bg-ink/[0.035] ring-hairline",
                )}
              >
                <div className="flex h-full flex-col rounded-[calc(1.75rem-0.375rem)] bg-paper-raised p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <span
                    className={cn(
                      "text-[0.625rem] uppercase tracking-[0.22em]",
                      item.tone === "clay" ? "text-clay" : "text-ink-faint",
                    )}
                  >
                    {item.index}
                  </span>
                  <h3 className="mt-4 font-display text-[1.5rem] leading-tight tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[62ch] text-[0.9375rem] leading-[1.65] text-ink-soft">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
