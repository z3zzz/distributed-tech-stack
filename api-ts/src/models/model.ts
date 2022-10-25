import { informationModel, InformationModel } from "./informations";
import {
  informationMongodbModel,
  InformationMongodbModel,
} from "./informations-mongodb";
import { participateModel, ParticipateModel } from "./participates";
import {
  participateMongodbModel,
  ParticipateMongodbModel,
} from "./participates-mongodb";
import { portfolioModel, PortfolioModel } from "./portfolios";
import {
  portfolioMongodbModel,
  PortfolioMongodbModel,
} from "./portfolios-mongodb";

class Model {
  constructor(
    private informationPgModel: InformationModel,
    private informationMongodbModel: InformationMongodbModel,
    private participatePgModel: ParticipateModel,
    private participateMongodbModel: ParticipateMongodbModel,
    private portfolioPgModel: PortfolioModel,
    private portfolioMongodbModel: PortfolioMongodbModel
  ) {}

  public findByTitle(title: string, db: string) {
    if (db === "pg") {
      return this.informationPgModel.findByTitle(title);
    }

    if (db === "mongodb") {
      return this.informationMongodbModel.findByTitle(title);
    }

    throw new Error(`DB type not recognized: ${db}`);
  }

  public deleteByTitle(title: string, db: string) {
    if (db === "pg") {
      return this.informationPgModel.deleteByTitle(title);
    }

    if (db === "mongodb") {
      return this.informationMongodbModel.deleteByTitle(title);
    }

    throw new Error(`DB type not recognized: ${db}`);
  }

  public updateInformation({
    title,
    content,
    photos,
    db,
  }: {
    title: string;
    content: string;
    photos: string[];
    db: string;
  }) {
    if (db === "pg") {
      return this.informationPgModel.update({ title, content, photos });
    }

    if (db === "mongodb") {
      return this.informationMongodbModel.update({
        title,
        content,
        photos,
      });
    }

    throw new Error(`DB type not recognized: ${db}`);
  }

  public addParticipate({
    title,
    content,
    db,
  }: {
    title: string;
    content: string;
    db: string;
  }) {
    if (db === "pg") {
      return this.participatePgModel.create({ title, content });
    }

    if (db === "mongodb") {
      return this.participateMongodbModel.create({
        title,
        content,
      });
    }

    throw new Error(`DB type not recognized: ${db}`);
  }

  public getPortfolios(db: string) {
    if (db === "pg") {
      return this.portfolioPgModel.findAll();
    }

    if (db === "mongodb") {
      return this.portfolioMongodbModel.findAll();
    }

    throw new Error(`DB type not recognized: ${db}`);
  }
}

export const model = new Model(
  informationModel,
  informationMongodbModel,
  participateModel,
  participateMongodbModel,
  portfolioModel,
  portfolioMongodbModel
);
