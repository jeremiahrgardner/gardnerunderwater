import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getTool } from "@/lib/tools";
import { MixCalculator } from "@/components/tools/MixCalculator";
import { ToolPage } from "@/components/tools/ToolPage";

const tool = getTool("nitrox-trimix-calculator")!;

export const metadata = pageMetadata(tool.title, tool.description, `/tools/${tool.slug}`);

export default function MixCalculatorPage() {
  return (
    <ToolPage
      tool={tool}
      explainer={
        <>
          <h2>The formulas</h2>
          <p>Depth is in feet of seawater. Fractions are percentages ÷ 100.</p>
          <ul>
            <li>
              <strong>ATA</strong> = depth ÷ 33 + 1
            </li>
            <li>
              <strong>PPO2</strong> = ATA × oxygen fraction
            </li>
            <li>
              <strong>MOD</strong> = (PPO2 limit ÷ oxygen fraction × 33) − 33,
              rounded down
            </li>
            <li>
              <strong>Best mix</strong> = PPO2 limit ÷ ATA, rounded down
            </li>
            <li>
              <strong>END</strong> = (1 − helium fraction) × (depth + 33) − 33.
              Oxygen counts as narcotic, as UTD calculates it.
            </li>
            <li>
              <strong>EAD</strong> = nitrogen fraction × (depth + 33) ÷ 0.79 − 33
            </li>
            <li>
              <strong>Helium for a target END</strong> = 1 − (target END + 33) ÷
              (depth + 33), rounded up
            </li>
            <li>
              <strong>Oxygen clock</strong> = minutes × 100 ÷ NOAA’s
              single-exposure limit at that PPO2
            </li>
          </ul>
          <h2>Why do DIR teams dive standard gases?</h2>
          <p>
            Because a short list of mixes means fewer numbers to get wrong. The
            buttons above load the common ones. UTD keeps END at 100 feet or
            less, so anything deeper than 100 feet gets helium. Read{" "}
            <Link href="/learn/standard-gases">Standard Gases</Link> for the
            full list and the depths each one covers.
          </p>
          <h2>Analyze every mix</h2>
          <p>
            You breathe what’s in the cylinder, not what you ordered. Analyze
            every fill, label it, and run these numbers on the mix you measured.
            Diving nitrox or trimix takes training for that gas, which starts
            with <Link href="/courses/nitrox-diver">Nitrox Diver</Link>.
          </p>
        </>
      }
    >
      <MixCalculator />
    </ToolPage>
  );
}
