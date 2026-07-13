import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Sector-specific turnkey expertise across food, pharma, chemical, renewable energy, and 25+ more manufacturing industries.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumb="Industries"
        eyebrow="Where We Work"
        title={
          <>
            Thirty industries.
            <br />
            <span className="gradient-text">One engineering standard.</span>
          </>
        }
        subtitle="Sector expertise is not a slide in our deck — it's engineers who have commissioned plants in your industry and know its codes, margins, and failure modes."
      />

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Sectors"
            title="Built for the way your industry works"
            subtitle="Every sector carries its own regulations, hygiene standards, and process logic. Our teams speak them fluently."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 4) * 0.05}>
                <div className="card-hover group h-full rounded-3xl border-2 border-ink bg-white p-7 dark:border-white/10 dark:bg-ink-800">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-accent/8 text-accent transition group-hover:scale-105 group-hover:bg-accent group-hover:text-white dark:bg-secondary/10 dark:text-secondary dark:group-hover:bg-secondary dark:group-hover:text-ink">
                    <Icon name={ind.icon} className="h-6.5 w-6.5" />
                  </span>
                  <h2 className="mt-5 font-heading text-lg font-bold text-ink dark:text-white">
                    {ind.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {ind.blurb}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't see your industry?"
        subtitle="Our process methodology adapts — talk to us about your sector."
        primaryLabel="Talk to Our Experts"
        primaryHref="/contact"
      />
    </>
  );
}
