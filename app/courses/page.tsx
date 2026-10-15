import type { Metadata } from "next";
import { CourseCatalog } from "@/components/CourseCatalog";
import { PageIntro, ConsultationCTA } from "@/components/SiteUI";

export const metadata: Metadata = {
  alternates: { canonical: "/courses" },
  title: "Courses",
  description:
    "Explore foundational and technical dive training, scuba coaching, DAN first aid, and specialty courses with Gardner Underwater.",
};

export default function CoursesPage() {
  return (
    <>
      <PageIntro
        eyebrow="The curriculum"
        title={
          <>
            Your next
            <br />
            <span className="serif-accent">plateau.</span>
          </>
        }
      >
        <p>
          From your first foundations to your next technical challenge. Find
          training that moves your diving forward.
        </p>
        <span className="intro-note">
          Small teams. Individual attention. Real-world skills.
        </span>
      </PageIntro>
      <CourseCatalog />
      <ConsultationCTA />
    </>
  );
}
