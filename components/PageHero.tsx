import Link from "next/link";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-cream pt-40 pb-24 dark:bg-ink-800">
      {/* giant amber circle + dots */}
      <div className="absolute -right-52 -top-52 h-[34rem] w-[34rem] rounded-full bg-tertiary/30 dark:bg-tertiary/10" aria-hidden="true" />
      <div className="blueprint-grid-light absolute inset-y-0 right-0 w-1/3 opacity-50 dark:opacity-20" aria-hidden="true" />
      <div className="confetti-circle right-[30%] top-28 h-5 w-5 animate-float bg-secondary max-lg:hidden" aria-hidden="true" />
      <div className="confetti-triangle right-[16%] bottom-16 animate-float-slow max-lg:hidden" aria-hidden="true" />
      <div className="confetti-square right-[42%] bottom-20 h-4 w-4 animate-float border-4 border-accent bg-transparent max-lg:hidden" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-xs font-bold text-ink shadow-[3px_3px_0_0_#1E293B] dark:border-white/25 dark:bg-ink dark:text-white dark:shadow-[3px_3px_0_0_#0F172A]"
          >
            <Link href="/" className="transition hover:text-accent">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-accent dark:text-secondary">{crumb}</span>
          </nav>
          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.28em] text-accent">
              {eyebrow}
            </span>
            <span className="tech-rule w-16" />
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] text-ink dark:text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
