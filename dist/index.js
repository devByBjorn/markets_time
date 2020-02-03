/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\r\nsetInterval(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"currentTime\"], 1000)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: currentTime, currentYear, loader, openNav, closeNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentTime\", function() { return currentTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentYear\", function() { return currentYear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loader\", function() { return loader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openNav\", function() { return openNav; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeNav\", function() { return closeNav; });\n// Ticking seconds and 'hide seconds' as textContent when opening page\r\nconst currentTime = () => {\r\n  const time = moment().format('HH:mm:ss')\r\n  document.querySelector('.current-time').innerHTML = `<span>${time}</<span>`\r\n}\r\n\r\n\r\nconst currentYear = (id) => {\r\n  try {\r\n    const copyYear = new Date().getFullYear();\r\n    document.getElementById(id).innerHTML = `<span>@${copyYear}</<span>`;\r\n  } catch (e) {\r\n\r\n  }\r\n}\r\n\r\n/* Interval for loader*/\r\nconst loader = () => {\r\n  document.querySelector('.loader-container').style.display = 'none'\r\n}\r\n\r\n// DOM acces to navbar\r\nconst queryDOM = {\r\n  nav: document.querySelector('#main-nav'),\r\n  container: document.querySelector('.container')\r\n}\r\n\r\n// Nav when opened\r\nconst openStyle = () => {\r\n  queryDOM.nav.style.width = '35rem'\r\n  queryDOM.container.style.paddingLeft = '35rem'\r\n  // queryDOM.closeNav.style.transform = 'rotate(90deg)'\r\n}\r\n\r\nconst open = document.querySelector('.open-slide')\r\nconst openNav = open.addEventListener('click', openStyle)\r\n\r\n\r\n// Nav when closed\r\nconst closeStyle = () => {\r\n  queryDOM.nav.style.width = '0'\r\n  queryDOM.container.style.paddingLeft = '0rem'\r\n  // queryDOM.closeNav.style.transform = 'rotate(-90deg)'\r\n}\r\n\r\nconst close = document.querySelector('.close-slide')\r\nconst closeNav = close.addEventListener('click', closeStyle)\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });