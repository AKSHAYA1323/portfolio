"use client";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {year}{" "}
          <span className="gradient-text" style={{ fontWeight: 700 }}>
            {personalInfo.name}
          </span>
          {" "}· Built with ❤️ using Next.js
        </p>
      </div>
    </footer>
  );
}
