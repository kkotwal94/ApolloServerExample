"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _todo = _interopRequireDefault(require("./todo"));

var resolvers = [_todo.default];

var _default = (0, _mergeGraphqlSchemas.mergeResolvers)(resolvers);

exports.default = _default;