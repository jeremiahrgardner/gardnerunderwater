import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";

type Node = {
  type: string;
  url?: string;
  children?: Node[];
  attributes?: { name?: string; value?: string | { value?: string } | null }[];
};
/** Inspect actual Markdown/MDX links, including references; ignore code examples and comments. */
export function extractInternalLinks(body: string) {
  const tree = unified()
    .use(remarkParse)
    .use(remarkMdx)
    .parse(body.replace(/<!--[\s\S]*?-->/g, "")) as Node;
  const links: string[] = [];
  function add(value: string) {
    const url = new URL(value, "https://gardnerunderwater.com");
    if (
      url.origin === "https://gardnerunderwater.com" &&
      (url.pathname === "/learn" ||
        url.pathname.startsWith("/learn/") ||
        url.pathname === "/courses" ||
        url.pathname.startsWith("/courses/"))
    )
      links.push(url.pathname);
  }
  function visit(node: Node) {
    if ((node.type === "link" || node.type === "definition") && node.url)
      add(node.url);
    for (const attr of node.attributes || [])
      if (attr.name === "href") {
        if (typeof attr.value === "string") add(attr.value);
        else if (attr.value && typeof attr.value.value === "string") {
          const literal = attr.value.value.match(/^["']([^"']+)["']$/);
          if (literal) add(literal[1]);
        }
      }
    node.children?.forEach(visit);
  }
  visit(tree);
  return links;
}
