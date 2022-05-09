const locationSchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        country: { type: 'string' },
        city: { type: 'string' },
        latitude: { type: 'number' },
        longitude: { type: 'number' },
        time_zone: { type: 'string' },
        postal_code: { type: 'string' },
        subdivision: { type: 'string' }
      }
    }
  }
};

module.exports = { locationSchema };
