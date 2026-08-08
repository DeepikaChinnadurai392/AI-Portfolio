import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

function Projects() {
  const [visibleCards, setVisibleCards] = useState(1);

  const showNextCard = () => {
    if (visibleCards < projects.length) {
      setVisibleCards(visibleCards + 1);
    }
};

const projects = [
  {
    title: "🎓 Virtual Internship Clone",
    description:
      "A full-stack internship platform that allows users to browse internships, register, and manage applications.",
    tech: "React • Spring Boot • MySQL",
    github:
      "https://github.com/DeepikaChinnadurai392/clone-vi",
    demo: "https://vi-clone-frontend-96u5.vercel.app/",
  },

  {
    title: "🛠 Service Booking App",
    description:
      "A full-stack web application for booking services with database integration.",
    tech: "React • Node.js • MySQL",
    github:
      "https://github.com/DeepikaChinnadurai392/Service-Booking-App",
    demo: "https://videotourl.com/videos/1784036336413-ec80efdf-c519-4df0-80c8-04ea606c866c.mp4",
  },

  {
    title: "🤖 AI Text Analyzer",
    description:
      "AI-powered text analysis application using React, Flask and Hugging Face.",
    tech: "React • Flask • Python",
    github: "https://github.com/DeepikaChinnadurai392/project11",
    demo: "#",
  },

  {
    title: "📊 Loan Prediction System",
    description:
      "Machine learning application that predicts loan approval using Python.",
    tech: "Python • Pandas • Scikit-learn",
    github: "https://github.com/DeepikaChinnadurai392/Loan-file",
    demo: "#",
  },
  {
  title: "💰 WalletWave - AI Expense Tracker",
  description:
    "A full-stack expense management application that helps users track income, expenses, savings and visualize financial insights.",
  tech: "React • Node.js • Express • MySQL • JWT",
  github:
    "https://github.com/DeepikaChinnadurai392/WalletWave",
  demo:
    "https://walletwave-frontend-drab.vercel.app/",
},
{
  title: "💊 AI Pharmaceutical Complaint Management System",
  description:
    "An AI-powered pharmaceutical complaint management system that analyzes complaints, generates corrected reports, performs risk assessment, creates summaries, and identifies missing information using Generative AI.",
  tech: "React • FastAPI • Python • Groq AI • Axios • Vercel • Render",
  github:
    "https://github.com/DeepikaChinnadurai392/AI-Complaint-System",
  demo:
    "https://ai-complaint-system-nine.vercel.app/",
},
{
  title: "🚀 TechNova",
  description:
    "A modern technology website showcasing digital solutions, innovative services, future technologies, and interactive user experiences.",
  tech: "React • Vite • Tailwind CSS • Framer Motion",
  github:
    "https://github.com/DeepikaChinnadurai392/TechNova",
  demo:
    "https://technova-three-tau.vercel.app/",
},
];

  return (
    <section id="projects" className="projects">

    

      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>

      <h2>My Projects</h2>

      <div className="stack-container">

        {projects.slice(0, visibleCards).map((project, index) => (

          <motion.div
            key={index}
            className="stack-card"
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            onClick={showNextCard}
          >

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p className="tech">{project.tech}</p>

            <div className="project-buttons">

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
  >
    <button>GitHub</button>
  </a>

  <a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
  >
    <button>Live Demo</button>
  </a>

</div>

            {index !== projects.length - 1 && (
              <div className="click-text">
                Click to View Next Project →
              </div>
            )}

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;