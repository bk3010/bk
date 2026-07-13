import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { offices, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your project or book a free consultation with Scale X Process & Engineering — offices in Mumbai, Dubai, Singapore, and Nairobi.",
};

const channels = [
  {
    icon: "phone",
    title: "Call Us",
    detail: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    note: "Mon–Sat, 9:00–19:00 IST",
  },
  {
    icon: "whatsapp",
    title: "WhatsApp",
    detail: "Chat instantly",
    href: `https://wa.me/${site.whatsapp.replace("+", "")}`,
    note: "Typical reply within minutes",
  },
  {
    icon: "mail",
    title: "Email",
    detail: site.email,
    href: `mailto:${site.email}`,
    note: "Response within one business day",
  },
  {
    icon: "play",
    title: "Book Consultation",
    detail: "Free 45-minute session",
    href: "#consultation",
    note: "With a senior consultant",
  },
];

function WorldMap() {
  // Simplified dotted world with pulsing office markers
  const markers = [
    { x: 396, y: 132, label: "Mumbai" },
    { x: 360, y: 118, label: "Dubai" },
    { x: 452, y: 152, label: "Singapore" },
    { x: 336, y: 160, label: "Nairobi" },
  ];
  return (
    <svg viewBox="0 0 600 280" className="w-full" aria-label="Scale X global office locations">
      <defs>
        <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="currentColor" opacity="0.22" />
        </pattern>
      </defs>
      {/* stylised continent blobs filled with dot pattern */}
      <g className="text-slate-500 dark:text-slate-400">
        <path d="M60 60q40-30 90-22t60 30q10 26-16 40t-70 8q-50-4-64-56z" fill="url(#dots)" />
        <path d="M130 140q30-6 44 16t6 52q-8 32-34 30t-34-40q-6-40 18-58z" fill="url(#dots)" />
        <path d="M270 52q50-18 92-6t36 34q-6 20-40 24t-72-4q-34-10-16-48z" fill="url(#dots)" />
        <path d="M300 120q40-10 62 10t18 56q-6 36-38 36t-46-38q-12-44 4-64z" fill="url(#dots)" />
        <path d="M380 76q60-22 110-6t54 44q2 28-42 36t-92-6q-46-16-30-68z" fill="url(#dots)" />
        <path d="M488 190q28-8 42 8t8 36q-8 20-30 16t-28-28q-4-24 8-32z" fill="url(#dots)" />
      </g>
      {/* connection arcs from Mumbai HQ */}
      <g fill="none" stroke="#00C2FF" strokeWidth="1" opacity="0.5">
        <path d="M396 132 Q 378 110 360 118" strokeDasharray="4 4" />
        <path d="M396 132 Q 428 136 452 152" strokeDasharray="4 4" />
        <path d="M396 132 Q 366 152 336 160" strokeDasharray="4 4" />
      </g>
      {markers.map((m) => (
        <g key={m.label}>
          <circle cx={m.x} cy={m.y} r="10" fill="#00C2FF" opacity="0.15">
            <animate attributeName="r" values="6;14;6" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <circle cx={m.x} cy={m.y} r="4" fill="#0D5CFF" stroke="#00C2FF" strokeWidth="1.5" />
          <text
            x={m.x}
            y={m.y - 12}
            textAnchor="middle"
            className="fill-slate-600 font-semibold dark:fill-slate-300"
            fontSize="11"
          >
            {m.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get In Touch"
        title={
          <>
            Your project starts
            <br />
            <span className="gradient-text">with a conversation.</span>
          </>
        }
        subtitle="Tell us what you want to build. A senior consultant — not a sales script — will respond within one business day."
      />

      {/* Contact channels */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <a
                href={c.href}
                className="card-hover group flex h-full flex-col rounded-3xl border-2 border-ink bg-white p-7 dark:border-white/10 dark:bg-ink-800"
                {...(c.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="gradient-brand flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg shadow-accent/25">
                  <Icon name={c.icon} className="h-5.5 w-5.5" />
                </span>
                <h2 className="mt-5 font-heading text-base font-bold text-ink dark:text-white">
                  {c.title}
                </h2>
                <p className="mt-1.5 text-sm font-semibold text-accent dark:text-secondary">{c.detail}</p>
                <p className="mt-2 text-xs text-slate-400">{c.note}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + map */}
      <section id="consultation" className="scroll-mt-24 bg-white px-5 py-24 dark:bg-ink-800 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Project Inquiry"
              title="Book your free consultation"
              subtitle="Share whatever you know — even a one-line idea is enough to start."
            />
            <ContactForm />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Global Presence"
              title="Find us on the map"
            />
            <Reveal>
              <div className="rounded-3xl border-2 border-ink bg-cream p-6 dark:border-white/10 dark:bg-ink">
                <WorldMap />
              </div>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {offices.map((o, i) => (
                <Reveal key={o.city} delay={i * 0.05}>
                  <div className="rounded-2xl border-2 border-ink bg-cream p-5 dark:border-white/10 dark:bg-ink">
                    <div className="flex items-center gap-2">
                      <Icon name="pin" className="h-4 w-4 text-accent dark:text-secondary" />
                      <h3 className="font-heading text-sm font-bold text-ink dark:text-white">
                        {o.city}
                      </h3>
                    </div>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {o.role}
                    </p>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {o.address}
                    </p>
                    <p className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                      {o.phone}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
