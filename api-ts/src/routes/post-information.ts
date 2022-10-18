import {
  FastifyInstance,
  FastifyPluginOptions,
  RouteShorthandOptions,
} from "fastify";
import {
  InformationData,
  informationModel,
  PortfolioData,
  portfolioModel,
} from "../models";

interface PostInformation {
  Params: {
    type: string;
  };
  Body: {
    title: string;
    content: string;
    photos: string[];
    techStack: string[];
  };
  Reply: {
    isCreated: boolean;
  };
}

export async function postInformationRoutes(
  app: FastifyInstance,
  options: FastifyPluginOptions
) {
  app.post<PostInformation>("/self/:type", async (req, res) => {
    const { type }: { type: string } = req.params;
    const { content, photos } = req.body;

    const { isCreated } = await informationModel.create({
      title: `self_${type.toLowerCase()}`,
      content,
      photos,
    });

    res.status(200);
    return { isCreated };
  });

  app.post<PostInformation>("/dev/:type", async (req, res) => {
    const { type }: { type: string } = req.params;
    const { content, photos, techStack } = req.body;
    let isCreated: boolean;

    const title = `dev_${type.toLowerCase()}`;

    if (type === "portfolio") {
      const { isCreated: result } = await portfolioModel.create({
        title,
        content,
        photos,
        techStack,
      });

      isCreated = result;
    } else {
      const { isCreated: result } = await informationModel.create({
        title,
        content,
        photos,
      });

      isCreated = result;
    }

    res.status(200);
    return { isCreated };
  });
}
