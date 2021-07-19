import os
from flask import render_template, url_for, send_from_directory, redirect, flash
from website import app

import json

def get_projects():
	projects_json = open('static/content/projects/projects.json',)
	projects = json.load(projects_json)

	return projects

@app.route('/favicon.ico')
def favicon():
	return send_from_directory(os.path.join(app.root_path, 'static'),
		'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route('/')
@app.route('/home')
def index():
	projects = get_projects()
	return render_template("index/index.html", projects=projects)

@app.route('/projects')
def projects_page():
	projects = get_projects()

	flash("Click on a project to look at it in more detail!", 'hint')

	return render_template("projects/projects.html", projects=projects)

@app.route('/projects/<proj_id>')
def project_showcase(proj_id):
	projects_json = open('static/content/projects/projects.json',)
	projects = json.load(projects_json)

	project = (
		list(
			filter(
				lambda proj: proj['id'] == proj_id,
				projects
			)
		)
		+ [None]
	)[0]

	print(project)

	if project is None:
		flash(f"There is no project with id={proj_id}!", 'danger')
		flash(f"second test flash")
		return redirect(url_for("projects_page"))

	return render_template(f"project_post/project_post.html", project=project)

@app.route('/contact')
def contact():
	return render_template("contact/contact.html")

@app.route('/about')
def about():
	return render_template("about/about.html")