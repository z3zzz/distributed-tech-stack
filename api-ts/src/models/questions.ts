import { app } from '../app';

export interface Id {
  id: number;
}

export interface QuestionAttr {
  title: string;
  content: string;
}

export interface UpdateQuestionAttr {
  id: string;
  content: string;
}

export interface QuestionData {
  content: string;
}

export interface QuestionFullData {
  id: string;
  title: string;
  content: string;
}

export class QuestionModel {
  private DEFAULT_LIMIT = 20;
  private DEFAULT_OFFSET = 0;

  async findById(id: string): Promise<QuestionData> {
    const { rows } = await app.pg.query<QuestionData>(
      'SELECT content FROM questions WHERE id = $1',
      [id]
    );

    app.log.info({ content: rows[0]?.content });

    return rows[0];
  }

  async create({
    title,
    content,
  }: QuestionAttr): Promise<{ isCreated: boolean; id: number }> {
    const { rows, rowCount } = await app.pg.query<Id>(
      'INSERT INTO questions (title, content) VALUES ($1, $2) RETURNING id',
      [title, content]
    );

    app.log.info(
      `question-create: ${rowCount ? 'created' : 'not-created'}, ${title}`
    );

    const isCreated = rowCount === 1 ? true : false;

    return { isCreated, id: rows[0]?.id };
  }

  async findAll(
    limit: number = this.DEFAULT_LIMIT,
    offset: number = this.DEFAULT_OFFSET
  ): Promise<QuestionFullData[]> {
    const { rows } = await app.pg.query<QuestionFullData>(
      'SELECT id, title, content FROM questions LIMIT $1 OFFSET $2',
      [limit, offset]
    );

    return rows;
  }

  async update({
    id,
    content,
  }: UpdateQuestionAttr): Promise<{ isUpdated: boolean }> {
    const { rowCount } = await app.pg.query(
      'UPDATE questions SET content = $1 WHERE id = $2',
      [content, id]
    );

    app.log.info(
      `question-update: ${rowCount ? 'updated' : 'not-updated'}, ${id}`
    );

    const isUpdated = rowCount === 1 ? true : false;

    return { isUpdated };
  }

  async deleteById(id: string): Promise<{ isDeleted: boolean }> {
    const { rowCount } = await app.pg.query(
      'DELETE FROM tickets WHERE id = $1',
      [id]
    );

    app.log.info(
      `ticket-delete: ${rowCount ? 'deleted' : 'not-deleted'}, ${id}`
    );

    const isDeleted = rowCount === 1 ? true : false;

    return { isDeleted };
  }
}

export const questionModel = new QuestionModel();
