import {
  FastifyInstance,
  FastifyPluginOptions,
  RouteShorthandOptions,
} from 'fastify';
import { questionModel, UpdateQuestionAttr } from '../models';

interface PutQuestion {
  Body: UpdateQuestionAttr;
  Reply: {
    isUpdated: boolean;
  };
}

export async function putQuestionRoutes(
  app: FastifyInstance,
  options: FastifyPluginOptions
) {
  const opts: RouteShorthandOptions = {
    schema: {
      body: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          content: { type: 'string' },
        },
        anyOf: [{ required: ['id', 'content'] }],
      },
      response: {
        200: {
          type: 'object',
          properties: {
            isUpdated: { type: 'boolean' },
          },
        },
      },
    },
  };

  app.put<PutQuestion>('/question', opts, async (req, res) => {
    const { id, content } = req.body;

    const { isUpdated } = await questionModel.update({
      id,
      content,
    });

    return { isUpdated };
  });
}
