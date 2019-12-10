module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Abilities/index.js":
/*!***************************************!*\
  !*** ./components/Abilities/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _props_graphicTags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../props/graphicTags */ "./props/graphicTags.js");
/* harmony import */ var react_sweet_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-sweet-progress */ "react-sweet-progress");
/* harmony import */ var react_sweet_progress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_sweet_progress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_sweet_progress_lib_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sweet-progress/lib/style.css */ "./node_modules/react-sweet-progress/lib/style.css");
/* harmony import */ var react_sweet_progress_lib_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sweet_progress_lib_style_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\GitProjects\\WebPortifolio\\components\\Abilities\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Abilities__Main",
  componentId: "sc-147kc7b-0"
})(["width:100%;height:60vh;display:flex;flex-direction:row;justify-content:space-around;align-items:center;background:#f7f7f7;"]);
const Texts = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Abilities__Texts",
  componentId: "sc-147kc7b-1"
})(["width:40%;height:70%;display:flex;flex-direction:column;text-align:justify;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.text.withConfig({
  displayName: "Abilities__Title",
  componentId: "sc-147kc7b-2"
})(["font-size:27px;color:black;padding-bottom:5vh;"]);
const Desc = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.text.withConfig({
  displayName: "Abilities__Desc",
  componentId: "sc-147kc7b-3"
})(["font-size:17px;color:black;"]);
const Graphics = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Abilities__Graphics",
  componentId: "sc-147kc7b-4"
})(["width:50%;height:70%;"]);
function index(props) {
  return __jsx(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(Texts, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Some About my Abilities"), __jsx(Desc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply.")), __jsx(Graphics, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, _props_graphicTags__WEBPACK_IMPORTED_MODULE_2__["GraphicCards"].map(res => {
    return __jsx(_props_graphicTags__WEBPACK_IMPORTED_MODULE_2__["GraphicTag"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(_props_graphicTags__WEBPACK_IMPORTED_MODULE_2__["GraphicTexts"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx(_props_graphicTags__WEBPACK_IMPORTED_MODULE_2__["TitleTag"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, res.Title), res.Desc), __jsx(_props_graphicTags__WEBPACK_IMPORTED_MODULE_2__["PercentText"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, res.PercentNumber, "%")), __jsx(_props_graphicTags__WEBPACK_IMPORTED_MODULE_2__["GraphicScales"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx(react_sweet_progress__WEBPACK_IMPORTED_MODULE_3__["Progress"], {
      percent: res.PercentNumber,
      status: "default",
      theme: {
        default: {
          color: 'black',
          symbol: ''
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })));
  })));
}

/***/ }),

/***/ "./components/AboutMe/index.js":
/*!*************************************!*\
  !*** ./components/AboutMe/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _props_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../props/tags */ "./props/tags.js");
/* harmony import */ var _props_linkButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../props/linkButtons */ "./props/linkButtons.js");
/* harmony import */ var react_typical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-typical */ "react-typical");
/* harmony import */ var react_typical__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_typical__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\GitProjects\\WebPortifolio\\components\\AboutMe\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 //Styled Div

const Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AboutMe__Main",
  componentId: "yxhggy-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;"]);
const MiniContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AboutMe__MiniContent",
  componentId: "yxhggy-1"
})(["width:80%;height:80%;display:flex;flex-direction:row;justify-content:space-between;"]);
const VerticalContent1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AboutMe__VerticalContent1",
  componentId: "yxhggy-2"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;"]);
const BorderIndex = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AboutMe__BorderIndex",
  componentId: "yxhggy-3"
})(["border:10px solid black;width:26%;height:70%;z-index:-2;position:absolute;"]);
const Photo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AboutMe__Photo",
  componentId: "yxhggy-4"
})(["background:blue;width:60%;height:85%;margin-right:2vw;margin-bottom:50px;z-index:-1;position:relative;"]);
const VerticalContent2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AboutMe__VerticalContent2",
  componentId: "yxhggy-5"
})(["width:55%;height:100%;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AboutMe__Title",
  componentId: "yxhggy-6"
})(["width:100%;height:15%;display:flex;justify-content:flex-start;align-items:flex-start;"]);
const DescriptionBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AboutMe__DescriptionBox",
  componentId: "yxhggy-7"
})(["width:100%;height:70%;display:flex;justify-content:space-around;align-items:center;flex-direction:column;"]);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AboutMe__Description",
  componentId: "yxhggy-8"
})(["width:100%;height:45%;display:flex;flex-direction:row;justify-content:space-between;"]);
const TagBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AboutMe__TagBox",
  componentId: "yxhggy-9"
})(["height:100%;width:49%;"]);
const Buttons = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AboutMe__Buttons",
  componentId: "yxhggy-10"
})(["width:100%;height:15%;display:flex;align-items:center;"]); //Styled Text

