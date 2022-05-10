const { locationHandler } = require('../../controllers/handlers/v1/location');
// const {
//   locationPrehandler,
// } = require('../../controllers/preHandlers/v1/location');
const { locationSchema } = require('../../controllers/schemas/v1/location');

const locationOpts = {
  schema: locationSchema,
  // preHandler: forecastPreHandler,
  handler: locationHandler,
};

module.exports = (fastify, options, done) => {
  fastify.get('/location', locationOpts);

  done();
};
