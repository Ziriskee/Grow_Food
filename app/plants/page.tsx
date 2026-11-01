import type { Metadata } from "next";
import { plants } from "@/lib/plants";
import { PlantBrowser } from "@/components/plant-browser";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "All plants",
  description:
    "Browse every plant in the guide. Search by name, family, category or climate.",
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
                title="Browse the guide."
                lead="Search by name, family, category or climate. Every entry follows the same structure: growing facts, benefits, cautions, companions, bad neighbours, and traditional use where recorded."
              />
            </Reveal>

            <div className="mt-12">
              <PlantBrowser
                plants={plants}
                noun="plants"
                suggestions={[
                  "tomato",
                  "herb",
                  "tropical",
                  "mediterranean",
                  "Lamiaceae",
                ]}
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
