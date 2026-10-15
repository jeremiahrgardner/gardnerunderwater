import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Arrow, ConsultationCTA, PageIntro } from "@/components/SiteUI";

export const metadata: Metadata = pageMetadata("Scuba Training & Coaching Pricing", "Explore Gardner Underwater pricing: $300 per training day, $129 monthly scuba coaching and $300 DAN first aid courses. Start with a consultation.", "/pricing");
const options = [
  {
    title: "In-water training",
    type: "Build your skills",
    amount: "300",
    unit: "/ day",
    note: "Minimum 1 day",
    text: "Focused instruction for foundational and technical diving. Train for the skills you need and the dives you want to do.",
    interest: "In-water training",
  },
  {
    title: "Scuba coaching",
    type: "Build your momentum",
    amount: "129",
    unit: "/ month",
    note: "No minimum commitment",
    text: "A consistent approach to developing your diving, with regular communication, video review, and feedback from your coach.",
    interest: "Scuba Coaching",
  },
  {
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
          No hidden fees, upselling, or false discounts. Our prices reflect the
          expertise, attention, and work that good training deserves.
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
                className={`pricing-card ${i === 1 ? "pricing-featured" : ""}`}
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
                  className={`btn ${i === 1 ? "btn-primary" : "btn-outline"}`}
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
              Start with a free 15-minute consultation. We’ll discuss your
              experience, goals, training days, and any equipment or other costs
              before you book training.
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
