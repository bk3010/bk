"use client";

import { useSyncExternalStore } from "react";

const listeners = new Set<() => void>();
const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};
const getConsent = () => localStorage.getItem("sx-cookies");

export default function CookieConsent() {
  // Server snapshot pretends consent exists so the banner never flashes during SSR.
  const consent = useSyncExternalStore(subscribe, getConsent, () => "pending");

  const decide = (value: string) => {
    localStorage.setItem("sx-cookies", value);
    listeners.forEach((l) => l());
  };

  if (consent !== null) return null;

  return (
    <div className="glass fixed bottom-6 left-6 z-50 max-w-sm rounded-2xl p-5 shadow-2xl">
      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
        We use cookies to improve your experience and analyse site usage. Read our{" "}
        <a href="/privacy" className="font-semibold text-royal underline dark:text-cyan">
          privacy policy
        </a>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <button
          onClick={() => decide("all")}
          className="gradient-brand rounded-full px-5 py-2 text-xs font-semibold text-white transition hover:brightness-110"
        >
          Accept All
        </button>
        <button
          onClick={() => decide("essential")}
          className="rounded-full border border-slate-300 px-5 py-2 text-xs font-semibold text-slate-600 transition hover:border-royal hover:text-royal dark:border-white/20 dark:text-slate-300"
        >
          Essential Only
        </button>
      </div>
    </div>
  );
}
