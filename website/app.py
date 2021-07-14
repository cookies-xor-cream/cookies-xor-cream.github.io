import os
from flask import render_template, url_for, send_from_directory
from website import app

@app.route('/favicon.ico')
def favicon():
	return send_from_directory(os.path.join(app.root_path, 'static'),
		'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route('/')
@app.route('/home')
def index():
	return render_template("index/index.html")

@app.route('/projects')
def projects():
	return 'projects'

@app.route('/contact')
def contact():
	return render_template("contact/contact.html")

@app.route('/about')
def about():
	return 'about'

@app.route('/skills')
def skills():
	return 'skills'

@app.route('/resume')
def resume():
	return 'resume'