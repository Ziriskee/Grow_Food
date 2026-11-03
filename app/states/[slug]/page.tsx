import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SpecimenCard } from "@/components/specimen-card";
import { plants } from "@/lib/plants";
import { getState, nigerianStates } from "@/lib/states";

type Props = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return nigerianStates.map((state) => ({ slug: state.slug }));
}

async function resolveSlug(params: Props["params"]): Promise<string> {
  const resolved = await Promise.resolve(params);
  return resolved.slug;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const state = getState(await resolveSlug(params));
  if (!state) return { title: "State not found" };
  return { title: state.name, description: state.farmingNote };
}

export default async function StatePage({ params }: Props) {
  const state = getState(await resolveSlug(params));

  if (!state) {
    notFound();
    return null;
  }

  const cropsHere = plants.filter(
    (plant) => plant.states && plant.states.includes(state.slug),
  );

  return (
    <>
      <SiteNav />

      <main className="pb-24 pt-28 md:pb-32 md:pt-32">
        <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
          <Link
            href="/states"
            className="link-grow inline-block pb-0.5 text-[0.8125rem] text-ink-soft transition-colors duration-500 ease-editorial hover:text-ink"
          >
            All states
          </Link>

          <header className="mt-10">
            <p className="text-[0.625rem] uppercase tracking-[0.22em] text-clay">
              {state.zone} · Capital {state.capital}
            </p>
            <h1 className="mt-5 text-balance font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.02] tracking-[-0.03em] text-ink">
              {state.name}
            </h1>
            <p className="mt-6 max-w-[62ch] text-[1rem] leading-[1.7] text-ink-soft">
              {state.farmingNote}
            </p>
          </header>

          <dl className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              { k: "Climate", v: state.climate },
              { k: "Soil", v: state.soil },
              { k: "Planting window", v: state.plantingWindow },
              { k: "Water", v: state.waterNote },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-[1.5rem] bg-ink/[0.035] p-1.5 ring-1 ring-hairline"
              >
                <div className="h-full rounded-[calc(1.5rem-0.375rem)] bg-paper-raised p-5">
                  <dt className="text-[0.625rem] uppercase tracking-[0.2em] text-ink-faint">
                    {item.k}
                  </dt>
                  <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {item.v}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <section className="mt-16" aria-labelledby="state-crops">
            <Reveal>
              <h2
                id="state-crops"
                className="font-display text-3xl tracking-[-0.02em] text-ink"
              >
                Crops that do well in {state.name}
              </h2>
              <p className="mt-3 max-w-[70ch] text-[0.9375rem] leading-relaxed text-ink-soft">
                {cropsHere.length}{" "}
                {cropsHere.length === 1 ? "entry" : "entries"} from the guide
                are recorded as growing well in this state.
              </p>
            </Reveal>

            {cropsHere.length > 0 ? (
              <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cropsHere.map((plant) => (
                  <li key={plant.slug}>
                    <SpecimenCard plant={plant} className="h-full" />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-8 rounded-[1.5rem] border border-dashed border-hairline p-10 text-center text-[0.9375rem] text-ink-soft">
                No entries in the current index are recorded for this state yet.
                More crops are being added in reviewed batches.
              </p>
            )}
          </section>

          <p className="mt-16 border-t border-hairline pt-6 text-[0.8125rem] leading-relaxed text-ink-faint">
            Climate notes from NiMet 2026 Seasonal Climate Prediction. Soil from
            FAO soil maps of Nigeria. Planting windows are indicative — check
            the current NiMet forecast before sowing.
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
