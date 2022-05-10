'use strict';

const { test } = require('tap');
const { build } = require('../helper');
const { getReverseGeoCoding } = require('../../services/apiOpenWeather');
const remoteAddress = '17.253.0.0';

test('should get status route /v1', async (t) => {
  const app = build(t);

  const res = await app.inject({
    method: 'GET',
    url: '/v1',
    remoteAddress,
  });
  t.equal(res.statusCode, 200);
  t.match(JSON.parse(res.payload), { status: 'V1 running OK' });
});

test('should get current weather location client ip', async (t) => {
  const app = build(t);

  const res = await app.inject({
    method: 'GET',
    url: '/v1/current/',
    remoteAddress,
  });
  t.equal(res.statusCode, 200);
  const payload = JSON.parse(res.payload);
  t.type(payload, 'object');
});

test('should get current weather of city', async (t) => {
  const app = build(t);

  const res = await app.inject({
    url: '/v1/current/mar del plata',
    method: 'GET',
    remoteAddress,
  });
  t.equal(res.statusCode, 200);
  const payload = JSON.parse(res.payload);
  t.type(payload, 'object');
});

test('should get forecast location of client ip', async (t) => {
  const app = build(t);

  const res = await app.inject({
    url: '/v1/forecast',
    method: 'GET',
    remoteAddress,
  });
  t.equal(res.statusCode, 200);
  const payload = JSON.parse(res.payload);
  t.type(payload, 'object');
});

test('should get forecast of city', async (t) => {
  const app = build(t);

  const res = await app.inject({
    url: '/v1/forecast/mar del plata',
    method: 'GET',
    remoteAddress,
  });
  t.equal(res.statusCode, 200);
  const payload = JSON.parse(res.payload);
  t.type(payload, 'object');
});

test('should get geodata', async (t) => {
  const res = await getReverseGeoCoding(37.3382, -121.8863);
  t.type(res, 'object');
});
