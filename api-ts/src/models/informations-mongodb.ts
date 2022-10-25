import { app } from "../app";
import { MONGODB_COLLECTION } from "../constants";

interface InformationAttr {
  title: string;
  content: string;
  photos: string[];
}

interface InformationData {
  id?: number;
  title?: string;
  content: string;
  photos: string[];
}

export class InformationMongodbModel {
  private getCol() {
    const col = app.mongo.db?.collection(MONGODB_COLLECTION || "dev");
    if (!col) {
      throw new Error("Error connection to Mongodb");
    }
    return col;
  }

  async findByTitle(title: string): Promise<InformationData> {
    const col = this.getCol();

    const information = await col.findOne<InformationData>({ title });

    if (!information) {
      throw new Error(`Information not found for: ${title}`);
    }

    return information;
  }

  async update({
    title,
    content,
    photos,
  }: InformationAttr): Promise<{ isUpdated: boolean }> {
    const col = this.getCol();

    const { matchedCount } = await col.updateOne(
      { title },
      { $set: { content } }
    );

    const isUpdated = matchedCount === 1 ? true : false;

    return { isUpdated };
  }

  async deleteByTitle(title: string): Promise<{ isDeleted: boolean }> {
    const col = this.getCol();

    const { deletedCount } = await col.deleteOne({ title });

    const isDeleted = deletedCount === 1 ? true : false;

    return { isDeleted };
  }
}

export const informationMongodbModel = new InformationMongodbModel();
