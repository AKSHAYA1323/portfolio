"use client";
import { useEffect, useRef } from "react";
import { projects } from "@/data/portfolioData";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".proj-anim").forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.1}s`;
            el.classList.add("visible");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="projects" ref={ref}>
      <style>{`
        .proj-anim { opacity:0; transform:translateY(36px);
          transition: opacity 0.55s ease, transform 0.55s ease; }
        .proj-anim.visible { opacity:1; transform:translateY(0); }
      `}</style>

      <div className="container">
        <h2 className="section-title">
          <span className="title-main">Featured</span>{" "}
          <span className="title-accent">Projects</span>
        </h2>
        <p className="section-subtitle">Things I&apos;ve built with passion</p>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`project-card proj-anim`}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = project.accentColor;
                e.currentTarget.style.boxShadow = `0 16px 48px ${project.accentColor}33`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              {/* Image / placeholder */}
              <div
                className="project-card__image-placeholder"
                style={{
                  background: project.image ? "none" : `linear-gradient(135deg, ${project.accentColor}22, ${project.accentColor}08)`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {project.image ? (
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <span style={{ fontSize: 56 }}>{project.emoji}</span>
                )}
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__tags">
                  {project.tags.map(t => (
                    <span
                      key={t}
                      className="tag"
                      style={{
                        background: `${project.accentColor}18`,
                        color: project.accentColor,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <a
                    id={`project-github-${project.id}`}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    <FiGithub /> GitHub
                  </a>
                  {project.demo && project.demo !== "#" && (
                    <a
                      id={`project-demo-${project.id}`}
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
