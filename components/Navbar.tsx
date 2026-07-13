"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import Logo from "./Logo";
import { services } from "@/lib/data";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", mega: true },
  { href: "/industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/careers", label: "Careers" },
];

const themeListeners = new Set<() => void>();
const subscribeTheme = (listener: () => void) => {
  themeListeners.add(listener);
  return () => themeListeners.delete(listener);
};

function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribeTheme,
    () => document.documentElement.classList.contains("dark"),
    () => false
  );

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("sx-theme", next ? "dark" : "light");
    themeListeners.forEach((l) => l());
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-white text-ink transition-all duration-300 hover:bg-tertiary dark:border-white/25 dark:bg-ink dark:text-white dark:hover:bg-ink-700"
    >
      <Icon name={dark ? "sun" : "moon"} className="h-4.5 w-4.5" />
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when the route changes (state derived from props pattern)
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMobileOpen(false);
    setMegaOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b-2 border-ink bg-cream/95 shadow-[0_4px_0_0_rgba(30,41,59,0.12)] backdrop-blur dark:border-white/20 dark:bg-ink-800/95"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Scale X home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) =>
            link.mega ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    pathname.startsWith(link.href)
                      ? "bg-accent text-white"
                      : "text-ink hover:bg-tertiary/60 dark:text-slate-200 dark:hover:bg-ink-700"
                  }`}
                >
                  {link.label}
                  <Icon name="chevron" className="h-3.5 w-3.5" />
                </Link>
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
                      className="absolute left-1/2 top-full w-180 -translate-x-1/2 pt-4"
                    >
                      <div className="grid grid-cols-3 gap-1 rounded-3xl border-2 border-ink bg-white p-4 shadow-[8px_8px_0_0_#E2E8F0] dark:border-white/25 dark:bg-ink dark:shadow-[8px_8px_0_0_rgba(0,0,0,0.45)]">
                        {services.map((s, i) => (
                          <Link
                            key={s.slug}
                            href={`/services#${s.slug}`}
                            className="group flex items-start gap-3 rounded-2xl p-3 transition hover:bg-cream dark:hover:bg-ink-700"
                          >
                            <span
                              className={`mt-0.5 ${
                                ["text-accent", "text-secondary", "text-tertiary", "text-mint"][i % 4]
                              }`}
                            >
                              <Icon name={s.icon} className="h-5 w-5" />
                            </span>
                            <span>
                              <span className="block text-sm font-bold text-ink group-hover:text-accent dark:text-white">
                                {s.title}
                              </span>
                              <span className="mt-0.5 block text-xs leading-snug text-slate-500 dark:text-slate-400">
                                {s.items.slice(0, 2).join(" · ")}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  pathname.startsWith(link.href)
                    ? "bg-accent text-white"
                    : "text-ink hover:bg-tertiary/60 dark:text-slate-200 dark:hover:bg-ink-700"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="gradient-brand rounded-full px-5 py-2.5 text-sm font-bold text-white"
          >
            Start Your Project
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border-2 border-ink bg-white dark:border-white/25 dark:bg-ink"
          >
            <span
              className={`h-0.5 w-5 bg-ink transition-transform dark:bg-white ${
                mobileOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-ink transition-transform dark:bg-white ${
                mobileOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b-2 border-ink bg-cream dark:border-white/20 dark:bg-ink-800 lg:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-ink transition hover:bg-tertiary/60 dark:text-slate-100 dark:hover:bg-ink-700"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="gradient-brand mt-2 block rounded-full px-4 py-3 text-center text-sm font-bold text-white"
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
