import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getTool } from "@/lib/tools";
import { GasPlanner } from "@/components/tools/GasPlanner";
import { ToolPage } from "@/components/tools/ToolPage";

const tool = getTool("gas-planner")!;

export const metadata = pageMetadata(tool.title, tool.description, `/tools/${tool.slug}`);

export default function GasPlannerPage() {
  return (
    <ToolPage
      tool={tool}
      explainer={
        <>
          <h2>How does the planner work out rock bottom?</h2>
          <p>
            Rock bottom is the gas two divers need if one has a problem at the
            worst moment: at maximum depth, at the end of the dive. The planner
            allows one minute to solve the problem, an ascent to half your
            maximum depth, then one-minute stops every 10 feet to the surface.
            Two divers breathe 1.0 cubic foot a minute each, a stressed rate, at
            the average pressure of that ascent.
          </p>
          <p>
            That gives a volume. Each diver converts it to their own pressure
            with their tank factor, rounded up to the next 100 psi. For the full
            walkthrough, read{" "}
            <Link href="/learn/rock-bottom-calculator">Rock Bottom Calculator</Link>.
          </p>
          <h2>How is turn pressure set?</h2>
          <p>
            Everything above rock bottom is usable gas. How much of it you spend
            before turning depends on how the dive ends.
          </p>
          <ul>
            <li>
              <strong>All usable</strong> for a drift dive or a live-boat
              pickup. You don’t have to swim back.
            </li>
            <li>
              <strong>Halves</strong> for a shore dive or an anchored boat. Half
              out, half back.
            </li>
            <li>
              <strong>Thirds</strong> when you must return to the start. A third
              out, a third back, a third in reserve. See{" "}
              <Link href="/learn/rule-of-thirds-diving">the rule of thirds</Link>.
            </li>
          </ul>
          <h2>What about mismatched cylinders?</h2>
          <p>
            Same pressure, different gas. 1,500 psi in an AL80 isn’t 1,500 psi
            in double HP100s. So the planner works in cubic feet. The diver with
            the least usable gas sets how much everyone can spend. Each diver
            turns after spending that same volume, which reads as a different
            number on each gauge. <Link href="/learn/tank-factors">Tank Factors</Link>{" "}
            explains the conversion.
          </p>
          <h2>Why show the work?</h2>
          <p>
            Because the planner shouldn’t be the one who knows your turn
            pressure. You should. Work it out by hand, switch on Check my math
            and see how close you got. The goal is to need this page a little
            less every time you use it. That’s the idea behind{" "}
            <Link href="/learn/instruments-confirm-what-you-know">
              Instruments Should Confirm What You Already Know
            </Link>
            .
          </p>
        </>
      }
    >
      <GasPlanner />
    </ToolPage>
  );
}
