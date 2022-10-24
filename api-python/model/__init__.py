from .pg_model import PgModel
from .mongo_model import MongoModel

def get_model(db_type):
    if db_type == "pg":
        return PgModel()
    if db_type == "mongodb":
        return MongoModel()
