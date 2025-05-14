"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const app = (0, fastify_1.default)();
app.get('/', async (_request, _reply) => {
    return { message: 'Olá, Fastify!' };
});
const start = async () => {
    try {
        await app.listen({ port: 3000 });
        console.log('Servidor rodando em http://localhost:3000');
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
