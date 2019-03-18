"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _morgan = _interopRequireDefault(require("morgan"));

var _db = require("./db");

var _types = _interopRequireDefault(require("./graph/types"));

var _resolvers = _interopRequireDefault(require("./graph/resolvers"));

var apollo = new _apolloServerExpress.ApolloServer({
  typeDefs: _types.default,
  resolvers: _resolvers.default
});
var app = (0, _express.default)();
(0, _db.connect)();
app.use((0, _morgan.default)("dev"));
apollo.applyMiddleware({
  app: app,
  path: "/graphql"
});
app.listen({
  port: 8000
}, function () {
  return console.log("\uD83D\uDE80 Server ready at http://localhost:8000/graphql$");
});