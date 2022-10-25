import { app } from "../app";
import { MONGODB_COLLECTION } from "../constants";

export interface PortfolioAttr {
  title: string;
  content: string;
  techStack: string[];
  photos: string[];
}

export interface PortfolioData {
  id?: number;
  title?: string;
  content: string;
  techStack: string[];
  photos: string[];
}

export class PortfolioMongodbModel {
  private DEFAULT_LIMIT = 20;
  private DEFAULT_OFFSET = 0;

  private getCol() {
    const col = app.mongo.db?.collection(MONGODB_COLLECTION || "dev");
    if (!col) {
      throw new Error("Error connection to Mongodb");
    }
    return col;
  }

  async findAll(
    limit: number = this.DEFAULT_LIMIT,
    offset: number = this.DEFAULT_OFFSET
  ): Promise<PortfolioData[]> {
    const col = this.getCol();
    const portfolios = await col
      .find<PortfolioData>({ group: "portfolios" })
      .skip(offset)
      .limit(limit)
      .toArray();

    return portfolios;
  }
}

export const portfolioMongodbModel = new PortfolioMongodbModel();
