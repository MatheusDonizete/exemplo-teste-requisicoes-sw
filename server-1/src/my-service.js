const axios = require('axios');

module.exports = {
  async getAll() {
    const { data } = await axios.get('http://localhost:3001/listas');
    return data;
  },
  async save({ body }, reply) {
    try {
      const { status } = await axios.post('http://localhost:3001/listas', body);
      reply.code(status).send();
      return status;
    } catch (err) {
      reply.code(503).send('Deu ruim, me desculpe');
      return err.message;
    }
  }
}
