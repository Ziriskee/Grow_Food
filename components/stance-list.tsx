import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const refusals = [
  {
    title: "Give medical advice",
    body: "The traditional-use block is labelled, bounded, and never framed as treatment. Where there is no reliable record, it says so rather than filling the space.",
  },
  {
    title: "Promise a harvest",
    body: "No “yields up to”, no income figures, no market data dressed as growing advice. A plant page that reads like a sales sheet is not a plant page.",
  },
  {
    title: "Invent sources",
    body: "Every entry shows when it was last reviewed. Where a point rests on ordinary horticultural practice rather than a study, it says that plainly instead of borrowing a citation for authority.",
  },
  {
    title: "Blend voices",
    body: "Research, extension guidance, grower practice and editorial judgement are different things with different reliability. They stay labelled as what they are.",
  },
];

export function StanceList() {
  return (
    <section id="stance" className="scroll-mt-32 py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1340px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="How it's written"
              title="What this guide refuses to do."
              lead="Trust in a growing guide is mostly a record of what it declined to claim."
            />
          </Reveal>

          <Reveal delay={100}>
            <dl className="flex flex-col">
              {refusals.map((item) => (
                <div
                  key={item.title}
                  className="grid gap-2 border-t border-hairline py-7 sm:grid-cols-[13rem_1fr] sm:gap-8"
                >
                  <dt className="font-display text-[1.125rem] leading-snug tracking-[-0.01em] text-ink">
                    Will not {item.title.toLowerCase()}
                  </dt>
                  <dd className="max-w-[54ch] text-[0.9375rem] leading-[1.7] text-ink-soft">
                    {item.body}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
