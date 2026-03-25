
export const personalInfo = {
  name: "Bonu Akshaya",
  title: "AI & ML Engineer",
  subtitle:
    "I build intelligent AI-driven solutions and scalable web applications, combining machine learning, deep learning, and modern full-stack development to solve real-world problems.",
  email: "akshaya.bonu13@gmail.com",
  location: "Andhra Pradesh, India",
  phone: "+91 7416982216",
  resumeUrl: "/akshaya-cv.pdf",
  github: "https://github.com/AKSHAYA1323",
  linkedin: "https://www.linkedin.com/in/bonu-akshaya/",
  twitter: "#",
};

export const aboutStats = [
  { value: "3+", label: "AI/ML Projects Built" },
  { value: "100+", label: "DSA Problems Solved" },
  { value: "92%", label: "Max Model Accuracy Achieved" },
];

export const aboutText =
  "I am an aspiring AI & ML Engineer with a strong foundation in computer science and a passion for building intelligent systems that solve real-world problems. My work spans deep learning, computer vision, and generative AI, where I have developed impactful projects such as pneumonia detection systems and AI-powered roadmap generators. I enjoy combining analytical thinking with hands-on development, working across the full stack to deliver scalable and efficient solutions. With experience in machine learning pipelines, data analysis, and modern web technologies, I continuously strive to enhance my skills and contribute to innovative, technology-driven solutions.";

// category: 'programming' | 'web' | 'ai' | 'tools' | 'soft'
export const skills = [
  // Programming
  { label: "C++",         icon: "cpp",        category: "programming" },
  { label: "C",           icon: "c",          category: "programming" },
  { label: "Python",      icon: "python",     category: "programming" },
  { label: "Java",        icon: "java",       category: "programming" },

  // Web
  { label: "HTML",        icon: "html",       category: "web" },
  { label: "CSS",         icon: "css",        category: "web" },
  { label: "JavaScript",  icon: "js",         category: "web" },
  { label: "ReactJS",     icon: "react",      category: "web" },
  { label: "Node.js",     icon: "nodejs",     category: "web" },
  { label: "REST APIs",   icon: "postman",    category: "web" },

  // AI / ML
  { label: "Machine Learning", icon: "anaconda",   category: "ai" },
  { label: "Deep Learning",    icon: "pytorch",    category: "ai" },
  { label: "CNN",              icon: "opencv",     category: "ai" },
  { label: "TensorFlow",       icon: "tensorflow", category: "ai" },

  // Tools
  { label: "Git",          icon: "git",         category: "tools" },
  { label: "GitHub",       icon: "github",      category: "tools" },
  { label: "VS Code",      icon: "vscode",      category: "tools" },
  { label: "Scikit-Learn", icon: "sklearn",     category: "tools" },

  // Soft Skills
  { label: "Problem Solving",     icon: "stackoverflow", category: "soft" },
  { label: "Analytical Thinking", icon: "notion",        category: "soft" },
  { label: "Team Collaboration",  icon: "discord",       category: "soft" },
  { label: "Adaptability",        icon: "figma",         category: "soft" },
];

export const CATEGORY_META = {
  programming: { label: "Programming Languages", color: "#8B5CF6" },
  web:         { label: "Web & Backend",          color: "#3B82F6" },
  ai:          { label: "AI / ML",                color: "#10B981" },
  tools:       { label: "Tools & Libraries",      color: "#F59E0B" },
  soft:        { label: "Soft Skills",            color: "#EF4444" },
};