const TitleText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.text.withConfig({
  displayName: "AboutMe__TitleText",
  componentId: "yxhggy-11"
})(["font-size:28px;color:black;span{color:#4484CE;}"]);
const DescriptionText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.text.withConfig({
  displayName: "AboutMe__DescriptionText",
  componentId: "yxhggy-12"
})(["font-size:18px;color:gray;text-align:justify;display:flex;justify-content:center;align-items:center;span{color:#4484CE;font-weight:bold;}"]);
function index(props) {
  return __jsx(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(MiniContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(VerticalContent1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(BorderIndex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), __jsx(Photo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })), __jsx(VerticalContent2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(TitleText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "I'm Gabriel Cardoso and", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(react_typical__WEBPACK_IMPORTED_MODULE_4___default.a, {
    steps: [' Programmer', 2000, ' Freelancer', 2000, ' Game Dev', 2000],
    loop: Infinity,
    wait: 1000,
    wrapper: "span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }))))), __jsx(DescriptionBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(DescriptionText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Hi! My name is ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Gabriel Cardoso"), ". I am a Web Developer, and I'm very passionate and dedicated to my work. With 2 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration."))), __jsx(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx(TagBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, _props_tags__WEBPACK_IMPORTED_MODULE_2__["Tag1"].map(res => {
    return __jsx(_props_tags__WEBPACK_IMPORTED_MODULE_2__["Block"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx(_props_tags__WEBPACK_IMPORTED_MODULE_2__["TagIcon"], {
      src: `./static/icons/${res.icon}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }), __jsx(_props_tags__WEBPACK_IMPORTED_MODULE_2__["BlockTexts"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, __jsx(_props_tags__WEBPACK_IMPORTED_MODULE_2__["BlockTitle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, res.textTitle)), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, res.textDesc)));
  })), __jsx(TagBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, _props_tags__WEBPACK_IMPORTED_MODULE_2__["Tag2"].map(res => {
    return __jsx(_props_tags__WEBPACK_IMPORTED_MODULE_2__["Block"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, __jsx(_props_tags__WEBPACK_IMPORTED_MODULE_2__["TagIcon"], {
      src: `./static/icons/${res.icon}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }), __jsx(_props_tags__WEBPACK_IMPORTED_MODULE_2__["BlockTexts"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, __jsx(_props_tags__WEBPACK_IMPORTED_MODULE_2__["BlockTitle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, res.textTitle)), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, res.textDesc)));
  })))), __jsx(Buttons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx(_props_linkButtons__WEBPACK_IMPORTED_MODULE_3__["AllBtn"], {
    href: _props_linkButtons__WEBPACK_IMPORTED_MODULE_3__["Btn"].Linkedin_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, _props_linkButtons__WEBPACK_IMPORTED_MODULE_3__["Btn"].Linkedin_text)), __jsx(_props_linkButtons__WEBPACK_IMPORTED_MODULE_3__["AllBtn"], {
    href: _props_linkButtons__WEBPACK_IMPORTED_MODULE_3__["Btn"].Github_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, _props_linkButtons__WEBPACK_IMPORTED_MODULE_3__["Btn"].Github_text))))));
}

/***/ }),

/***/ "./components/Banner/index.js":
/*!************************************!*\
  !*** ./components/Banner/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\GitProjects\\WebPortifolio\\components\\Banner\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Banner__Main",
  componentId: "mqiqqr-0"
})(["background:url(./static/BannerOpacity.png) no-repeat center center/ auto 100%;width:100%;height:120vh;display:flex;justify-content:center;align-items:center;"]);
const Information = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Banner__Information",
  componentId: "mqiqqr-1"
})(["width:40vw;height:45vh;display:flex;justify-content:space-around;flex-direction:column;align-items:center;"]);
const ProfileCircle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Banner__ProfileCircle",
  componentId: "mqiqqr-2"
})(["background:#fff;width:150px;height:150px;border-radius:50%;display:flex;justify-content:center;align-items:center;"]);
const InsideCircle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Banner__InsideCircle",
  componentId: "mqiqqr-3"
})(["background:black;width:145px;height:145px;border-radius:50%;"]);
const Texts = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Banner__Texts",
  componentId: "mqiqqr-4"
})(["height:40%;width:100%;display:flex;justify-content:space-around;align-items:center;flex-direction:column;"]);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.text.withConfig({
  displayName: "Banner__Name",
  componentId: "mqiqqr-5"
})(["font-size:25px;font-family:'Lato',sans-serif;font-weight:bold;color:#fff;"]);
const SwitchText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.text.withConfig({
  displayName: "Banner__SwitchText",
  componentId: "mqiqqr-6"
})(["font-size:65px;font-family:'Lato',sans-serif;font-weight:bold;color:#4484CE;"]);
const Arrow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Banner__Arrow",
  componentId: "mqiqqr-7"
})(["width:50px;height:50px;position:absolute;top:105%;display:flex;justify-content:center;align-items:center;"]);
function index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(Information, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(ProfileCircle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(InsideCircle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), __jsx(Texts, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "GABRIEL CARDOSO"), __jsx(SwitchText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "PROGRAMER"))), __jsx(Arrow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("img", {
    src: "./static/arrow.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./components/ContactMe/index.js":
/*!***************************************!*\
  !*** ./components/ContactMe/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\GitProjects\\WebPortifolio\\components\\ContactMe\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ContactMe__Main",
  componentId: "sc-1lu0i0g-0"
})(["background:gray;height:100vh;width:100%;display:flex;flex-direction:column;justify-content:space-around;align-items:center;"]);
const TitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ContactMe__TitleDiv",
  componentId: "sc-1lu0i0g-1"
})(["background:green;width:90%;height:15vh;display:flex;align-items:center;"]);
const Box = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ContactMe__Box",
  componentId: "sc-1lu0i0g-2"
})(["background:#4484CE;height:100%;width:10px;"]);
const Texts = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ContactMe__Texts",
  componentId: "sc-1lu0i0g-3"
})(["background:pink;width:60vw;height:90%;display:flex;flex-direction:column;margin:0 20px;"]);
const TextTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ContactMe__TextTitle",
  componentId: "sc-1lu0i0g-4"
})(["width:30%;height:70%;background:yellow;"]);
const TextDesc = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ContactMe__TextDesc",
  componentId: "sc-1lu0i0g-5"
})(["width:30%;height:30%;background:red;"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ContactMe__Content",
  componentId: "sc-1lu0i0g-6"
})(["background:cyan;width:90%;height:60vh;"]);
function index(props) {
  return __jsx(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(TitleDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(Box, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(Texts, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(TextTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "CONTACT ME")), __jsx(TextDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Get in touch with me")))), __jsx(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Services/index.js":
/*!**************************************!*\
  !*** ./components/Services/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _props_serviceCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../props/serviceCards */ "./props/serviceCards.js");
