import {
  FastifyInstance,
  FastifyPluginOptions,
  RouteShorthandOptions,
} from 'fastify';
import { questionModel, QuestionFullData } from '../models';

interface GetQuestions {
  Reply: QuestionFullData[];
}

export async function getQuestionsRoutes(
  app: FastifyInstance,
  options: FastifyPluginOptions
) {
  const opts: RouteShorthandOptions = {
    schema: {
      response: {
        200: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              title: { type: 'string' },
              content: { type: 'string' },
            },
          },
        },
      },
    },
  };

  app.get<GetQuestions>('/questions', opts, async (req, res) => {
    const questions = await questionModel.findAll();

    res.status(200);
    return questions;
  });
}
