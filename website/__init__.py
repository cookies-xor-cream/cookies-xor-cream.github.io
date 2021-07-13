from flask import Flask
import jinja2

app = Flask(__name__)

env = jinja2.Environment()
env.globals.update(zip=zip)

if __name__ == "__main__":
	app.run(debug=True)

