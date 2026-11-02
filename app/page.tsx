import Link from "next/link";
import { ArrowCircle } from "@/components/arrow-circle";
import { CompanionSplit } from "@/components/companion-split";
import { CoverageGrid } from "@/components/coverage-grid";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { StanceList } from "@/components/stance-list";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-moss focus:px-5 focus:py-2.5 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>

      <SiteNav />

      <main id="main">
        <Hero />

        <section className="scroll-mt-32 py-20 md:py-20">
          <div className="mx-auto w-full max-w-[1340px] px-5 sm:px-8">
            <Reveal>
              <div className="rounded-[2rem] bg-ink/[0.04] p-1.5 ring-1 ring-hairline">
                <div className="flex flex-col gap-8 rounded-[calc(2rem-0.375rem)] bg-paper-raised p-8 md:flex-row md:items-center md:justify-between md:p-12">
                  <div className="max-w-[52ch]">
                    <p className="text-[0.625rem] uppercase tracking-[0.22em] text-clay">
                      Find a plant
                    </p>
                    <h2 className="mt-4 text-balance font-display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.05] tracking-[-0.025em] text-ink">
                      The whole index lives on one page.
                    </h2>
                    <p className="mt-4 text-[1rem] leading-[1.7] text-ink-soft">
                      Search every entry by name, family, category or climate,
                      or browse the index grouped by what each plant is. One
                      route, one search, every entry.
                    </p>
                  </div>

                  <Link
                    href="/plants"
                    className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-moss py-2.5 pl-7 pr-2.5 text-[0.9375rem] text-paper transition-colors duration-700 ease-editorial hover:bg-ink active:scale-[0.98]"
                  >
                    Search all plants
                    <ArrowCircle className="h-9 w-9 bg-paper/15 transition-transform duration-700 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <CoverageGrid />
        <CompanionSplit />
        <StanceList />
      </main>

      <SiteFooter />
    </>
  );
}
