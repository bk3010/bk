import Link from "next/link";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Counter from "@/components/Counter";
import {
  articles,
  clients,
  industries,
  services,
  stats,
} from "@/lib/data";

const whyChoose = [
  {
    icon: "strategy",
    title: "One Team, Idea to Industry",
    text: "A single accountable partner across feasibility, approvals, engineering, and production — no handover gaps.",
  },
  {
    icon: "badge",
    title: "Commercially Fluent Engineering",
    text: "Every design decision is framed in ROI, payback, and operating cost — the language of your board.",
  },
  {
    icon: "shield",
    title: "Regulatory Mastery",
    text: "300+ statutory approvals secured with a first-cycle success rate above 90%.",
  },
  {
    icon: "globe",
    title: "Global Procurement Power",
    text: "Vendor networks across Europe and Asia that routinely recover double-digit capital savings.",
  },
  {
    icon: "rocket",
    title: "Speed Without Shortcuts",
    text: "Parallel-tracked workstreams that compress schedules while protecting quality and compliance.",
  },
  {
    icon: "leaf",
    title: "Sustainable by Design",
    text: "Energy, water, and carbon efficiency engineered in from the first layout sketch.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trusted clients marquee */}
      <section className="border-b border-slate-200/60 bg-white py-12 dark:border-white/5 dark:bg-navy-800">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Trusted by manufacturers worldwide
          </p>
          <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-14">
              {[...clients, ...clients].map((c, i) => (
                <span
                  key={`${c}-${i}`}
                  className="flex items-center gap-2.5 whitespace-nowrap font-heading text-lg font-bold text-slate-400 transition hover:text-royal dark:text-slate-500 dark:hover:text-cyan"
                >
                  <Icon name="factory" className="h-5 w-5" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-royal dark:text-cyan">
                About Scale X
              </span>
              <span className="tech-rule w-14" />
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-navy dark:text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              The single partner behind
              <span className="gradient-text"> 500+ industrial projects</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              Scale X Process &amp; Engineering is a global industrial consultancy delivering
              complete turnkey solutions for manufacturing industries. From the first
              feasibility number to the first commercial batch, one accountable team owns
              your project — concept, approvals, engineering, construction, commissioning,
              and beyond.
            </p>
            <ul className="mt-8 space-y-3.5">
              {[
                "End-to-end turnkey delivery under one contract",
                "Multi-discipline in-house engineering teams",
                "Regulatory, procurement, and commissioning specialists",
                "Active projects across four continents",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200 sm:text-base">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-2.5 text-sm font-semibold text-royal transition hover:text-royal-600 dark:text-cyan"
            >
              Discover our story
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="hero-scene relative overflow-hidden rounded-[2rem] p-10 shadow-2xl">
              <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
              <div className="relative grid grid-cols-2 gap-5">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`glass-dark rounded-2xl p-6 ${i % 2 === 1 ? "translate-y-6" : ""}`}
                  >
                    <Counter
                      value={s.value}
                      suffix={s.suffix}
                      className="font-heading text-3xl font-extrabold text-white"
                    />
                    <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-slate-400">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="relative mt-12 flex items-center gap-3 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-success" />
                ISO 9001 &amp; ISO 14001 Certified · Government Approved Consultants
              </div>
            </div>
            <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-[2rem] border border-royal/20" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      {/* Core services */}
      <section className="bg-white px-5 py-24 dark:bg-navy-800 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core Services"
            title="Every discipline your project needs. One roof."
            subtitle="Sixteen integrated service lines spanning strategy, compliance, engineering, execution, and operations."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link
                  href={`/services#${s.slug}`}
                  className="card-hover group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-mist p-8 dark:border-white/10 dark:bg-navy"
                >
                  <span className="gradient-brand flex h-13 w-13 items-center justify-center rounded-2xl text-white shadow-lg shadow-royal/25">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-heading text-xl font-bold text-navy dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {s.summary}
                  </p>
                  <span className="mt-6 flex items-center gap-2 text-sm font-semibold text-royal dark:text-cyan">
                    Explore
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link
              href="/services"
              className="gradient-brand inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-royal/30 transition hover:brightness-110"
            >
              View All 16 Services
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Industries"
            title="Deep expertise across 30+ manufacturing sectors"
            subtitle="From food processing to renewable energy — sector-specific engineering knowledge, not generic consulting."
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {industries.slice(0, 10).map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.04}>
                <Link
                  href="/industries"
                  className="card-hover group flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 text-center dark:border-white/10 dark:bg-navy-800"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal/8 text-royal transition group-hover:bg-royal group-hover:text-white dark:bg-cyan/10 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
                    <Icon name={ind.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold text-navy dark:text-white">
                    {ind.name}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              href="/industries"
              className="group inline-flex items-center gap-2.5 text-sm font-semibold text-royal transition hover:text-royal-600 dark:text-cyan"
            >
              See all industries
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Idea to Industry process */}
      <section className="relative overflow-hidden bg-white px-5 py-24 dark:bg-navy-800 lg:px-8">
        <div className="blueprint-grid-light absolute inset-0 dark:opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Process"
            title="From Idea to Industry — one unbroken line"
            subtitle="Eleven stages, one accountable team. Watch how an ambition becomes an operating plant."
          />
          <Timeline />
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Scale X"
            title="Why the world's manufacturers choose us"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="card-hover glass h-full rounded-3xl p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-royal/25 text-royal dark:border-cyan/25 dark:text-cyan">
                    <Icon name={w.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-navy dark:text-white">
                    {w.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {w.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — dark band */}
      <section className="hero-scene relative overflow-hidden px-5 py-24 lg:px-8">
        <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Client Voices"
            title="Trusted where it matters — on the plant floor"
            tone="dark"
          />
          <Testimonials />
        </div>
      </section>

      {/* Latest articles */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Knowledge Center"
            title="Latest insights from our engineers"
            subtitle="Regulatory updates, whitepapers, and case studies from live projects."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <Link
                  href="/knowledge"
                  className="card-hover group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-8 dark:border-white/10 dark:bg-navy-800"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-royal/8 px-3.5 py-1.5 text-xs font-semibold text-royal dark:bg-cyan/10 dark:text-cyan">
                      {a.category}
                    </span>
                    <span className="text-xs text-slate-400">{a.date}</span>
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-navy transition group-hover:text-royal dark:text-white dark:group-hover:text-cyan">
                    {a.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {a.excerpt}
                  </p>
                  <span className="mt-5 text-xs font-medium text-slate-400">{a.read}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
