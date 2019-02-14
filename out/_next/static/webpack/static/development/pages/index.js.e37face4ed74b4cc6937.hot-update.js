webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/user.js":
/*!********************************!*\
  !*** ./src/components/user.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _searchInfo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./searchInfo.js */ "./src/components/searchInfo.js");
/* harmony import */ var _repo_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./repo.js */ "./src/components/repo.js");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popup.js */ "./src/components/popup.js");

var _jsxFileName = "/home/kanika/Desktop/githubSearchEngine/src/components/user.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var styles = function styles(theme) {
  return {
    divRoot: {
      display: "flex"
    },
    root: {
      backgroundColor: "#24292e"
    },
    progress: {
      margin: theme.spacing.unit * 2
    },
    inputInput: _defineProperty({
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit,
      marginLeft: theme.spacing.unit * 31,
      transition: theme.transitions.create("width")
    }, theme.breakpoints.up("sm"), {
      width: 250
    }),
    linkedin: {
      marginLeft: theme.spacing.unit * 15,
      color: "White",
      textDecoration: "none"
    },
    suggestionBox: _defineProperty({
      backgroundColor: "white",
      position: "absolute",
      top: "46px",
      left: "40%",
      color: "black",
      cursor: "pointer",
      transition: theme.transitions.create("width")
    }, theme.breakpoints.up("sm"), {
      width: 270
    })
  };
};

var SUGGESTIONS_URL = "https://api.github.com/search/users?q={userName}";
var CLIENT_ID = "4ddf9cf2655d5a56cc61";
var CLIENT_SECRET = "695a1d2b6e44672200c8f31a01530f10d9e6206c";
var USER_URL = "https://api.github.com/users/{userName}?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET;
var REPO_URL = "https://api.github.com/users/{userName}/repos?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET;

var User =
/*#__PURE__*/
function (_React$Component) {
  _inherits(User, _React$Component);

  function User(props) {
    var _this;

    _classCallCheck(this, User);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(User).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getUserInputData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var txtValue, userUrl, repoUrl, response, repoUrlResponse, githubUserInfo, githubUserRepo;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              txtValue = _this.search.value;
              userUrl = USER_URL.replace("{userName}", txtValue);
              repoUrl = REPO_URL.replace("{userName}", txtValue);
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(userUrl);

            case 6:
              response = _context.sent;
              _context.next = 9;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(repoUrl);

            case 9:
              repoUrlResponse = _context.sent;
              console.log("user profile", response.data);
              console.log("user repo", repoUrlResponse.data);

              if (response != "") {
                githubUserInfo = response.data;
                githubUserRepo = repoUrlResponse.data;

                _this.setState({
                  userDetails: githubUserInfo,
                  userRepoInfo: githubUserRepo,
                  user_search: ""
                });
              } else {
                alert("please check your internet connection!");
              }

              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              alert("This user does not exist on github");

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 15]]);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getInput",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var txt, suggestion_url, suggestionUrlResponse, filterResponse;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({
                user_search: _this.search.value
              });

              if (!(_this.search.value != "")) {
                _context2.next = 10;
                break;
              }

              txt = _this.search.value;
              suggestion_url = SUGGESTIONS_URL.replace("{userName}", txt);
              _context2.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(suggestion_url);

            case 6:
              suggestionUrlResponse = _context2.sent;
              filterResponse = suggestionUrlResponse.data.items.slice(0, 5).filter(function (value) {
                return value;
              });
              console.log(filterResponse, "respone aa raha hai");

              _this.setState({
                userSuggetionsInfo: filterResponse
              });

            case 10:
              if (_this.search.value != "") {
                console.log(_this.search.value);

                _this.setState({
                  display: "block"
                });
              }

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyPress", function (event) {
      var code = event.keyCode || event.which;

      if (code === 13) {
        _this.inputHandler();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "inputHandler", function () {
      _this.setState({
        user_search: _this.search.value
      });

      if (_this.search.value == "") {
        alert("please enter a username!!!");
      } else {
        _this.getUserInputData();
      }
    });

    _this.state = {
      user_search: "",
      userDetails: [],
      userRepoInfo: [],
      displayModal: false,
      userSuggetionsInfo: [],
      display: "none"
    };
    return _this;
  }

  _createClass(User, [{
    key: "render",
    value: function render() {
      var _this2 = this,
          _React$createElement;

      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
        position: "static",
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "h6",
        color: "inherit",
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Github Search...."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", (_React$createElement = {
        placeholder: "Enter a Github Uername",
        ref: function ref(input) {
          return _this2.search = input;
        },
        className: classes.inputRoot
      }, _defineProperty(_React$createElement, "className", classes.inputInput), _defineProperty(_React$createElement, "onKeyPress", this.handleKeyPress), _defineProperty(_React$createElement, "onChange", this.getInput), _defineProperty(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 158
      }), _defineProperty(_React$createElement, "__self", this), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: classes.suggestionBox,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, this.state.userSuggetionsInfo.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }, item.login);
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "https://linkedin.com/in/kanika-shrivastav-a090ba158/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "h6",
        color: "inherit",
        className: classes.linkedin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "LinkedIn")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "https://pankajladhar.github.io/GHSE/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "h6",
        color: "inherit",
        className: classes.linkedin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "GitHub")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: classes.divRoot,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_searchInfo_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        userDetails: this.state.userDetails,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_repo_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        userRepoInfo: this.state.userRepoInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_popup_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        displayModal: this.state.displayModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      })));
    }
  }]);

  return User;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

User.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(User));

/***/ })

})
//# sourceMappingURL=index.js.e37face4ed74b4cc6937.hot-update.js.map