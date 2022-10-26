from flask import Flask
from flask_restful import Resource, Api
from resources import api_bp_informaton, api_bp_participate
from flask_cors import CORS
import os

app = Flask(__name__)

app.register_blueprint(api_bp_informaton)
app.register_blueprint(api_bp_participate)

if os.environ.get("PYTHON_ENV") == "development":
    CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
