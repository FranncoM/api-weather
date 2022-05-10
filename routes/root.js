module.exports = (fastify, options, done) => {
  fastify.get('/', async (request, reply) => {
    reply.code(201).send({ status: `Server running OK` });
  });
  done();
};
