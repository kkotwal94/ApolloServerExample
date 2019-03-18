"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _types = _interopRequireDefault(require("./types"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _graphqlTools = require("graphql-tools");

var executableSchema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: _types.default,
  resolvers: _resolvers.default
});
var _default = executableSchema;
exports.default = _default;