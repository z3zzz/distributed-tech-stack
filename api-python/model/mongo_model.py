import os
from pymongo import MongoClient

client = MongoClient(os.environ["MONGODB_URL"])
db = client.portfolio
col = db[os.environ["MONGODB_COLLECTION"]]

class MongoModel:
    def get_information(self, title):
        return col.find_one({"title": title}, {'_id': False, 'content': True})

    def add_information(self, title, content):
        return col.insert_one({"title": title, "content": content, "photos": [], "count": 0})

    def update_information(self, title, content):
        col.update_one({"title": title}, {"content": content})

    def delete_information(self, title):
        col.delete_one({"title": title})

    def get_portfolios(self):
        return list(col.find({"group": "portfolios"}, {"_id": False}))

    def add_portfolios(self, id, title, content, github_link, tech_stack):
        return col.insert_one({
            "group": "portfolios", 
            "id": id, 
            "title": title, 
            "content": content,
            "githubLink": github_link, 
            "techStack": tech_stack})

    def add_participate(self, title, content):
        col.insert_one({"title": title, "content": content, "count": 0, "group": "participates" })
