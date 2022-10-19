import { app } from "../app";

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

export class PortfolioModel {
  private DEFAULT_LIMIT = 20;
  private DEFAULT_OFFSET = 0;

  async findById(id: number): Promise<PortfolioData> {
    const { rows } = await app.pg.query<PortfolioData>(
      "SELECT title, content, photos FROM portfolios WHERE id = $1",
      [id]
    );

    return rows[0];
  }

  async findByTitle(title: string): Promise<PortfolioData> {
    const { rows } = await app.pg.query<PortfolioData>(
      "SELECT content, photos FROM portfolios WHERE title = $1",
      [title]
    );

    return rows[0];
  }

  async create({
    title,
    content,
    photos,
    techStack,
  }: PortfolioAttr): Promise<{ isCreated: boolean; id: number }> {
    const { rows, rowCount } = await app.pg.query<{ id: number }>(
      "INSERT INTO portfolios (title, content, photos, tech_stack) VALUES ($1, $2, $3, $4) RETURNING id",
      [title, content, photos, techStack]
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
  ): Promise<PortfolioData[]> {
    const { rows } = await app.pg.query<PortfolioData>(
      'SELECT id, title, content, photos, tech_stack AS "techStack", github_link AS "githubLink" FROM portfolios LIMIT $1 OFFSET $2',
      [limit, offset]
    );

    return rows;
  }

  async update({
    title,
    content,
    photos,
    techStack,
  }: PortfolioAttr): Promise<{ isUpdated: boolean }> {
    let rowCount = 0;

    if (content) {
      await app.pg.query(
        "UPDATE portfolios SET content = $1 WHERE title = $2",
        [content, title]
      );

      rowCount = 1;
    }

    if (photos) {
      await app.pg.query("UPDATE portfolios SET photos = $1 WHERE title = $2", [
        photos,
        title,
      ]);

      rowCount = 1;
    }

    if (techStack) {
      await app.pg.query(
        "UPDATE portfolios SET tech_stack = $1 WHERE title = $2",
        [techStack, title]
      );

      rowCount = 1;
    }

    const isUpdated = rowCount === 1 ? true : false;

    return { isUpdated };
  }

  async deleteById(id: string): Promise<{ isDeleted: boolean }> {
    const { rowCount } = await app.pg.query(
      "DELETE FROM portfolios WHERE id = $1",
      [id]
    );

    const isDeleted = rowCount === 1 ? true : false;

    return { isDeleted };
  }

  async deleteByTitle(title: string): Promise<{ isDeleted: boolean }> {
    const { rowCount } = await app.pg.query(
      "DELETE FROM portfolios WHERE title = $1",
      [title]
    );

    const isDeleted = rowCount === 1 ? true : false;

    return { isDeleted };
  }
}

export const portfolioModel = new PortfolioModel();
