import type { MetadataRoute } from "next";
import { getArticles, clusters } from "@/lib/articles";
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
      "/learn",
      ...clusters.map((c) => `/learn/topic/${c.slug}`),
      "/contact",
      "/shop",
      "/merch",
    ].map((route) => ({ url: absoluteUrl(route) })),
    ...courses.map((course) => ({
      url: absoluteUrl(`/courses/${courseSlug(course.title)}`),
    })),
    ...getArticles().map((article) => ({
      url: absoluteUrl(`/learn/${article.slug}`),
      lastModified: new Date(article.lastReviewed!),
    })),
  ];
}
