"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const StyledButtonClose = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nwidth:100px;\nheight:40px;\n\nfont-size:20px;\nborder-radius:15px;\nbackground:linear-gradient(90deg,#29487c 0%, #00f8ff 80%);\nbox-shadow: 1px 2px 2px 2px rgba(0,0,0,0.75);\n\n&:active {\n    \n      box-shadow: none;\n      transition:all 0.2s;\n    }\n\n"])));

var _default = StyledButtonClose;
exports.default = _default;