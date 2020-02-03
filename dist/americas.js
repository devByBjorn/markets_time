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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/americas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/americas.js":
/*!*************************!*\
  !*** ./src/americas.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainClass.js */ \"./src/mainClass.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\r\n\r\n\r\n\r\n\r\nsetInterval(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"currentTime\"], 1000)\r\nsetInterval(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"loader\"], 1500)\r\n\r\n\r\n// MEXICO CITY\r\nconst mexicoCity = new _mainClass_js__WEBPACK_IMPORTED_MODULE_0__[\"Market\"]('America', 'Mexico_City', '08:30', '15:00')\r\nmexicoCity.setHolidays([\r\n  'Jan 1',\r\n  'Feb 3',\r\n  'Mar 16',\r\n  'Apr 9',\r\n  'Apr 10',\r\n  'May 1',\r\n  'Sep 16',\r\n  'Nov 2',\r\n  'Nov 16',\r\n  'Dec 12',\r\n  'Dec 25'\r\n])\r\nmexicoCity.getCountDown(mexicoCity.open)\r\nmexicoCity.getCountDown(mexicoCity.close)\r\n\r\n// NEW YORK\r\nconst newYork = new _mainClass_js__WEBPACK_IMPORTED_MODULE_0__[\"Market\"]('America', 'New_York', '09:30', '16:00')\r\nnewYork.setHolidays([\r\n  'Jan 1',\r\n  'Jan 20',\r\n  'Feb 17',\r\n  'Apr 10',\r\n  'May 25',\r\n  'Jul 3',\r\n  'Sep 7',\r\n  'Nov 26',\r\n  'Dec 25'\r\n])\r\nnewYork.setHalfDays(['Nov 27', 'Dec 24'])\r\nnewYork.getCountDown(newYork.open)\r\nnewYork.getCountDown(newYork.close)\r\n\r\n// STOCKHOLM\r\nconst toronto = new _mainClass_js__WEBPACK_IMPORTED_MODULE_0__[\"Market\"]('America', 'Toronto', '09:30', '16:00')\r\ntoronto.setHolidays([\r\n  'Jan 1',\r\n  'Feb 17',\r\n  'Apr 10',\r\n  'May 18',\r\n  'Jul 1',\r\n  'Aug 3',\r\n  'Sep 7',\r\n  'Oct 12',\r\n  'Dec 25',\r\n  'Dec 28'])\r\ntoronto.setHalfDays(['Dec 24'])\r\ntoronto.getCountDown(toronto.close)\r\ntoronto.getCountDown(toronto.open)\r\n\r\n// SANTIAGO\r\nconst santiago = new _mainClass_js__WEBPACK_IMPORTED_MODULE_0__[\"Market\"]('America', 'Santiago', '09:30', '17:00')\r\nsantiago.setHolidays([\r\n  'Jan 1',\r\n  'Apr 10',\r\n  'May 1',\r\n  'May 21',\r\n  'Jun 29',\r\n  'July 16',\r\n  'Sep 18',\r\n  'Oct 12',\r\n  'Dec 8',\r\n  'Dec 25',\r\n])\r\n\r\nsantiago.getCountDown(santiago.open)\r\nsantiago.getCountDown(santiago.close)\r\n\r\n// BUENOS AIRES\r\nconst buenosAires = new _mainClass_js__WEBPACK_IMPORTED_MODULE_0__[\"Market\"]('America', 'Buenos_Aires', '11:00', '17:00')\r\nbuenosAires.setHolidays([\r\n  'Jan 1',\r\n  'Feb 24',\r\n  'Feb 25',\r\n  'Mar 23',\r\n  'Mar 24',\r\n  'Apr 2',\r\n  'Apr 9',\r\n  'Apr 10',\r\n  'May 1',\r\n  'May 25',\r\n  'Jun 15',\r\n  'Jul 9',\r\n  'Jul 10',\r\n  'Oct 12',\r\n  'Nov 23',\r\n  'Dec 7',\r\n  'Dec 8',\r\n  'Dec 25'\r\n])\r\nbuenosAires.getCountDown(buenosAires.close)\r\nbuenosAires.getCountDown(buenosAires.open)\r\n\r\n// SAO PAULO\r\nconst saoPaulo = new _mainClass_js__WEBPACK_IMPORTED_MODULE_0__[\"Market\"]('America', 'Sao_Paulo', '10:00', '17:55')\r\nsaoPaulo.setHolidays([\r\n  'Jan 1',\r\n  'Feb 24',\r\n  'Feb 25',\r\n  'Feb 26',\r\n  'Aps 10',\r\n  'Apr 21',\r\n  'May 1',\r\n  'Jun 11',\r\n  'Jul 9',\r\n  'Sep 7',\r\n  'Oct 12',\r\n  'Nov 2',\r\n  'Nov 20',\r\n  'Dec 24',\r\n  'Dec 25',\r\n  'Dec 31'\r\n])\r\n\r\nsaoPaulo.getCountDown(saoPaulo.close)\r\nsaoPaulo.getCountDown(saoPaulo.open)\r\n\r\n\r\nsetInterval(() => {\r\n  newYork.statusColor()\r\n  toronto.statusColor()\r\n  mexicoCity.statusColor()\r\n  santiago.statusColor()\r\n  buenosAires.statusColor()\r\n  saoPaulo.statusColor()\r\n}, 1000);\r\n\r\n\r\n// This solution creates more line of code, but the solution\r\n// of calling city.openCloseModal when script loads seems even \r\n// worse. Since teh functions are getting invoked before the user \r\n// clicks an info-button takes up memory \r\nconst infoBtns = document.querySelectorAll('.info-btn')\r\ninfoBtns.forEach((btn) => {\r\n  const marketInfo = [...btn.classList]\r\n  const modal = btn.nextElementSibling\r\n\r\n  btn.addEventListener('click', () => {\r\n    modal.style.display = 'block'\r\n    switch (marketInfo[1]) {\r\n      case 'new-york':\r\n        newYork.setSummary()\r\n        break\r\n      case 'toronto':\r\n        toronto.setSummary()\r\n        break\r\n      case 'mexico-city':\r\n        mexicoCity.setSummary()\r\n        break\r\n      case 'santiago':\r\n        santiago.setSummary()\r\n        break\r\n      case 'buenos-aires':\r\n        buenosAires.setSummary()\r\n        break\r\n      case 'sao-paulo':\r\n        saoPaulo.setSummary()\r\n        break\r\n    }\r\n  })\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/americas.js?");

