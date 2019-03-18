"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _todo = _interopRequireDefault(require("../../db/models/todo"));

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
                _context.next = 2;
                return _todo.default.find();

              case 2:
                todos = _context.sent;
                return _context.abrupt("return", todos);

              case 4:
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
        var author, todos;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                author = _ref.author;
                _context2.next = 3;
                return _todo.default.find({
                  author: author
                });

              case 3:
                todos = _context2.sent;
                return _context2.abrupt("return", todos);

              case 5:
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
  },
  Mutation: {
    addTodo: function () {
      var _addTodo = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(root, _ref2) {
        var todo, addedTodo;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                todo = _ref2.todo;
                _context3.next = 3;
                return _todo.default.create(todo);

              case 3:
                addedTodo = _context3.sent;
                return _context3.abrupt("return", addedTodo);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function addTodo(_x3, _x4) {
        return _addTodo.apply(this, arguments);
      }

      return addTodo;
    }(),
    updateTodo: function () {
      var _updateTodo = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(root, _ref3) {
        var _id, todo, updatedTodo;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _id = _ref3._id, todo = _ref3.todo;
                _context4.next = 3;
                return _todo.default.findByIdAndUpdate(_id, todo, {
                  new: true
                });

              case 3:
                updatedTodo = _context4.sent;
                console.log(updatedTodo);
                return _context4.abrupt("return", updatedTodo);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updateTodo(_x5, _x6) {
        return _updateTodo.apply(this, arguments);
      }

      return updateTodo;
    }(),
    removeTodo: function () {
      var _removeTodo = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(root, _ref4) {
        var _id;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _id = _ref4._id;
                _context5.next = 3;
                return _todo.default.findByIdAndRemove(_id);

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function removeTodo(_x7, _x8) {
        return _removeTodo.apply(this, arguments);
      }

      return removeTodo;
    }()
  }
};
exports.default = _default;