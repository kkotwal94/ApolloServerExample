"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "\n    type Todo {\n        _id: ID\n        author: String!\n        isComplete: Boolean!\n        todo: String!\n        createdAt: String\n        updatedAt: String\n        deletedAt: String\n    }\n\n    type Query {\n        allTodos: [Todo!]\n        aTodo(author: String!): [Todo!]\n    }\n\n    input TodoInput {\n        author: String!\n        isComplete: Boolean!\n        todo: String\n    }\n\n    type Mutation {\n        addTodo(\n            todo: TodoInput\n        ): Todo\n        updateTodo(\n            _id: ID!\n            todo: TodoInput\n        ): Todo\n        removeTodo(\n            _id: ID!\n        ): Todo\n    }\n";
exports.default = _default;