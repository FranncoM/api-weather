
const iplocate = require('node-iplocate');
const requestIp = require('@supercharge/request-ip');
const { NODE_ENV, DEV_IP } = process.env;

const getLocate = async (req) => {
  const clientIp = NODE_ENV !== 'DEV' ? requestIp.getClientIp(req) : DEV_IP;
  const location = await iplocate(clientIp);

  return location;
};


module.exports = { getLocate };
