from flask import Flask
from flask_restful import Resource, Api
from resources import api_bp_informaton, api_bp_participate

app = Flask(__name__)

app.register_blueprint(api_bp_informaton)
app.register_blueprint(api_bp_participate)

if __name__ == '__main__':
    app.run(debug=True)
