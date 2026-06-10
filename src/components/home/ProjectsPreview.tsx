import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { PROJECTS_PREVIEW } from "../../data/content";
import "./ProjectsPreview.css";

const imgClasses = ["project-img-1", "project-img-2", "project-img-3"];

export default function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section className="proj-preview-section dark-ink-section">
      <div className="proj-preview-inner">
        <p className="eyebrow">{PROJECTS_PREVIEW.eyebrow}</p>
        <h2 className="section-heading">{PROJECTS_PREVIEW.heading}</h2>
        <div className="ink-divider" />

        <div className="proj-preview-grid">
          {featured.map((project, i) => (
            <Link
              to={`/projects/${project.id}`}
              className="proj-preview-card ink-card"
              key={project.id}
            >
              <div className={`project-img ${imgClasses[i]}`} />
              <div className="proj-preview-card-body">
                <p className="proj-preview-cn">{project.cnTitle}</p>
                <h3 className="proj-preview-title">{project.title}</h3>
                <p className="proj-preview-desc">{project.description}</p>
                <div className="proj-preview-tags">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span className="tech-pill" key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="proj-preview-cta">
          <Link className="btn btn-outline" to="/projects">
            {PROJECTS_PREVIEW.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
