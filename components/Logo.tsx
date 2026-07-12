export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
        <defs>
          <linearGradient id="sx-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0D5CFF" />
            <stop offset="100%" stopColor="#00C2FF" />
          </linearGradient>
        </defs>
        <rect x="1.5" y="1.5" width="37" height="37" rx="10" fill="none" stroke="url(#sx-grad)" strokeWidth="2" />
        <path
          d="M13 27L27 13M13 13l5.2 5.2M27 27l-5.2-5.2"
          stroke="url(#sx-grad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      {!compact && (
        <span className="leading-none">
          <span className="block font-heading text-lg font-extrabold tracking-tight text-white">
            SCALE<span className="gradient-text"> X</span>
          </span>
          <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.22em] text-slate-400">
            Process &amp; Engineering
          </span>
        </span>
      )}
    </span>
  );
}
