import Link from "next/link";

export default function ShopPage() {
  return (
    <>
      <section style={{ background: "#000", padding: "4rem 1.5rem 3rem" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 700, marginBottom: "1rem" }}>THE SHOP</h1>
          <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 400, color: "#ccc" }}>
            <strong>&ldquo;Save A Course&rdquo;</strong> Shop
          </h2>
        </div>
      </section>

      <section style={{ background: "#111", padding: "4rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "850px" }}>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "3rem" }}>
            At Gardner Underwater HQ there is a small "Save A Course" retail offering that includes items you may need to rent or purchase during your course. This is offered as a convenience to students enrolled in a class, it is not a full service retail operation.
          </p>

          <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", marginBottom: "1.5rem" }}>EQUIPMENT RENTALS & SERVICE</h2>

          <h3 style={{ fontSize: "1rem", color: "#aaa", marginBottom: "1rem", fontWeight: 700 }}>Rental Kits (Per Day):</h3>
          <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem", lineHeight: 1.9, color: "#ccc" }}>
            {[
              "DIR Singles Backplate & Wing — $20",
              "DIR Doubles Backplate & Wing — $20",
              "DIR Singles Regulator Kit (1x First Stage, Longhose, Necklace, SPG, Power Inflator, Drysuit Inflator) — $20",
              "DIR Doubles Regulator Kit (2x First Stages, Longhose, Necklace, SPG, Power Inflator, Drysuit Inflator) — $30",
              "DIR Deco/Stage Regulator Kit (1x First Stage, 36\" Deco/Stage Regulator, SPG) — $15",
              "Weights with Weight Belt — $10",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 style={{ fontSize: "1rem", color: "#aaa", marginBottom: "1rem", fontWeight: 700 }}>Rental Tanks (Gas Not Included):</h3>
          <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem", lineHeight: 1.9, color: "#ccc" }}>
            {[
              "Double Backmount Cylinders (AL80, HP100, LP85) — $20",
              "Double Sidemount (L/R Valves) Cylinders (AL80) — $20",
              "Single Cylinder (AL80) — $10",
              "Stage Cylinder with Rigging (AL80) — $10",
              "Deco Cylinder with Rigging (AL40) — $10",
              "Suit Inflation Cylinder (AL6) — $5",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 style={{ fontSize: "1rem", color: "#aaa", marginBottom: "1rem", fontWeight: 700 }}>Service:</h3>
          <ul style={{ marginBottom: "3rem", paddingLeft: "1.5rem", lineHeight: 1.9, color: "#ccc" }}>
            <li>Cylinder Visual Inspection (VIP) — $10</li>
            <li>Regulator Service (HOG) — $45 + parts</li>
          </ul>

          <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", marginBottom: "1.5rem" }}>&ldquo;SAVE A COURSE&rdquo; SHOP</h2>
          <p style={{ fontSize: "0.95rem", color: "#aaa", marginBottom: "1rem" }}>Some of the items we stock include:</p>
          <ul style={{ marginBottom: "3rem", paddingLeft: "1.5rem", lineHeight: 1.9, color: "#ccc" }}>
            <li>Hardware: Bolt Snaps, D-rings, Triglides, Cylinder Clamps, etc.</li>
            <li>Harness: Webbing, Buckles, EPDM Bands, Backplate Hardware, etc.</li>
            <li>O-rings, Bungee, Cave Line, etc.</li>
            <li>Apparel, Hats, Stickers, etc.</li>
          </ul>
        </div>
      </section>

      {/* Key Relationships */}
      <section style={{ background: "#000", padding: "4rem 1.5rem", borderTop: "1px solid #222" }}>
        <div className="container" style={{ maxWidth: "850px" }}>
          <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", marginBottom: "1.5rem" }}>KEY RELATIONSHIPS</h2>
          <p style={{ color: "#888", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Gardner Underwater is proud to have key relationships with the following organizations.
          </p>
        </div>
      </section>

      <section style={{ background: "#111", padding: "4rem 1.5rem", textAlign: "center" }}>
        <Link href="/contact" className="btn">
          Book Your Course
        </Link>
      </section>
    </>
  );
}