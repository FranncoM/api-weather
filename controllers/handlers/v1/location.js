const { getLocate } = require('../../../services/ipLocate');
const locationHandler = async (request, reply) => {
  /* eslint-disable camelcase */
  const {
    country,
    city,
    latitude,
    longitude,
    time_zone,
    postal_code,
    subdivision,
  } = await getLocate(request);

  const response = {
    country,
    city,
    latitude,
    longitude,
    time_zone,
    postal_code,
    subdivision,
  };
  /* eslint-enable camelcase */
  return reply.code(200).send(response);
};

module.exports = { locationHandler };
