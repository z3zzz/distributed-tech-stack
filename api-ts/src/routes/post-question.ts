import {
  FastifyInstance,
  FastifyPluginOptions,
  RouteShorthandOptions,
} from 'fastify';
import { questionModel } from '../models';

interface PostQuestion {
  Body: {
    title: string;
    content: string;
  };
  Reply: {
    id: number;
    title: string;
    content: string;
  };
}

export async function postQuestionRoutes(
  app: FastifyInstance,
  options: FastifyPluginOptions
) {
  const opts: RouteShorthandOptions = {
    schema: {
      body: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          content: { type: 'string' },
        },
        required: ['title', 'content'],
        additionalProperties: false,
      },
      response: {
        201: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            title: { type: 'string' },
            content: { type: 'string' },
          },
        },
      },
    },
  };

  app.post<PostQuestion>('/question', opts, async (req, res) => {
    const { title, content } = req.body;

    const { id } = await questionModel.create({
      title,
      content,
    });

    res.status(201);
    return { title, content, id };
  });
}
