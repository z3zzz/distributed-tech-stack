import fastifyPlugin from 'fastify-plugin';
import type { FastifyPluginAsync } from 'fastify';
import fastifyFormBody from '@fastify/formbody';
import type { FormBodyPluginOptions } from '@fastify/formbody';

export const formBody = fastifyPlugin(async (fastify, options) => {
  fastify.register(
    fastifyFormBody as unknown as FastifyPluginAsync<FormBodyPluginOptions>
  );
});
