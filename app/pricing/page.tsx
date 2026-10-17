import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Arrow, ConsultationCTA, PageIntro } from "@/components/SiteUI";

export const metadata: Metadata = pageMetadata(
  "Dive Training Pricing",
  "Gardner Underwater pricing: technical courses and training days at $300 per day, DAN first aid at $300 per course, and $129 monthly coaching. Start with a free call.",
  "/pricing",
);
const options = [
  {
    id: "training-days",
    title: "Courses & training days",
    type: "In the water",
    amount: "300",
    unit: "/ day",
    note: "Minimum 1 day",
    text: "Essentials of Tech, the rest of the technical path, foundational courses, and stand-alone training days. All priced by the day, because skill takes the time it takes.",
    interest: "Training days",
  },
  {
    id: "coaching",
    title: "Scuba coaching",
    type: "Between your dives",
    amount: "129",
    unit: "/ month",
    note: "No minimum commitment",
    text: "Keep progressing between courses, with regular check-ins, video review, and honest feedback.",
    interest: "Scuba Coaching",
  },
  {
    id: "dan-first-aid",
    title: "DAN first aid",
    type: "Be ready to respond",
    amount: "300",
    unit: "/ course",
    note: "Typically 1 day",
    text: "In-person emergency training, including life support, emergency oxygen, and first aid for professional divers.",
    interest: "DAN first aid",
  },
];
export default function PricingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Upfront about money"
        title={
          <>
            Great training.
            <br />
            <span className="serif-accent">Clear pricing.</span>
          </>
        }
      >
        <p>
          No hidden fees. No upselling. No fake discounts. The price reflects the
          time, attention, and work that good training takes.
        </p>
        <span className="intro-note">
          You pay for training. You earn certification.
        </span>
      </PageIntro>
      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {options.map((option, i) => (
              <article
                key={option.title}
                id={option.id}
                className={`pricing-card ${i === 0 ? "pricing-featured" : ""}`}
              >
                <div className="card-topline">
                  <span>0{i + 1}</span>
                  <span>{option.type}</span>
                </div>
                <h2>{option.title}</h2>
                <p>{option.text}</p>
                <div className="price">
                  <span className="currency">$</span>
                  {option.amount}
                  <span>{option.unit}</span>
                </div>
                <span className="price-note">{option.note}</span>
                <Link
                  className={`btn ${i === 0 ? "btn-primary" : "btn-outline"}`}
                  href={`/contact?course=${encodeURIComponent(option.interest)}#consultation`}
                >
                  Let’s talk <Arrow />
                </Link>
              </article>
            ))}
          </div>
          <div className="pricing-explainer">
            <span className="eyebrow">Plan before you commit</span>
            <p>
              Start with a free 15-minute call. We’ll talk through your
              experience, your goals, how many days it will likely take, and any
              equipment costs before you book.
            </p>
            <Link href="/shop" className="text-link">
              Explore equipment rentals <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container split-content">
          <div>
            <div className="eyebrow">Paying for value</div>
            <h2>
              Good training
              <br />
              stays with you.
            </h2>
          </div>
          <div className="prose">
            <p>
              Great training should reflect the value of the knowledge, skills,
              and techniques you carry through your diving career. It should
              also reflect a living wage for the expertise and commitment of a
              great instructor.
            </p>
            <p>
              Scuba diving carries inherent risk. As with BASE jumping, big-wave
              surfing, or high-altitude mountaineering, the cheapest and fastest
              training isn’t the goal. Building the ability to make good
              decisions is.
            </p>
            <p>
              We’ll be clear about the plan and the cost. Your focus can stay on
              the work.
            </p>
          </div>
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}