/***/ }),

/***/ "./src/mainClass.js":
/*!**************************!*\
  !*** ./src/mainClass.js ***!
  \**************************/
/*! exports provided: Market, MarketWithLunch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Market\", function() { return Market; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarketWithLunch\", function() { return MarketWithLunch; });\n\r\n\r\nclass Market {\r\n  constructor(region, city, open, close) {\r\n    this.region = region\r\n    this.city = city\r\n    this.open = open\r\n    this.close = close\r\n    this.weekend = ['Sat', 'Sun']\r\n    this.holidays = ['No trading holidays']\r\n    this.halfDays = ['No half day trading days']\r\n  }\r\n\r\n  // manipulate city to fit HTML id\r\n  get id() {\r\n\r\n    let cityID = this.city\r\n\r\n    if (cityID === 'Berlin') {\r\n      cityID = 'Frankfurt'\r\n    } else if (cityID.includes('_')) {\r\n      cityID = cityID.replace('_', '-')\r\n    }\r\n\r\n    return cityID.toLowerCase()\r\n  }\r\n\r\n  // manipulate city to pass moment.tz() argument specifics \r\n  getTime() {\r\n\r\n    let cityMomentFit = this.city\r\n\r\n    if (cityMomentFit === 'Frankfurt') {\r\n      cityMomentFit = 'Berlin'\r\n    } else if (cityMomentFit.includes('-')) {\r\n      cityMomentFit = cityMomentFit.replace('-', '_')\r\n    }\r\n\r\n    // moment.tz needs to be invoked to update every minute\r\n    // if placed inside the constructor it seems like it can't \r\n    // be used to get updated time every minute\r\n    const time = moment.tz(`${this.region}/${cityMomentFit.replace(' ', '_')}`)\r\n\r\n    return {\r\n      timeNow: time,\r\n      hoursMinutes: time.format('HH:mm'),\r\n      dayOfWeek: time.format('ddd'),\r\n      yearDayMonth: time.format('MMM D')\r\n    }\r\n  }\r\n\r\n  setHolidays(holidays) {\r\n    return this.holidays = holidays\r\n  }\r\n\r\n  setHalfDays(halfDays) {\r\n    return this.halfDays = halfDays\r\n  }\r\n\r\n  // get halfday close - make half day close to a constructo argument\r\n  // worked when there was two special cases but when scaling up -\r\n  // the sepcial cases piles up\r\n  getHalfdayClose() {\r\n    let halfdayClose\r\n\r\n    if (this.city === 'London') {\r\n      halfdayClose = '12:30'\r\n    } else if (this.city === 'Hong_Kong' || 'Singapore') {\r\n      halfdayClose = '12:00'\r\n    } else if (this.city === 'Amsterdam' || 'Paris') {\r\n      halfdayClose = '14:00'\r\n    } else if (this.city = 'sydney') {\r\n      halfdayClose = '14.10'\r\n    } else {\r\n      halfdayClose = '13:00'\r\n    }\r\n\r\n    return halfdayClose\r\n  }\r\n\r\n  // open/close status for markets\r\n  getStatus() {\r\n    return {\r\n      isClosed: this.getTime().hoursMinutes < this.open\r\n        || this.getTime().hoursMinutes >= this.close,\r\n      isWeekend: this.weekend.includes(this.getTime().dayOfWeek),\r\n      isHoliday: this.holidays.includes(this.getTime().yearDayMonth),\r\n      isHalfDay: this.halfDays.includes(this.getTime().yearDayMonth)\r\n    }\r\n  }\r\n\r\n  // Set text content by id\r\n  setinnerHTML(id, content) {\r\n    document.getElementById(`${id}`).innerHTML = content\r\n  }\r\n\r\n  // Countdown to either open or close\r\n  getCountDown(countReference) {\r\n    const countTo = this.getTime().timeNow\r\n\r\n    if (this.getStatus().isHalfDay && countReference === this.close) {\r\n      countTo.set({\r\n        'hour': this.getHalfdayClose().slice(0, 2),\r\n        'minutes': this.getHalfdayClose().slice(3, 5),\r\n        'seconds': 0,\r\n        'millisends': 0\r\n      })\r\n    } else {\r\n      countTo.set({\r\n        'hour': countReference.slice(0, 2),\r\n        'minutes': countReference.slice(3, 5),\r\n        'seconds': 0,\r\n        'millisends': 0\r\n      })\r\n    }\r\n\r\n    const pad = (num) => {\r\n      return ('0' + parseInt(num)).substr(-2)\r\n    }\r\n\r\n    const tick = () => {\r\n      const now = this.getTime().timeNow\r\n\r\n      if (now > countTo) {\r\n        countTo.set(countTo.add(1, 'day'));\r\n      }\r\n\r\n      const remain = ((countTo - now) / 1000);\r\n      const hh = pad((remain / 60 / 60) % 60);\r\n      const mm = pad((remain / 60) % 60);\r\n      const ss = pad(remain % 60);\r\n\r\n\r\n      // Tried breaking the code below out to a getCountdown() and -\r\n      // turning the above code into setCountDown(). Getting alot of -\r\n      // issues with setInterval though, no matter where in the code -\r\n      // I place the interval seconds are not running smoothly. \r\n      const counter = document.getElementById(`${this.id}-counter`)\r\n      const nextDay = this.getTime().timeNow.add(1, 'day')\r\n      const nextDayWeekend = nextDay.format('ddd')\r\n      const nextDayHoliday = nextDay.format('MMM D')\r\n\r\n      // In case of opened - count down to close\r\n      // In case of closed - count down to next open -\r\n      // but not if next day is weekend or holiday\r\n      switch (countReference) {\r\n        case this.open:\r\n          if (this.getStatus().isWeekend) {\r\n            counter.innerHTML = `<span>Market closed</span>`\r\n          } else if (this.getStatus().isHoliday) {\r\n            counter.innerHTML = `<span>Market closed</span>`\r\n          } else if (this.weekend.includes(nextDayWeekend)\r\n            && this.getTime().hoursMinutes > this.close\r\n            || this.holidays.includes(nextDayHoliday)\r\n            && this.getTime().hoursMinutes > this.close) {\r\n            counter.innerHTML = `<span>Market closed tomorrow</span>`\r\n          } else if (this.getStatus().isClosed &&\r\n            !this.getStatus().isWeekend) {\r\n            counter.innerHTML = `<span>Opens in</span><span>${hh}:${mm}:${ss}</span>`\r\n          }\r\n          break\r\n        case this.close:\r\n          if (this.getStatus().isClosed\r\n            || this.getStatus().isHoliday\r\n            || this.getStatus().isWeekend) {\r\n            return\r\n          } else {\r\n            counter.innerHTML = `<span>Closes in</span><span>${hh}:${mm}:${ss}</span>`\r\n          }\r\n          break\r\n      }\r\n    }\r\n    setInterval(tick, 1000)\r\n  }\r\n\r\n\r\n\r\n  getColorTheme(toAdd, toRemove, toRemoveTwo) {\r\n    const marketWrapper = document.getElementById(`${this.id}-wrapper`)\r\n    const infoBtn = document.getElementById(`${this.id}-btn`)\r\n\r\n    marketWrapper.classList.add(toAdd)\r\n    marketWrapper.classList.remove(toRemove)\r\n    marketWrapper.classList.remove(toRemoveTwo)\r\n\r\n    if (toAdd === 'closedForTrading') {\r\n      infoBtn.classList.remove('openMarketBtn')\r\n      infoBtn.classList.add('closedMarketBtn')\r\n    } else {\r\n      infoBtn.classList.remove('closedMarketBtn')\r\n      infoBtn.classList.add('openMarketBtn')\r\n    }\r\n  }\r\n\r\n  // Manipulating market wrappers DOM, content and color, \r\n  //depending on market status(closed,open,halfday,holiday)\r\n  statusColor() {\r\n    // The main clock for each market\r\n    this.setinnerHTML(`${this.id}-clock`, this.getTime().hoursMinutes)\r\n    this.setinnerHTML(`${this.id}-open`,\r\n      `<span>Trading</span><span>${this.open}-${this.close}</span>`)\r\n\r\n    // Weekend content and color theme\r\n    if (this.getStatus().isWeekend) {\r\n      this.getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading')\r\n      this.setinnerHTML(`${this.id}-open`, `Weekend`)\r\n\r\n      // Closed hours content and color theme \r\n    } else if (this.getStatus().isHoliday) {\r\n      this.getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading')\r\n      this.setinnerHTML(`${this.id}-open`, `Holiday`)\r\n    }\r\n\r\n    else if (this.getStatus().isClosed) {\r\n      this.getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading')\r\n\r\n      // Half day content and color theme\r\n    } else if (this.getStatus().isHalfDay) {\r\n      this.getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading')\r\n      this.setinnerHTML(`${this.id}-open`,\r\n        `<span>Trading</span><span>${this.open}-${this.getHalfdayClose()}</span>`)\r\n\r\n      // color theme on half day trading open\r\n      if (this.getTime().hoursMinutes < this.getHalfdayClose()) {\r\n        this.getColorTheme('halfDayTrading', 'openForTrading', 'closedForTrading')\r\n\r\n        // color theme on half day trading close\r\n      } else if (this.getTime().hoursMinutes > this.getHalfdayClose()) {\r\n        this.getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading')\r\n      }\r\n\r\n      // Opening Hours content and color theme\r\n    } else {\r\n      this.getColorTheme('openForTrading', 'halfDayTrading', 'closedForTrading')\r\n    }\r\n  }\r\n\r\n  setSummary() {\r\n    // Summury DOM inside of modal\r\n    const modal = document.getElementById(`${this.id}-modal`)\r\n    const container = document.getElementById(`${this.id}-info`)\r\n\r\n    const header = document.createElement('h3')\r\n    const openingHours = document.createElement('p')\r\n    const halfDayHours = document.createElement('p')\r\n    const weekend = document.createElement('p')\r\n    const halfDays = document.createElement('p')\r\n    const holidays = document.createElement('p')\r\n\r\n    const closeBtn = document.createElement('div')\r\n    closeBtn.innerHTML = '&times;'\r\n    closeBtn.setAttribute('id', `${this.id}-close`)\r\n    closeBtn.setAttribute('class', 'close')\r\n    closeBtn.addEventListener('click', () => {\r\n      modal.style.display = 'none'\r\n    })\r\n\r\n    // Make sure modal info does not duplicate html structure on every open\r\n    container.innerHTML = ''\r\n\r\n    // Make sure lunch hour trading is taken into account - \r\n    // can this be modified in the subclass? \r\n    if (this.lunchStart && this.lunchEnd) {\r\n      openingHours.innerHTML = `<span>Trading hours</span><span>${this.open}-${this.lunchStart}\r\n                                | ${this.lunchEnd}-${this.close}</<span>`\r\n    } else {\r\n      openingHours.innerHTML = `<span>Trading hours</span><span>${this.open}-${this.close}</<span>`\r\n    }\r\n\r\n\r\n    //  HTML and Content for MODAL\r\n    const holidaysContent = this.holidays.toString()\r\n    const halfdayContent = this.halfDays.toString()\r\n\r\n    header.textContent = `${this.id.replace('-', ' ').toUpperCase()}`\r\n    halfDayHours.innerHTML = `<span>Half day trading hours</span><span>${this.halfDays}</span>`\r\n    weekend.innerHTML = `<span>Weekend</span><span>${this.weekend.join(' | ')}</<span>`\r\n    halfDays.innerHTML = `<span>Half day trading</span><span>${halfdayContent.replace(/,/g, ' | ')}</span>`\r\n    holidays.innerHTML = `<span>Holidays</span><span>${holidaysContent.replace(/,/g, ' | ')}</span>`\r\n\r\n    container.appendChild(header)\r\n    container.appendChild(openingHours)\r\n    container.appendChild(weekend)\r\n    container.appendChild(holidays)\r\n    container.appendChild(halfDays)\r\n    container.appendChild(closeBtn)\r\n  }\r\n\r\n  // Create iteration in functions script instead\r\n  // openCLoseModal() {\r\n  //   document.getElementById(`${this.id}-btn`).addEventListener('click', () => {\r\n  //     this.setSummary()\r\n  //     document.getElementById(`${this.id}-modal`).style.display = 'block'\r\n  //   })\r\n  // }\r\n}\r\n\r\n// Subclass for markets closed  during lunch hours ( TOKYO and HONG KONG)\r\nclass MarketWithLunch extends Market {\r\n  constructor(region, city, open, close, lunchStart, lunchEnd) {\r\n    super(region, city, open, close)\r\n    this.lunchStart = lunchStart\r\n    this.lunchEnd = lunchEnd\r\n  }\r\n\r\n  closedLunch() {\r\n    setInterval(() => {\r\n\r\n      const lunchHour = this.getTime().hoursMinutes > this.lunchStart && this.getTime().hoursMinutes < this.lunchEnd\r\n\r\n      if (lunchHour) {\r\n        this.setBackgroundColor(`${this.id}-wrapper`, this.colors.red)\r\n        this.setColor(`${this.id}-wrapper`, this.colors.black)\r\n        this.setinnerHTML(`${this.id}-open`, `Lunch: ${this.lunchStart} - ${this.lunchEnd}`)\r\n      }\r\n\r\n    }, 1000)\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/mainClass.js?");

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