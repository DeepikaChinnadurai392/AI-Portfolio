from flask import Flask, request, jsonify
from flask_cors import CORS
from portfolio_data import portfolio
import os

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "AI Portfolio Assistant Backend Running"


def get_portfolio_data(category):
    return portfolio.get(category, "Information not available.")


@app.route("/chat", methods=["POST"])
def chat():

    data = request.json
    message = data.get("message", "").lower()

    if any(word in message for word in ["about", "introduce", "yourself", "who are you"]):
        reply = get_portfolio_data("about")

    elif any(word in message for word in ["skill", "skills", "technology", "tech stack", "programming"]):
        reply = get_portfolio_data("skills")

    elif any(word in message for word in ["project", "projects", "portfolio"]):
        reply = get_portfolio_data("projects")

    elif any(word in message for word in ["experience"]):
        reply = get_portfolio_data("experience")

    elif any(word in message for word in ["internship"]):
        reply = get_portfolio_data("internship")

    elif any(word in message for word in ["education", "college", "mca", "degree"]):
        reply = get_portfolio_data("education")

    elif any(word in message for word in ["certificate", "certification", "certifications"]):
        reply = get_portfolio_data("certifications")

    elif any(word in message for word in ["career", "goal", "objective"]):
        reply = get_portfolio_data("career")

    elif any(word in message for word in ["strength", "strengths"]):
        reply = get_portfolio_data("strengths")

    elif any(word in message for word in ["future"]):
        reply = get_portfolio_data("future")

    elif any(word in message for word in ["hobby", "hobbies", "interest", "interests"]):
        reply = get_portfolio_data("hobbies")

    elif any(word in message for word in ["available", "availability", "open to work", "job"]):
        reply = get_portfolio_data("availability")

    elif any(word in message for word in ["contact", "email", "github", "linkedin"]):
        reply = get_portfolio_data("contact")

    elif any(word in message for word in ["resume", "cv"]):
        reply = get_portfolio_data("resume")

    else:
        reply = (
            "Hi! I'm Deepika's AI Assistant.\n\n"
            "You can ask me about:\n"
            "• About\n"
            "• Skills\n"
            "• Projects\n"
            "• Experience\n"
            "• Internship\n"
            "• Education\n"
            "• Certifications\n"
            "• Career Goal\n"
            "• Strengths\n"
            "• Hobbies\n"
            "• Future Goals\n"
            "• Resume\n"
            "• Contact Information"
        )

    return jsonify({"reply": reply})


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000))
    )