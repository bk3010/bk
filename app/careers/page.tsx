import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { jobs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build the plants that build everything else. Explore open roles, internships, and life at Scale X Process & Engineering.",
};

const benefits = [
  { icon: "rocket", title: "Real Projects, Fast", text: "Engineers commission live plants within their first year — no bench time." },
  { icon: "globe", title: "Global Mobility", text: "Rotations across our Mumbai, Dubai, Singapore, and Nairobi offices." },
  { icon: "badge", title: "Learning Programs", text: "Sponsored certifications, design software mastery, and site mentorship." },
  { icon: "people", title: "Small Teams, Big Ownership", text: "Project pods of 6–10 where your name is on the drawings." },
  { icon: "leaf", title: "Wellbeing First", text: "Comprehensive health cover, site-rotation recovery leave, and flexible hours." },
  { icon: "strategy", title: "Transparent Growth", text: "Published competency ladders — you always know what the next level takes." },
];

const stories = [
  {
    quote: "I joined as a graduate trainee and commissioned my first dairy line at 24. Nowhere else hands you that responsibility — with that much support.",
    name: "Sneha Kulkarni",
    role: "Process Engineer, Mumbai",
  },
  {
    quote: "Half my year is on sites across East Africa. The other half is design work in Dubai. It never stops being interesting.",
    name: "Daniel Otieno",
    role: "Commissioning Engineer, Nairobi",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumb="Careers"
        eyebrow="Join Scale X"
        title={
          <>
            Build the plants that
            <br />
            <span className="gradient-text">build everything else.</span>
          </>
        }
        subtitle="We hire engineers, consultants, and builders who want their work to stand in steel and run for decades — not sit in slide decks."
      />

      {/* Life at Scale X / benefits */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Life at Scale X"
            title="Why people build careers here"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="card-hover h-full rounded-3xl border-2 border-ink bg-white p-8 dark:border-white/10 dark:bg-ink-800">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/25 text-accent dark:border-secondary/25 dark:text-secondary">
                    <Icon name={b.icon} className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 font-heading text-lg font-bold text-ink dark:text-white">
                    {b.title}
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {b.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Employee stories */}
      <section className="hero-scene relative overflow-hidden px-5 py-24 lg:px-8">
        <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading eyebrow="Employee Stories" title="In their own words" tone="dark" />
          <div className="grid gap-8 md:grid-cols-2">
            {stories.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.1}>
                <figure className="glass-dark h-full rounded-3xl p-9">
                  <blockquote className="text-lg font-medium leading-relaxed text-white">
                    “{s.quote}”
                  </blockquote>
                  <figcaption className="mt-6">
                    <p className="font-heading font-bold text-white">{s.name}</p>
                    <p className="mt-1 text-sm text-slate-400">{s.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Open Positions"
            title="Where will you fit?"
            subtitle="Don't see your role? Send your resume anyway — we hire for trajectory, not just vacancies."
          />
          <div className="space-y-4">
            {jobs.map((j, i) => (
              <Reveal key={j.title} delay={i * 0.04}>
                <Link
                  href="/contact"
                  className="card-hover group flex flex-wrap items-center justify-between gap-4 rounded-2xl border-2 border-ink bg-white p-6 dark:border-white/10 dark:bg-ink-800"
                >
                  <div>
                    <h3 className="font-heading text-base font-bold text-ink transition group-hover:text-accent dark:text-white dark:group-hover:text-secondary">
                      {j.title}
                    </h3>
                    <p className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                      <span>{j.dept}</span>
                      <span className="flex items-center gap-1.5">
                        <Icon name="pin" className="h-3.5 w-3.5" /> {j.location}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 font-semibold ${
                          j.type === "Internship"
                            ? "bg-secondary/10 text-secondary"
                            : "bg-mint/10 text-mint"
                        }`}
                      >
                        {j.type}
                      </span>
                    </p>
                  </div>
                  <span className="flex items-center gap-2 text-sm font-semibold text-accent dark:text-secondary">
                    Apply
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to do career-defining work?"
        subtitle="Upload your resume and tell us what you want to build."
        primaryLabel="Upload Resume"
        primaryHref="/contact"
        secondaryLabel="Meet the Team"
        secondaryHref="/about#leadership"
      />
    </>
  );
}
