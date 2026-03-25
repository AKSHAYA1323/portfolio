"use client";
import { useState, useRef, useEffect } from "react";
import { certificates } from "@/data/portfolioData";

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".cert-anim").forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.08}s`;
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

  // Close modal on Escape
  useEffect(() => {
    const onKey = e => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent bg scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <section className="section certificates" id="certificates" ref={ref}>
      <style>{`
        .cert-anim { opacity:0; transform:scale(0.88);
          transition: opacity 0.45s ease, transform 0.45s ease; }
        .cert-anim.visible { opacity:1; transform:scale(1); }
        .cert-modal-enter { animation: certIn 0.35s ease forwards; }
        @keyframes certIn {
          from { opacity:0; transform:scale(0.88); }
          to   { opacity:1; transform:scale(1); }
        }
        .overlay-enter { animation: overlayIn 0.3s ease forwards; }
        @keyframes overlayIn {
          from { opacity:0; } to { opacity:1; }
        }
      `}</style>

      <div className="container">
        <h2 className="section-title">
          <span className="title-main">My</span>{" "}
          <span className="title-accent">Certifications</span>
        </h2>
        <p className="section-subtitle">Click any card to view full certificate</p>

        <div className="certificates__grid">
          {certificates.map(cert => (
            <button
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="cert-card cert-anim"
              onClick={() => setSelected(cert)}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = cert.accentColor;
                e.currentTarget.style.boxShadow = `0 0 24px ${cert.accentColor}44`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
              }}
              aria-label={`View ${cert.title} certificate`}
            >
              {cert.image ? (
                <img src={cert.image} alt={cert.title} className="cert-card__img" />
              ) : (
                <div
                  className="cert-card__img-placeholder"
                  style={{ background: `linear-gradient(135deg, ${cert.accentColor}22, ${cert.accentColor}08)` }}
                >
                  <span style={{ fontSize: 52 }}>{cert.emoji}</span>
                </div>
              )}
              <div className="cert-card__body">
                <div className="cert-card__title">{cert.title}</div>
                <div className="cert-card__meta">{cert.issuer} · {cert.date}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="cert-modal-overlay overlay-enter"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div
            className="cert-modal__content cert-modal-enter"
            onClick={e => e.stopPropagation()}
            style={{ boxShadow: `0 0 80px ${selected.accentColor}66` }}
          >
            {selected.image ? (
              <img
                src={selected.image}
                alt={selected.title}
                className="cert-modal__img"
              />
            ) : (
              <div style={{
                width: "min(600px, 88vw)",
                height: "min(420px, 60vh)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: `linear-gradient(135deg, ${selected.accentColor}22, ${selected.accentColor}08)`,
                borderRadius: "20px",
                border: `2px solid ${selected.accentColor}55`,
                gap: "16px",
              }}>
                <span style={{ fontSize: 96 }}>{selected.emoji}</span>
                <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, textAlign: "center", padding: "0 24px" }}>{selected.title}</h3>
                <p style={{ color: "#94a3b8", textAlign: "center" }}>{selected.issuer} · {selected.date}</p>
              </div>
            )}

            <button
              id="cert-modal-close-btn"
              className="cert-modal__close"
              onClick={() => setSelected(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
