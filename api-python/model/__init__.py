from .pg_model import PgModel
from .mongo_model import MongoModel
from .model import Model

model = Model(PgModel(), MongoModel())
