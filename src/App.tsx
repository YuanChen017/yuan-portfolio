import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatWidget } from "@yuanchen710/portfolio-assistant-sdk";

import PageLayout from "./components/layout/PageLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

export default function App() {
  useEffect(() => {
    // Override the SDK's mobile popup size — injected after the SDK's own style tag
    // so same-specificity !important rules win by document order
    const timer = setTimeout(() => {
      if (document.getElementById("pas-mobile-override")) return;
      const style = document.createElement("style");
      style.id = "pas-mobile-override";
      style.textContent = `
        @media (max-width: 480px) {
          .pas-popup {
            --pas-w: min(calc(100vw - 40px), 340px) !important;
            --pas-h: min(420px, calc(100dvh - 140px)) !important;
            right: 20px !important;
            left: auto !important;
          }
        }
      `;
      document.head.appendChild(style);
    }, 0);
    return () => {
      clearTimeout(timer);
      document.getElementById("pas-mobile-override")?.remove();
    };
  }, []);

  return (
    <BrowserRouter basename="/yuan-portfolio">
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>

      <ChatWidget
        config={{
          ownerName: "Yuan Chen",
          assistantName: "Yuan AI",
          resumePdfUrl: "/resume.pdf",
          apiKey: import.meta.env.VITE_GROQ_API_KEY,
          model: "llama-3.3-70b-versatile",
          position: "bottom-right",
          primaryColor: "#C0392B",
        }}
      />
    </BrowserRouter>
  );
}
