"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _default = {
  Query: {
    allTodos: function () {
      var _allTodos = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var todos;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                todos = [{
                  _id: 1,
                  author: "Karan",
                  isComplete: false,
                  todo: "Finish this tutorial"
                }];
                return _context.abrupt("return", todos);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function allTodos() {
        return _allTodos.apply(this, arguments);
      }

      return allTodos;
    }(),
    aTodo: function () {
      var _aTodo = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(root, _ref) {
        var author;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                author = _ref.author;
                return _context2.abrupt("return", [{
                  _id: 2,
                  author: "Karan",
                  isComplete: false,
                  todo: "Finish this tutorial 2"
                }]);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function aTodo(_x, _x2) {
        return _aTodo.apply(this, arguments);
      }

      return aTodo;
    }()
  }
};
exports.default = _default;