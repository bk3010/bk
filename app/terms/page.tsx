import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the Scale X Process & Engineering website.",
};

const sections = [
  {
    h: "Use of This Website",
    p: "This website is provided for general information about Scale X Process & Engineering and its services. Content may be updated without notice and does not constitute engineering, legal, or investment advice for any specific project.",
  },
  {
    h: "Intellectual Property",
    p: "All content — text, graphics, logos, and design — is the property of Scale X Process & Engineering and may not be reproduced without written permission, except for personal, non-commercial reference.",
  },
  {
    h: "No Professional Reliance",
    p: "Case studies, indicative timelines, and financial figures describe past projects under their specific conditions. Outcomes for your project depend on a formal engagement, feasibility study, and signed scope of work.",
  },
  {
    h: "Limitation of Liability",
    p: "To the fullest extent permitted by law, Scale X accepts no liability for loss arising from reliance on website content or from interruptions to website availability.",
  },
  {
    h: "Governing Law",
    p: "These terms are governed by the laws of India, with courts in Mumbai holding exclusive jurisdiction over disputes arising from use of this website.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        crumb="Terms of Service"
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Last updated: July 2026. Please read these terms before using this website."
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
