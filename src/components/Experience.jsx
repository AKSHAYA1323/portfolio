"use client";
import { useRef, useEffect } from "react";
import { experience } from "@/data/portfolioData";

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".exp-anim").forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.12}s`;
            el.classList.add("visible");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="experience" ref={ref}>
      <style>{`
        .exp-anim { opacity:0; transform:translateX(24px);
          transition: opacity 0.5s ease, transform 0.5s ease; }
        .exp-anim.visible { opacity:1; transform:translateX(0); }
      `}</style>

      <div className="container">
        <h2 className="section-title">
          <span className="title-main">Work</span>{" "}
          <span className="title-accent">Experience</span>
        </h2>
        <p className="section-subtitle">Where I&apos;ve worked</p>

        <div className="experience__list">
          {experience.map((exp) => (
            <div key={exp.id} className="exp-card exp-anim">
              <div className="exp-card__header">
                <div>
                  <h3 className="exp-card__role">{exp.role}</h3>
                  <div className="exp-card__company">{exp.company}</div>
                </div>
                <span className="exp-card__date">{exp.date}</span>
              </div>
              <p className="exp-card__desc">{exp.description}</p>
              <div className="exp-card__tags">
                {exp.tags.map(t => (
                  <span key={t} className="exp-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
