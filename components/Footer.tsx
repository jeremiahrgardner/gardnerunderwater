import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "#000", borderTop: "1px solid #222", padding: "2rem 0", marginTop: "auto" }}>
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>GARDNER UNDERWATER</p>
            <p style={{ color: "#888", fontSize: "0.9rem" }}>Eyes Open. Brain On. Unified Team.</p>
          </div>
          <div>
            <p style={{ fontWeight: 700, marginBottom: "0.5rem" }}>+1 (619) 880-0684</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="https://www.facebook.com/gardnerunderwater/" target="_blank" rel="noopener noreferrer">Facebook</Link>
              <Link href="https://www.instagram.com/gardnerunderwater/" target="_blank" rel="noopener noreferrer">Instagram</Link>
              <Link href="https://podcasts.apple.com/us/podcast/the-dive-table/id1611099442?mt=2&ls=1" target="_blank" rel="noopener noreferrer">The Dive Table</Link>
              <Link href="https://www.youtube.com/@thedivetable" target="_blank" rel="noopener noreferrer">YouTube</Link>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid #222", fontSize: "0.8rem", color: "#555" }}>
          © {new Date().getFullYear()} Gardner Underwater. All rights reserved.
        </div>
      </div>
    </footer>
  );
}