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

interface GetInformation {
  Params: {
    type: string;
  };
  Body: {
    title: string;
  };
  Reply:
    | {
        content: string;
        photos: string[];
      }
    | PortfolioData[];
}

export async function getInformationRoutes(
  app: FastifyInstance,
  options: FastifyPluginOptions
) {
  app.get<GetInformation>("/self/:type", async (req, res) => {
    const { type }: { type: string } = req.params;

    const data = await informationModel.findByTitle(
      `self_${type.toLowerCase()}`
    );

    res.status(200);
    return data;
  });

  app.get<GetInformation>("/dev/:type", async (req, res) => {
    const { type } = req.params;
    let data: InformationData | PortfolioData[];

    if (type === "portfolio") {
      data = await portfolioModel.findAll();
    } else {
      data = await informationModel.findByTitle(`dev_${type.toLowerCase()}`);
    }

    res.status(200);
    return data;
  });
}
