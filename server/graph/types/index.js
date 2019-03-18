import { mergeTypes } from "merge-graphql-schemas";
import todoType from "./todo";

const types = [todoType];

export default mergeTypes(types, { all: true });
