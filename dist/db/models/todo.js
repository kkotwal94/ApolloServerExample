"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var TodoSchema = new _mongoose.Schema({
  author: String,
  deletedAt: {
    type: Date
  },
  isComplete: Boolean,
  todo: String
}, {
  timestamps: true
});

var _default = _mongoose.default.model("Todo", TodoSchema);

exports.default = _default;