import os
from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename
import datetime

time_stamp = datetime.datetime.now().strftime("%m%d%Y%H%M%S")
UPLOAD_DIRECTORY = f'/{time_stamp}' 

if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY)

ALLOWED_EXTENSIONS = {'mid'}
api = Flask(__name__)


# Upload file
@api.route("/", methods=["POST"])
def post_file(filename):
    if "/" in filename:
        abort(400, "no subdirectories allowed")
    with open(os.path.join(UPLOAD_DIRECTORY, filename), "wb") as fp:
        fp.write(request.data)
    return "", 201

DOWNLOAD_DIRECTORY = f'/result_{time_stamp}'
if not os.path.exists(DOWNLOAD_DIRECTORY):
    os.makedirs(DOWNLOAD_DIRECTORY)

# Download file
@api.route("/")
def get_file(path):
    return send_from_directory(DOWNLOAD_DIRECTORY, path, as_attachment=True)
