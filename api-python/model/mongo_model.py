import os
from pymongo import MongoClient

client = MongoClient(os.environ["MONGODB_URL"])
db = client.portfolio
col = db.portfolio

class MongoModel:
    def get_information(self, title):
        return col.find_one({"title": title}, {'_id': False, 'content': True})

    def update_information(self, title, content):
        col.update_one({"title": title}, {"content": content})

    def delete_information(self, title):
        col.delete_one({"title": title})

    def get_portfolios(self):
        return col.find_many({"group": "portfolios"}, {"_id": False})

    def add_participate(self, title, content):
        col.insert_one({"title": title, "content": content, "count": 0, "group": "participates" })
