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
  { href: "/knowledge", label: "Knowledge Center" },
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
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-200 transition hover:border-cyan hover:text-cyan"
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark shadow-[0_8px_32px_rgba(7,27,52,0.35)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
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
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
                    pathname.startsWith(link.href)
                      ? "text-cyan"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  {link.label}
                  <Icon name="chevron" className="h-3.5 w-3.5" />
                </Link>
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-4"
                    >
                      <div className="glass-dark grid grid-cols-3 gap-1 rounded-2xl p-4 shadow-2xl">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services#${s.slug}`}
                            className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-white/5"
                          >
                            <span className="mt-0.5 text-cyan">
                              <Icon name={s.icon} className="h-5 w-5" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-white group-hover:text-cyan">
                                {s.title}
                              </span>
                              <span className="mt-0.5 block text-xs leading-snug text-slate-400">
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
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  pathname.startsWith(link.href)
                    ? "text-cyan"
                    : "text-slate-200 hover:text-white"
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
            className="gradient-brand rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-royal/30 transition hover:shadow-xl hover:shadow-royal/40 hover:brightness-110"
          >
            Start Your Project
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15"
          >
            <span
              className={`h-0.5 w-5 bg-white transition-transform ${
                mobileOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-transform ${
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
            className="glass-dark overflow-hidden lg:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="gradient-brand mt-2 block rounded-xl px-4 py-3 text-center text-sm font-semibold text-white"
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
