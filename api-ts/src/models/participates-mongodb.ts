import { app } from "../app";
import { MONGODB_COLLECTION } from "../constants";

interface ParticipateAttr {
  title: string;
  content: string;
}

interface ParticipateData {
  id: number;
  title: string;
  content: string;
}

export class ParticipateMongodbModel {
  private getCol() {
    const col = app.mongo.db?.collection(MONGODB_COLLECTION || "dev");
    if (!col) {
      throw new Error("Error connection to Mongodb");
    }
    return col;
  }

  async create({
    title,
    content,
  }: ParticipateAttr): Promise<{ isCreated: boolean; id: number }> {
    const col = this.getCol();

    const { acknowledged } = await col.insertOne({
      title,
      content,
      count: 0,
      group: "participates",
    });

    app.log.info(
      `question-create: ${acknowledged ? "created" : "not-created"}, ${title}`
    );

    return { isCreated: acknowledged, id: 0 };
  }
}

export const participateMongodbModel = new ParticipateMongodbModel();
