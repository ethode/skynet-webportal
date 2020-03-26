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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+aWK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dZZJ");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zqBN");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */




const API_ENDPOINT =  false ? undefined : "/api";

const Stats = () => {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: stats,
    1: setStats
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();

  if (loading) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${API_ENDPOINT}/stats`).then(response => {
      console.log(response);
      setLoading(false);
      setStats(response.data);
    }).catch(e => {
      console.log('ERROR:', e);
    });
  }

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    color: "white"
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], null, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    sx: {
      alignItems: "center",
      height: 120
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__["Box"], null, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    sx: {
      fontWeight: 700
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/"
  }, "Sia Skynet"))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    sx: {
      ml: "auto"
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    href: "/stats"
  }, "Statistics"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    href: "https://sia.tech/",
    target: "_blank"
  }, "About Sia"))))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__["Box"], null, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], null, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("h2", null, "Portal Statistics"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    sx: {
      height: 400,
      justifyContent: "center",
      alignItems: "center"
    }
  }, loading && Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], null), !loading && _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(stats)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Stats);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+aWK");


/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dZZJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "zqBN":
/***/ (function(module, exports) {

module.exports = require("theme-ui");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });