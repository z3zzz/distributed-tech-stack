import os
from flask import request, Blueprint
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
            db.execute("SELECT content FROM informations WHERE title = %s", (title,))
            result = db.fetchone()
        
        return result

    def put(self, stype):
        args = body_parser.parse_args()
            
        if args.password != correct_password:
            return {"content": "비밀번호가 일치하지 않습니다."}
        
        title = f"self_{stype.lower()}"
        content = args.content

        with PgDatabase() as db:
            db.execute("UPDATE informations SET content = %s WHERE title = %s", 
                    (content, title))
        
        return {"content": "수정이 완료되었습니다."}

    def delete(self, stype):
        args = body_parser.parse_args()
            
        if args.password != correct_password:
            return {"content": "비밀번호가 일치하지 않습니다."}
        
        title = f"self_{stype.lower()}"
        content = args.content

        with PgDatabase() as db:
            db.execute("DELETE FROM informations WHERE title = %s", 
                    (title,))
        
        return {"content": "삭제가 완료되었습니다."}

class DevInformation(Resource):
    def get(self, stype):
        if stype == "portfolio":
            with PgDatabase() as db:
                db.execute('SELECT id, title, content, github_link AS "githubLink", tech_stack AS "techStack" FROM portfolios')
                result = db.fetchall()

            return result

        title = f"dev_{stype.lower()}"

        with PgDatabase() as db:
            db.execute("SELECT content FROM informations WHERE title = %s", (title,))
            result = db.fetchone()
        
        return result

    def put(self, stype):
        if stype == "portfolio":
            return {"content": "포트폴리오는 put 수정이 불가합니다."}
        args = body_parser.parse_args()
            
        if args.password != correct_password:
            return {"content": "비밀번호가 일치하지 않습니다."}
         
        title = f"dev_{stype.lower()}"
        content = args.content

        with PgDatabase() as db:
            db.execute("UPDATE informations SET content = %s WHERE title = %s", 
                    (content, title))
        
        return {"content": "수정이 완료되었습니다."}

    def delete(self, stype):
        if stype == "portfolio":
            return {"content": "포트폴리오는 delete 수정이 불가합니다."}
        args = body_parser.parse_args()
            
        if args.password != correct_password:
            return {"content": "비밀번호가 일치하지 않습니다."}
        
        title = f"dev_{stype.lower()}"

        with PgDatabase() as db:
            db.execute("DELETE FROM informations WHERE title = %s", 
                    (title,))
        
        return {"content": "삭제가 완료되었습니다."}


api_information.add_resource(SelfInformation, "/self/<string:stype>")
api_information.add_resource(DevInformation, "/dev/<string:stype>")
