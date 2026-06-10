import { experiences } from "../data/experience";
import { skillLevels } from "../data/skills";
import { EXPERIENCE } from "../data/content";
import "./Experience.css";

export default function Experience() {
  return (
    <main className="experience-page">
      <section className="experience-header">
        <div className="experience-header-inner">
          <p className="eyebrow">{EXPERIENCE.eyebrow}</p>
          <h1 className="section-heading">{EXPERIENCE.heading}</h1>
          <div className="ink-divider" />
        </div>
      </section>

      <section className="experience-content dark-ink-section">
        <div className="experience-content-inner">
          {/* Left column */}
          <div className="experience-left">
            <h2 className="experience-section-title">
              <span>{EXPERIENCE.workTitle}</span>
              <span className="experience-section-en">{EXPERIENCE.workSubtitle}</span>
            </h2>

            <div className="exp-full-timeline">
              {experiences.map((exp, idx) => (
                <div className="exp-full-item" key={exp.id}>
                  <div className="exp-full-left">
                    <div className="timeline-dot">{exp.initial}</div>
                    {idx < experiences.length - 1 && (
                      <div className="exp-full-line" />
                    )}
                  </div>

                  <div className="exp-full-card">
                    <div className="exp-full-header">
                      <div>
                        <h3 className="exp-full-company">{exp.company}</h3>
                        <p className="exp-full-title">{exp.title}</p>
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

            {/* Education */}
            <h2 className="experience-section-title" style={{ marginTop: 56 }}>
              <span>{EXPERIENCE.educationTitle}</span>
              <span className="experience-section-en">{EXPERIENCE.educationSubtitle}</span>
            </h2>

            <div className="education-card">
              <div className="education-logo">{EXPERIENCE.education.logo}</div>
              <div>
                <h3 className="education-school">{EXPERIENCE.education.school}</h3>
                <p className="education-degree">{EXPERIENCE.education.degree}</p>
                <p className="education-period">{EXPERIENCE.education.period}</p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="experience-right">
            <h2 className="experience-section-title">
              <span>{EXPERIENCE.skillsTitle}</span>
              <span className="experience-section-en">{EXPERIENCE.skillsSubtitle}</span>
            </h2>

            <div className="skills-bars">
              {skillLevels.map((skill) => (
                <div className="skill-bar-item" key={skill.name}>
                  <div className="skill-bar-header">
                    <span className="skill-bar-name">{skill.name}</span>
                    <span className="skill-bar-pct">{skill.level}%</span>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Certificates */}
            <h2 className="experience-section-title" style={{ marginTop: 48 }}>
              <span>{EXPERIENCE.certsTitle}</span>
              <span className="experience-section-en">{EXPERIENCE.certsSubtitle}</span>
            </h2>

            <ul className="certificates-list">
              {EXPERIENCE.certificates.map((cert) => (
                <li className="certificate-item" key={cert}>
                  <span className="cert-dot">{EXPERIENCE.certDot}</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
