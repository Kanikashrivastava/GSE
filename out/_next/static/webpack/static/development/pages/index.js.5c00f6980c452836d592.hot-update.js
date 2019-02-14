webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/searchInfo.js":
/*!**************************************!*\
  !*** ./src/components/searchInfo.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _repo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./repo.js */ "./src/components/repo.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/kanika/Desktop/githubSearchEngine/src/components/searchInfo.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var styles = function styles(theme) {
  return {
    card: {
      height: "100%",
      width: theme.spacing.unit * 32,
      marginTop: theme.spacing.unit * 3,
      marginLeft: theme.spacing.unit * 12,
      marginRight: theme.spacing.unit * 7,
      boxShadow: "5px 5px 15px 15px #ded5d5",
      position: "static"
    },
    Button: {
      backgroundColor: "#d5d5d5",
      fontWeight: "bold",
      border: "1px solid transperent",
      width: theme.spacing.unit * 14,
      marginLeft: theme.spacing.unit * 2
    },
    button1: {
      backgroundColor: "blue",
      width: theme.spacing.unit * 12,
      height: theme.spacing.unit * 7
    },
    button2: {
      backgroundColor: "secondry",
      width: theme.spacing.unit * 12,
      height: theme.spacing.unit * 7
    },
    button3: {
      backgroundColor: "grey",
      width: theme.spacing.unit * 12
    },
    button4: {
      backgroundColor: "black",
      width: theme.spacing.unit * 12
    },
    text: {
      fontSize: theme.spacing.unit * 3
    },
    textName: {
      fontSize: theme.spacing.unit * 3
    },
    image: {
      height: theme.spacing.unit * 30,
      width: theme.spacing.unit * 25
    },
    progress: {
      marginLeft: theme.spacing.unit * 60,
      fontSize: theme.spacing.unit * 3
    }
  };
};

var SearchInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchInfo, _React$Component);

  function SearchInfo() {
    var _this;

    _classCallCheck(this, SearchInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchInfo).call(this));
    _this.state = {};
    return _this;
  }

  _createClass(SearchInfo, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          userDetails = _this$props.userDetails;

      if (userDetails == "") {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: classes.progress,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, "Please Enter Search String");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: classes.card,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: userDetails.avatar_url,
        className: classes.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: userDetails.html_url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        size: "small",
        className: classes.Button,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "View profile"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: classes.textName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, userDetails.login), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: classes.text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, userDetails.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-building-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, userDetails.company), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-map-marker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, userDetails.location, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "fa fa-envelope",
        href: "{userDetails.email}",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, userDetails.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "contained",
        color: "secondary",
        className: classes.button1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, userDetails.public_repos, " Public Repo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "contained",
        color: "secondary",
        className: classes.button2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, userDetails.public_gists, " Public Gists"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "contained",
        color: "secondary",
        className: classes.button3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, userDetails.followers, " Followers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "contained",
        color: "secondary",
        className: classes.button4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, userDetails.following, " Following"))));
    }
  }]);

  return SearchInfo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

SearchInfo.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(SearchInfo));

/***/ })

})
//# sourceMappingURL=index.js.5c00f6980c452836d592.hot-update.js.map