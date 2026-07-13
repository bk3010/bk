import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sixteen integrated industrial services — consulting, approvals, engineering, plant design, procurement, commissioning, and beyond.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What We Do"
        title={
          <>
            Sixteen disciplines.
            <br />
            <span className="gradient-text">One accountable partner.</span>
          </>
        }
        subtitle="Engage a single service or hand us the whole project — every capability your manufacturing venture needs lives under one roof."
      />

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Service Portfolio"
            title="From strategy to steel — and everything between"
            subtitle="Each service is delivered by dedicated specialists and integrates seamlessly with the rest of the turnkey chain."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 0.08}>
                <article
                  id={s.slug}
                  className="card-hover flex h-full scroll-mt-28 flex-col rounded-3xl border-2 border-ink bg-white p-9 dark:border-white/10 dark:bg-ink-800"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="gradient-brand flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg shadow-accent/25">
                      <Icon name={s.icon} className="h-7 w-7" />
                    </span>
                    <span className="font-heading text-sm font-extrabold text-slate-300 dark:text-slate-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-6 font-heading text-2xl font-extrabold text-ink dark:text-white">
                    {s.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
                    {s.summary}
                  </p>
                  <ul className="mt-6 grid flex-1 grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-200"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Complete Industrial Solutions?"
        subtitle="One conversation is all it takes to scope your project."
        primaryLabel="Start Your Project Today"
        primaryHref="/contact"
      />
    </>
  );
}
