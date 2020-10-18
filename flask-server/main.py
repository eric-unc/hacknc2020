import os
from flask import Flask, flash, request, redirect, url_for, render_template
from werkzeug.utils import secure_filename
import datetime

timing = 0
name = ""

time_stamp = datetime.datetime.now().strftime("%m%d%Y%H%M%S")
UPLOAD_DIRECTORY = f"./{time_stamp}"

f = open("./log")

if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY)

if not os.path.exists("./result"):
    os.makedirs("./result")

if not os.path.exists("./temp"):
    os.makedirs("./temp")

os.system("rm -rf ./temp/*")

ALLOWED_EXTENSIONS = {'mid', 'zip'}
app = Flask(__name__)

@app.route("/")
def my_index():
    return render_template("index.html", flask_token="Hello world")

# Upload file with name = "example-name"
@app.route("/post-file", methods = ['POST'])
def post_file():
    global timing
    # post file
    file = request.files['example-name']    # should be same as name field in <input>
    filename = secure_filename(file.filename)
    if file:
        file.save(os.path.join(UPLOAD_DIRECTORY, filename))
    # post time
    os.system(f'unzip ./{UPLOAD_DIRECTORY}/*.zip')
    os.system(f'rm -rf ./{UPLOAD_DIRECTORY}/*.zip')
    timing = request.form['time']           # should be same as name field in <input>
    name = request.form['username']
    return #return webpage or something here after upload

@app.route("/begin-transfer", methods = ['GET','POST'])
def begin_transfer():
    os.system(f'python3 ./lstm.py {UPLOAD_DIRECTORY} {timing}')
    os.system(f'python3 ./predict.py {UPLOAD_DIRECTORY}')
    return

# Download file
@app.route("/get-file", methods = ['GET','POST'])
def get_file():
    return send_file(f'./result/result_{time_stamp}', attachment_filename = 'result.mid')

app.run(debug=True)