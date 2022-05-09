const { getLocate } = require('../../../services/ipLocate');
const locationHandler = async (request, reply) => {
  // eslint-disable-next-line camelcase
  const { country, city, latitude, longitude, time_zone, postal_code, subdivision } = await getLocate(request);
  // eslint-disable-next-line camelcase
  const response = { country, city, latitude, longitude, time_zone, postal_code, subdivision };

  return reply.code(200).send(response);
};

module.exports = { locationHandler };
