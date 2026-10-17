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
          The technical path starts with Essentials of Tech and builds from
          there. Foundations, specialties, and first aid fill in the rest. One
          standard throughout, so every step builds on the last.
        </p>
        <span className="intro-note">
          Teams of three or fewer. Real dives. You earn the card.
        </span>
      </PageIntro>
      <CourseCatalog />
      <ConsultationCTA />
    </>
  );
}
