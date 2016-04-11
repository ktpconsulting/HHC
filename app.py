from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/index')
def something():
	return render_template("index.html", name="index")

@app.route('/blog')
def somethingElse():
	return render_template("blog.html", name="blog")

@app.route('/elements')
def somethingMore():
	return render_template("elements.html", name="elements")

@app.route('/events')
def somethingNew():
	return render_template("events.html", name="events")

@app.route('/contact')
def somethingAgain():
	return render_template("contact.html", name="contact")

@app.errorhandler(404)
def page_not_found(error):
    return render_template('index.html', name="index"), 404

if __name__ == '__main__':	#Start the Development server
    app.run(debug=True)
