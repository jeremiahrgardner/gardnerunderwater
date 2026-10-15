import Link from "next/link";
import { clusters } from "@/lib/articles";

/** Topic links remain crawlable and work without client-side JavaScript. */
export function LearnTopics({ active }: { active?: string }) {
  return (
    <nav className="learn-topics" aria-label="Learn by topic">
      <h2>Learn by topic</h2>
      <div className="learn-topic-links">
        <Link href="/learn" aria-current={!active ? "page" : undefined}>
          All articles
        </Link>
        {clusters.map((topic) => (
          <Link
            key={topic.slug}
            href={`/learn/topic/${topic.slug}`}
            aria-current={active === topic.slug ? "page" : undefined}
          >
            {topic.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
