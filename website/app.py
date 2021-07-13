from flask import render_template
from website import app

@app.route('/')
def index():
    return render_template("overview/overview.html")

@app.route('/favicon.ico')
def favicon():
    return ''