import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { PROJECT_DETAIL } from "../data/content";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <main className="project-detail-page">
        <div className="project-detail-inner">
          <Link to="/projects" className="back-link">{PROJECT_DETAIL.backLink}</Link>
          <h1>{PROJECT_DETAIL.notFound}</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="project-detail-page">
      <div className="project-detail-inner">
        <Link to="/projects" className="back-link">{PROJECT_DETAIL.backLink}</Link>

        <div className="project-detail-layout">
          {/* Left: screenshots */}
          <div className="project-detail-screenshots">
            <div className="project-screenshot project-screenshot-main project-img-1" />
            <div className="project-screenshot project-screenshot-sub project-img-2" />
          </div>

          {/* Right: info */}
          <div className="project-detail-info">
            <div className="project-detail-badges">
              <span className="detail-badge">{PROJECT_DETAIL.featuredBadge}</span>
              <span className="detail-type">{project.type}</span>
            </div>

            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-cn">{project.cnTitle}</p>
            <p className="project-detail-desc">{project.description}</p>

            <div className="project-detail-tags">
              {project.techStack.map((t) => (
                <span className="tech-pill" key={t}>{t}</span>
              ))}
            </div>

            <div className="project-detail-actions">
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                {PROJECT_DETAIL.liveDemo}
              </a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                {PROJECT_DETAIL.github}
              </a>
            </div>
          </div>
        </div>

        {/* Detail sections */}
        <div className="project-detail-columns">
          {/* Highlights */}
          <div className="detail-column">
            <h3 className="detail-column-title">
              <span className="detail-column-cn">{PROJECT_DETAIL.highlightsTitle}</span>
              <span className="detail-column-en">{PROJECT_DETAIL.highlightsSubtitle}</span>
            </h3>
            <ul className="detail-list">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="detail-column">
            <h3 className="detail-column-title">
              <span className="detail-column-cn">{PROJECT_DETAIL.techTitle}</span>
              <span className="detail-column-en">{PROJECT_DETAIL.techSubtitle}</span>
            </h3>
            {project.techStackDetail.frontend && (
              <div className="detail-tech-group">
                <span className="detail-tech-label">{PROJECT_DETAIL.techLabels.frontend}</span>
                <div className="detail-tech-tags">
                  {project.techStackDetail.frontend.map((t) => (
                    <span className="tech-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            )}
            {project.techStackDetail.backend && (
              <div className="detail-tech-group">
                <span className="detail-tech-label">{PROJECT_DETAIL.techLabels.backend}</span>
                <div className="detail-tech-tags">
                  {project.techStackDetail.backend.map((t) => (
                    <span className="tech-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            )}
            {project.techStackDetail.ai && (
              <div className="detail-tech-group">
                <span className="detail-tech-label">{PROJECT_DETAIL.techLabels.ai}</span>
                <div className="detail-tech-tags">
                  {project.techStackDetail.ai.map((t) => (
                    <span className="tech-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            )}
            {project.techStackDetail.devops && (
              <div className="detail-tech-group">
                <span className="detail-tech-label">{PROJECT_DETAIL.techLabels.devops}</span>
                <div className="detail-tech-tags">
                  {project.techStackDetail.devops.map((t) => (
                    <span className="tech-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* My Role */}
          <div className="detail-column">
            <h3 className="detail-column-title">
              <span className="detail-column-cn">{PROJECT_DETAIL.roleTitle}</span>
              <span className="detail-column-en">{PROJECT_DETAIL.roleSubtitle}</span>
            </h3>
            <ul className="detail-list">
              {project.myRole.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
