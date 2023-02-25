const { rest } = require('msw');
const server = require('./mocks/server');
const service = require('./my-service');
const mock = require('./mocks/mocked-data');

const code = jest.fn(() => ({ send: () => {} }))
test('Salva um role aí', async () => {
  const status = await service.save({
    body: {
      "category": "food",
      "price": "1.99",
      "name": "Potato"
    }
  }, { code });
  expect(status).toBe(201);
  expect(code.mock.calls).toHaveLength(1);
});

test('Requisição tem que falhar', async () => {
  server.use(
    rest.post('http://localhost:3001/listas', async (_, res, ctx) => {
      return res(
        ctx.status(500),
      )
    }),
  );
  const status = await service.save({
    body: null
  }, { code });
  expect(status).toBe('Request failed with status code 500');
  expect(code.mock.calls).toHaveLength(1);
});

test('Pega tudo que tá lá', async () => {
  const data = await service.getAll();
  expect(data).toStrictEqual(mock);
});