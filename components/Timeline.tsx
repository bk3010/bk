"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Reveal from "./Reveal";
import { processSteps } from "@/lib/data";

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <div ref={ref} className="relative mx-auto max-w-4xl">
      {/* rail */}
      <div className="absolute left-5 top-0 h-full w-px bg-slate-200 dark:bg-white/10 sm:left-1/2" aria-hidden="true" />
      <motion.div
        style={{ scaleY: progress }}
        className="absolute left-5 top-0 h-full w-px origin-top bg-gradient-to-b from-accent to-secondary sm:left-1/2"
        aria-hidden="true"
      />

      <ol className="space-y-10">
        {processSteps.map((step, i) => {
          const left = i % 2 === 0;
          return (
            <li key={step.title} className="relative">
              <Reveal
                delay={0.05}
                className={`relative pl-14 sm:w-1/2 sm:pl-0 ${
                  left ? "sm:pr-14 sm:text-right" : "sm:ml-auto sm:pl-14"
                }`}
              >
                {/* node — confetti color rotation */}
                <span
                  className={`absolute top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink font-heading text-xs font-extrabold shadow-[3px_3px_0_0_#1E293B] ${
                    ["bg-accent text-white", "bg-secondary text-white", "bg-tertiary text-ink", "bg-mint text-ink"][i % 4]
                  } ${
                    left
                      ? "left-0 sm:left-auto sm:-right-5"
                      : "left-0 sm:-left-5"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="card-hover rounded-2xl border-2 border-ink bg-white p-6 dark:border-white/10 dark:bg-ink-800">
                  <h3 className="font-heading text-lg font-bold text-ink dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
