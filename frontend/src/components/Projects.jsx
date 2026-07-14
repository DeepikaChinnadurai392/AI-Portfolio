import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

function Projects() {
  const [visibleCards, setVisibleCards] = useState(1);

  const showNextCard = () => {
    if (visibleCards < 4) {
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

            {index !== 3 && (
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