import fastify from "fastify";
const server = fastify({ logger: true });
// const foo: number = "test";
await server.listen({ port: 4200 });
