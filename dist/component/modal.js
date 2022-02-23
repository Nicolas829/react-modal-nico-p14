"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const DivContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nwidth: ", ";\nheight: ", ";\ntop:", ";\nleft:", ";\nposition: ", "; \nbackground-color:", ";\nborder-radius:", ";\n   "])), item => item.width + "px", item => item.height + "px", item => item.top + "px", item => item.left + "px", item => item.position, item => item.bg, item => item.borderRadius);

const ModalText = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  \n   font-size:", ";\n   color:", ";\n   margin-top:", ";\n   margin-left:", ";  \n  \n   "])), item => item.fontSize + "px", item => item.color, item => item.textTop + "px", item => item.textLeft + "px");

console.log(DivContainer.width);

function Modal(props) {
  //const Container
  const [width, setWidth] = (0, _react.useState)(window.innerWidth / 2);
  const [height, setHeight] = (0, _react.useState)(window.innerHeight / 2);
  const [position, setPosition] = (0, _react.useState)("absolute");
  const [bg, setBg] = (0, _react.useState)("white");
  const [top, setTop] = (0, _react.useState)(height * 0.5);
  const [left, setLeft] = (0, _react.useState)(width * 0.5);
  const [borderRadius, setBorderRadius] = (0, _react.useState)(""); //const ModalText

  const [text, setText] = (0, _react.useState)("react Modal Version 1.0");
  const [fontSize, setFontSize] = (0, _react.useState)("17");
  const [color, setColor] = (0, _react.useState)("black");
  const [textTop, setTextTop] = (0, _react.useState)(height / 2 - fontSize);
  const [textLeft, setTextLeft] = (0, _react.useState)("0");
  (0, _react.useEffect)(() => {
    //const Container
    if (props.width) {
      setWidth(props.width);
    }

    if (props.height) {
      setHeight(props.height);
    }

    if (props.position) {
      setPosition(props.position);
    }

    if (props.bg) {
      setBg(props.bg);
    }

    if (props.top) {
      setTop(props.top);
    }

    if (props.left) {
      setLeft(props.left);
    }

    if (props.borderRadius) {
      setBorderRadius(props.borderRadius);
    } //const ModalText


    if (props.text) {
      setText(props.text);
    }

    if (props.fontSize) {
      setFontSize(props.fontSize);
    }

    if (props.color) {
      setColor(props.color);
    }

    if (props.textTop) {
      setTextTop(props.textTop);
    }

    if (props.textLeft) {
      setTextLeft(props.textLeft);
    }
  });

  if (props.show === true) {
    console.log(borderRadius);
    return /*#__PURE__*/_react.default.createElement(DivContainer, {
      width: width,
      height: height,
      position: position,
      bg: bg,
      top: top,
      left: left,
      borderRadius: borderRadius
    }, "       ", /*#__PURE__*/_react.default.createElement(ModalText, {
      fontSize: fontSize,
      color: color,
      textTop: textTop,
      textLeft: textLeft
    }, text));
  } else {
    return /*#__PURE__*/_react.default.createElement("div", null);
  }
}

var _default = Modal;
exports.default = _default;