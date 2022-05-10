'use strict';

const { test } = require('tap');
const { build } = require('../helper');
const remoteAddress = '17.253.0.0';

test('default root route', async (t) => {
  const app = build(t);

  const res = await app.inject({
    method: 'GET',
    url: '/',
  });
  t.equal(res.statusCode, 201);
  t.match(JSON.parse(res.payload), { status: 'Server running OK' });
});

test('should get location', async (t) => {
  const app = build(t);

  const res = await app.inject({
    url: '/v1/location',
    method: 'GET',
    remoteAddress,
  });
  t.equal(res.statusCode, 200);
  const payload = JSON.parse(res.payload);
  t.match(payload, {
    city: 'San Jose',
    latitude: 37.3388,
    longitude: -121.8916,
    time_zone: 'America/Los_Angeles',
    postal_code: '95141',
    subdivision: 'California',
  });
});
