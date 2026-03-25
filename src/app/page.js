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
  const [theme, setTheme] = useState("dark");

  // Initialise from localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
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
