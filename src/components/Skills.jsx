"use client";
import { useEffect, useRef } from "react";
import { skills, CATEGORY_META } from "@/data/portfolioData";

const CATEGORY_ORDER = ["programming", "web", "ai", "tools"];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".skill-anim").forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.04}s`;
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
    <section className="section" id="skills" ref={ref}>
      <style>{`
        .skill-anim { opacity:0; transform: scale(0.85);
          transition: opacity 0.4s ease, transform 0.4s ease; }
        .skill-anim.visible { opacity:1; transform:scale(1); }
      `}</style>

      <div className="container">
        <h2 className="section-title">
          <span className="title-main">Skills</span>{" "}
          <span className="title-accent">&amp; Technologies</span>
        </h2>
        <p className="section-subtitle">Tools &amp; technologies I work with</p>

        <div className="skills__categories">
          {CATEGORY_ORDER.map(cat => {
            const meta = CATEGORY_META[cat];
            const catSkills = skills.filter(s => s.category === cat);
            return (
              <div key={cat}>
                <h3 className="skills__category-title" style={{ color: meta.color }}>
                  {meta.label}
                </h3>
                <div className="skills__grid">
                  {catSkills.map((skill, i) => (
                    <div
                      key={skill.label}
                      className="skill-card skill-anim"
                      style={{
                        "--hover-color": meta.color,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = meta.color;
                        e.currentTarget.style.boxShadow = `0 0 18px ${meta.color}40`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = "";
                        e.currentTarget.style.boxShadow = "";
                      }}
                    >
                      <span className="skill-card__icon">
                        <img
                          src={`https://skillicons.dev/icons?i=${skill.icon}`}
                          alt={`${skill.label} icon`}
                          className="skill-card__icon-img"
                          loading="lazy"
                        />
                      </span>
                      <span className="skill-card__label">{skill.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
