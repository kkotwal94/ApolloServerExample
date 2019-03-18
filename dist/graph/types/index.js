"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _todo = _interopRequireDefault(require("./todo"));

var types = [_todo.default];

var _default = (0, _mergeGraphqlSchemas.mergeTypes)(types, {
  all: true
});

exports.default = _default;