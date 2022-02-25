"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const StyledText = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nmargin-top:-100px;\ncolor:", ";\nfont-size:", "\n"])), item => item.color, item => item.fontSize);

var _default = StyledText;
exports.default = _default;