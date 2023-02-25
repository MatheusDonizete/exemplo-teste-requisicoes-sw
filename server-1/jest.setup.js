const server = require('./src/mocks/server.js');

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())