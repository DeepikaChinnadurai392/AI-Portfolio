from flask import Flask, request, jsonify
import os
from flask_cors import CORS

from database import get_db_connection


app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "AI Portfolio Assistant Backend Running"


def get_portfolio_data(category):

    db = get_db_connection()

    cursor = db.cursor(dictionary=True)

    query = """
    SELECT content 
    FROM portfolio_info 
    WHERE category = %s
    """

    cursor.execute(query, (category,))

    result = cursor.fetchone()

    cursor.close()
    db.close()


    if result:
        return result["content"]

    return "Information not available."


@app.route("/chat", methods=["POST"])
def chat():

    data = request.json

    message = data["message"].lower()


    if any(word in message for word in ["about", "introduce", "yourself", "who are you"]):

        reply = get_portfolio_data("about")


    elif any(word in message for word in ["skill", "technology", "tech stack", "programming"]):

        reply = get_portfolio_data("skills")


    elif any(word in message for word in ["project", "projects", "portfolio"]):

        reply = get_portfolio_data("projects")


    elif any(word in message for word in ["experience", "internship"]):

        reply = get_portfolio_data("experience")


    elif any(word in message for word in ["education", "college", "mca", "degree"]):

        reply = get_portfolio_data("education")


    elif any(word in message for word in ["certificate", "certification"]):

        reply = get_portfolio_data("certifications")


    elif any(word in message for word in ["career", "goal", "objective"]):

        reply = get_portfolio_data("career")


    elif any(word in message for word in ["contact", "email", "github", "linkedin"]):

        reply = get_portfolio_data("contact")


    elif any(word in message for word in ["resume", "cv"]):

        reply = get_portfolio_data("resume")


    elif any(word in message for word in ["strength", "strengths", "strong points", "good at"]):

        reply = get_portfolio_data("strengths")


    elif any(word in message for word in ["future", "future goal", "long term goal"]):

        reply = get_portfolio_data("future")


    elif any(word in message for word in ["hobby", "hobbies", "interest", "interests"]):

        reply = get_portfolio_data("hobbies")


    elif any(word in message for word in ["available", "availability", "open to work", "job"]):

        reply = get_portfolio_data("availability")


    else:

        reply = (
            "I can help you learn more about Deepika. "
            "Ask me about skills, projects, experience, education, "
            "certifications, resume, career goals, or contact details."
        )


    return jsonify({
        "reply": reply
    })


if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000))
    )