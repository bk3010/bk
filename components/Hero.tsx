"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Counter from "./Counter";
import Icon from "./Icon";
import { stats } from "@/lib/data";

const headline = ["Build", "Tomorrow’s", "Manufacturing", "Today."];

function SkylineScene() {
  return (
    <svg
      viewBox="0 0 1440 360"
      preserveAspectRatio="xMidYMax slice"
      className="absolute bottom-0 left-0 w-full text-cyan/25"
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        {/* factory silhouettes */}
        <path d="M40 360V240l70 40v-40l70 40v-40l80 46v74" />
        <path d="M120 240v-60h24v46" />
        <path d="M300 360V190h90v170M320 190v-50h18l6 50M370 190v-36h16v36" />
        <path d="M470 360V250l60 34v-34l60 34v-34l70 40v70" />
        <path d="M700 360V150h110v210M726 150v-64h20l8 64M780 150v-42h18v42" />
        <path d="M880 360V262h120v98M910 262v-40h22v40M950 262v-52h20v52" />
        <path d="M1060 360V220l64 36v-36l64 36v-36l76 44v96" />
        <path d="M1280 360V180h80v180M1300 180v-56h16l6 56" />
        {/* cranes */}
        <path d="M560 250V96h6v154M560 104h150l-24 22M710 104v26" />
        <path d="M1130 220V80h6v140M1130 88h-118l20 20M1012 88v22" />
        {/* tanks */}
        <ellipse cx="230" cy="330" rx="34" ry="10" />
        <path d="M196 330v-52a34 14 0 0 1 68 0v52" />
        <ellipse cx="640" cy="336" rx="28" ry="8" />
        <path d="M612 336v-44a28 12 0 0 1 56 0v44" />
      </g>
      {/* blinking beacons */}
      <circle cx="563" cy="92" r="3" fill="#00C2FF">
        <animate attributeName="opacity" values="1;0.15;1" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="1133" cy="76" r="3" fill="#00C2FF">
        <animate attributeName="opacity" values="0.15;1;0.15" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="755" cy="86" r="3" fill="#0D5CFF">
        <animate attributeName="opacity" values="1;0.2;1" dur="3.1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero-scene relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-16">
      <div className="blueprint-grid absolute inset-0 animate-grid-pan" aria-hidden="true" />
      <div className="light-beam left-[15%] animate-beam" aria-hidden="true" />
      <div
        className="light-beam left-[60%] animate-beam"
        style={{ animationDelay: "-4.5s" }}
        aria-hidden="true"
      />
      <SkylineScene />

      {/* floating orbs */}
      <div className="absolute right-[12%] top-[18%] h-40 w-40 animate-float-slow rounded-full bg-royal/20 blur-3xl" aria-hidden="true" />
      <div className="absolute left-[8%] top-[42%] h-56 w-56 animate-float rounded-full bg-cyan/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-dark inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium text-slate-200"
        >
          <span className="h-2 w-2 rounded-full bg-success" />
          Global Turnkey Industrial Consultancy — From Idea to Industry
        </motion.div>

        <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
          {headline.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`mr-[0.28em] inline-block ${i >= 2 ? "gradient-text" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
        >
          From feasibility studies to commercial production, Scale X delivers complete
          engineering and industrial consulting solutions for businesses worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/contact"
            className="gradient-brand group flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-royal/30 transition hover:shadow-2xl hover:shadow-royal/50 hover:brightness-110"
          >
            Start Your Project
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact#consultation"
            className="glass-dark flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition hover:border-cyan/50"
          >
            <Icon name="play" className="h-4.5 w-4.5 text-cyan" />
            Book Free Consultation
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-navy/70 px-6 py-5 backdrop-blur">
              <Counter
                value={s.value}
                suffix={s.suffix}
                className="font-heading text-3xl font-extrabold text-white sm:text-4xl"
              />
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 lg:block"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-cyan"
          />
        </div>
      </motion.div>
    </section>
  );
}
