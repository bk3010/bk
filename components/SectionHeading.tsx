import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const isCenter = align === "center";
  return (
    <Reveal className={`${isCenter ? "mx-auto text-center" : ""} mb-14 max-w-3xl`}>
      <div className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}>
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-royal dark:text-cyan">
          {eyebrow}
        </span>
        <span className="tech-rule w-14" />
      </div>
      <h2
        className={`mt-4 text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] ${
          tone === "dark" ? "text-white" : "text-navy dark:text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-slate-300" : "text-slate-600 dark:text-slate-300"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
