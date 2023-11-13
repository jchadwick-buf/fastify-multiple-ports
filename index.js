const fastify = require('fastify')

const httpServer = fastify();
const httpsServer = fastify({http2: true});

function setupServer(fastify) {
  fastify.get('/', (req, reply) => {
    reply.send({ hello: 'world' });
  });
}

setupServer(httpServer);
setupServer(httpsServer);

httpServer.listen({port: 3000});
httpsServer.listen({port: 3001});
