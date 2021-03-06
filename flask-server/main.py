import os
from flask import Flask, flash, request, redirect, url_for, render_template, send_file
from werkzeug.utils import secure_filename
import datetime

timing = 0
name = ""

time_stamp = datetime.datetime.now().strftime("%m%d%Y%H%M%S")
UPLOAD_DIRECTORY = f'./upload/'

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
    try:
        os.system(f'unzip ./upload/*.zip')
        os.system(f'rm -rf ./upload/*.zip')
        os.system('mv ./zipped_file/* ./upload/')
    except e:
        print(e)
    timing = request.form['time']           # should be same as name field in <input>
    name = request.form['name'] # This should be the name of the song ideally
    return #return webpage or something here after upload

@app.route("/begin-transfer", methods = ['GET','POST'])
def begin_transfer():
    os.system(f'python3 ./lstm.py {timing}')
    os.system(f'python3 ./predict.py')
    return

# Download file
@app.route("/get-file", methods = ['GET','POST'])
def get_file():
    return send_file(f'./result/result.mid', attachment_filename = 'result.mid')

app.run(host="0.0.0.0", port=80, debug=True)