var _jsxFileName = "C:\\GitProjects\\WebPortifolio\\components\\Services\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Services__Main",
  componentId: "sc-1scr0xy-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:flex-start;flex-direction:column;padding:10vh 5vw;background:#fff;"]);
const TitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Services__TitleDiv",
  componentId: "sc-1scr0xy-1"
})(["width:90%;height:15%;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.text.withConfig({
  displayName: "Services__Title",
  componentId: "sc-1scr0xy-2"
})(["font-size:40px;font-weight:bold;span{color:#4484CE;}"]);
const Underline = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Services__Underline",
  componentId: "sc-1scr0xy-3"
})(["background:#4484CE;width:5vw;margin-top:10px;height:2.5px;"]);
const ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Services__ContentDiv",
  componentId: "sc-1scr0xy-4"
})(["width:90%;height:60%;margin-top:10vh;display:flex;flex-direction:row;justify-content:space-between;"]);
const ServiceCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Services__ServiceCard",
  componentId: "sc-1scr0xy-5"
})(["width:30%;height:100%;box-shadow:0 0 20px rgba(0,0,0,.1);display:flex;background:#fff;justify-content:center;align-items:center;"]);
function index(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(TitleDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Quality ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Services")), __jsx(Underline, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), __jsx(ContentDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, _props_serviceCards__WEBPACK_IMPORTED_MODULE_2__["ServiceCards"].map(res => {
    return __jsx(ServiceCard, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(_props_serviceCards__WEBPACK_IMPORTED_MODULE_2__["TextsBox"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx(_props_serviceCards__WEBPACK_IMPORTED_MODULE_2__["TitleCards"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, res.Title_Text), __jsx(_props_serviceCards__WEBPACK_IMPORTED_MODULE_2__["Description"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, res.Desc_Text), __jsx(_props_serviceCards__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      href: res.Link_Link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, res.Link_Text)));
  }))));
}

