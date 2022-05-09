const { currentHandler } = require('../../controllers/handlers/v1/weather');
const { currentPreHandler } = require('../../controllers/preHandlers/v1/weather');
const { currentSchema } = require('../../controllers/schemas/v1/weather');

const currentOpts = {
  schema: currentSchema,
  preHandler: currentPreHandler,
  handler: currentHandler,
};
module.exports = (fastify, options, done) => {
  fastify.get('/', async (request, reply) => {
    reply.code(201).send({ status: 'V1 running OK' });
  });

  fastify.get('/current/:city?', currentOpts);


  done();
};
