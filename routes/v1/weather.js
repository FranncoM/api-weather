const { currentHandler, forecastHandler } = require('../../controllers/handlers/v1/weather');
const { currentPreHandler, forecastPreHandler } = require('../../controllers/preHandlers/v1/weather');
const { currentSchema, forecastSchema } = require('../../controllers/schemas/v1/weather');

const currentOpts = {
  schema: currentSchema,
  preHandler: currentPreHandler,
  handler: currentHandler,
};

const forecastOpts = {
  schema: forecastSchema,
  preHandler: forecastPreHandler,
  handler: forecastHandler,
};

module.exports = (fastify, options, done) => {
  fastify.get('/', async (request, reply) => {
    reply.code(201).send({ status: 'V1 running OK' });
  });

  fastify.get('/current/:city?', currentOpts);

  fastify.get('/forecast/:city?', forecastOpts);


  done();
};
