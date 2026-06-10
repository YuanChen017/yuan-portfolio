import { profile } from "../data/profile";
import { techCategories } from "../data/skills";
import { ABOUT } from "../data/content";
import AboutInkRipple from "../components/about/AboutInkRipple";
import "./About.css";

export default function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-content">
            <p className="eyebrow">{ABOUT.eyebrow}</p>
            <h1 className="section-heading about-heading">{ABOUT.heading}</h1>
            <div className="ink-divider" />
            <p className="about-bio-cn">{profile.bioCn}</p>
            <p className="about-bio-en">{profile.bioEn}</p>
            <div className="about-actions">
              <a className="btn btn-primary" href={profile.resumeUrl} download>
                {ABOUT.ctaResume}
              </a>
              <a className="btn btn-outline" href="/contact">
                {ABOUT.ctaContact}
              </a>
            </div>
          </div>
          <div className="about-hero-art">
            <div className="about-ink-art-wrapper">
              <div className="about-ink-art" />
              <AboutInkRipple />
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="about-strengths-section dark-ink-section">
        <div className="about-strengths-inner">
          <p className="eyebrow">{ABOUT.strengthsEyebrow}</p>
          <h2 className="section-heading">{ABOUT.strengthsHeading}</h2>
          <div className="ink-divider" />

          <div className="strengths-grid">
            {ABOUT.strengths.map((s) => (
              <div className="strength-card" key={s.enLabel}>
                <div className="strength-icon">{s.icon}</div>
                <div>
                  <div className="strength-labels">
                    <span className="strength-cn">{s.cnLabel}</span>
                    <span className="strength-en">{s.enLabel}</span>
                  </div>
                  <p className="strength-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="about-tech-section">
        <div className="about-tech-inner">
          <p className="eyebrow">{ABOUT.techEyebrow}</p>
          <h2 className="section-heading">{ABOUT.techHeading}</h2>
          <div className="ink-divider" />

          <div className="tech-categories">
            {techCategories.map((cat) => (
              <div className="tech-category-row" key={cat.category}>
                <span className="tech-category-name">{cat.category}</span>
                <div className="tech-category-tags">
                  {cat.items.map((item) => (
                    <span className="tech-pill" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
