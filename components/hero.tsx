import { getPlant } from "@/lib/plants";
import { ArrowCircle } from "./arrow-circle";
import { Reveal } from "./reveal";
import { SpecimenCard } from "./specimen-card";

export function Hero() {
  const tomato = getPlant("tomato");
  const flutedPumpkin = getPlant("fluted-pumpkin");
  const rosemary = getPlant("rosemary");

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-56 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(44,64,48,0.12),transparent_62%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1340px] gap-14 px-5 pt-14 sm:px-8 md:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10 lg:pt-24">
        <div className="max-w-[35rem]">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1 text-[0.625rem] uppercase tracking-[0.2em] text-ink-soft">
              <span
                className="h-1 w-1 rounded-full bg-clay"
                aria-hidden="true"
              />
              Global field guide
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-balance font-display text-[clamp(2.6rem,7vw,5.1rem)] leading-[0.93] tracking-[-0.035em] text-ink">
              Know the plant
              <br className="hidden sm:block" /> before you{" "}
              <em className="italic text-moss">plant</em> it.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-[46ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
              A field guide to growing food and herbs wherever you are: what
              each plant needs, what it gives back, what goes wrong, and which
              neighbours help it or ruin it. Written to be checked, not trusted.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="#guide"
                className="group inline-flex items-center gap-3 rounded-full bg-moss py-2 pl-6 pr-2 text-[0.875rem] text-paper transition-colors duration-700 ease-editorial hover:bg-ink active:scale-[0.98]"
              >
                Search the guide
                <ArrowCircle className="h-9 w-9 bg-paper/15 transition-transform duration-700 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#covers"
                className="link-grow pb-1 text-[0.875rem] text-ink-soft transition-colors duration-500 ease-editorial hover:text-ink"
              >
                What each page holds
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-12 max-w-[34ch] border-t border-hairline pt-5 text-[0.8125rem] leading-relaxed text-ink-faint">
              No market figures. No yield promises. No citations invented to
              look authoritative.
            </p>
          </Reveal>
        </div>

        <div className="hidden lg:block">
          <div className="relative mx-auto w-full max-w-[25rem]">
            {tomato ? (
              <Reveal delay={140}>
                <SpecimenCard plant={tomato} className="-rotate-[1.8deg]" />
              </Reveal>
            ) : null}

            {flutedPumpkin ? (
              <Reveal delay={260}>
                <SpecimenCard
                  plant={flutedPumpkin}
                  className="-mt-8 ml-12 rotate-[1.1deg]"
                />
              </Reveal>
            ) : null}

            {rosemary ? (
              <Reveal delay={380}>
                <SpecimenCard
                  plant={rosemary}
                  className="-mt-6 ml-4 rotate-[-0.7deg]"
                />
              </Reveal>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
