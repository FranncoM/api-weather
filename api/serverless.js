require('dotenv').config();

const fastify = require('fastify');

const app = fastify({ logger: true });

app.register(require('../app.js'));

module.exports = async (req, res) => {
  await app.ready();
  app.server.emit('request', req, res);
};
