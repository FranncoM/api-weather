const currentHandler = async (request, reply) => {
  reply.code(200).send({ status: 'ok' });
};

module.exports = { currentHandler };