/***/ }),

/***/ "./node_modules/react-sweet-progress/lib/style.css":
/*!*********************************************************!*\
  !*** ./node_modules/react-sweet-progress/lib/style.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner/index.js");
/* harmony import */ var _components_AboutMe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AboutMe */ "./components/AboutMe/index.js");
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Services */ "./components/Services/index.js");
/* harmony import */ var _components_Abilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Abilities */ "./components/Abilities/index.js");
/* harmony import */ var _components_ContactMe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ContactMe */ "./components/ContactMe/index.js");
var _jsxFileName = "C:\\GitProjects\\WebPortifolio\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_components_AboutMe__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_components_Abilities__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_components_Services__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_components_ContactMe__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
}

/***/ }),

/***/ "./props/graphicTags.js":
/*!******************************!*\
  !*** ./props/graphicTags.js ***!
  \******************************/
/*! exports provided: GraphicTag, GraphicTexts, TitleTag, PercentText, GraphicScales, PercentBar, GraphicCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicTag", function() { return GraphicTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicTexts", function() { return GraphicTexts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleTag", function() { return TitleTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentText", function() { return PercentText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicScales", function() { return GraphicScales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentBar", function() { return PercentBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicCards", function() { return GraphicCards; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GraphicTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "graphicTags__GraphicTag",
  componentId: "yud892-0"
})(["height:25%;width:100%;display:flex;flex-direction:column;"]);
const GraphicTexts = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "graphicTags__GraphicTexts",
  componentId: "yud892-1"
})(["width:100%;height:50%;display:flex;justify-content:space-between;"]);
const TitleTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "graphicTags__TitleTag",
  componentId: "yud892-2"
})(["font-size:15px;color:black;span{font-weight:bold;}"]);
const PercentText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "graphicTags__PercentText",
  componentId: "yud892-3"
})(["font-size:15px;color:black;font-weight:bold;"]);
const GraphicScales = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "graphicTags__GraphicScales",
  componentId: "yud892-4"
})(["width:100%;height:50%;display:flex;align-items:flex-start;"]);
const PercentBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "graphicTags__PercentBar",
  componentId: "yud892-5"
})(["background:black;width:100%;height:5px;border-radius:1px;"]);
const GraphicCards = [{
  Title: 'Unity',
  Desc: ' - 3 years of experience',
  PercentNumber: '95'
}, {
  Title: 'Javascript',
  Desc: ' - 2 years of experience',
  PercentNumber: '70'
}, {
  Title: 'React',
  Desc: ' - 2 years of experience',
  PercentNumber: '85'
}, {
  Title: 'C#',
  Desc: ' - 3 years of experience',
  PercentNumber: '90'
}];

/***/ }),

/***/ "./props/linkButtons.js":
/*!******************************!*\
  !*** ./props/linkButtons.js ***!
  \******************************/
/*! exports provided: AllBtn, Btn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllBtn", function() { return AllBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Btn", function() { return Btn; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const AllBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "linkButtons__AllBtn",
  componentId: "z0jiz4-0"
})(["width:17vw;height:7.5vh;background:#4484CE;border:none;display:flex;align-items:center;justify-content:center;margin-right:20px;color:#fff;padding:0;cursor:pointer;font-size:18px;text-decoration:none;"]);
const Btn = {
  Linkedin_text: 'LinkedIn',
  Linkedin_link: 'https://www.linkedin.com/in/gabriel-cardoso-258576189/',
  Github_text: 'Github',
  Github_link: 'https://github.com/GabrielC4rds'
};

/***/ }),

