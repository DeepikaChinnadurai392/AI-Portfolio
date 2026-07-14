import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Hero.css";
import { useState, useRef, useEffect } from "react";

import profile from "../assets/images/profile.jpg";
import resume from "../assets/resume/Deepika_Resume.pdf";

function Hero() {

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);

  const askAI = async () => {

    if (!question.trim()) return;

    const userQuestion = question;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userQuestion,
      },
    ]);

    setQuestion("");

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userQuestion,
          }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.reply,
        },
      ]);

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Unable to connect to AI Assistant.",
        },
      ]);

    }

  };

  return (

    <motion.section

      className="hero"

      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}

    >

      {/* LEFT SIDE */}

      <div className="hero-content">

        <p className="greeting">
          👋 Hello, I'm
        </p>

        <h1>
          Deepika Chinnadurai
        </h1>

        <h2>
          MCA Graduate | Full Stack Developer | AI Enthusiast
        </h2>

        <p className="description">

          Passionate about building responsive web applications
          and AI-powered solutions using React, Flask, Java,
          MySQL, and modern AI technologies.

        </p>

        <div className="buttons">

          <a href={resume} download="Deepika_Resume.pdf">

            <button className="resume-btn">

              <FaDownload />

              Download Resume

            </button>

          </a>

          <a href="#projects">

            <button className="project-btn">

              View Projects

            </button>

          </a>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/DeepikaChinnadurai392"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/deepika-c-91983b311"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:cdeepikad08@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <motion.div

       
  className="hero-card"
  animate={{ y: [0, -10, 0] }}
  transition={{ repeat: Infinity, duration: 5 }}
>

  <div className="profile-section">

    <img
      src={profile}
      alt="Deepika"
      className="profile-image"
    />

    

  </div>

  <div className="chat-section">

    <div className="welcome-message">

      👋 Hi! I'm Deepika's AI Assistant.

      <br /><br />

      Ask me about my skills, projects,
      internship, education or resume.

    </div>

    <div className="chat-body" id="chatBody">

      {messages.map((msg, index) => (

        <div
          key={index}
          className={
            msg.sender === "user"
              ? "user-message"
              : "ai-message"
          }
        >

          <strong>

            {msg.sender === "user"
              ? "👤 You"
              : "🤖 AI"}

          </strong>

          <br />

          {msg.text}

        </div>

      ))}
      <div ref={messagesEndRef}></div>

    </div>

    <div className="chat-input">

      <input

        type="text"

        value={question}

        placeholder="Ask me anything..."

        onChange={(e) =>
          setQuestion(e.target.value)
        }

        onKeyDown={(e) => {

          if (e.key === "Enter") {

            askAI();

          }

        }}

      />

      <button onClick={askAI}>
        Send
      </button>

    </div>

  </div>



      </motion.div>

    </motion.section>

  );

}

export default Hero;