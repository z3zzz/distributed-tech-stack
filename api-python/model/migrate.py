from pg_model import PgModel
from mongo_model import MongoModel

def main(pg_model, mongo_model):
    # informations migrate
    informations = pg_model.get_informations()
    print(informations)

    for information in informations:
        mongo_model.add_information(information["title"], information["content"])

    # portfolios migrate
    portfolios = pg_model.get_portfolios()
    print(portfolios)

    for portfolio in portfolios:
        mongo_model.add_portfolios(
                    portfolio["id"],
                    portfolio["title"],
                    portfolio["content"],
                    portfolio["githubLink"],
                    portfolio["techStack"]
                )

if __name__ == "__main__":
    main(PgModel(), MongoModel())
