import fastifyPlugin from "fastify-plugin";
import fastifyMongodb from "@fastify/mongodb";
import { MONGODB_TS_URL } from "../constants";

export const mongodb = fastifyPlugin(async (fastify, options) => {
  fastify.register(fastifyMongodb, {
    url: MONGODB_TS_URL,
    forceClose: true,
  });
});
