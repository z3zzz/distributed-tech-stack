import {
  FastifyInstance,
  FastifyPluginOptions,
  RouteShorthandOptions,
} from 'fastify';

interface GetGreeting {
  Reply: {
    greeting: string;
  };
}

export async function greetingRoutes(
  app: FastifyInstance,
  options: FastifyPluginOptions
) {
  const opts: { [keys: string]: RouteShorthandOptions } = {};

  opts['/'] = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            greeting: { type: 'string' },
          },
        },
      },
    },
  };

  app.get<GetGreeting>('/', opts['/'], async (req, res) => {
    return { greeting: 'Hi! It works!' };
  });

  app.get<GetGreeting>('/postgres', opts['/'], async (req, res) => {
    // postgress connection check
    const { rowCount } = await app.pg.query('SELECT * from users');
    app.log.info(`Rows in users table: ${rowCount}`);

    return { greeting: 'Postgres works!' };
  });
}
