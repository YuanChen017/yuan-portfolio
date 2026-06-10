import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { PROJECTS } from "../data/content";
import "./Projects.css";

const imgClasses = [
  "project-img-1",
  "project-img-2",
  "project-img-3",
  "project-img-4",
  "project-img-5",
  "project-img-6",
];

const PAGE_SIZE = 6;

export default function Projects() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visible = projects.slice(start, start + PAGE_SIZE);

  return (
    <main className="projects-page">
      {/* Header */}
      <section className="projects-header">
        <div className="projects-header-inner">
          <p className="eyebrow">{PROJECTS.eyebrow}</p>
          <h1 className="section-heading">{PROJECTS.heading}</h1>
          <div className="ink-divider" />
          <p className="projects-subtitle-cn">{PROJECTS.subtitleCn}</p>
          <p className="projects-subtitle-en">{PROJECTS.subtitleEn}</p>
        </div>
      </section>

      {/* Grid */}
      <section className="projects-grid-section dark-ink-section">
        <div className="projects-grid-inner">
          <div className="projects-grid">
            {visible.map((project, i) => (
              <Link
                to={`/projects/${project.id}`}
                className="project-card ink-card"
                key={project.id}
              >
                <div className={`project-img ${imgClasses[(start + i) % imgClasses.length]}`} />
                <div className="project-card-body">
                  <p className="project-card-cn">{project.cnTitle}</p>
                  <h3 className="project-card-title">{project.title}</h3>
                  <div className="project-card-tags">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span className="tech-pill" key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="projects-pagination">
            <button
              className="page-btn"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              {PROJECTS.prevPage}
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`page-btn${page === i + 1 ? " active" : ""}`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="page-btn"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              {PROJECTS.nextPage}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
