const fetch = require('node-fetch');
const { OPENWEATHER_KEY: apiKey } = process.env;

const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const geoUrl = 'http://api.openweathermap.org/geo/1.0/';

const getForecast = async (lat, lon) => {
  const response = await fetch(`${baseUrl}onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${apiKey}`);
  const data = await response.json();

  return data;
};

const getCurrent = async (lat, lon) => {
  const response = await fetch(`${baseUrl}weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
  const data = response.json();
  return data;
};

const getDirectGeoCoding = async (city) => {
  const cityEncoded = encodeURIComponent(city);
  const limit = 1;
  const response = await fetch(`${geoUrl}direct?q=${cityEncoded}&limit=${limit}&appid=${apiKey}`);
  const data = await response.json();

  return data[0];
};

const getReverseGeoCoding = async (lat, lon) => {
  const limit = 1;
  const response = await fetch(`${geoUrl}direct?reverse?lat=${lat}&lon=${lon}&limit=${limit}&appid=${apiKey}`);
  const data = response.json();

  return data[0];
};

module.exports = { getForecast, getCurrent, getDirectGeoCoding, getReverseGeoCoding };
