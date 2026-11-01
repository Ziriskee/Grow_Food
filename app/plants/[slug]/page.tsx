import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { getPlant, plants } from "@/lib/plants";

type PlantPageProps = {
  params:
    | {
        slug: string;
      }
    | Promise<{
        slug: string;
      }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return plants.map((plant) => ({
    slug: plant.slug,
  }));
}

async function resolveSlug(params: PlantPageProps["params"]): Promise<string> {
  const resolved = await Promise.resolve(params);
  return resolved.slug;
}

export async function generateMetadata({
  params,
}: PlantPageProps): Promise<Metadata> {
  const slug = await resolveSlug(params);
  const plant = getPlant(slug);

  if (!plant) {
    return {
      title: "Plant not found",
    };
  }

  return {
    title: plant.name,
    description: plant.blurb,
  };
}

function factLabel(key: string): string {
  return key.charAt(0).toUpperCase() + key.slice(1);
}

export default async function PlantPage({ params }: PlantPageProps) {
  const slug = await resolveSlug(params);
  const plant = getPlant(slug);

  if (!plant) {
    notFound();
    return null;
  }

  return (
    <>
      <SiteNav />

      <main className="pb-24 pt-28 md:pb-32 md:pt-32">
        <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
          <Link
            href="/#guide"
            className="link-grow inline-block pb-0.5 text-[0.8125rem] text-ink-soft transition-colors duration-500 ease-editorial hover:text-ink"
          >
            Back to search
          </Link>

          <header className="mt-10 max-w-3xl">
            <p className="text-[0.625rem] uppercase tracking-[0.22em] text-clay">
              {plant.category}
            </p>

            <h1 className="mt-5 text-balance font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.02] tracking-[-0.03em] text-ink">
              {plant.name}
            </h1>

            <p className="mt-3 font-display text-lg italic text-ink-faint">
              {plant.latin}
            </p>

            <p className="mt-6 text-[1rem] leading-[1.7] text-ink-soft">
              {plant.blurb}
            </p>

            <p className="mt-6 text-[0.8125rem] leading-relaxed text-ink-faint">
              {plant.zones.join(" · ")} · {plant.difficulty} · {plant.lifecycle}
            </p>
          </header>

          <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(plant.facts).map(([key, value]) => (
              <div
                key={key}
                className="rounded-[1.5rem] bg-ink/[0.035] p-1.5 ring-1 ring-hairline"
              >
                <div className="h-full rounded-[calc(1.5rem-0.375rem)] bg-paper-raised p-5">
                  <dt className="text-[0.625rem] uppercase tracking-[0.2em] text-ink-faint">
                    {factLabel(key)}
                  </dt>
                  <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <section className="mt-16" aria-labelledby="growing">
            <h2
              id="growing"
              className="font-display text-3xl tracking-[-0.02em] text-ink"
            >
              How to grow it
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {plant.growing.map((stage) => (
                <article
                  key={stage.title}
                  className="rounded-[1.75rem] bg-ink/[0.035] p-1.5 ring-1 ring-hairline"
                >
                  <div className="h-full rounded-[calc(1.75rem-0.375rem)] bg-paper-raised p-6">
                    <h3 className="font-display text-xl leading-tight tracking-[-0.015em] text-ink">
                      {stage.title}
                    </h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                      {stage.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <section aria-labelledby="benefits">
              <h2
                id="benefits"
                className="font-display text-3xl tracking-[-0.02em] text-ink"
              >
                What it gives
              </h2>

              <div className="mt-8 flex flex-col gap-4">
                {plant.benefits.map((note) => (
                  <article
                    key={note.title}
                    className="border-t border-hairline pt-6"
                  >
                    <h3 className="font-display text-xl leading-tight tracking-[-0.015em] text-ink">
                      {note.title}
                    </h3>
                    <p className="mt-3 max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink-soft">
                      {note.body}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="cautions">
              <h2
                id="cautions"
                className="font-display text-3xl tracking-[-0.02em] text-ink"
              >
                Effects and cautions
              </h2>

              <div className="mt-8 flex flex-col gap-4">
                {plant.cautions.map((note) => (
                  <article
                    key={note.title}
                    className="border-t border-hairline pt-6"
                  >
                    <h3 className="font-display text-xl leading-tight tracking-[-0.015em] text-ink">
                      {note.title}
                    </h3>
                    <p className="mt-3 max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink-soft">
                      {note.body}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <section aria-labelledby="companions">
              <h2
                id="companions"
                className="font-display text-3xl tracking-[-0.02em] text-ink"
              >
                Good neighbours
              </h2>

              <div className="mt-8 flex flex-col gap-4">
                {plant.companions.map((pairing) => (
                  <article
                    key={pairing.plant}
                    className="rounded-[1.75rem] bg-ink/[0.035] p-1.5 ring-1 ring-hairline"
                  >
                    <div className="h-full rounded-[calc(1.75rem-0.375rem)] bg-paper-raised p-6">
                      <h3 className="font-display text-xl leading-tight tracking-[-0.015em] text-ink">
                        {pairing.plant}
                      </h3>
                      <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                        {pairing.why}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="avoid">
              <h2
                id="avoid"
                className="font-display text-3xl tracking-[-0.02em] text-ink"
              >
                Bad neighbours
              </h2>

              <div className="mt-8 flex flex-col gap-4">
                {plant.avoid.map((pairing) => (
                  <article
                    key={pairing.plant}
                    className="rounded-[1.75rem] bg-clay/[0.06] p-1.5 ring-1 ring-clay/25"
                  >
                    <div className="h-full rounded-[calc(1.75rem-0.375rem)] bg-paper-raised p-6">
                      <h3 className="font-display text-xl leading-tight tracking-[-0.015em] text-ink">
                        {pairing.plant}
                      </h3>
                      <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                        {pairing.why}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {plant.traditional ? (
            <section
              className="mt-16 rounded-[1.75rem] bg-clay/[0.06] p-1.5 ring-1 ring-clay/25"
              aria-labelledby="traditional-use"
            >
              <div className="rounded-[calc(1.75rem-0.375rem)] bg-paper-raised p-7">
                <p className="text-[0.625rem] uppercase tracking-[0.22em] text-clay">
                  Traditional use — not medical advice
                </p>

                <h2
                  id="traditional-use"
                  className="mt-4 font-display text-3xl tracking-[-0.02em] text-ink"
                >
                  What it is mixed with
                </h2>

                <p className="mt-4 max-w-[70ch] text-[0.9375rem] leading-[1.7] text-ink-soft">
                  {plant.traditional.summary}
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {plant.traditional.reported.map((item) => (
                    <li
                      key={item}
                      className="max-w-[70ch] text-[0.9375rem] leading-[1.7] text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-[0.8125rem] leading-relaxed text-ink-faint">
                  This block describes recorded practice and reported risks. It
                  is not treatment advice.
                </p>
              </div>
            </section>
          ) : null}

          <footer className="mt-16 border-t border-hairline pt-6 text-[0.8125rem] leading-relaxed text-ink-faint">
            <p>Reviewed {plant.reviewedAt}</p>
            <p className="mt-2">
              Entries are written to be checked. If a point here is wrong, the
              fix belongs in the record, not in silence.
            </p>
          </footer>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
