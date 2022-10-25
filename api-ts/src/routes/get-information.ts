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
  model,
} from "../models";

interface GetInformation {
  Params: {
    type: string;
    db: string;
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
  app.get<GetInformation>("/self/:type/:db", async (req, res) => {
    const { type, db }: { type: string; db: string } = req.params;

    const data = await model.findByTitle(`self_${type.toLowerCase()}`, db);

    res.status(200);
    return data;
  });

  app.get<GetInformation>("/dev/:type/:db", async (req, res) => {
    const { type, db }: { type: string; db: string } = req.params;
    let data: InformationData | PortfolioData[];

    if (type === "portfolio") {
      data = await portfolioModel.findAll();
    } else {
      data = await model.findByTitle(`dev_${type.toLowerCase()}`, db);
    }

    res.status(200);
    return data;
  });
}
