"use client";

import { useState } from "react";
import Link from "next/link";
import { courses, courseCategories, courseSlug } from "@/lib/courses";
import { Arrow } from "./SiteUI";

export function CourseCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All training");
  const visible = courses.filter(
    (course) =>
      (category === "All training" || course.category === category) &&
      `${course.title} ${course.desc} ${course.category}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <section className="section catalog-section">
      <div className="container">
        <div className="catalog-toolbar">
          <div className="filter-tabs" aria-label="Filter courses by category">
            <button
              aria-pressed={category === "All training"}
              onClick={() => setCategory("All training")}
            >
              All training
            </button>
            {courseCategories.map((item) => (
              <button
                key={item.id}
                aria-pressed={category === item.name}
                onClick={() => setCategory(item.name)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <label className="course-search">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="10"
                cy="10"
                r="6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="m15 15 5 5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="sr-only">Search courses</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find a course or skill"
            />
          </label>
        </div>
        <div className="catalog-results" role="status">
          {visible.length} {visible.length === 1 ? "course" : "courses"}
          {query.trim() ? ` matching “${query.trim()}”` : " to explore"}
          <span>
            Not sure where to start?{" "}
            <Link href="/contact">
              Ask Jay <Arrow diagonal />
            </Link>
          </span>
        </div>
        {courseCategories.map((item, index) => {
          const grouped = visible.filter(
            (course) => course.category === item.name,
          );
          if (!grouped.length) return null;
          return (
            <section
              key={item.id}
              id={item.id}
              className="course-group"
              aria-labelledby={`${item.id}-heading`}
            >
              <div className="course-group-heading">
                <span className="eyebrow">0{index + 1}</span>
                <h2 id={`${item.id}-heading`}>{item.name}</h2>
                <span className="course-count">{grouped.length} courses</span>
              </div>
              <div className="course-grid">
                {grouped.map((course) => (
                  <article key={course.title} className="course-card">
                    <div className="card-topline">
                      <span>{item.label}</span>
                      {course.duration && <span>{course.duration}</span>}
                    </div>
                    <h3>
                      <Link href={`/courses/${courseSlug(course.title)}`}>
                        {course.title}
                      </Link>
                    </h3>
                    {course.tagline && (
                      <p className="course-tagline">{course.tagline}</p>
                    )}
                    <p>
                      {course.desc.length > 220
                        ? `${course.desc.slice(0, course.desc.lastIndexOf(" ", 220))}…`
                        : course.desc}
                    </p>
                    {(course.desc.length > 220 || course.bullets) && (
                      <details className="course-details">
                        <summary>
                          Course details <span aria-hidden="true">+</span>
                        </summary>
                        <div>
                          {course.desc.length > 220 && <p>{course.desc}</p>}
                          {course.bullets && (
                            <ul>
                              {course.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </details>
                    )}
                    <Link
                      href={`/courses/${courseSlug(course.title)}`}
                      className="text-link course-link"
                    >
                      Explore this training <Arrow />
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
        {!visible.length && (
          <div className="empty-state">
            <h2>No courses found.</h2>
            <p>
              Try another skill or view the full curriculum. Jay can help you
              find a good fit.
            </p>
            <button
              className="btn btn-dark"
              onClick={() => {
                setQuery("");
                setCategory("All training");
              }}
            >
              Show all courses <Arrow />
            </button>
          </div>
        )}
        <p className="catalog-note">
          Course durations are a guide, based on the time needed to introduce
          skills and cover theory. Additional training days may be recommended
          based on your needs. Training dates are arranged individually after a
          consultation.
        </p>
      </div>
    </section>
  );
}
