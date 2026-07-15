import { motion } from "framer-motion";
import { useState } from "react";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      const response = await fetch(
        "https://ai-portfolio-backend-fb4s.onrender.com/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: message,
          }),
        }
      );

      const data = await response.json();

      setReply(data.reply);
      setMessage("");

    } catch (error) {
      console.error(error);
      setReply("Cannot connect to AI Assistant");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "320px",
        background: "#111827",
        padding: "20px",
        borderRadius: "15px",
        color: "white",
        zIndex: 1000,
        boxShadow: "0 0 20px rgba(0,0,0,0.3)",
      }}
    >
      <h3>🤖 Deepika AI Assistant</h3>

      <p>{reply}</p>

      <input
        value={message}
        placeholder="Ask me something..."
        onChange={(e) => setMessage(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "5px",
          border: "none",
          marginBottom: "10px",
        }}
      />

      <button
        onClick={sendMessage}
        style={{
          padding: "8px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </div>
  );
}

export default Chatbot;