export default function Logo({
  compact = false,
  tone = "ink",
}: {
  compact?: boolean;
  tone?: "ink" | "white";
}) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
        <defs>
          <linearGradient id="sx-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#F472B6" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="36" height="36" rx="11" fill="url(#sx-grad)" stroke="#1E293B" strokeWidth="2.5" />
        <path
          d="M13 27L27 13M13 13l5.2 5.2M27 27l-5.2-5.2"
          stroke="#FFFDF5"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
      {!compact && (
        <span className="leading-none">
          <span
            className={`block font-heading text-lg font-extrabold tracking-tight ${
              tone === "white" ? "text-white" : "text-ink dark:text-white"
            }`}
          >
            SCALE<span className="text-accent"> X</span>
          </span>
          <span
            className={`mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.22em] ${
              tone === "white" ? "text-slate-400" : "text-slate-500 dark:text-slate-400"
            }`}
          >
            Process &amp; Engineering
          </span>
        </span>
      )}
    </span>
  );
}
