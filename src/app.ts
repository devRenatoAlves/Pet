/* import fastify, { FastifyRequest, FastifyReply } from 'fastify';

const app = fastify();

app.get('/', async (_request: FastifyRequest, _reply: FastifyReply) => {
  return { message: 'Olá, Fastify!' };
});

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log('Servidor rodando em http://localhost:3000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
 */

console.log('Hello, Fastify!');