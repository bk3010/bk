import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Knowledge Center",
  description:
    "Whitepapers, case studies, regulatory updates, and technical articles from Scale X engineers and consultants.",
};

const downloads = [
  { title: "Scale X Company Profile", type: "PDF · 8.4 MB", icon: "report" },
  { title: "Greenfield Project Readiness Checklist", type: "PDF · 1.2 MB", icon: "check" },
  { title: "Food Plant Compliance Handbook 2026", type: "PDF · 5.8 MB", icon: "shield" },
  { title: "Capital Equipment Procurement Guide", type: "PDF · 3.1 MB", icon: "globe" },
];

const videos = [
  { title: "Plant Walkthrough: 200 KLPD Dairy Project", length: "12:40" },
  { title: "Webinar: Environmental Clearance in 2026", length: "48:15" },
  { title: "How We Compress Turnkey Schedules", length: "09:22" },
];

export default function KnowledgePage() {
  return (
    <>
      <PageHero
        crumb="Knowledge Center"
        eyebrow="Insights & Resources"
        title={
          <>
            Engineering knowledge,
            <br />
            <span className="gradient-text">openly shared.</span>
          </>
        }
        subtitle="Whitepapers, case studies, regulatory updates, and technical deep-dives — written by the engineers who do the work."
      />

      {/* Articles */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Latest Publications"
            title="Read what our engineers are learning"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.07}>
                <article className="card-hover group flex h-full cursor-pointer flex-col rounded-3xl border-2 border-ink bg-white p-8 dark:border-white/10 dark:bg-ink-800">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-accent/8 px-3.5 py-1.5 text-xs font-semibold text-accent dark:bg-secondary/10 dark:text-secondary">
                      {a.category}
                    </span>
                    <span className="text-xs text-slate-400">{a.date}</span>
                  </div>
                  <h2 className="mt-5 font-heading text-lg font-bold leading-snug text-ink transition group-hover:text-accent dark:text-white dark:group-hover:text-secondary">
                    {a.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {a.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">{a.read}</span>
                    <Icon
                      name="arrow"
                      className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1 dark:text-secondary"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads + videos */}
      <section id="downloads" className="scroll-mt-24 bg-white px-5 py-24 dark:bg-ink-800 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Downloads"
              title="Take the expertise with you"
              subtitle="Practical guides and checklists our clients use on real projects."
            />
            <ul className="space-y-4">
              {downloads.map((d, i) => (
                <Reveal key={d.title} delay={i * 0.05}>
                  <li className="card-hover group flex cursor-pointer items-center gap-4 rounded-2xl border-2 border-ink bg-cream p-5 dark:border-white/10 dark:bg-ink">
                    <span className="gradient-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white">
                      <Icon name={d.icon} className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-heading text-sm font-bold text-ink dark:text-white">
                        {d.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-400">{d.type}</span>
                    </span>
                    <Icon
                      name="download"
                      className="h-5 w-5 text-accent transition-transform group-hover:translate-y-0.5 dark:text-secondary"
                    />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Videos & Webinars"
              title="Watch the work happen"
              subtitle="Plant walkthroughs, expert webinars, and behind-the-scenes engineering."
            />
            <ul className="space-y-4">
              {videos.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.05}>
                  <li className="card-hover group cursor-pointer overflow-hidden rounded-2xl border-2 border-ink dark:border-white/10">
                    <div className="hero-scene relative flex h-36 items-center justify-center">
                      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
                      <span className="glass-dark relative flex h-14 w-14 items-center justify-center rounded-full text-white transition group-hover:scale-110">
                        <Icon name="play" className="h-7 w-7 text-secondary" />
                      </span>
                      <span className="glass-dark absolute bottom-3 right-3 rounded-full px-3 py-1 text-xs font-medium text-white">
                        {v.length}
                      </span>
                    </div>
                    <div className="bg-cream p-5 dark:bg-ink">
                      <h3 className="font-heading text-sm font-bold text-ink dark:text-white">
                        {v.title}
                      </h3>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we hear most often"
          />
          <FAQ />
        </div>
      </section>

      <CTASection
        title="Can't find the answer you need?"
        subtitle="Our consultants respond within one business day."
        primaryLabel="Ask Our Experts"
        primaryHref="/contact"
      />
    </>
  );
}
