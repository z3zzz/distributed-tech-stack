import {
  FastifyInstance,
  FastifyPluginOptions,
  RouteShorthandOptions,
} from "fastify";
import { participateModel } from "../models";

interface PostParticipate {
  Params: {
    type: string;
  };
  Body: {
    content: string;
  };
  Reply: {
    content: string;
  };
}

export async function postParticipateRoutes(
  app: FastifyInstance,
  options: FastifyPluginOptions
) {
  const opts: RouteShorthandOptions = {
    schema: {
      body: {
        type: "object",
        properties: {
          content: { type: "string", minLength: 3, maxLength: 500 },
        },
      },
    },
  };

  app.post<PostParticipate>("/participate/:type", opts, async (req, res) => {
    const { type }: { type: string } = req.params;
    const { content } = req.body;

    const { isCreated } = await participateModel.create({
      title: `self_${type.toLowerCase()}`,
      content,
    });

    res.status(201);
    if (isCreated) {
      return { content: "등록이  완료되었습니다. 감사합니다:)" };
    } else {
      return { content: "등록에  실패하였습니다." };
    }
  });
}
