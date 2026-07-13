import Link from "next/link";
import Icon from "./Icon";
import Logo from "./Logo";
import { offices, site } from "@/lib/data";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Careers", href: "/careers" },
      { label: "Knowledge Center", href: "/knowledge" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Industrial Consulting", href: "/services#industrial-consulting" },
      { label: "Government Approvals", href: "/services#government-approvals" },
      { label: "Engineering", href: "/services#engineering" },
      { label: "Plant Design", href: "/services#plant-design" },
      { label: "Commissioning", href: "/services#commissioning" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Food Processing", href: "/industries" },
      { label: "Pharmaceutical", href: "/industries" },
      { label: "Chemical", href: "/industries" },
      { label: "Renewable Energy", href: "/industries" },
      { label: "All Industries", href: "/industries" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-slate-300">
      <div className="blueprint-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Newsletter band */}
        <div className="glass-dark -translate-y-14 rounded-3xl p-8 shadow-2xl sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <h3 className="text-2xl font-extrabold text-white">
              Industrial intelligence, delivered monthly.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Regulatory updates, engineering insights, and case studies from live projects —
              no noise, unsubscribe anytime.
            </p>
          </div>
          <form className="mt-6 flex w-full max-w-md gap-3 lg:mt-0" action="/contact">
            <input
              type="email"
              required
              placeholder="Work email address"
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:border-secondary focus:outline-none"
            />
            <button
              type="submit"
              className="gradient-brand shrink-0 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid gap-12 pb-14 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              {site.description}
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 transition hover:text-secondary">
                <Icon name="phone" className="h-4 w-4 text-secondary" /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition hover:text-secondary">
                <Icon name="mail" className="h-4 w-4 text-secondary" /> {site.email}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm transition hover:text-secondary">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Global Offices
              </h4>
              <ul className="mt-4 space-y-2.5">
                {offices.map((o) => (
                  <li key={o.city} className="text-sm">
                    <span className="text-slate-200">{o.city}</span>
                    <span className="text-slate-500"> · {o.country}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition hover:text-secondary">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-secondary">Terms of Service</Link>
            <span className="hidden items-center gap-1.5 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              ISO 9001 · ISO 14001 Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
