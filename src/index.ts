import * as moduleAlias from 'module-alias';
const sourcePath = process.env.NODE_ENV === 'development' ? 'src' : 'build';
moduleAlias.addAliases({
  '@server': sourcePath,
  '@config': `${sourcePath}/config`,
  '@domain': `${sourcePath}/domain`,
  '@graphql': `${sourcePath}/graphql`,
});

import { createServer } from '@config/express';
import { ApolloServer } from 'apollo-server-express';
import { AddressInfo } from 'net';
import http from 'http';
import { logger } from '@config/logger';
import schema from '@graphql/schemasMap';

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '5000';

async function startServer() {
  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
  });
  const app = createServer();
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/graphql' });
  const server = http.createServer(app).listen({ host, port }, () => {
    const addressInfo = server.address() as AddressInfo;
    logger.info(
      `Server ready at http://${addressInfo.address}:${addressInfo.port}`,
    );
  });

  const signalTraps: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];
  signalTraps.forEach((type) => {
    process.once(type, async () => {
      logger.info(`process.once ${type}`);

      server.close(() => {
        logger.debug('HTTP server closed');
      });
    });
  });
}

startServer();
