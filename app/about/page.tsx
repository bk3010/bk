import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import Counter from "@/components/Counter";
import { leadership, milestones, offices, stats, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story, leadership, and values behind Scale X Process & Engineering — a global turnkey industrial consultancy.",
};

const certifications = [
  "ISO 9001:2015 — Quality Management",
  "ISO 14001:2015 — Environmental Management",
  "Government Approved Industrial Consultants",
  "Member — Indian Society of Heating, Refrigerating & Air Conditioning Engineers",
  "Member — Confederation of Indian Industry",
  "Registered EPC Consultants — Multiple State Industrial Boards",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Who We Are"
        title={
          <>
            Engineers first.
            <br />
            <span className="gradient-text">Partners always.</span>
          </>
        }
        subtitle="Since 2011, Scale X has carried manufacturing ambitions from boardroom sketches to certified commercial production — across 30+ industries and four continents."
      />

      {/* Mission / Vision */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="card-hover h-full rounded-3xl border border-slate-200/80 bg-white p-10 dark:border-white/10 dark:bg-navy-800">
              <span className="gradient-brand flex h-13 w-13 items-center justify-center rounded-2xl text-white shadow-lg shadow-royal/25">
                <Icon name="strategy" className="h-6 w-6" />
              </span>
              <h2 className="mt-6 font-heading text-2xl font-extrabold text-navy dark:text-white">
                Our Mission
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                To give every manufacturer — from first-time founders to global groups —
                a single trusted partner capable of carrying an idea through feasibility,
                approvals, engineering, and construction to profitable commercial
                production, without compromise on safety, quality, or compliance.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="card-hover h-full rounded-3xl border border-slate-200/80 bg-white p-10 dark:border-white/10 dark:bg-navy-800">
              <span className="gradient-brand flex h-13 w-13 items-center justify-center rounded-2xl text-white shadow-lg shadow-royal/25">
                <Icon name="globe" className="h-6 w-6" />
              </span>
              <h2 className="mt-6 font-heading text-2xl font-extrabold text-navy dark:text-white">
                Our Vision
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                To be the world&apos;s most trusted &quot;idea to industry&quot; partner —
                the name manufacturers say first when they decide to build, expand, or
                modernise, in every market where things are made.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white px-5 py-24 dark:bg-navy-800 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Values"
            title="The principles behind every project"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="card-hover h-full rounded-3xl border border-slate-200/80 bg-mist p-8 dark:border-white/10 dark:bg-navy">
                  <span className="font-heading text-sm font-extrabold text-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold text-navy dark:text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story timeline */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Company Story"
            title="Fifteen years, one direction: forward"
          />
          <div className="relative border-l border-slate-200 pl-10 dark:border-white/10">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.04} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[45px] top-1 flex h-4 w-4 items-center justify-center">
                  <span className="gradient-brand block h-3 w-3 rounded-full shadow-[0_0_0_5px_rgba(13,92,255,0.12)]" />
                </span>
                <p className="font-heading text-sm font-extrabold text-royal dark:text-cyan">
                  {m.year}
                </p>
                <p className="mt-1.5 leading-relaxed text-slate-700 dark:text-slate-200">
                  {m.event}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements band */}
      <section className="hero-scene relative overflow-hidden px-5 py-20 lg:px-8">
        <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter
                value={s.value}
                suffix={s.suffix}
                className="font-heading text-4xl font-extrabold text-white sm:text-5xl"
              />
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Leadership"
            title="Led by people who have built plants, not just plans"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <div className="card-hover h-full rounded-3xl border border-slate-200/80 bg-white p-8 dark:border-white/10 dark:bg-navy-800">
                  <div className="gradient-brand flex h-16 w-16 items-center justify-center rounded-2xl font-heading text-xl font-extrabold text-white shadow-lg shadow-royal/25">
                    {p.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-navy dark:text-white">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-royal dark:text-cyan">{p.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {p.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global presence + certifications */}
      <section className="bg-white px-5 py-24 dark:bg-navy-800 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Global Presence"
              title="Four offices. Four continents."
              subtitle="Local regulatory knowledge and global engineering standards, wherever your plant rises."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {offices.map((o, i) => (
                <Reveal key={o.city} delay={i * 0.06}>
                  <div className="card-hover h-full rounded-2xl border border-slate-200/80 bg-mist p-6 dark:border-white/10 dark:bg-navy">
                    <div className="flex items-center gap-2.5">
                      <Icon name="pin" className="h-4.5 w-4.5 text-royal dark:text-cyan" />
                      <h3 className="font-heading font-bold text-navy dark:text-white">
                        {o.city}, {o.country}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {o.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {o.address}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Credentials"
              title="Certified. Audited. Accountable."
              subtitle="Certifications and memberships that keep our own standards as high as the ones we build for clients."
            />
            <ul className="space-y-3.5">
              {certifications.map((c, i) => (
                <Reveal key={c} delay={i * 0.05}>
                  <li className="flex items-start gap-3.5 rounded-2xl border border-slate-200/80 bg-mist p-5 dark:border-white/10 dark:bg-navy">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {c}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to meet the team behind the numbers?"
        subtitle="Talk to our experts about your next project."
        primaryLabel="Talk to Our Experts"
        primaryHref="/contact"
      />
    </>
  );
}
