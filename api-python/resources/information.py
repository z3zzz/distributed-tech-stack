import os
from flask import request, Blueprint, jsonify
from flask_restful import Api, Resource, reqparse
from model import PgDatabase

api_bp_informaton = Blueprint('api_informaton', __name__)
api_information = Api(api_bp_informaton)
correct_password = os.environ["MY_PASSWORD"]

body_parser = reqparse.RequestParser()
body_parser.add_argument(
    'password', dest = 'password',
    location='json'
)
body_parser.add_argument(
    'content', dest = 'content',
    location='json'
)


class SelfInformation(Resource):
    def get(self, stype):
        title = f"self_{stype.lower()}"
        with PgDatabase() as db:
            db.execute("SELECT * FROM informations WHERE title = %s", (title,))
            result = db.fetchone()
        
        return jsonify({"content": result[2]})

    def put(self, stype):
        args = body_parser.parse_args()
            
        if args.password != correct_password:
            return jsonify({"content": "비밀번호가 일치하지 않습니다."})
        
        title = f"self_{stype.lower()}"
        content = args.content

        with PgDatabase() as db:
            db.execute("UPDATE informations SET content = %s WHERE title = %s", 
                    (content, title))
        
        return jsonify({"content": "수정이 완료되었습니다."})

    def delete(self, stype):
        args = body_parser.parse_args()
            
        if args.password != correct_password:
            return jsonify({"content": "비밀번호가 일치하지 않습니다."})
        
        title = f"self_{stype.lower()}"
        content = args.content

        with PgDatabase() as db:
            db.execute("UPDATE informations SET content = %s WHERE title = %s", 
                    (content, title))
        
        return jsonify({"content": "수정이 완료되었습니다."})



api_information.add_resource(SelfInformation, "/self/<string:stype>")

