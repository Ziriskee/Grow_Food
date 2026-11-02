import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const kinds = [
  {
    index: "01",
    title: "What grows next to it",
    body: "Companion planting. Two plants in the same ground competing for the same water, the same nitrogen, the same light — or helping each other: one shading, one fixing nitrogen, one confusing a pest with its scent. This part is physical and ecological, and you can test it in a bed this season.",
    tag: "Horticulture",
  },
  {
    index: "02",
    title: "What it is mixed with",
    body: "Herbal and traditional use. Plant material combined with other plant material and taken as food or medicine. Reported interactions, effects that depend on dose, and plants that are fine on a plate but not safe to concentrate. This is a different question with a different kind of risk, and it gets a different block.",
    tag: "Traditional use — not medical advice",
  },
];

export function CompanionSplit() {
  return (
    <section
      id="companions"
      className="scroll-mt-32 border-y border-hairline bg-paper-raised/40 py-24 md:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1340px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Combining"
            title="Two questions that look alike."
            lead="“What grows well next to it” and “what is it taken with” get merged into one cheerful list on most gardening sites. That merge is how a planting tip becomes an unlicensed medical claim."
          />
        </Reveal>

        <div className="flex flex-col gap-10">
          {kinds.map((kind, index) => (
            <Reveal key={kind.index} delay={index * 100}>
              <div className="border-t border-hairline pt-7">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span className="font-display text-[0.8125rem] tracking-[0.1em] text-clay">
                    {kind.index}
                  </span>
                  <h3 className="font-display text-[1.75rem] leading-tight tracking-[-0.02em] text-ink">
                    {kind.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-[62ch] text-[0.9375rem] leading-[1.75] text-ink-soft">
                  {kind.body}
                </p>
                <p className="mt-5 inline-block rounded-full border border-hairline px-3 py-1 text-[0.625rem] uppercase tracking-[0.16em] text-ink-faint">
                  {kind.tag}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <div className="rounded-[1.75rem] bg-clay/[0.06] p-1.5 ring-1 ring-clay/25">
              <div className="rounded-[calc(1.75rem-0.375rem)] bg-paper-raised p-6">
                <p className="text-[0.625rem] uppercase tracking-[0.22em] text-clay">
                  The boundary
                </p>
                <p className="mt-3 text-[0.9375rem] leading-[1.7] text-ink-soft">
                  This guide does not give medical advice. Traditional-use
                  notes describe what is recorded and what is reported to go
                  wrong. They are not a recommendation to take anything, and
                  they are not a substitute for a clinician or a poison centre.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
