import { Inter } from "next/font/google";
import "./globals.css";
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Bonu Akshaya — Full-Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Bonu Akshaya — Full-Stack Developer and AI/ML enthusiast based in Hyderabad, India. Building immersive digital experiences.",
  keywords: ["portfolio", "developer", "AI", "Next.js", "React", "machine learning"],
  authors: [{ name: "Bonu Akshaya" }],
  openGraph: {
    title: "Bonu Akshaya — Portfolio",
    description: "Full-Stack Developer & AI Enthusiast",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <NeuralNetworkBackground />
        <div className="app-shell">{children}</div>
      </body>
    </html>
  );
}
