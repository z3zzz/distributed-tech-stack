import {
  FastifyInstance,
  FastifyPluginOptions,
  RouteShorthandOptions,
} from 'fastify';
import { questionModel } from '../models';

interface GetQuestion {
  Querystring: {
    id: string;
  };
  Reply: {
    content: string;
  };
}

export async function getQuestionRoutes(
  app: FastifyInstance,
  options: FastifyPluginOptions
) {
  const opts: RouteShorthandOptions = {
    schema: {
      querystring: {
        type: 'object',
        properties: {
          id: { type: 'string' },
        },
        required: ['id'],
      },
      response: {
        200: {
          type: 'object',
          properties: {
            content: { type: 'string' },
          },
        },
      },
    },
  };

  app.get<GetQuestion>('/question', opts, async (req, res) => {
    const { id } = req.query;

    const content = await questionModel.findById(id);

    res.status(200);
    return content;
  });
}
