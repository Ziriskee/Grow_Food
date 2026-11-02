import type { Metadata } from "next";
import { GuideSearch } from "@/components/guide-search";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { plants } from "@/lib/plants";

export const metadata: Metadata = {
  title: "All plants",
  description:
    "Search and browse every plant in the guide, grouped by category: herbs, leafy vegetables, fruiting vegetables, cereals and grains.",
};

export default function PlantsPage() {
  return (
    <>
      <SiteNav />

      <main>
        <section className="scroll-mt-32 py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1340px] px-5 sm:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="All plants"
                title="Browse by category, or search the full index."
                lead="Every entry follows the same structure: growing facts, benefits, cautions, companions, bad neighbours, and traditional use where recorded."
              />
            </Reveal>

            <div className="mt-12">
              <GuideSearch
                plants={plants}
                grouped
                noun="plants"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
