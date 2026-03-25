# 🧑‍💻 Bonu Akshaya - AI/ML Engineer Portfolio

A highly interactive, modern portfolio website built to showcase AI/ML projects, skills, education, and professional experience.

## ✨ System Requirements & Tech Stack

To run and modify this project on a completely new system, you only need the following installed:
- **Node.js** (v18.17 or higher recommended) - [Download Here](https://nodejs.org/)
- **npm** (comes automatically with Node.js)
- A code editor like **VS Code**

Core built-in project dependencies:
- **Framework:** Next.js 14 (App Router)
- **UI & Logic:** React.js
- **Icons:** `react-icons`

---

## 🚀 Installation & Setup Guide

When moving this project to a fresh computer, follow these exact steps to install the requirements and launch the website:

### 1. Open the Project in Terminal
Open your terminal (Command Prompt, PowerShell, or VS Code terminal) and navigate inside the main project directory.

### 2. Install All Requirement Packages
Run the following command. This acts similarly to a `requirements.txt` file in Python—it reads `package.json` and automatically downloads Next.js, React, `react-icons`, and everything else needed:

```bash
npm install
```

### 3. Start the Local Server
Once all packages are downloaded and installed, start up the site by running:

```bash
npm run dev
```

### 4. View the Site
Open your web browser and go to your local development link:
[http://localhost:3000](http://localhost:3000)

---

## 🛠️ How to Modify & Update the Website

You don't need to edit complicated UI components to update your resume! All of the website's dynamic content is stored cleanly in a single configuration file.

To update your **Skills, Projects, Experience, Certificates, or Contact Details**, simply open and edit:
👉 **`src/data/portfolioData.js`**

*Any changes you save in this file will automatically refresh instantly in your browser!*

### Adding New Images
Any new images (like project screenshots, new certificates, or profile photos) MUST be saved in the `public/` folder. 
For example, save an image to `public/projects/my-app.jpg`, and then update `portfolioData.js` to link to it as `"/projects/my-app.jpg"`.

---

## 🌐 Deploying Live to the Internet

When you are ready to get a public link to share on your resume:

1. Push this code to a free **GitHub** repository.
2. Sign up for a free hosting account on [Vercel.com](https://vercel.com).
3. Connect your GitHub account, select this repository, and click **Deploy**. Vercel will instantly build and host your portfolio for free!
