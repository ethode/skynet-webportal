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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__("ANpm");

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__("zqBN");

// EXTERNAL MODULE: /home/lightsky/skynet-webportal/node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("OCF2");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: /home/lightsky/skynet-webportal/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: external "react-dropzone"
var external_react_dropzone_ = __webpack_require__("aNEW");

// CONCATENATED MODULE: ./src/components/Dropzone.tsx


var __jsx = external_react_default.a.createElement;

/** @jsx jsx */





/**
 * nginx is setup to automatically handle and rewrite the url path.
 */

const API_ENDPOINT =  false ? undefined : "/api";
const pName = external_ramda_["prop"]("name");
const splitFilename = external_ramda_["compose"](external_ramda_["head"], external_ramda_["split"](".sia"));

function MyDropzone() {
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(null);
  const {
    0: link,
    1: setLink
  } = Object(external_react_["useState"])("");
  const onDrop = Object(external_react_["useCallback"])(acceptedFiles => {
    setLoading(true);
    const file = acceptedFiles[0];

    if (!file) {
      setError("An unexpected error occured. Check console for details.");
      setLoading(false);
      return;
    }

    const url = `${API_ENDPOINT}/skyfile?filename=${file.name}`;
    const fd = new FormData();
    fd.append("file", file);
    fetch(url, {
      method: "POST",
      body: fd,
      mode: "cors"
    }).then(res => {
      return res.json();
    }).then(({
      skylink
    }) => {
      console.log("WE OUT HERE BOYS", skylink);
      setLink(`sia://${skylink}`);
      setLoading(false);
    }).catch(e => {
      console.log("Upload error:", e);
      setError("An unexpected error occured. Check console for details.");
      setLoading(false);
    });
  }, [loading, setLoading, error, setError]);
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = Object(external_react_dropzone_["useDropzone"])({
    onDrop
  });
  return Object(external_theme_ui_["jsx"])(external_theme_ui_["Box"], null, link ? Object(external_theme_ui_["jsx"])(external_theme_ui_["Flex"], {
    sx: {
      height: 400,
      justifyContent: "center",
      alignItems: "center"
    }
  }, Object(external_theme_ui_["jsx"])("h5", null, link)) : Object(external_theme_ui_["jsx"])(external_theme_ui_["Flex"], _extends({}, getRootProps(), {
    sx: {
      height: 400,
      justifyContent: "center",
      alignItems: "center"
    }
  }), Object(external_theme_ui_["jsx"])("input", getInputProps()), isDragActive && !loading && !error && !link && Object(external_theme_ui_["jsx"])("p", null, "Drop file here ..."), !isDragActive && !loading && !error && !link && Object(external_theme_ui_["jsx"])("p", null, "Drag 'n' drop a file here, or click to select a file"), loading && Object(external_theme_ui_["jsx"])(core_["CircularProgress"], null), error && !loading && Object(external_theme_ui_["jsx"])("h5", null, error)));
}

/* harmony default export */ var Dropzone = (MyDropzone);
// EXTERNAL MODULE: /home/lightsky/skynet-webportal/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("8k7s");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: /home/lightsky/skynet-webportal/node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("TPw6");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: /home/lightsky/skynet-webportal/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: /home/lightsky/skynet-webportal/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// CONCATENATED MODULE: ./src/components/TabPanel.tsx


var TabPanel_jsx = external_react_default.a.createElement;

/** @jsx jsx */

const TabPanel = (_ref) => {
  let {
    children,
    value,
    index
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "value", "index"]);

  return Object(external_theme_ui_["jsx"])(external_theme_ui_["Box"], null, value === index && Object(external_theme_ui_["jsx"])(external_theme_ui_["Box"], {
    sx: {
      p: 3
    }
  }, children));
};
// CONCATENATED MODULE: ./pages/index.tsx

var pages_jsx = external_react_default.a.createElement;

/** @jsx jsx */







