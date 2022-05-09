const currentSchema = {
  querystring: {
    name: { type: 'string' }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        status: { type: 'string' }
      }
    }
  }
};

module.exports = { currentSchema };
