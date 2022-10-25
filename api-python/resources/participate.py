from flask import request, Blueprint
from flask_restful import Api, Resource, reqparse
from model import model

api_bp_participate = Blueprint('api_participate', __name__)
api_participate = Api(api_bp_participate)

body_parser = reqparse.RequestParser()
body_parser.add_argument(
    'content', dest = 'content',
    location='json'
)

class Participate(Resource):
    def post(self, stype, db):
        title = stype.lower()
        args = body_parser.parse_args()
        content = args.content

        if len(content) < 3:
            return {"content": "조금만 더 길게, 3글자 이상 작성해 주세요 :)"}

        model.add_participate(title, content, db)
        
        return {"content": "등록이 완료되었습니다. 감사합니다 :)"}, 201


api_participate.add_resource(Participate, "/participate/<string:stype>/<string:db>")
