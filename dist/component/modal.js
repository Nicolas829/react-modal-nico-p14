"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

var _react = _interopRequireDefault(require("react"));

var _button = _interopRequireDefault(require("./button"));

var _container = _interopRequireDefault(require("./container"));

var _image = _interopRequireDefault(require("./image"));

var _text = _interopRequireDefault(require("./text"));

var _check = _interopRequireDefault(require("../assets/check.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Modal(_ref) {
  let {
    show,
    close,
    title,
    img,
    width = window.innerWidth / 3,
    height = window.innerHeight / 2.1,
    left = (window.innerWidth - width) / 2,
    top = (window.innerHeight - height) / 2,
    bg = "white",
    text,
    justifyContent = "space-around",
    borderRadius = "150px ",
    display = "flex",
    alignItems = "center",
    flexDirection = "column",
    opacity = "0.8",
    boxShadow,
    fontSize,
    color = "black"
  } = _ref;

  if (show) {
    return /*#__PURE__*/_react.default.createElement(_container.default, {
      width: width,
      height: height,
      bg: bg,
      left: left,
      top: top,
      borderRadius: borderRadius,
      display: display,
      alignItems: alignItems,
      justifyContent: justifyContent,
      flexDirection: flexDirection,
      boxShadow: boxShadow,
      opacity: opacity
    }, /*#__PURE__*/_react.default.createElement(_image.default, {
      src: _check.default
    }), /*#__PURE__*/_react.default.createElement(_text.default, {
      fontSize: fontSize,
      color: color
    }, text), /*#__PURE__*/_react.default.createElement(_button.default, {
      onClick: e => {
        close();
      }
    }, "Close"));
  }

  if (close) {
    return null;
  } else {
    return null;
  }
}