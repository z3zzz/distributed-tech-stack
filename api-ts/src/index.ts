import { app } from "./app";
import { MONGODB_TS_URL, PORT, POSTGRES_URL } from "./constants";
import { initialQuery } from "./models";

app.listen({ port: PORT, host: "0.0.0.0" }, (err, url) => {
  // fastify startup
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  // postgres connect and create tables (if not exists)
  app.pg.connect((err) => {
    if (err) {
      app.log.error(err.message);
      app.log.error(`Postgres connection ERROR on ${POSTGRES_URL}`);
      process.exit(1);
    }

    app.log.info(`Postgres connected at ${POSTGRES_URL}`);
    app.log.info(`MongoDB connected at ${MONGODB_TS_URL}`);

    app.pg.query(initialQuery, (err) => {
      if (err) {
        app.log.error(err);
      }
    });
  });
});
