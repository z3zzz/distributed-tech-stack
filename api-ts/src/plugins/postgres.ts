import fastifyPlugin from 'fastify-plugin';
import fastifyPostgres from '@fastify/postgres';
import { POSTGRES_URL } from '../constants';

export const postgres = fastifyPlugin(async (fastify, options) => {
  fastify.register(fastifyPostgres, {
    connectionString: POSTGRES_URL,
  });
});
