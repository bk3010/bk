"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import { projects } from "@/lib/data";

const filterDefs = [
  { key: "industry", label: "Industry" },
  { key: "country", label: "Country" },
  { key: "year", label: "Completion Year" },
] as const;

type FilterKey = (typeof filterDefs)[number]["key"];

export default function ProjectsGrid() {
  const [filters, setFilters] = useState<Record<FilterKey, string>>({
    industry: "All",
    country: "All",
    year: "All",
  });
  const [open, setOpen] = useState<string | null>(null);

  const options = useMemo(() => {
    const get = (fn: (p: (typeof projects)[number]) => string) => [
      "All",
      ...Array.from(new Set(projects.map(fn))).sort(),
    ];
    return {
      industry: get((p) => p.industry),
      country: get((p) => p.country),
      year: get((p) => String(p.year)),
    };
  }, []);

  const visible = projects.filter(
    (p) =>
      (filters.industry === "All" || p.industry === filters.industry) &&
      (filters.country === "All" || p.country === filters.country) &&
      (filters.year === "All" || String(p.year) === filters.year)
  );

  return (
    <div>
      <div className="mb-12 flex flex-wrap items-end gap-6">
        {filterDefs.map((f) => (
          <label key={f.key} className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              {f.label}
            </span>
            <select
              value={filters[f.key]}
              onChange={(e) => setFilters((prev) => ({ ...prev, [f.key]: e.target.value }))}
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-ink focus:border-accent focus:outline-none dark:border-white/15 dark:bg-ink-800 dark:text-white"
            >
              {options[f.key].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
        ))}
        <p className="pb-2.5 text-sm text-slate-500 dark:text-slate-400">
          {visible.length} of {projects.length} projects
        </p>
      </div>

      <motion.div layout className="grid gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p, idx) => {
            const expanded = open === p.title;
            const headerBg = ["bg-accent", "bg-secondary", "bg-tertiary", "bg-mint"][idx % 4];
            return (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="card-hover flex flex-col overflow-hidden rounded-3xl border-2 border-ink bg-white dark:border-white/10 dark:bg-ink-800"
              >
                {/* visual header — confetti color rotation */}
                <div className={`relative h-44 overflow-hidden border-b-2 border-ink ${headerBg}`}>
                  <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
                  <div className="absolute inset-0 flex items-end justify-between p-5">
                    <span className="rounded-full border-2 border-ink bg-white px-4 py-1.5 text-xs font-bold text-ink shadow-[3px_3px_0_0_#1E293B]">
                      {p.industry}
                    </span>
                    <span className="rounded-full border-2 border-ink bg-ink px-4 py-1.5 text-xs font-bold text-white">
                      {p.country} · {p.year}
                    </span>
                  </div>
                  <Icon
                    name="factory"
                    className="absolute right-6 top-5 h-16 w-16 text-ink/25"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-heading text-xl font-bold text-ink dark:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {p.description}
                  </p>

                  <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-slate-400">Capacity</dt>
                      <dd className="mt-0.5 font-semibold text-ink dark:text-white">{p.capacity}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-slate-400">Investment</dt>
                      <dd className="mt-0.5 font-semibold text-ink dark:text-white">{p.investment}</dd>
                    </div>
                  </dl>

                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 space-y-4 border-t border-slate-100 pt-5 text-sm dark:border-white/10">
                          {(
                            [
                              ["Challenge", p.challenge],
                              ["Solution", p.solution],
                              ["Technology", p.technology],
                              ["ROI", p.roi],
                            ] as const
                          ).map(([label, text]) => (
                            <div key={label}>
                              <p className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-secondary">
                                {label}
                              </p>
                              <p className="mt-1 leading-relaxed text-slate-600 dark:text-slate-300">
                                {text}
                              </p>
                            </div>
                          ))}
                          <blockquote className="rounded-2xl bg-cream p-4 italic leading-relaxed text-slate-600 dark:bg-ink-700 dark:text-slate-300">
                            “{p.testimonial}”
                            <footer className="mt-2 not-italic text-xs font-semibold text-ink dark:text-white">
                              — {p.client}
                            </footer>
                          </blockquote>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setOpen(expanded ? null : p.title)}
                    className="group mt-6 flex items-center gap-2 self-start text-sm font-semibold text-accent transition hover:text-accent-600 dark:text-secondary"
                  >
                    {expanded ? "Show less" : "View case detail"}
                    <Icon
                      name="chevron"
                      className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
