import { useState } from "react";
import { NavLink } from "react-router-dom";
import { profile } from "../../data/profile";
import { NAV } from "../../data/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-logo">
        <span className="logo-mark">{profile.cnName[0]}</span>
        <div className="navbar-logo-text">
          <strong>{profile.name}</strong>
          <p>{profile.tagline}</p>
        </div>
      </NavLink>

      <nav className={`navbar-links${menuOpen ? " open" : ""}`}>
        {NAV.links.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span>{item.label}</span>
            <small>{item.cn}</small>
          </NavLink>
        ))}
      </nav>

      <button
        className="navbar-menu-btn"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        )}
      </button>
    </header>
  );
}
