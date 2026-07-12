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
        <div className="hero-scene relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-cyan/15 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-royal/25 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-slate-300">{subtitle}</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={primaryHref}
                className="gradient-brand group flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-royal/40 transition hover:brightness-110"
              >
                {primaryLabel}
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={secondaryHref}
                className="glass-dark flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white transition hover:border-cyan/50"
              >
                <Icon name="download" className="h-4 w-4 text-cyan" />
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
