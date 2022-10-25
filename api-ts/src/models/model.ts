import { informationModel, InformationModel } from "./informations";
import {
  informationMongodbModel,
  InformationMongodbModel,
} from "./informations-mongodb";

class Model {
  constructor(
    private informationPgModel: InformationModel,
    private informationMongodbModel: InformationMongodbModel
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

  public update({
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
}

export const model = new Model(informationModel, informationMongodbModel);
