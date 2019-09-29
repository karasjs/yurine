"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _homunculus = _interopRequireDefault(require("homunculus"));

var _InnerTree = _interopRequireDefault(require("./InnerTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Token = _homunculus["default"].getClass('token', 'csx');

var Node = _homunculus["default"].getClass('node', 'csx');

var S = {};
S[Token.LINE] = S[Token.COMMENT] = S[Token.BLANK] = true;
var res = '';

function parse(node) {
  var prmr = node.leaf(1);

  if (prmr && prmr.name() === Node.PRMREXPR) {
    var objltr = prmr.first();
    var tree = new _InnerTree["default"]();
    res = tree.parse(node);
    res = res.replace(/^(\s*){/, '$1').replace(/}(\s*)$/, '$1');
  } else {
    var _tree = new _InnerTree["default"]();

    res = _tree.parse(node);
    res = res.replace(/^(\s*){/, '$1').replace(/}(\s*)$/, '$1');
  }

  return res;
}

var _default = parse;
exports["default"] = _default;