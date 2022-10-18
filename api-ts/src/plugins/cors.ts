import fastifyPlugin from 'fastify-plugin';
import fastifyCors from '@fastify/cors';
import { NODE_ENV } from '../constants';

export const cors = fastifyPlugin(async (fastify, options) => {
  const origin = NODE_ENV === 'production' ? false : [/localhost/, /postman/];
  const credentials = NODE_ENV !== 'production';

  fastify.register(fastifyCors, {
    origin,
    credentials,
  });
});
