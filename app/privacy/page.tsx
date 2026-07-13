import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Scale X Process & Engineering collects, uses, and protects your information.",
};

const sections = [
  {
    h: "Information We Collect",
    p: "We collect information you provide directly — such as your name, company, email, phone number, and project details submitted through our inquiry forms — along with standard technical data (browser type, pages visited, approximate location) collected via cookies when you consent.",
  },
  {
    h: "How We Use Your Information",
    p: "Your information is used to respond to inquiries, prepare proposals, deliver contracted services, send newsletters you have subscribed to, and improve our website. We do not sell or rent personal data to third parties.",
  },
  {
    h: "Cookies",
    p: "Essential cookies keep the site functioning. Optional analytics cookies help us understand usage patterns; these are only set with your consent, which you can withdraw at any time by clearing your browser storage.",
  },
  {
    h: "Data Retention & Security",
    p: "Inquiry data is retained for the duration of our business relationship plus statutory record-keeping periods. We apply industry-standard technical and organisational safeguards to protect it.",
  },
  {
    h: "Your Rights",
    p: "You may request access to, correction of, or deletion of your personal data at any time by writing to hello@scalexengineering.com. We respond to verified requests within 30 days.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumb="Privacy Policy"
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: July 2026. This policy explains what we collect, why, and the rights you hold over your data."
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-heading text-xl font-bold text-ink dark:text-white">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
