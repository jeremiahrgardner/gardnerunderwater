import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { CourseCatalog } from "@/components/CourseCatalog";
import { PageIntro, ConsultationCTA } from "@/components/SiteUI";

export const metadata: Metadata = pageMetadata(
  "UTD Scuba Courses in San Diego",
  "UTD recreational, technical and specialty courses in San Diego: Essentials of Rec and Tec, Techreational, Tech 1, Doubles, Rescue, Drysuit and more.",
  "/courses",
);

export default function CoursesPage() {
  return (
    <>
      <PageIntro
        eyebrow="The curriculum"
        title={
          <>
            Earn your
            <br />
            <span className="serif-accent">next level.</span>
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
