import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { HERO } from "../../data/content";
import "./HeroSection.css";
import HeroOrbitRing from "./HeroOrbitRing";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">{HERO.eyebrow}</p>

          <h1 className="hero-title">
            {profile.name.split(" ")[0]}{" "}
            <span className="hero-title-accent">{profile.name.split(" ")[1]}</span>
          </h1>

          <p className="hero-role">{profile.role}</p>

          <p className="hero-cn">{profile.bioCn}</p>
          <p className="hero-en">{profile.bioEn}</p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">
              {HERO.ctaProjects}
            </Link>
            <Link className="btn btn-outline" to="/contact">
              {HERO.ctaContact}
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-ink-art-wrapper">
            <div className="hero-ink-art" />
            <HeroOrbitRing />
          </div>
        </div>
      </div>
    </section>
  );
}
