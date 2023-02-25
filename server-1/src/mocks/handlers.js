const { rest } = require('msw');
const mockedData = require('./mocked-data.js');

module.exports = [
  rest.post('http://localhost:3001/listas', (req, res, ctx) => {
    return res(
      ctx.status(201),
    )
  }),
  rest.get('http://localhost:3001/listas', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockedData),
    )
  }),
]