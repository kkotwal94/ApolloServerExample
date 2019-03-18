"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _constants = require("./constants");

var _models = _interopRequireDefault(require("./models"));

var _default = function _default() {
  // Find the appropriate database to connect to, default to localhost if not found.
  var connect = function connect() {
    _mongoose.default.connect(_constants.db, function (err) {
      if (err) {
        console.log("===>  Error connecting to ".concat(_constants.db));
        console.log("Reason: ".concat(err));
      } else {
        console.log("===>  Succeeded in connecting to ".concat(_constants.db));
      }
    });
  };

  connect();

  _mongoose.default.connection.on("error", console.log);

  _mongoose.default.connection.on("disconnected", connect);

  (0, _models.default)();
};

exports.default = _default;