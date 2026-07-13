"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { site } from "@/lib/data";

export default function FloatingCTA() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`glass flex h-11 w-11 items-center justify-center rounded-full text-ink transition-all duration-300 dark:text-white ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <Icon name="chevron" className="h-4 w-4 rotate-180" />
      </button>
      <a
        href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex h-13 w-13 items-center justify-center rounded-full border-2 border-ink bg-mint text-ink shadow-[4px_4px_0_0_#1E293B] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#1E293B]"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-mint" aria-hidden="true" />
        <Icon name="whatsapp" className="relative h-6 w-6" />
      </a>
    </div>
  );
}
