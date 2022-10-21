import {
  FastifyInstance,
  FastifyPluginOptions,
  RouteShorthandOptions,
} from 'fastify';
import {
  InformationData,
  informationModel,
  PortfolioData,
  portfolioModel,
} from '../models';
import { PASSWORD } from '../constants';

interface PutInformation {
  Params: {
    type: string;
  };
  Body: {
    title: string;
    content: string;
    password: string;
    photos: string[];
    techStack: string[];
  };
  Reply: {
    content: string;
  };
}

export async function putInformationRoutes(
  app: FastifyInstance,
  options: FastifyPluginOptions
) {
  const opts: RouteShorthandOptions = {
    schema: {
      body: {
        type: 'object',
        properties: {
          content: { type: 'string', minLength: 3 },
        },
      },
    },
  };

  app.put<PutInformation>('/self/:type', opts, async (req, res) => {
    const { type }: { type: string } = req.params;
    const { content, password, photos } = req.body;

    if (password !== PASSWORD) {
      res.status(400);
      throw new Error('비밀번호가 일치하지 않습니다.');
    }

    app.log.info(content);
    const { isUpdated } = await informationModel.update({
      title: `self_${type.toLowerCase()}`,
      content,
      photos,
    });

    res.status(200);

    if (isUpdated) {
      return { content: '수정이 완료되었습니다.' };
    } else {
      return { content: '수정에 실패하였습니다.' };
    }
  });

  app.put<PutInformation>('/dev/:type', async (req, res) => {
    const { type }: { type: string } = req.params;
    const { content, password, photos, techStack } = req.body;
    let isUpdated: boolean;

    if (password !== PASSWORD) {
      res.status(400);
      throw new Error('비밀번호가 일치하지 않습니다.');
    }

    const title = `dev_${type.toLowerCase()}`;

    if (type === 'portfolio') {
      const { isUpdated: result } = await portfolioModel.update({
        title,
        content,
        photos,
        techStack,
      });

      isUpdated = result;
    } else {
      const { isUpdated: result } = await informationModel.update({
        title,
        content,
        photos,
      });

      isUpdated = result;
    }

    res.status(200);
    if (isUpdated) {
      return { content: '수정이 완료되었습니다.' };
    } else {
      return { content: '수정에 실패하였습니다.' };
    }
  });
}
