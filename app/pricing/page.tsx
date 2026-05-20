import Link from "next/link";

const pricing = [
  {
    title: "TRAINING",
    subtitle: "In Water Courses & Training",
    price: "$300 / DAY",
    note: "Minimum 1 Day",
  },
  {
    title: "COACHING",
    subtitle: "Foundational Scuba Coaching.",
    price: "$129 / mo",
    note: "No Minimum Commitment",
  },
  {
    title: "DAN TRAINING",
    subtitle: "In Person Emergency Training",
    price: "$300 / COURSE",
    note: "Typically 1 Day",
  },
];

export default function PricingPage() {
  return (
    <>
      <section style={{ background: "#000", padding: "4rem 1.5rem 3rem" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 700, marginBottom: "1rem" }}>PRICING</h1>
          <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 400, color: "#ccc" }}>THE PRICING — Paying For Value</h2>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ background: "#111", padding: "4rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <p style={{ lineHeight: 1.9, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
            At Gardner Underwater, our prices reflect the value we deliver. We stand by the following principles to guide our pricing.
          </p>
          <p style={{ lineHeight: 1.9, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
            No one likes to talk about money. As such, <strong>let's be up front about money</strong>. No hidden fees, upselling, fine print, false discounts, sunshine taxes, or other means of being shady about money.
          </p>
          <p style={{ lineHeight: 1.9, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
            Great training should be priced to <strong>reflect the same value</strong> a student receives in the knowledge, skills, and techniques gained in their training which carry on through the career of a diver.
          </p>
          <p style={{ lineHeight: 1.9, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
            Great training should reflect a <strong>living wage</strong> for the expertise and commitment of a great instructor.
          </p>
          <p style={{ lineHeight: 1.9, fontSize: "1.05rem" }}>
            Scuba Diving is, by its very nature, a risky sport. Bargain shopping for the cheapest and fastest training in other inherently risky sports like BASE jumping, or big wave surfing, or high-altitude mountaineering would be <strong>considered senseless</strong>. Scuba diving is the same.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ background: "#000", padding: "4rem 1.5rem" }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)", marginBottom: "3rem" }}>COURSE & EQUIPMENT FEES</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
            {pricing.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#111",
                  border: "1px solid #333",
                  padding: "2.5rem 2rem",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "0.8rem", letterSpacing: "0.1em", color: "#888", marginBottom: "0.5rem" }}>
                  {item.title}
                </p>
                <p style={{ fontSize: "0.9rem", color: "#aaa", marginBottom: "1.5rem" }}>{item.subtitle}</p>
                <p style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "0.5rem" }}>{item.price}</p>
                <p style={{ color: "#666", fontSize: "0.85rem", marginBottom: "1.5rem" }}>{item.note}</p>
                <Link href="/contact" className="btn" style={{ fontSize: "0.8rem" }}>
                  book now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#111", padding: "4rem 1.5rem", textAlign: "center" }}>
        <Link href="/contact" className="btn">
          Book Your Course
        </Link>
      </section>
    </>
  );
}