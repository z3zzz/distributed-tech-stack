from flask import Flask
from flask_restful import Resource, Api
from resources import api_bp_informaton

app = Flask(__name__)
app.register_blueprint(api_bp_informaton)

api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

api.add_resource(HelloWorld, '/')

if __name__ == '__main__':
    app.run(debug=True)