const Index = () => {
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])(1);
  const {
    0: linkfileUrl,
    1: setInput
  } = Object(external_react_["useState"])("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const directView = () => {
    const removeHead = external_ramda_["compose"](external_ramda_["tail"], external_ramda_["split"]("sia://"));
    const hash = removeHead(linkfileUrl)[0];

    if (window) {
      var win = window.open(`/${hash}`, "_blank");
      win.focus();
    }
  };

  return Object(external_theme_ui_["jsx"])(external_react_default.a.Fragment, null, Object(external_theme_ui_["jsx"])(external_theme_ui_["Box"], {
    color: "white"
  }, Object(external_theme_ui_["jsx"])(core_["Container"], null, Object(external_theme_ui_["jsx"])(external_theme_ui_["Flex"], {
    sx: {
      alignItems: "center",
      height: 120
    }
  }, Object(external_theme_ui_["jsx"])(external_theme_ui_["Box"], null, Object(external_theme_ui_["jsx"])(core_["Typography"], {
    sx: {
      fontWeight: 700
    }
  }, Object(external_theme_ui_["jsx"])(core_["Link"], {
    href: "/"
  }, "Sia Skynet"))), Object(external_theme_ui_["jsx"])(external_theme_ui_["Box"], {
    sx: {
      ml: "auto"
    }
  }, Object(external_theme_ui_["jsx"])(core_["Button"], {
    href: "/stats"
  }, "Statistics"), Object(external_theme_ui_["jsx"])(core_["Button"], {
    href: "https://sia.tech/",
    target: "_blank"
  }, "About Sia"))))), Object(external_theme_ui_["jsx"])(external_theme_ui_["Box"], null, Object(external_theme_ui_["jsx"])(core_["Container"], null, Object(external_theme_ui_["jsx"])(core_["AppBar"], {
    position: "static"
  }, Object(external_theme_ui_["jsx"])(core_["Tabs"], {
    value: value,
    onChange: handleChange,
    "aria-label": "simple tabs example"
  }, Object(external_theme_ui_["jsx"])(core_["Tab"], {
    label: "Upload"
  }), Object(external_theme_ui_["jsx"])(core_["Tab"], {
    label: "Download"
  }))))), Object(external_theme_ui_["jsx"])(core_["Container"], null, Object(external_theme_ui_["jsx"])(TabPanel, {
    value: value,
    index: 0
  }, Object(external_theme_ui_["jsx"])(core_["Card"], {
    sx: {
      width: "100%"
    }
  }, Object(external_theme_ui_["jsx"])(core_["CardContent"], null, Object(external_theme_ui_["jsx"])(Dropzone, null))))), Object(external_theme_ui_["jsx"])(core_["Container"], null, Object(external_theme_ui_["jsx"])(TabPanel, {
    value: value,
    index: 1
  }, Object(external_theme_ui_["jsx"])(core_["Card"], {
    sx: {
      width: "100%"
    }
  }, Object(external_theme_ui_["jsx"])(core_["CardContent"], null, Object(external_theme_ui_["jsx"])(external_theme_ui_["Flex"], {
    sx: {
      height: 400,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }
  }, Object(external_theme_ui_["jsx"])("p", null, "Download a file by pasting in a Sia linkfile below:"), Object(external_theme_ui_["jsx"])(external_theme_ui_["Box"], {
    sx: {
      width: "60%"
    }
  }, Object(external_theme_ui_["jsx"])(core_["Input"], {
    placeholder: "sia://",
    value: linkfileUrl,
    onChange: e => setInput(e.target.value),
    sx: {
      width: "100%"
    }
  })), Object(external_theme_ui_["jsx"])(external_theme_ui_["Box"], {
    sx: {
      mt: 3
    }
  }, Object(external_theme_ui_["jsx"])(core_["Button"], {
    variant: "contained",
    color: "primary",
    onClick: directView
  }, "Download"))))))));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "8k7s":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "ANpm":
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "OCF2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "TPw6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "aNEW":
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "zqBN":
/***/ (function(module, exports) {

module.exports = require("theme-ui");

/***/ })

/******/ });