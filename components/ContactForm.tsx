"use client";

import { useState } from "react";
import Icon from "./Icon";
import { industries, services } from "@/lib/data";

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20 dark:border-white/15 dark:bg-navy-800 dark:text-white dark:placeholder:text-slate-500";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex h-full min-h-80 flex-col items-center justify-center rounded-3xl border border-success/30 bg-success/5 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-heading text-2xl font-bold text-navy dark:text-white">
          Inquiry received.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Thank you for reaching out. A senior consultant will contact you within one
          business day to schedule your free consultation.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Full Name *
          </span>
          <input required name="name" placeholder="Your name" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Company
          </span>
          <input name="company" placeholder="Company name" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Work Email *
          </span>
          <input required type="email" name="email" placeholder="you@company.com" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Phone / WhatsApp
          </span>
          <input name="phone" placeholder="+91 ..." className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Industry
          </span>
          <select name="industry" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select industry
            </option>
            {industries.map((i) => (
              <option key={i.name}>{i.name}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Service Needed
          </span>
          <select name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select service
            </option>
            <option>Complete Turnkey Project</option>
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Tell us about your project *
        </span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Product, capacity, location, timeline — anything you know so far."
          className={inputClass}
        />
      </label>
      <button
        type="submit"
        className="gradient-brand group flex w-full items-center justify-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-royal/30 transition hover:brightness-110 sm:w-auto"
      >
        Send Inquiry
        <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="text-xs text-slate-400">
        By submitting, you agree to our privacy policy. Your details are never shared.
      </p>
    </form>
  );
}
