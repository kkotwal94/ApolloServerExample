import { mergeResolvers } from "merge-graphql-schemas";
import todo from "./todo";

const resolvers = [todo];

export default mergeResolvers(resolvers);
