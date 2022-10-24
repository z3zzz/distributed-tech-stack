from mongo_model import MongoModel
from pg_model import PgModel

class Model:
    def __init__(self, pg_model, mongo_model):
        self.models = {
                    "pg": pg_model,
                    "mongodb": mongo_model
                }

    def model(db_type):
        return self.models[db_type]

    def get_information(self, title, content, db_type):
        return self.model(db_type).get_information(title, content)
    
    def update_information(self, title, content, db_type):
        return self.model(db_type).update_information(title, content)

    def delete_information(self, title, db_type):
        return self.model(db_type).delete_information(title)

    def get_portfolios(self, db_type):
        return self.model(db_type).get_portfolios()

    def add_participate(self, title, content, db_type):
        return self.model(db_type).add_participate(title, content)

