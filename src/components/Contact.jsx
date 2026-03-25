"use client";
import { useState, useRef, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SOCIALS = [
  { id: "github", label: "GitHub", icon: <FaGithub size={28} />, href: "" },
  { id: "linkedin", label: "LinkedIn", icon: <FaLinkedin size={28} />, href: "" },
  { id: "email", label: "Email", icon: <FaEnvelope size={28} />, href: "" },
];

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".contact-anim").forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.1}s`;
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

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/meepjqvk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setForm({ name: "", email: "", message: "" });
        setSent(true);
      } else {
        setErrors({ submit: "Failed to send message. Please try again." });
      }
    } catch (error) {
      setErrors({ submit: "Error sending message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const socials = SOCIALS.map((s) => ({
    ...s,
    href:
      s.id === "email"
        ? `mailto:${personalInfo.email}`
        : s.id === "github"
          ? personalInfo.github
          : personalInfo.linkedin,
  }));

  return (
    <section className="section" id="contact" ref={ref}>
      <style>{`
        .contact-anim { opacity:0; transform:translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease; }
        .contact-anim.visible { opacity:1; transform:translateY(0); }
      `}</style>

      <div className="container">
        <h2 className="section-title contact-anim">
          <span className="title-main">Get In</span> <span className="title-accent">Touch</span>
        </h2>
        <p className="section-subtitle contact-anim">
          Have a project in mind or just want to say hi? I&apos;d love to hear from you.
        </p>

        <div className="contact__inner">
          <div className="contact__left contact-anim">
            <div className="contact__left-title">Connect</div>
            <div className="contact__socials">
              {socials.map((s) => (
                <a
                  key={s.id}
                  id={`social-${s.id}-btn`}
                  href={s.href}
                  target={s.id === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="social-card contact-anim"
                >
                  <span className="social-card__icon">{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="contact__right contact-anim">
            {sent ? (
              <div className="form-success contact-anim">
                Thanks for reaching out! I&apos;ll get back to you soon.
              </div>
            ) : (
              <form className="contact__form contact-anim" onSubmit={handleSubmit} noValidate>
                {errors.submit && (
                  <div className="form-error" style={{ marginBottom: "var(--sp-md)", color: "#ef4444" }}>
                    {errors.submit}
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    className={`form-input${errors.name ? " error" : ""}`}
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    className={`form-input${errors.email ? " error" : ""}`}
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    className={`form-textarea${errors.message ? " error" : ""}`}
                    placeholder="Your message..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="btn-primary"
                  disabled={loading}
                  style={{ alignSelf: "flex-start" }}
                >
                  {loading ? "Sending..." : "Send Message ->"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
