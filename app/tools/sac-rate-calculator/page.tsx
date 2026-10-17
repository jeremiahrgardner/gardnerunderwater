import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getTool } from "@/lib/tools";
import { SacRateCalculator } from "@/components/tools/SacRateCalculator";
import { ToolPage } from "@/components/tools/ToolPage";

const tool = getTool("sac-rate-calculator")!;

export const metadata = pageMetadata(tool.title, tool.description, `/tools/${tool.slug}`);

export default function SacRatePage() {
  return (
    <ToolPage
      tool={tool}
      explainer={
        <>
          <h2>How do you calculate your SAC rate?</h2>
          <p>
            Three steps. Turn the pressure you used into cubic feet with your
            tank factor. Divide by the dive time. Then divide by your average
            depth in atmospheres, which is depth ÷ 33 + 1.
          </p>
          <p>
            Say you used 2,000 psi from an AL80 over 45 minutes at an average of
            40 feet. That’s 20 × 2.58 = 51.6 cubic feet, or 1.15 a minute at
            depth. At 2.21 ATA, your SAC rate is 1.15 ÷ 2.21 = 0.52 cubic feet a
            minute.
          </p>
          <h2>How do you plan with it?</h2>
          <p>
            Run it the other way. Breathing rate × ATA gives the gas you use per
            minute at depth. Divide by your tank factor and multiply by 100, and
            you know how fast your gauge will move. That’s the number to have in
            your head before you look at the gauge.
          </p>
          <h2>Measure it. Don’t guess it.</h2>
          <p>
            One dive is one data point. Log your start and end pressure, time
            and average depth on every dive, run the numbers and average them.
            Your rate changes with cold, workload, current and stress, so plan
            reserves with the stressed rate, never your best day. For more,
            read <Link href="/learn/sac-rate-and-rmv">How to Calculate Your SAC Rate and RMV</Link>{" "}
            and <Link href="/learn/improve-air-consumption">how to improve your air consumption</Link>.
          </p>
        </>
      }
    >
      <SacRateCalculator />
    </ToolPage>
  );
}
