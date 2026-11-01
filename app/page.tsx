import { CompanionSplit } from "@/components/companion-split";
import { CoverageGrid } from "@/components/coverage-grid";
import { GuideSearch } from "@/components/guide-search";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { StanceList } from "@/components/stance-list";

export default function HomePage() {
  return (
    <>

      <SiteNav />

      <main>
        <Hero />

        <section id="guide" className="scroll-mt-32 py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1340px] px-5 sm:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Find a plant"
                title="Start with what you want to grow."
                lead="Search by name, category or climate. Every entry is written the same way, so you always know where the growing advice ends and the caution begins."
              />
            </Reveal>

            <div className="mt-12">
              <GuideSearch />
            </div>
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
