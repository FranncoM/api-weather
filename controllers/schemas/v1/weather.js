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

const forecastSchema = {
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

const currentSchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        city: { type: 'string' },
        timezone: { type: 'string' },
        coord: {
          lon: { type: 'object' },
          lat: { type: 'object' }
        },
        weather: { type: 'array' },
        base: { type: 'string' },
        main: {
          temp: { type: 'number' },
          feels_like: { type: 'number' },
          temp_min: { type: 'number' },
          temp_max: { type: 'number' },
          pressure: { type: 'number' },
          humidity: { type: 'number' }
        },
        visibility: { type: 'number' },
        wind: {
          speed: { type: 'number' },
          deg: { type: 'number' }
        },
        clouds: {
          zll: { type: 'string' }
        },
        dt: { type: 'number' },
        sys: {
          id: { type: 'number' },
          message: { type: 'number' },
          country: { type: 'string' },
          sunrise: { type: 'number' },
          sunset: { type: 'number' }
        },
        id: { type: 'number' },
        name: { type: 'string' },
        cod: { type: 'number' }
      }
    }
  }
};

module.exports = { forecastSchema, currentSchema };
