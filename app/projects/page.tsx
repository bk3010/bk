import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ProjectsGrid from "@/components/ProjectsGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A portfolio of turnkey industrial projects — dairy, pharma, chemicals, renewables, and more — delivered across four continents.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        crumb="Projects"
        eyebrow="Portfolio"
        title={
          <>
            Proof, poured in
            <br />
            <span className="gradient-text">concrete and steel.</span>
          </>
        }
        subtitle="A selection of turnkey deliveries — each with the challenge we inherited, the engineering answer, and the returns it produced."
      />

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Case Studies"
            title="Explore the portfolio"
            subtitle="Filter by industry, geography, or completion year — then open any project for the full story."
          />
          <ProjectsGrid />
        </div>
      </section>

      <CTASection
        title="Your project could be next on this page."
        subtitle="Let's turn your vision into reality."
      />
    </>
  );
}
