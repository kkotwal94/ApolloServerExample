import typeDefs from "./types";
import resolvers from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default executableSchema;
