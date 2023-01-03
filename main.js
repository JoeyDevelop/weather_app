/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addForecastToDom\": () => (/* binding */ addForecastToDom),\n/* harmony export */   \"clearDom\": () => (/* binding */ clearDom)\n/* harmony export */ });\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ \"./src/math.js\");\n\n\nconst body = document.querySelector(\".body\");\nlet buttonDef = true;\n\nfunction clearDom() {\n  if (body.querySelector(\".display\")) {\n    body.querySelector(\".display\").remove();\n  }\n}\n\nfunction addForecastToDom(forecast) {\n  // create holder\n  const display = document.createElement(\"div\");\n\n  display.classList.add(\"display\");\n\n  body.appendChild(display);\n\n  // create display elements\n  const button = document.createElement(\"button\");\n  const weatherStat = document.createElement(\"div\");\n  const tempStat = document.createElement(\"div\");\n  const tempHighStat = document.createElement(\"div\");\n  const tempLowStat = document.createElement(\"div\");\n\n  button.classList.add(\"switchTemp\");\n  weatherStat.classList.add(\"stat\");\n  tempStat.classList.add(\"stat\");\n  tempHighStat.classList.add(\"stat\");\n  tempLowStat.classList.add(\"stat\");\n\n  if (buttonDef === true) {\n    button.innerHTML = \"°C\";\n    button.addEventListener(\"click\", (event) => {\n      changeTempTypeFToC(event, forecast);\n    });\n  } else if (buttonDef === false) {\n    button.innerHTML = \"°F\";\n    button.addEventListener(\"click\", (event) => {\n      changeTempTypeCToF(event, forecast);\n    });\n  }\n\n  display.appendChild(button);\n  display.appendChild(weatherStat);\n  display.appendChild(tempStat);\n  display.appendChild(tempHighStat);\n  display.appendChild(tempLowStat);\n\n  // create keys and values\n  const weatherKey = document.createElement(\"h4\");\n  const weatherValue = document.createElement(\"h4\");\n  const tempKey = document.createElement(\"h4\");\n  const tempValue = document.createElement(\"h4\");\n  const tempHighKey = document.createElement(\"h4\");\n  const tempHighValue = document.createElement(\"h4\");\n  const tempLowKey = document.createElement(\"h4\");\n  const tempLowValue = document.createElement(\"h4\");\n\n  weatherKey.classList.add(\"keys\");\n  tempKey.classList.add(\"keys\");\n  tempHighKey.classList.add(\"keys\");\n  tempLowKey.classList.add(\"keys\");\n  weatherValue.classList.add(\"values\");\n  tempValue.classList.add(\"values\");\n  tempHighValue.classList.add(\"values\");\n  tempLowValue.classList.add(\"values\");\n\n  weatherKey.innerHTML = \"Weather: \";\n  tempKey.innerHTML = \"Temperature: \";\n  tempHighKey.innerHTML = \"Temp high: \";\n  tempLowKey.innerHTML = \"Temp low: \";\n  weatherValue.innerHTML = forecast.weather;\n  tempValue.innerHTML = forecast.temperature;\n  tempHighValue.innerHTML = forecast.tempHigh;\n  tempLowValue.innerHTML = forecast.tempLow;\n\n  weatherStat.appendChild(weatherKey);\n  weatherStat.appendChild(weatherValue);\n  tempStat.appendChild(tempKey);\n  tempStat.appendChild(tempValue);\n  tempHighStat.appendChild(tempHighKey);\n  tempHighStat.appendChild(tempHighValue);\n  tempLowStat.appendChild(tempLowKey);\n  tempLowStat.appendChild(tempLowValue);\n}\n\nfunction changeTempTypeFToC(event, forecast) {\n  (0,_math__WEBPACK_IMPORTED_MODULE_0__.convertFahrenheitToCelsius)(event, forecast);\n  clearDom();\n  buttonDef = false;\n  addForecastToDom(forecast);\n}\n\nfunction changeTempTypeCToF(event, forecast) {\n  (0,_math__WEBPACK_IMPORTED_MODULE_0__.convertCelsiusToFahrenheit)(event, forecast);\n  clearDom();\n  buttonDef = true;\n  addForecastToDom(forecast);\n}\n\n\n\n\n//# sourceURL=webpack://weather_app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ \"./src/math.js\");\n\n\n\nconst searchbar = document.querySelector(\"input\");\nconst searchBtn = document.querySelector(\".searchBtn\");\nlet forecast = {};\n\nsearchBtn.addEventListener(\"click\", () => {\n  const info = searchbar.value;\n  console.log(info);\n  sendWeatherRequest(info);\n});\nsearchbar.addEventListener(\"keypress\", (event) => {\n  if (event.key === \"Enter\") {\n    searchBtn.click();\n  }\n});\n\nfunction sendWeatherRequest(info) {\n  fetch(\n    \"https://api.openweathermap.org/data/2.5/weather?q=\" +\n      info +\n      \"&APPID=f267f51a8b8e85d282f5213c10ec1f47\",\n    { mode: \"cors\" }\n  )\n    .then((response) => {\n      if (response.ok) {\n        return response.json();\n      }\n      throw new Error(\"Invalid city request\");\n      // return response.json();\n    })\n    .then((response) => {\n      defineVariables(response);\n    })\n    .then(() => {\n      (0,_math__WEBPACK_IMPORTED_MODULE_1__.convertKelvinToFahrenheit)(forecast);\n    })\n    .then(() => {\n      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.clearDom)();\n      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addForecastToDom)(forecast);\n    })\n    .catch(function (error) {\n      alert(error);\n    });\n}\n\nfunction defineVariables(response) {\n  forecast = {\n    weather: response.weather[0].main,\n    temperature: response.main.temp,\n    tempHigh: response.main.temp_max,\n    tempLow: response.main.temp_min,\n  };\n}\n\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertCelsiusToFahrenheit\": () => (/* binding */ convertCelsiusToFahrenheit),\n/* harmony export */   \"convertFahrenheitToCelsius\": () => (/* binding */ convertFahrenheitToCelsius),\n/* harmony export */   \"convertKelvinToFahrenheit\": () => (/* binding */ convertKelvinToFahrenheit)\n/* harmony export */ });\nfunction convertKelvinToFahrenheit(forecast) {\n  const tempKel = (forecast.temperature - 273.15) * (9 / 5) + 32;\n  forecast.temperature = Math.round((tempKel + Number.EPSILON) * 10) / 10;\n  const tempHighKel = (forecast.tempHigh - 273.15) * (9 / 5) + 32;\n  forecast.tempHigh = Math.round((tempHighKel + Number.EPSILON) * 10) / 10;\n  const tempLowKel = (forecast.tempLow - 273.15) * (9 / 5) + 32;\n  forecast.tempLow = Math.round((tempLowKel + Number.EPSILON) * 10) / 10;\n  console.log(forecast);\n}\n\nfunction convertFahrenheitToCelsius(event, forecast) {\n  const tempCel = (forecast.temperature - 32) * (5 / 9);\n  forecast.temperature = Math.round((tempCel + Number.EPSILON) * 10) / 10;\n  const tempHighCel = (forecast.tempHigh - 32) * (5 / 9);\n  forecast.tempHigh = Math.round((tempHighCel + Number.EPSILON) * 10) / 10;\n  const tempLowCel = (forecast.tempLow - 32) * (5 / 9);\n  forecast.tempLow = Math.round((tempLowCel + Number.EPSILON) * 10) / 10;\n  console.log(forecast);\n}\n\nfunction convertCelsiusToFahrenheit(event, forecast) {\n  const tempFah = forecast.temperature * (9 / 5) + 32;\n  forecast.temperature = Math.round((tempFah + Number.EPSILON) * 10) / 10;\n  const tempHighFah = forecast.tempHigh * (9 / 5) + 32;\n  forecast.tempHigh = Math.round((tempHighFah + Number.EPSILON) * 10) / 10;\n  const tempLowFah = forecast.tempLow * (9 / 5) + 32;\n  forecast.tempLow = Math.round((tempLowFah + Number.EPSILON) * 10) / 10;\n  console.log(forecast);\n}\n\n\n\n\n//# sourceURL=webpack://weather_app/./src/math.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;