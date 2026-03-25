"use client";
import { useEffect, useRef } from "react";
import { personalInfo } from "@/data/portfolioData";
import { FaReact, FaPython, FaNodeJs, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiTensorflow, SiJavascript, SiKeras } from "react-icons/si";

export default function Hero() {
  const titleRef = useRef(null);

  // Simple typewriter reveal on mount
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__bg" aria-hidden="true" />

      <div className="container">
        <div className="hero__grid">
          {/* Text */}
          <div>
            {/* Title */}
            <h1 className="hero__title" ref={titleRef}>
              Hi, I&apos;m{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className="hero__role-chip">{personalInfo.title}</div>

            {/* Subtitle */}
            <p className="hero__subtitle">{personalInfo.subtitle}</p>

            {/* CTA */}
            <div className="hero__cta">
              <a
                id="hero-view-work-btn"
                className="btn-primary"
                href="#projects"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View My Work →
              </a>
              <a
                id="hero-download-cv-btn"
                className="btn-primary"
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </div>

            <div className="hero__mini-socials" aria-label="Hero social links">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hero__mini-social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="hero__mini-social-link" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hero__mini-social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="hero__visual">
            <div className="hero__avatar-wrap">
              <div className="hero__avatar-ring" aria-hidden="true" />
              
              {/* Outer Orbit (Anti-clockwise) */}
              <div className="hero__orbit-layer hero__orbit-layer--outer orbit-anti">
                <div className="hero__orbit-icon icon-ccw" style={{ top: '0%', left: '50%', transform: 'translate(-50%, -50%)', color: '#61dafb' }}>
                  <FaReact />
                </div>
                <div className="hero__orbit-icon icon-ccw" style={{ top: '75%', left: '6.7%', transform: 'translate(-50%, -50%)', color: '#FF9900' }}>
                  <SiTensorflow />
                </div>
                <div className="hero__orbit-icon icon-ccw" style={{ top: '75%', left: '93.3%', transform: 'translate(-50%, -50%)', color: '#F7DF1E' }}>
                  <SiJavascript />
                </div>
              </div>

              {/* Inner Orbit (Clockwise) */}
              <div className="hero__orbit-layer hero__orbit-layer--inner orbit-clock">
                <div className="hero__orbit-icon icon-cw" style={{ top: '93.3%', left: '50%', transform: 'translate(-50%, -50%)', color: '#3776AB' }}>
                  <FaPython />
                </div>
                <div className="hero__orbit-icon icon-cw" style={{ top: '25%', left: '6.7%', transform: 'translate(-50%, -50%)', color: '#D00000' }}>
                  <SiKeras />
                </div>
                <div className="hero__orbit-icon icon-cw" style={{ top: '25%', left: '93.3%', transform: 'translate(-50%, -50%)', color: '#339933' }}>
                  <FaNodeJs />
                </div>
              </div>

              <div className="hero__avatar-frame">
                <img
                  className="hero__avatar"
                  src="/profile3.jpeg"
                  alt={`${personalInfo.name} profile photo`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        Scroll
      </div>
    </section>
  );
}
