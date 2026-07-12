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
    <section className="hero-scene relative overflow-hidden pt-40 pb-24">
      <div className="blueprint-grid absolute inset-0 animate-grid-pan" aria-hidden="true" />
      <div className="light-beam left-[40%] animate-beam" aria-hidden="true" />
      <div className="absolute -right-20 top-10 h-64 w-64 animate-float-slow rounded-full bg-royal/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <nav aria-label="Breadcrumb" className="text-xs text-slate-400">
            <Link href="/" className="transition hover:text-cyan">Home</Link>
            <span className="mx-2 text-slate-600">/</span>
            <span className="text-cyan">{crumb}</span>
          </nav>
          <div className="mt-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
              {eyebrow}
            </span>
            <span className="tech-rule w-14" />
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
