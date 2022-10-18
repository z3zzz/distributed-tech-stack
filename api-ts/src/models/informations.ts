import { app } from "../app";

export interface InformationAttr {
  title: string;
  content: string;
  photos: string[];
}

export interface InformationData {
  id?: number;
  title?: string;
  content: string;
  photos: string[];
}

export class InformationModel {
  private DEFAULT_LIMIT = 20;
  private DEFAULT_OFFSET = 0;

  async findById(id: number): Promise<InformationData> {
    const { rows } = await app.pg.query<InformationData>(
      "SELECT title, content, photos FROM informations WHERE id = $1",
      [id]
    );

    return rows[0];
  }

  async findByTitle(title: string): Promise<InformationData> {
    const { rows } = await app.pg.query<InformationData>(
      "SELECT content, photos FROM informations WHERE title = $1",
      [title]
    );

    return rows[0];
  }

  async create({
    title,
    content,
    photos,
  }: InformationAttr): Promise<{ isCreated: boolean; id: number }> {
    const { rows, rowCount } = await app.pg.query<{ id: number }>(
      "INSERT INTO informations (title, content, photos) VALUES ($1, $2, $3) RETURNING id",
      [title, content, photos]
    );

    app.log.info(
      `question-create: ${rowCount ? "created" : "not-created"}, ${title}`
    );

    const isCreated = rowCount === 1 ? true : false;

    return { isCreated, id: rows[0]?.id };
  }

  async findAll(
    limit: number = this.DEFAULT_LIMIT,
    offset: number = this.DEFAULT_OFFSET
  ): Promise<InformationData[]> {
    const { rows } = await app.pg.query<InformationData>(
      "SELECT id, title, content, photos FROM informations LIMIT $1 OFFSET $2",
      [limit, offset]
    );

    return rows;
  }

  async update({
    title,
    content,
    photos,
  }: InformationAttr): Promise<{ isUpdated: boolean }> {
    let query = "";
    let queryArray: any[] = [];

    if (content && photos) {
      (query =
        "UPDATE informations SET content = $1, photos = $2 WHERE title = $3"),
        (queryArray = [content, photos, title]);
    }

    if (content && !photos) {
      (query = "UPDATE informations SET content = $1 WHERE title = $2"),
        (queryArray = [content, title]);
    }

    if (!content && photos) {
      (query = "UPDATE informations SET photos = $1 WHERE title = $2"),
        (queryArray = [photos, title]);
    }

    const { rowCount } = await app.pg.query(query, queryArray);

    const isUpdated = rowCount === 1 ? true : false;

    return { isUpdated };
  }

  async deleteById(id: string): Promise<{ isDeleted: boolean }> {
    const { rowCount } = await app.pg.query(
      "DELETE FROM informations WHERE id = $1",
      [id]
    );

    const isDeleted = rowCount === 1 ? true : false;

    return { isDeleted };
  }

  async deleteByTitle(title: string): Promise<{ isDeleted: boolean }> {
    const { rowCount } = await app.pg.query(
      "DELETE FROM informations WHERE title = $1",
      [title]
    );

    const isDeleted = rowCount === 1 ? true : false;

    return { isDeleted };
  }
}

export const informationModel = new InformationModel();
