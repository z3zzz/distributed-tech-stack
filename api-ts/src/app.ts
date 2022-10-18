import Fastify from 'fastify';
import {
  getQuestionRoutes,
  greetingRoutes,
  putQuestionRoutes,
  postQuestionRoutes,
  getQuestionsRoutes,
} from './routes';
import { cors, postgres } from './plugins';
import { NODE_ENV } from './constants';

// main
export const app = Fastify({
  logger: {
    transport:
      NODE_ENV !== 'production'
        ? {
            target: 'pino-pretty',
            options: { ignore: 'pid,hostname' },
          }
        : undefined,
  },
  disableRequestLogging: true,
});

// plugins
app.register(cors);
app.register(postgres);

// routes
app.register(greetingRoutes);
app.register(postQuestionRoutes);
app.register(getQuestionRoutes);
app.register(getQuestionsRoutes);
app.register(putQuestionRoutes);
