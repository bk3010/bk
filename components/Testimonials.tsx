"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="relative min-h-56 sm:min-h-44">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.5 }}
          >
            <svg viewBox="0 0 24 24" className="mx-auto mb-6 h-8 w-8 text-secondary" fill="currentColor" aria-hidden="true">
              <path d="M6.5 5C4 6.8 2.5 9.4 2.5 12.8V19h7v-7H5.8c.2-2 1.3-3.7 3.2-5L6.5 5zm11 0C15 6.8 13.5 9.4 13.5 12.8V19h7v-7h-3.7c.2-2 1.3-3.7 3.2-5L17.5 5z" />
            </svg>
            <blockquote className="text-lg font-medium leading-relaxed text-white sm:text-xl">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-heading font-bold text-white">{t.name}</p>
              <p className="mt-1 text-sm text-slate-400">{t.role}</p>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-2.5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Testimonial ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-secondary" : "w-2 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
