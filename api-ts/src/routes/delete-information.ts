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
import { PASSWORD } from "../constants";

interface DeleteInformation {
  Params: {
    type: string;
    db: string;
  };
  Body: {
    password: string;
  };
  Reply: {
    content: string;
  };
}

export async function deleteInformationRoutes(
  app: FastifyInstance,
  options: FastifyPluginOptions
) {
  app.delete<DeleteInformation>("/self/:type/:db", async (req, res) => {
    const { type, db }: { type: string; db: string } = req.params;
    const { password } = req.body;

    if (password !== PASSWORD) {
      app.log.info(password);
      res.status(400);
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    const { isDeleted } = await model.deleteByTitle(
      `self_${type.toLowerCase()}`,
      db
    );

    res.status(200);

    if (isDeleted) {
      return { content: "삭제가 완료되었습니다." };
    } else {
      return { content: "삭제에 실패하였습니다." };
    }
  });

  app.delete<DeleteInformation>("/dev/:type/:db", async (req, res) => {
    const { type, db }: { type: string; db: string } = req.params;
    const { password } = req.body;
    let isDeleted: boolean;

    if (password !== PASSWORD) {
      app.log.info(password, PASSWORD);
      res.status(400);
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    const title = `dev_${type.toLowerCase()}`;

    if (type === "portfolio") {
      const { isDeleted: result } = await portfolioModel.deleteByTitle(title);

      isDeleted = result;
    } else {
      const { isDeleted: result } = await model.deleteByTitle(
        `self_${type.toLowerCase()}`,
        db
      );

      isDeleted = result;
    }

    res.status(200);
    if (isDeleted) {
      return { content: "삭제가 완료되었습니다." };
    } else {
      return { content: "삭제에 실패하였습니다." };
    }
  });
}
