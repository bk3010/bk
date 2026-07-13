"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Counter from "./Counter";
import Icon from "./Icon";
import { stats } from "@/lib/data";

const headline = ["Build", "Tomorrow’s", "Manufacturing", "Today."];
const shadowRotation = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"];

const pop = (delay: number) => ({
  initial: { opacity: 0, scale: 0.6, y: 24 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.34, 1.56, 0.64, 1] as const },
});

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-cream pt-28 pb-16 dark:bg-ink-800">
      {/* giant amber circle behind the text */}
      <div
        className="absolute -left-40 top-1/2 h-[46rem] w-[46rem] -translate-y-1/2 rounded-full bg-tertiary/35 dark:bg-tertiary/15"
        aria-hidden="true"
      />
      {/* dot field behind the image */}
      <div className="blueprint-grid-light absolute right-0 top-0 h-full w-1/2 opacity-60 dark:opacity-25" aria-hidden="true" />

      {/* confetti */}
      <div className="confetti-circle left-[46%] top-24 h-6 w-6 animate-float bg-secondary max-lg:hidden" aria-hidden="true" />
      <div className="confetti-triangle left-[38%] bottom-24 animate-float-slow max-lg:hidden" aria-hidden="true" />
      <div className="confetti-square right-[8%] top-28 h-5 w-5 animate-float bg-mint max-lg:hidden" aria-hidden="true" />
      <div className="confetti-circle right-[42%] bottom-40 h-4 w-4 animate-float-slow border-4 border-accent bg-transparent max-lg:hidden" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <div>
          <motion.div
            {...pop(0)}
            className="inline-flex items-center gap-2.5 rounded-full border-2 border-ink bg-white px-4 py-2 text-xs font-bold text-ink shadow-[3px_3px_0_0_#1E293B] dark:border-white/25 dark:bg-ink dark:text-white dark:shadow-[3px_3px_0_0_#0F172A]"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-mint" />
            From Idea to Industry — Turnkey &amp; Worldwide
          </motion.div>

          <h1 className="mt-7 text-4xl font-extrabold leading-[1.06] text-ink dark:text-white sm:text-6xl lg:text-[4.2rem]">
            {headline.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, scale: 0.5, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 + i * 0.11, ease: [0.34, 1.56, 0.64, 1] }}
                className={`mr-[0.26em] inline-block ${
                  i === 1 ? "text-accent" : i === 3 ? "relative text-secondary" : ""
                }`}
              >
                {word}
                {i === 3 && (
                  <span className="tech-rule absolute -bottom-3 left-0 w-full" aria-hidden="true" />
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            {...pop(0.6)}
            className="mt-7 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg"
          >
            From feasibility studies to commercial production, Scale X delivers complete
            engineering and industrial consulting solutions for businesses worldwide.
          </motion.p>

          <motion.div {...pop(0.75)} className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="gradient-brand group flex min-h-12 items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold text-white"
            >
              Start Your Project
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-accent">
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link
              href="/contact#consultation"
              className="flex min-h-12 items-center gap-2.5 rounded-full border-2 border-ink bg-transparent px-7 py-3.5 text-sm font-bold text-ink transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-tertiary dark:border-white/40 dark:text-white dark:hover:bg-ink-700"
            >
              <Icon name="play" className="h-4.5 w-4.5" />
              Book Free Consultation
            </Link>
          </motion.div>

          <div className="mt-14 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...pop(0.9 + i * 0.08)}
                className="rounded-2xl border-2 border-ink bg-white p-4 dark:border-white/25 dark:bg-ink"
                style={{ boxShadow: `4px 4px 0 0 ${shadowRotation[i % 4]}` }}
              >
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  className="font-heading text-2xl font-extrabold text-ink dark:text-white sm:text-3xl"
                />
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* blob-framed artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative mx-auto w-full max-w-md max-lg:hidden"
        >
          <div className="card-hover overflow-hidden rounded-tl-[5rem] rounded-tr-3xl rounded-br-[5rem] rounded-bl-3xl border-2 border-ink shadow-[10px_10px_0_0_#FBBF24] dark:border-white/25">
            <Image
              src="/hero-art.png"
              alt="Illustration of a person standing before a blazing golden sky"
              width={1024}
              height={1024}
              priority
              className="h-auto w-full"
            />
          </div>
          {/* sticker badge */}
          <div className="absolute -left-8 -top-6 rotate-[-8deg] rounded-2xl border-2 border-ink bg-secondary px-4 py-2 font-heading text-sm font-extrabold text-white shadow-[4px_4px_0_0_#1E293B]">
            500+ plants built
          </div>
          <div className="absolute -bottom-5 -right-4 rotate-[6deg] rounded-full border-2 border-ink bg-mint px-4 py-2 font-heading text-sm font-extrabold text-ink shadow-[4px_4px_0_0_#1E293B]">
            Est. 2011
          </div>
        </motion.div>
      </div>
    </section>
  );
}
