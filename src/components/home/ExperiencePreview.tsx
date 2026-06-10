import { experiences } from "../../data/experience";
import { EXPERIENCE_PREVIEW } from "../../data/content";
import "./ExperiencePreview.css";

export default function ExperiencePreview() {
  return (
    <section className="exp-preview-section">
      <div className="exp-preview-inner">
        <p className="eyebrow">{EXPERIENCE_PREVIEW.eyebrow}</p>
        <h2 className="section-heading">{EXPERIENCE_PREVIEW.heading}</h2>
        <div className="ink-divider" />

        <div className="exp-timeline">
          {experiences.map((exp) => (
            <div className="exp-timeline-item" key={exp.id}>
              <div className="exp-timeline-left">
                <div className="timeline-dot">{exp.initial}</div>
                {exp.id < experiences.length && (
                  <div className="exp-timeline-line" />
                )}
              </div>

              <div className="exp-card">
                <div className="exp-card-header">
                  <div>
                    <h3 className="exp-company">{exp.company}</h3>
                    <p className="exp-title">{exp.title}</p>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <ul className="exp-highlights">
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
