import os
from flask import request, Blueprint
from flask_restful import Api, Resource, reqparse
from model import PgModel, get_model

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
    def __init__(self):
        self.pg_model = PgModel()

    def get(self, stype, db):
        title = f"self_{stype.lower()}"

        model = get_model(db)

        return model.get_information(title)

    def put(self, stype):
        args = body_parser.parse_args()
            
        if args.password != correct_password:
            return {"content": "비밀번호가 일치하지 않습니다."}
        
        title = f"self_{stype.lower()}"
        content = args.content

        self.pg_model.update_information(title, content)
        
        return {"content": "수정이 완료되었습니다."}

    def delete(self, stype):
        args = body_parser.parse_args()
            
        if args.password != correct_password:
            return {"content": "비밀번호가 일치하지 않습니다."}
        
        title = f"self_{stype.lower()}"
        content = args.content

        self.pg_model.delete_information(title)
        
        return {"content": "삭제가 완료되었습니다."}

class DevInformation(Resource):
    def __init__(self):
        self.pg_model = PgModel()

    def get(self, stype):
        if stype == "portfolio":
            return self.pg_model.get_portfolios()

        title = f"dev_{stype.lower()}"

        return self.pg_model.get_information(title)

    def put(self, stype):
        if stype == "portfolio":
            return {"content": "포트폴리오는 put 수정이 불가합니다."}
        args = body_parser.parse_args()
            
        if args.password != correct_password:
            return {"content": "비밀번호가 일치하지 않습니다."}
         
        title = f"dev_{stype.lower()}"
        content = args.content

        self.pg_model.update_information(title, content)
        
        return {"content": "수정이 완료되었습니다."}

    def delete(self, stype):
        if stype == "portfolio":
            return {"content": "포트폴리오는 delete 수정이 불가합니다."}
        args = body_parser.parse_args()
            
        if args.password != correct_password:
            return {"content": "비밀번호가 일치하지 않습니다."}
        
        title = f"dev_{stype.lower()}"

        self.pg_model.delete_information(title)
        
        return {"content": "삭제가 완료되었습니다."}


api_information.add_resource(SelfInformation, "/self/<string:stype>/<string:db>")
api_information.add_resource(DevInformation, "/dev/<string:stype>")
