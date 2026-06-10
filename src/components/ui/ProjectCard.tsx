import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} />

      <div className="project-card-content">
        <p className="project-type">{project.type}</p>
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <div className="project-tech-list">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
