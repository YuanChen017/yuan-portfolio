import { homeSkills } from "../../data/skills";
import { SKILLS_PREVIEW } from "../../data/content";
import "./SkillsPreview.css";

export default function SkillsPreview() {
  return (
    <section className="skills-section dark-ink-section" id="skills">
      <div className="skills-inner">
        <p className="eyebrow">{SKILLS_PREVIEW.eyebrow}</p>
        <h2 className="section-heading">{SKILLS_PREVIEW.heading}</h2>
        <div className="ink-divider" />

        <div className="skills-grid">
          {homeSkills.map((skill) => (
            <div className="skill-card" key={skill.id}>
              <div className={`skill-icon-box ${skill.colorClass}`}>
                <span>{skill.icon}</span>
              </div>
              <div className="skill-card-text">
                <span className="skill-card-label">{skill.label}</span>
                <span className="skill-card-cn">{skill.cnLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
