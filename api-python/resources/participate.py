from flask import request, Blueprint
from flask_restful import Api, Resource, reqparse
from model import PgDatabase

api_bp_participate = Blueprint('api_participate', __name__)
api_participate = Api(api_bp_participate)

body_parser = reqparse.RequestParser()
body_parser.add_argument(
    'content', dest = 'content',
    location='json'
)

class Participate(Resource):
    def post(self, stype):
        title = stype.lower()
        args = body_parser.parse_args()
        content = args.content

        with PgDatabase() as db:
            db.execute("""
                INSERT INTO participates (title, content)
                VALUES (%s, %s);
                    """, (title, content))
        
        return {"content": "등록이 완료되었습니다. 감사합니다 :)"}


api_participate.add_resource(Participate, "/participate/<string:stype>")
