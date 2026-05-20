import Link from "next/link";

const merch = [
  {
    category: "TEES",
    items: [
      {
        name: "$30 GU LOGO TEE",
        tagline: "Eyes OPEN. Brain ON. Unified TEAM.",
        description:
          "We train hard to dive easy. Wear your pride in your training as the hard work you've put in has led you to a new plateau in your diving journey. You are switched on, situationally aware, and diving as a team member.",
        details: ["Pre-shrunk fabric", "Shoulder-to-shoulder taping", "Sourced from the US"],
        buyUrl: "https://gardnerunderwater.square.site/product/gu-logo-tee/5?cp=true&sa=true&sbp=false&q=false",
      },
      {
        name: "$30 ALL SEEING EYE TEE",
        tagline: "Providence, the eye watches over the divers of humankind.",
        description:
          'This "All Seeing Eye" represents protection, health, and the re-establishment of order from chaos in reaching your excellence as a diver. Get in trim, switch that brain on, and get those fins up...the eye is always watching.',
        details: ["Pre-shrunk fabric", "Shoulder-to-shoulder taping", "Sourced from the US"],
        buyUrl: "https://gardnerunderwater.square.site/product/all-seeing-eye-tee/6?cp=true&sa=true&sbp=false&q=false",
      },
      {
        name: "$30 SHAKA TEE",
        tagline: 'Universal underwater sign for, "Bada&*!"',
        description:
          "As the story goes, back in the 1900s Hamana Kalili lost his middle, index, and ring finger in a sugar mill accident. Kalili took a new job as security officer for the train to Sunset Beach. Kids adopted the shaka to signal 'all clear' to jump a free ride to go surfing when Kalili wasn't looking.",
        details: ["Pre-shrunk fabric", "Shoulder-to-shoulder taping", "Sourced from the US"],
        buyUrl: "https://gardnerunderwater.square.site/product/shaka-tee/8?cp=true&sa=true&sbp=false&q=false",
      },
    ],
  },
  {
    category: "HATS",
    items: [
      {
        name: "$25 GU LOGO SB",
        description: "",
        buyUrl: "https://gardnerunderwater.square.site/product/gu-logo-snapback/7?cp=true&sa=true&sbp=false&q=false",
      },
      {
        name: "$25 ALL SEEING EYE SB",
        description: "",
        buyUrl: "https://gardnerunderwater.square.site/product/shaka-snapback/2?cp=true&sa=true&sbp=false&q=false",
      },
      {
        name: "$25 SHAKA SB",
        description: "",
        buyUrl: "https://gardnerunderwater.square.site/product/all-seeing-eye-snapback/1?cp=true&sa=true&sbp=false&q=false",
      },
    ],
  },
];

export default function MerchPage() {
  return (
    <>
      <section style={{ background: "#000", padding: "4rem 1.5rem 3rem" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 700, marginBottom: "1rem" }}>MERCH</h1>
          <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 400, color: "#ccc" }}>
            &ldquo;Fly The Black&rdquo; with some GU merch.
          </h2>
        </div>
      </section>

      <section style={{ background: "#111", padding: "4rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "850px" }}>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "3rem" }}>
            &ldquo;Fly The <strong>Black</strong>&rdquo; with some GU merch. As a pirate symbol, the black flag communicated to all that could see it that a pirate captain and his crew were powerful and unafraid to challenge the status quo. Fly your <strong>Black Flag</strong> with scuba apparel that shows you have your <em>eyes open</em>, your <em>brain on</em>, and your crew as a <em>unified team</em>.
          </p>
        </div>
      </section>

      {merch.map((section) => (
        <section key={section.category} style={{ background: "#000", padding: "4rem 1.5rem", borderTop: "1px solid #222" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)", marginBottom: "2.5rem" }}>{section.category}</h2>
            <div style={{ display: "grid", gap: "3rem" }}>
              {section.items.map((item) => (
                <div key={item.name}>
                  <h3 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", marginBottom: "0.75rem" }}>{item.name}</h3>
                  {"tagline" in item && item.tagline && (
                    <p style={{ fontStyle: "italic", color: "#aaa", marginBottom: "0.75rem" }}>
                      <strong>{item.tagline}</strong>
                    </p>
                  )}
                  {"description" in item && item.description && (
                    <p style={{ lineHeight: 1.8, marginBottom: "1rem", color: "#ccc" }}>{item.description}</p>
                  )}
                  {"details" in item && Array.isArray(item.details) && (
                    <ul style={{ marginBottom: "1.25rem", paddingLeft: "1.5rem", color: "#888", fontSize: "0.9rem" }}>
                      {item.details.map((d) => (
                        <li key={d} style={{ marginBottom: "0.3rem" }}>{d}</li>
                      ))}
                    </ul>
                  )}
                  {"description" in item && item.description && (
                    <p style={{ fontSize: "0.85rem", color: "#555", marginBottom: "1.25rem" }}>This product is made on demand.</p>
                  )}
                  <a
                    href={item.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ fontSize: "0.8rem" }}
                  >
                    BUY NOW
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section style={{ background: "#111", padding: "4rem 1.5rem", textAlign: "center" }}>
        <Link href="/contact" className="btn">
          Book Your Course
        </Link>
      </section>
    </>
  );
}