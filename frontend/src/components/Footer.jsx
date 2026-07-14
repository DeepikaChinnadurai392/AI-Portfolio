import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Deepika AI</h2>

      <p>
        Full Stack Developer | AI Enthusiast
      </p>

      <div className="footer-links">

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

      </div>


      <div className="social-links">

        <a 
          href="https://github.com/DeepikaChinnadurai392"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>


        <a
          href="https://linkedin.com/in/deepika-c-91983b311"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>


        <a href="mailto:cdeepikad08@gmail.com">
          <FaEnvelope />
        </a>

      </div>


      <p className="copyright">
        © 2026 Deepika Chinnadurai. All rights reserved.
      </p>


    </footer>
  );
}

export default Footer;