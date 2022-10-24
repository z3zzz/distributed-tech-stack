import os
from pymongo import MongoClient

client = MongoClient(os.environ["MONGODB_URL"])
db = client.portfolio
col = client.portfolio

class MongoModel:
    def get_information(self, title):
        result = col.find_one({"title": title})
        print(result)

        return result
    
    def update_information(self, title, content):
        return

    def delete_information(self, title):
        return

    def get_portfolios(self):
        return

