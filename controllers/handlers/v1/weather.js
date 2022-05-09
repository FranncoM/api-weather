const { getLocate } = require('../../../services/ipLocate');
const { getCurrent, getForecast, getDirectGeoCoding } = require('../../../services/apiOpenWeather');

const currentHandler = async (request, reply) => {
  let response = {};
  if(request.params['city']){
     const {name, lat, lon} = await getDirectGeoCoding(request.params['city']);
    response = await getForecast(lat, lon);
    response.city = name;
  }else{
    
  }

  return reply.code(200).send(response);
};

module.exports = { currentHandler };
