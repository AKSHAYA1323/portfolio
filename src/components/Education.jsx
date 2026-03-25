"use client";
import { useRef, useEffect } from "react";
import { education } from "@/data/portfolioData";

export default function Education() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".edu-anim").forEach((el, i) => {
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
    <section className="section education" id="education" ref={ref}>
      <style>{`
        .edu-anim { opacity:0; transform:translateX(-24px);
          transition: opacity 0.5s ease, transform 0.5s ease; }
        .edu-anim.visible { opacity:1; transform:translateX(0); }
      `}</style>

      <div className="container">
        <h2 className="section-title">
          <span className="title-main">My</span>{" "}
          <span className="title-accent">Education</span>
        </h2>
        <p className="section-subtitle">My academic background</p>

        <div className="education__list">
          {education.map((edu, idx) => {
            // Pick a fun icon based on index or type
            const emojis = ["🎓", "📚", "🏛️"];
            const icon = emojis[idx % emojis.length];
            return (
              <div key={edu.id} className="timeline__item edu-anim">
                <div className="timeline__icon">{icon}</div>
                <div className="edu-card">
                  <div className="edu-card__header">
                    <h3 className="edu-card__degree">{edu.degree}</h3>
                    <div className="edu-card__school">{edu.school}</div>
                    <span className="edu-card__date">{edu.date}</span>
                  </div>
                  {edu.detail && (
                    <div className="edu-card__detail">{edu.detail}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
