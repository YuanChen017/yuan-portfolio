import HeroSection from "../components/home/HeroSection";
import SkillsPreview from "../components/home/SkillsPreview";
import ExperiencePreview from "../components/home/ExperiencePreview";
import ProjectsPreview from "../components/home/ProjectsPreview";
import ContactPreview from "../components/home/ContactPreview";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* to-dark: fades from warm paper above into black ink below */}
      <div className="ink-section-strip to-dark" />
      <SkillsPreview />
      <ExperiencePreview />
      {/* to-dark: same bridge — light ExperiencePreview → dark ProjectsPreview */}
      <div
        className="ink-section-strip to-dark"
        style={{ backgroundImage: "url('/hero-bg.png')", backgroundPosition: "center 55%" }}
      />
      <ProjectsPreview />
      <ContactPreview />
    </main>
  );
}
