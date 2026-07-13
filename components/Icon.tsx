type IconProps = {
  name: string;
  className?: string;
};

const paths: Record<string, React.ReactNode> = {
  strategy: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  report: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2.1 2.1M16.9 16.9L19 19M19 5l-2.1 2.1M7.1 16.9L5 19" />
    </>
  ),
  blueprint: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 9v11M14 13h4M14 16h4" />
      <circle cx="11" cy="15" r="1.6" />
    </>
  ),
  select: (
    <>
      <path d="M4 7h10M4 12h7M4 17h9" />
      <circle cx="17.5" cy="15.5" r="3.5" />
      <path d="M20 18l2 2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.5 4 5.6 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.6-4-9s1.4-6.5 4-9z" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.5 6.5a4 4 0 0 0-5.6 4.9L4 16.3a2 2 0 1 0 2.8 2.8l4.9-4.9a4 4 0 0 0 4.9-5.6l-2.6 2.6-2.1-2.1 2.6-2.6z" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 15c-1-4 .5-8.5 4.5-11 1 .5 2.5 2 3 3-2.5 4-7 5.5-11 4.5" />
      <path d="M9 12l3 3M7 14c-1.5.5-2.5 2.5-2.5 5 2.5 0 4.5-1 5-2.5" />
      <circle cx="14.5" cy="9.5" r="1.4" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M9.5 13.5L8 21l4-2 4 2-1.5-7.5M10 9l1.5 1.5L14.5 7" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19C5 9 12 4 20 4c0 9-5 15-13 15" />
      <path d="M5 19c2-5 6-9 10-11" />
    </>
  ),
  flame: (
    <>
      <path d="M12 3c1 3-3 5-3 9a4.5 4.5 0 0 0 9 0c0-2-1-3.5-2-5-.5 1-1 1.5-2 2 .5-2 0-4-2-6z" />
    </>
  ),
  umbrella: (
    <>
      <path d="M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9z" />
      <path d="M12 12v6a2 2 0 0 0 4 0M12 3v1" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c.5-3.5 2.7-5.5 5.5-5.5S14 16.5 14.5 20" />
      <circle cx="16.5" cy="9.5" r="2.5" />
      <path d="M16 14.5c2.5 0 4 1.8 4.5 4.5" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 11v3l4 .5V10.5L3 11zM7 10.5L19 5v13l-12-3.5" />
      <path d="M9 15l1 5h3l-1-4.5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M4 12.5l5 5L20 6.5" />,
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3z" />
      <path d="M8.5 9.5c0 3.5 2.5 6 6 6l1.5-1.5-2-1.5-1 .8a4.6 4.6 0 0 1-2.3-2.3l.8-1-1.5-2-1.5 1.5z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.5 4.5l1.8 1.8M17.7 17.7l1.8 1.8M19.5 4.5l-1.8 1.8M6.3 17.7l-1.8 1.8" />
    </>
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />,
  download: <path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19h16" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l6 3.5-6 3.5v-7z" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V10l6 4v-4l6 4v-4l6 4v7H3z" />
      <path d="M7 21v-3M12 21v-3M17 21v-3M5 6l1-3h3l1 3" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l5 5" />
    </>
  ),
};

const industryFallback = (
  <>
    <path d="M4 20V8l5 3.5V8l5 3.5V8l6 4v8H4z" />
  </>
);

export default function Icon({ name, className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? industryFallback}
    </svg>
  );
}
