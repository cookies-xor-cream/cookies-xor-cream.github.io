from flask import Flask
import jinja2

import os

app = Flask(__name__)

env = jinja2.Environment()
env.globals.update(zip=zip)

app.config['SECRET_KEY'] = os.urandom(24)

if __name__ == "__main__":
	app.run(debug=True)

