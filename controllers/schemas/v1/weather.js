const dailySchema = {
  dt: { type: 'number' },
  sunrise: { type: 'number' },
  sunset: { type: 'number' },
  moonrise: { type: 'number' },
  moonset: { type: 'number' },
  moon_phase: { type: 'number' },
  temp: { type: 'object' },
  feels_like: { type: 'object' },
  pressure: { type: 'number' },
  humidity: { type: 'number' },
  dew_point: { type: 'number' },
  wind_speed: { type: 'number' },
  wind_deg: { type: 'number' },
  wind_gust: { type: 'number' },
  weather: { type: 'array' },
  clouds: { type: 'number' },
  pop: { type: 'number' },
  uvi: { type: 'number' }
};

const currentSchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        city: { type: 'string' },
        timezone: { type: 'string' },
        current: dailySchema,
        daily: dailySchema
      }
    }
  }
};

module.exports = { currentSchema };
