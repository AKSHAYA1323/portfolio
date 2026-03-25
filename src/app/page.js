"use client";

import { useState, useEffect } from "react";
import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import About        from "@/components/About";
import Skills       from "@/components/Skills";
import Projects     from "@/components/Projects";
import Education    from "@/components/Education";
import Experience   from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Contact      from "@/components/Contact";
import Footer       from "@/components/Footer";

export default function HomePage() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const saved = window.localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  // Keep theme in sync with document and storage.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main > section, footer.footer"));
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
