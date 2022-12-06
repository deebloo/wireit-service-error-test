import fastify from "fastify";

const server = fastify({ logger: true });

// const foo: number = "test";

server.get("/", async () => {
  return "Hello World";
});

await server.listen({ port: 4300 });
