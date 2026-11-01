import { LeafMark } from "./leaf-mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto w-full max-w-[1340px] px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <LeafMark className="h-5 w-5 text-moss" />
              <span className="font-display text-lg tracking-[-0.01em]">
                Plantguide
              </span>
            </div>
            <p className="mt-3 max-w-[40ch] text-[0.875rem] leading-relaxed text-ink-soft">
              A field guide to growing food and herbs in any climate zone,
              without the sales pitch.
            </p>
          </div>

          <div className="text-[0.75rem] leading-relaxed text-ink-faint sm:text-right">
            <p>Content reviewed 31 October 2026</p>
            <p className="mt-1">Entries are added in reviewed batches.</p>
            <a
              href="#top"
              className="link-grow mt-2 inline-block pb-0.5 text-ink-soft transition-colors duration-500 ease-editorial hover:text-ink"
            >
              Back to top
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-hairline pt-6 text-[0.75rem] leading-relaxed text-ink-faint">
          This guide does not provide medical advice. If you suspect poisoning
          from any plant, contact your local poison centre or emergency service
          rather than waiting for symptoms.
        </p>
      </div>
    </footer>
  );
}
