const { getLocate } = require('../../../services/ipLocate');
const {
  getCurrent,
  getForecast,
  getDirectGeoCoding,
} = require('../../../services/apiOpenWeather');

const currentHandler = async (request, reply) => {
  let response = {};
  if (request.params['city']) {
    const { name, lat, lon } = await getDirectGeoCoding(request.params['city']);
    response = await getCurrent(lat, lon);
    response.city = name;
  } else {
    const { city, latitude, longitude } = await getLocate(request);
    response = await getCurrent(latitude, longitude);
    response.city = city;
  }
  return reply.code(200).send(response);
};

const forecastHandler = async (request, reply) => {
  let response = {};
  if (request.params['city']) {
    const { name, lat, lon } = await getDirectGeoCoding(request.params['city']);
    response = await getForecast(lat, lon);
    response.daily.length = 5;
    response.city = name;
  } else {
    const { city, latitude, longitude } = await getLocate(request);
    response = await getForecast(latitude, longitude);
    response.daily.length = 5;
    response.city = city;
  }

  return reply.code(200).send(response);
};

module.exports = { currentHandler, forecastHandler };
