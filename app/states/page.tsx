import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { StateCard } from "@/components/state-card";
import { nigerianStates } from "@/lib/states";

export const metadata: Metadata = {
  title: "Nigerian states",
  description:
    "Browse all 36 Nigerian states and the FCT: climate, soil, planting windows and the crops that do well in each.",
};

const zones = [
  "North West",
  "North East",
  "North Central",
  "South West",
  "South East",
  "South South",
] as const;

export default function StatesPage() {
  return (
    <>
      <SiteNav />

      <main className="pb-24 pt-28 md:pb-32 md:pt-32">
        <div className="mx-auto w-full max-w-[1340px] px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Nigerian states"
              title="What grows well where you plant."
              lead="Each of the 36 states and the FCT has its own soil, rainfall pattern and planting window. Open a state to see its climate, soil and the crops that reward a grower there."
            />
          </Reveal>

          <div className="mt-14 flex flex-col gap-16">
            {zones.map((zone) => {
              const zoneStates = nigerianStates.filter(
                (state) => state.zone === zone,
              );

              if (zoneStates.length === 0) return null;

              return (
                <section key={zone} aria-labelledby={`zone-${zone}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h2
                      id={`zone-${zone}`}
                      className="font-display text-3xl tracking-[-0.02em] text-ink"
                    >
                      {zone}
                    </h2>
                    <p className="text-[0.8125rem] text-ink-faint">
                      {zoneStates.length}{" "}
                      {zoneStates.length === 1 ? "state" : "states"}
                    </p>
                  </div>

                  <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {zoneStates.map((state) => (
                      <li key={state.slug}>
                        <StateCard state={state} className="h-full" />
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>

          <p className="mt-16 border-t border-hairline pt-6 text-[0.8125rem] leading-relaxed text-ink-faint">
            Climate and soil notes from NiMet Seasonal Climate Prediction, FAO
            soil maps of Nigeria, and NAERLS extension bulletins. Planting
            windows are indicative; always check the current NiMet forecast
            before sowing.
          </p>

          <p className="mt-4 text-[0.8125rem] text-ink-faint">
            <Link
              href="/plants"
              className="link-grow pb-0.5 text-ink-soft transition-colors duration-500 ease-editorial hover:text-ink"
            >
              Browse all plants
            </Link>
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
