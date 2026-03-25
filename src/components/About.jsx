"use client";
import { useEffect, useRef } from "react";
import { personalInfo, aboutText, aboutStats } from "@/data/portfolioData";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".about-anim").forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.1}s`;
            el.classList.add("visible");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section about" id="about" ref={ref}>
      <style>{`
        .about-anim { opacity:0; transform: translateY(28px);
          transition: opacity 0.55s ease, transform 0.55s ease; }
        .about-anim.visible { opacity:1; transform:translateY(0); }
      `}</style>

      <div className="container">
        <h2 className="section-title about-anim">
          <span className="title-main">About</span>{" "}
          <span className="title-accent">Me</span>
        </h2>

        <div className="about__inner">
          {/* Text */}
          <p className="about__body about-anim">{aboutText}</p>

          {/* Quick links */}
          <div style={{ display:"flex", gap:"var(--sp-md)", justifyContent:"center", marginBottom:"var(--sp-xl)" }} className="about-anim">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-glass about__github-btn">
              GitHub →
            </a>
          </div>

          {/* Stats */}
          <div className="about__stats">
            {aboutStats.map((s, i) => (
              <div key={i} className="about__stat about-anim">
                <div className="about__stat-value">{s.value}</div>
                <div className="about__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
