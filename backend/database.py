import mysql.connector


def get_db_connection():

    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="navee@2025_DB",
        database="ai_portfolio"
    )

    return db