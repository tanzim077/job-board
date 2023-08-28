import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";
import { readFile } from "fs/promises";
import { authMiddleware, handleLogin } from "./auth.js";
import { resolvers } from "./resolvers.js";

const PORT = 9000;

const app = express();

const typeDefs = await readFile("./schema.graphql", "utf8");

const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();

app.use(cors(), express.json(), authMiddleware);

app.use("/graphql", apolloMiddleware(apolloServer));

app.post("/login", handleLogin);

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
});