export const projects = [
  {
    id: 1,
    title: "Plant Disease Diagnostic System",
    description:
      "An agricultural health monitoring platform using high-performance Computer Vision. Features automated image preprocessing, spatial feature enhancement, and multi-class disease identification. Supports various plant species with a verified 92% classification accuracy.",
    tags: ["Python", "TensorFlow", "CNN", "Image Processing", "NumPy", "Matplotlib"],
    accentColor: "#10B981",
    github: "https://github.com/AKSHAYA1323/plant-disease-detection",
    demo: "https://plant-disease-detection-dqgsmvwhzlpmqrskhmgfdw.streamlit.app/",
    emoji: "🍃",
    image: "/projects/plant-disease.jpeg",
  },
  {
    id: 2,
    title: "AI Pneumonia Detection System",
    description:
      "A medical image classification platform for automated chest X-ray analysis. Features a CNN-based diagnostic pipeline with integrated data augmentation and pixel normalization. Delivers high-precision screening with an 84% accuracy rate in identifying pneumonia-affected lung scans.",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
    accentColor: "#3B82F6",
    github: "https://github.com/AKSHAYA1323/ai-pneumonia-detection",
    demo: "https://ai-pneumonia-detection-gwmkcuxlxn66xdnbn4g5gy.streamlit.app/",
    emoji: "🫁",
    image: "/projects/pneumonia.jpeg",
  },
  {
    id: 3,
    title: "SkillBridge – AI Roadmap Generator",
    description:
      "A Generative AI platform for automated career pathing. Features an AI curriculum architect for domains like ML, Cloud, and Cybersecurity. Includes dynamic resource curation, tailored interview prep, and project-based learning paths, reducing manual research time by 70%.",
    tags: ["ReactJS", "Generative AI APIs", "Full Stack Development"],
    accentColor: "#8B5CF6",
    github: "https://github.com/Keshav833/SkillBridge_Project",
    demo: "https://skillbridge-project-cew7.onrender.com/",
    emoji: "🗺️",
    image: "/projects/skillbridge.jpeg",
  },
];

export const experience = [
  {
    id: 1,
    role: "AI & ML Intern (Virtual)",
    company: "Infosys",
    date: "2024", // Update if you have a specific date (e.g., "Jun 2024 - Aug 2024")
    description:
      "Developed an end-to-end CNN deep learning system (InstruNet AI) using Librosa to convert raw audio into Mel-spectrogram images, enabling automatic recognition across 11 musical instrument categories. Implemented a complete machine learning pipeline with the IRMAS dataset, including preprocessing, model training, fine-tuning, and comprehensive evaluation (Accuracy, Precision, Recall, F1-Score). Improved model understanding by conducting detailed misclassification analysis between spectrally similar instruments and visualizing audio features using Seaborn and Matplotlib.",
    tags: ["Python", "TensorFlow", "Keras", "Librosa", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "Deep Learning"],
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech – Computer Science & Engineering",
    school: "Lovely Professional University, Punjab",
    date: "Aug 2023 – Present",
    detail: "CGPA: 7.9",
  },
  {
    id: 2,
    degree: "Intermediate",
    school: "Sasi Junior College, Andhra Pradesh",
    date: "Aug 2021 – Mar 2023",
    detail: "Percentage: 97.3%",
  },
  {
    id: 3,
    degree: "Matriculation",
    school: "Narayana School, Andhra Pradesh",
    date: "Jun 2020 – Mar 2021",
    detail: "Percentage: 100%",
  },
];

export const certificates = [
  {
    id: 1,
    title: "Oracle Certified Foundations Associate",
    issuer: "Oracle",
    date: "2024", // Update as needed!
    accentColor: "#F80000",
    emoji: "☁️",
    image: "/certificates/oracle-foundations.jpg",
  },
  {
    id: 2,
    title: "Full Stack Development with Gen AI",
    issuer: "W3Grads",
    date: "Jun 2025 – Jul 2025",
    accentColor: "#F59E0B",
    emoji: "🌐",
    image: "/certificates/full-stack-gen-ai.jpeg",
  },
  {
    id: 3,
    title: "Basic Python towards ML/AI",
    issuer: "CSE Pathshala",
    date: "Feb 2024 – Mar 2024",
    accentColor: "#3B82F6",
    emoji: "🐍",
    image: "/certificates/python-ml-ai.jpeg",
  },
  {
    id: 4,
    title: "Graph Theory Programming Camp",
    issuer: "AlgoUniversity",
    date: "2025",
    accentColor: "#EF4444",
    emoji: "📈",
    image: "/certificates/graph-theory.jpeg",
  },
  {
    id: 5,
    title: "Computer Networking (Google – Coursera)",
    issuer: "Google (via Coursera)",
    date: "2024",
    accentColor: "#10B981",
    emoji: "🔌",
    image: "/certificates/computer-networking.png",
  },
];
