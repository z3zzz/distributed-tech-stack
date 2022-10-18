import { app } from "../app";

export interface ParticipateAttr {
  title: string;
  content: string;
}

export interface ParticipateData {
  id: number;
  title: string;
  content: string;
}

export class ParticipateModel {
  private DEFAULT_LIMIT = 20;
  private DEFAULT_OFFSET = 0;

  async findById(id: number): Promise<ParticipateData> {
    const { rows } = await app.pg.query<ParticipateData>(
      "SELECT title, content FROM participates WHERE id = $1",
      [id]
    );

    return rows[0];
  }

  async findByTitle(title: string): Promise<ParticipateData> {
    const { rows } = await app.pg.query<ParticipateData>(
      "SELECT content FROM participates WHERE title = $1",
      [title]
    );

    return rows[0];
  }

  async create({
    title,
    content,
  }: ParticipateAttr): Promise<{ isCreated: boolean; id: number }> {
    const { rows, rowCount } = await app.pg.query<{ id: number }>(
      "INSERT INTO participates (title, content) VALUES ($1, $2) RETURNING id",
      [title, content]
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
  ): Promise<ParticipateData[]> {
    const { rows } = await app.pg.query<ParticipateData>(
      "SELECT id, title, content FROM participates LIMIT $1 OFFSET $2",
      [limit, offset]
    );

    return rows;
  }

  async update({
    title,
    content,
  }: ParticipateAttr): Promise<{ isUpdated: boolean }> {
    let query = "";
    let queryArray: any[] = [];

    query = "UPDATE participates SET content = $1 WHERE title = $2";
    queryArray = [content, title];

    const { rowCount } = await app.pg.query(query, queryArray);

    const isUpdated = rowCount === 1 ? true : false;

    return { isUpdated };
  }

  async deleteById(id: string): Promise<{ isDeleted: boolean }> {
    const { rowCount } = await app.pg.query(
      "DELETE FROM participates WHERE id = $1",
      [id]
    );

    const isDeleted = rowCount === 1 ? true : false;

    return { isDeleted };
  }

  async deleteByTitle(title: string): Promise<{ isDeleted: boolean }> {
    const { rowCount } = await app.pg.query(
      "DELETE FROM participates WHERE title = $1",
      [title]
    );

    const isDeleted = rowCount === 1 ? true : false;

    return { isDeleted };
  }
}

export const participateModel = new ParticipateModel();
