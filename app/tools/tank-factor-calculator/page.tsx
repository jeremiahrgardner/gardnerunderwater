import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { allCylinders, doublesCylinders, tankFactor } from "@/lib/cylinders";
import { getTool } from "@/lib/tools";
import { TankFactorCalculator } from "@/components/tools/TankFactorCalculator";
import { ToolPage } from "@/components/tools/ToolPage";

const tool = getTool("tank-factor-calculator")!;

export const metadata = pageMetadata(tool.title, tool.description, `/tools/${tool.slug}`);

export default function TankFactorPage() {
  return (
    <ToolPage
      tool={tool}
      explainer={
        <>
          <h2>What is a tank factor?</h2>
          <p>
            The cubic feet of gas in every 100 psi of a cylinder. Divide the
            rated volume by the rated pressure and multiply by 100. For doubles,
            multiply by 2. An AL80 holds 77.4 cubic feet at 3,000 psi, so its
            factor is 77.4 ÷ 3,000 × 100 = 2.58.
          </p>
          <h2>How do you use it?</h2>
          <ul>
            <li>
              <strong>Pressure to gas.</strong> Drop the last two zeros and
              multiply by the factor. 1,800 psi in an AL80 is 18 × 2.58 = 46.4
              cubic feet.
            </li>
            <li>
              <strong>Gas to pressure.</strong> Divide by the factor and add two
              zeros. A 20 cubic foot rock bottom in an AL80 is 20 ÷ 2.58 × 100 =
              775 psi.
            </li>
            <li>
              <strong>Gas per minute.</strong> Breathing rate × ATA ÷ factor ×
              100 is how fast your gauge moves. The{" "}
              <Link href="/tools/sac-rate-calculator">SAC rate calculator</Link>{" "}
              does that one.
            </li>
          </ul>
          <h2>Why round down for mental math?</h2>
          <p>
            UTD rounds an AL80’s 2.58 down to 2.5. The math gets easy, and the
            error lands on the safe side: you count a little less gas than you
            have, and a reserve in psi comes out a little higher. The calculator
            shows the rounded-down factor next to the exact one.
          </p>
          <h2>Tank factors for common cylinders</h2>
          <table>
            <thead>
              <tr>
                <th scope="col">Cylinder</th>
                <th scope="col">Rated volume</th>
                <th scope="col">Rated pressure</th>
                <th scope="col">Single</th>
                <th scope="col">Doubles</th>
              </tr>
            </thead>
            <tbody>
              {allCylinders.map((c) => (
                <tr key={c.id}>
                  <th scope="row">{c.name}</th>
                  <td>{`${c.ratedVolume} cu ft`}</td>
                  <td>{`${c.ratedPressure.toLocaleString("en-US")} psi`}</td>
                  <td>{tankFactor(c.ratedVolume, c.ratedPressure).toFixed(2)}</td>
                  <td>
                    {doublesCylinders.includes(c)
                      ? tankFactor(c.ratedVolume, c.ratedPressure, true).toFixed(2)
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            Many low-pressure steel cylinders reach their nominal volume only
            with an overfill, so check your tank’s spec sheet. The download
            below lists specs for 88 steel and aluminum cylinders. For more on
            using tank factors with a team, read{" "}
            <Link href="/learn/tank-factors">Tank Factors</Link>.
          </p>
        </>
      }
    >
      <TankFactorCalculator />
    </ToolPage>
  );
}
