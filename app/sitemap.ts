import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/articles";
import { courses, courseSlug } from "@/lib/courses";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...[
      "/",
      "/courses",
      "/training",
      "/pricing",
      "/about",
      ...(getArticles().length > 0 ? ["/articles"] : []),
      "/contact",
      "/shop",
      "/merch",
    ].map((route) => ({ url: absoluteUrl(route) })),
    ...courses.map((course) => ({
      url: absoluteUrl(`/courses/${courseSlug(course.title)}`),
    })),
    ...getArticles().map((article) => ({
      url: absoluteUrl(`/articles/${article.slug}`),
      lastModified: new Date(article.updated || article.date),
    })),
  ];
}
