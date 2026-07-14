import "../styles/Contact.css";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

import resume from "../assets/resume/Deepika_Resume.pdf";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Get In Touch</h2>

      <p className="contact-text">
        I'm currently seeking opportunities as a Full Stack Developer,
        Java Developer, or AI/ML Engineer. Feel free to reach out for
        internships, full-time roles, or collaborations.
      </p>

      <div className="contact-card">

        <div className="contact-item">
          <FaEnvelope className="icon" />
          <span>cdeepikad08@gmail.com</span>
        </div>
        

        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <span>Salem, Tamil Nadu, India</span>
        </div>

        <div className="contact-buttons">

          <a
            href="https://github.com/DeepikaChinnadurai392"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FaGithub /> GitHub
            </button>
          </a>

          <a
            href="https://linkedin.com/in/deepika-c-91983b311"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FaLinkedin /> LinkedIn
            </button>
          </a>

          <a href={resume} download>
            <button>
              <FaDownload /> Resume
            </button>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;