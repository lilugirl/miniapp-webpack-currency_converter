/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// app.js\nconst settingUtil=__webpack_require__(/*! ./utils/setting-util.js */ \"./src/utils/setting-util.js\")\nApp({\n \n  baseMoneyKey:\"CNY\",\n  onLaunch() {\n    this.baseMoneyKey=settingUtil.getBaseMoneyKey()\n  }\n})\n\n\n//# sourceURL=webpack://webpack-exchange/./src/app.js?");

/***/ }),

/***/ "./src/utils/setting-util.js":
/*!***********************************!*\
  !*** ./src/utils/setting-util.js ***!
  \***********************************/
/***/ ((module) => {

eval("const BASE_MONEY_KEY = \"baseMoney\"\nconst DEFAULT_MONEY_KEY=\"CNY\"\nfunction saveBaseMoneyKey(baseMoneyKey){\n    // 将用户选择的基础货币存储到本地\n    wx.setStorageSync(BASE_MONEY_KEY, baseMoneyKey)\n}\n\nfunction getBaseMoneyKey(){\n    return wx.getStorageSync(BASE_MONEY_KEY) || DEFAULT_MONEY_KEY\n}\n\nmodule.exports={\n    saveBaseMoneyKey,\n    getBaseMoneyKey\n}\n\n//# sourceURL=webpack://webpack-exchange/./src/utils/setting-util.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;