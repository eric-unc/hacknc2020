import os
from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename
import datetime

time_stamp = datetime.datetime.now().strftime("%m%d%Y%H%M%S")
UPLOAD_DIRECTORY = f'./{time_stamp}' 

if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY)

if not os.path.exists("./result"):
    os.makedirs("./result")

ALLOWED_EXTENSIONS = {'mid'}
api = Flask(__name__)

# Upload file with name = "postFile"
@api.route("/post-file", methods = ['POST'])
def post_file():
    file = request.files['']
    filename = secure_filename(file.filename)
    if file:
        file.save(os.path.join(UPLOAD_DIRECTORY, filename))
    return #return webpage or something here after upload

@api.route("/begin-transfer", methods = ['GET','POST'])
def begin_transfer():
    os.system(f'python3 ./lstm.py {UPLOAD_DIRECTORY}')
    return

# Download file
@api.route("/get-file", methods = ['GET','POST'])
def get_file():
    return send_file(f'./result/result_{time_stamp}', attachment_filename = 'result.mid')