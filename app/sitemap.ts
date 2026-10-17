import type { MetadataRoute } from "next";
import { getArticles, clusters } from "@/lib/articles";
import { courses, courseSlug } from "@/lib/courses";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getArticles();
  return [
    ...[
      "/",
      "/courses",
      "/training",
      "/pricing",
      "/about",
      "/learn",
      "/resources",
      // Topic hubs are listed once they have at least one published article.
      ...clusters
        .filter((c) => articles.some((a) => a.cluster === c.slug))
        .map((c) => `/learn/topic/${c.slug}`),
      "/contact",
      "/shop",
      "/merch",
      "/privacy",
    ].map((route) => ({ url: absoluteUrl(route) })),
    ...courses.map((course) => ({
      url: absoluteUrl(`/courses/${courseSlug(course.title)}`),
    })),
    ...articles.map((article) => ({
      url: absoluteUrl(`/learn/${article.slug}`),
      lastModified: new Date(article.lastReviewed!),
    })),
  ];
}
