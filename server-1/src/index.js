const fastify = require('fastify')({ logger: true });
const service = require('./my-service');


fastify.post('/', service.save);

fastify.get('/', service.getAll);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()