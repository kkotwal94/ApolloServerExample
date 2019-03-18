import express from "express";
import { ApolloServer } from "apollo-server-express";
import morgan from "morgan";
import { connect } from "./db";
import typeDefs from "./graph/types";
import resolvers from "./graph/resolvers";

const apollo = new ApolloServer({ typeDefs, resolvers });

const app = express();

connect();

app.use(morgan("dev"));

apollo.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: 8000 }, () =>
  console.log(`🚀 Server ready at http://localhost:8000/graphql$`)
);
