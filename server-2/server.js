const fastify = require('fastify')({ logger: true });
const data = require('./data.js');


fastify.post('/', async (req, reply) => {
  data.push(req.body);
  reply.code(201).send();
})

fastify.get('/listas', async () => {
  return data;
})

const start = async () => {
  try {
    await fastify.listen({ port: 3001 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()