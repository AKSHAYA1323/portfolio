"use client";
import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";

const NAV_LINKS = [
  { label: "About",        href: "#about" },
  { label: "Skills",       href: "#skills" },
  { label: "Projects",     href: "#projects" },
  { label: "Education",    href: "#education" },
  { label: "Experience",   href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled,    setScrolled]    = useState(false);
  const [active,      setActive]      = useState("");
  const [menuOpen,    setMenuOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Highlight active section
      const sections = NAV_LINKS.map(l => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const firstInitials = personalInfo.name.split(" ").map(w => w[0]).join("").slice(0, 2);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <div className="navbar__inner">
            {/* Logo */}
            <a className="navbar__logo" href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              {firstInitials}
            </a>

            {/* Desktop links */}
            <ul className="navbar__links">
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`navbar__link${active === l.href.replace("#", "") ? " active" : ""}`}
                    onClick={e => handleNav(e, l.href)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="navbar__actions">
              <button
                id="theme-toggle-btn"
                className="theme-toggle"
                aria-label="Toggle theme"
                onClick={onToggleTheme}
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
              <button
                className="hamburger"
                aria-label="Open menu"
                onClick={() => setMenuOpen(m => !m)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="mobile-menu__link"
              onClick={e => handleNav(e, l.href)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            className="btn-primary"
            style={{ textAlign: "center" }}
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      )}
    </>
  );
}
