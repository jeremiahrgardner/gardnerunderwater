import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, ConsultationCTA, Arrow } from "@/components/SiteUI";
import { rentalKits, rentalTanks, services, shopStock } from "@/lib/rentals";

export const metadata: Metadata = {
  title: "Gear & rentals",
  description:
    "Equipment and tank rentals, service, and Save A Course essentials for Gardner Underwater students.",
};
function RateTable({
  title,
  note,
  rows,
}: {
  title: string;
  note: string;
  rows: string[][];
}) {
  return (
    <div className="rate-table">
      <h2>{title}</h2>
      <p>{note}</p>
      <table>
        <caption className="sr-only">{title} prices</caption>
        <thead>
          <tr>
            <th scope="col">Equipment or service</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([item, price]) => (
            <tr key={item}>
              <th scope="row">{item}</th>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default function ShopPage() {
  return (
    <>
      <PageIntro
        eyebrow="Gear & rentals"
        title={
          <>
            Less gear stress.
            <br />
            <span className="serif-accent">More diving.</span>
          </>
        }
      >
        <p>
          Equipment rentals, cylinder service, and the little things that save a
          training day. Available as a convenience for enrolled students.
        </p>
        <span className="intro-note">
          The “Save A Course” shop · San Diego HQ
        </span>
      </PageIntro>
      <section className="section">
        <div className="container rental-grid">
          <RateTable
            title="Rental kits"
            note="Rates per day. Discuss your equipment needs before training."
            rows={rentalKits}
          />
          <div>
            <RateTable
              title="Rental cylinders"
              note="Gas not included."
              rows={rentalTanks}
            />
            <RateTable
              title="Service"
              note="Parts are additional where indicated."
              rows={services}
            />
          </div>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">The Save A Course shop</div>
              <h2>
                Small things.
                <br />
                Day-saving difference.
              </h2>
            </div>
            <p>
              A small offering for students enrolled in a class. We’re here to
              support your training, rather than operate a full-service retail
              store.
            </p>
          </div>
          <div className="stock-grid">
            {shopStock.map((group, i) => (
              <div key={group.cat}>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{group.cat}</h3>
                <p>{group.items}</p>
              </div>
            ))}
          </div>
          <div className="section-footnote">
            <span>
              Need something specific? Check availability before your course.
            </span>
            <Link href="/contact" className="text-link">
              Ask Jay about gear <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}
