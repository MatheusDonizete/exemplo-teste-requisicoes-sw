const msw = require('msw/node');
const handlers = require('./handlers.js');

module.exports = msw.setupServer(...handlers);
