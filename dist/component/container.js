"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const StyleContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\nwidth: ", ";\nheight: ", ";\ntop:", ";\nleft:", ";\nbackground-color:", ";\nborder-radius:", ";\ndisplay:", ";\njustify-content:", ";\nflex-direction:", ";\nalign-items:", ";\nbox-shadow:", ";\ncolor:", ";\nopacity:", ";\nposition:absolute  ;   \n   "])), item => item.width + "px", item => item.height + "px", item => item.top + "px", item => item.left + "px", item => item.bg, item => item.borderRadius, item => item.display, item => item.justifyContent, item => item.flexDirection, item => item.alignItems, item => item.boxShadow, item => item.color, item => item.opacity);

var _default = StyleContainer;
exports.default = _default;