/***/ "./props/serviceCards.js":
/*!*******************************!*\
  !*** ./props/serviceCards.js ***!
  \*******************************/
/*! exports provided: TextsBox, TitleCards, Description, Link, ServiceCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextsBox", function() { return TextsBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCards", function() { return TitleCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCards", function() { return ServiceCards; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const TextsBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "serviceCards__TextsBox",
  componentId: "an75lv-0"
})(["width:80%;height:55%;display:flex;flex-direction:column;justify-content:space-between;margin-top:50px;"]);
const TitleCards = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.text.withConfig({
  displayName: "serviceCards__TitleCards",
  componentId: "an75lv-1"
})(["color:black;font-size:30px;font-weight:bold;"]);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.text.withConfig({
  displayName: "serviceCards__Description",
  componentId: "an75lv-2"
})(["color:gray;font-size:20px;"]);
const Link = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "serviceCards__Link",
  componentId: "an75lv-3"
})(["color:#E3872D;cursor:pointer;font-size:20px;text-decoration:none;"]);
const ServiceCards = [{
  Title_Text: 'Web Development',
  Desc_Text: 'Web development is the work involved in developing a web site for the Internet...',
  Link_Text: 'See More',
  Link_Link: 'https://github.com/GabrielC4rds'
}, {
  Title_Text: 'Game Development',
  Desc_Text: 'Game development is the work involved in developing a web site for the Internet...',
  Link_Text: 'See More',
  Link_Link: 'https://gamejolt.com/@GabrielC4rds'
}, {
  Title_Text: 'VR Development',
  Desc_Text: 'Game development is the work involved in developing a web site for the Internet...',
  Link_Text: 'See More',
  Link_Link: 'https://play.google.com/store/apps/details?id=com.dvida.pascoa&hl=en_SG'
}];

/***/ }),

/***/ "./props/tags.js":
/*!***********************!*\
  !*** ./props/tags.js ***!
  \***********************/
/*! exports provided: Block, TagIcon, BlockTexts, BlockTitle, Tag1, Tag2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagIcon", function() { return TagIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockTexts", function() { return BlockTexts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockTitle", function() { return BlockTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag1", function() { return Tag1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag2", function() { return Tag2; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Block = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "tags__Block",
  componentId: "sc-1yjw8k0-0"
})(["width:100%;height:25%;display:flex;flex-direction:row;align-items:center;"]);
const TagIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "tags__TagIcon",
  componentId: "sc-1yjw8k0-1"
})(["width:1.5vw;height:3vh;"]);
const BlockTexts = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "tags__BlockTexts",
  componentId: "sc-1yjw8k0-2"
})(["font-size:14px;width:100%;height:100%;display:flex;align-items:flex-end;padding-left:5px;color:Black;font-weight:bold;p:nth-child(2){color:#6f6f6f;font-weight:normal;}"]);
const BlockTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "tags__BlockTitle",
  componentId: "sc-1yjw8k0-3"
})(["width:32%;height:100%;display:flex;align-items:flex-end;padding-left:5px;"]);
const Tag1 = [{
  icon: 'gift.png',
  textTitle: 'Birthday:',
  textDesc: '02.05.1999'
}, {
  icon: 'location-point.png',
  textTitle: 'Location:',
  textDesc: 'Petrópolis, Brasil'
}, {
  icon: 'email.png',
  textTitle: 'Mail:',
  textDesc: 'gabxd4@gmail.com'
}, {
  icon: 'open-book.png',
  textTitle: 'Study:',
  textDesc: 'Level Up Academy'
}];
const Tag2 = [{
  icon: 'calendar.png',
  textTitle: 'Age:',
  textDesc: '20'
}, {
  icon: 'console.png',
  textTitle: 'Interest:',
  textDesc: 'Games, Rock'
}, {
  icon: 'graduation-cap.png',
  textTitle: 'Degree:',
  textDesc: 'Junior'
}, {
  icon: 'phone-call.png',
  textTitle: 'Phone:',
  textDesc: '+55 024 981890310'
}];

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\GitProjects\WebPortifolio\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-sweet-progress":
/*!***************************************!*\
  !*** external "react-sweet-progress" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sweet-progress");

/***/ }),

/***/ "react-typical":
/*!********************************!*\
  !*** external "react-typical" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-typical");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map