"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.currentUTC = exports.db = void 0;

var _moment = _interopRequireDefault(require("moment"));

var db = process.env.MONGOHQ_URL || process.env.MONGODB_URI || "mongodb://localhost/Pokemon";
exports.db = db;

var currentUTC = _moment.default.utc().local().format("YYYY-MM-DD HH:mm:ss");

exports.currentUTC = currentUTC;
var _default = {
  db: db,
  currentUTC: currentUTC
};
exports.default = _default;