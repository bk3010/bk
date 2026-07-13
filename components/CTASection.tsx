import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function CTASection({
  title = "Ready to Build Your Next Manufacturing Facility?",
  subtitle = "Let’s turn your vision into reality.",
  primaryLabel = "Schedule Free Consultation",
  primaryHref = "/contact#consultation",
  secondaryLabel = "Download Company Profile",
  secondaryHref = "/knowledge#downloads",
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="px-5 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border-2 border-ink bg-accent px-8 py-16 text-center shadow-[10px_10px_0_0_#FBBF24] dark:border-white/25 sm:px-16 sm:py-20">
          <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
          {/* confetti corners */}
          <div className="confetti-circle -left-8 -top-8 h-24 w-24 bg-secondary/70" aria-hidden="true" />
          <div className="confetti-circle -bottom-10 -right-8 h-28 w-28 border-8 border-tertiary bg-transparent" aria-hidden="true" />
          <div className="confetti-triangle left-[12%] bottom-8 max-sm:hidden" aria-hidden="true" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg font-medium text-white/85">{subtitle}</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={primaryHref}
                className="group flex min-h-12 items-center gap-3 rounded-full border-2 border-ink bg-white px-8 py-4 text-sm font-bold text-ink shadow-[4px_4px_0_0_#1E293B] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#1E293B] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_0_#1E293B]"
              >
                {primaryLabel}
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white">
                  <Icon name="arrow" className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                href={secondaryHref}
                className="flex min-h-12 items-center gap-2.5 rounded-full border-2 border-white/70 px-8 py-4 text-sm font-bold text-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-white hover:text-accent"
              >
                <Icon name="download" className="h-4 w-4" />
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
