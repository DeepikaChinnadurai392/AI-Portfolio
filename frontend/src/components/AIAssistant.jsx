import "../styles/AIAssistant.css";

function AIAssistant() {
  return (
    <div className="ai-assistant">

      <div className="ai-title">
        🤖 Deepika AI Assistant
      </div>

      <div className="ai-box">
        <input
          type="text"
          placeholder="Ask anything about Deepika..."
        />

        <button>
          Ask
        </button>
      </div>

    </div>
  );
}

export default AIAssistant;