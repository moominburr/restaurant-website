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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  font-family: \\\"Urbanist\\\", sans-serif;\\n}\\n\\n.nav-li-active {\\n  color: red !important;\\n  -webkit-transition: all 0.3s ease;\\n  transition: all 0.3s ease;\\n}\\n\\n.nav-links {\\n  list-style: none;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: space-evenly;\\n      -ms-flex-pack: space-evenly;\\n          justify-content: space-evenly;\\n}\\n\\n.nav-links li {\\n  text-decoration: none;\\n  color: black;\\n  font-size: 2em;\\n  -webkit-transition: all 0.2s ease;\\n  transition: all 0.2s ease;\\n  cursor: pointer;\\n}\\n\\n.nav-links li:hover {\\n  color: #a10404;\\n}\\n\\nul {\\n  list-style: none;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: space-evenly;\\n      -ms-flex-pack: space-evenly;\\n          justify-content: space-evenly;\\n}\\n\\n.home-content {\\n  margin: 1em 1em 2em 1em;\\n  display: -ms-grid;\\n  display: grid;\\n  -ms-grid-columns: 1fr 1fr;\\n      grid-template-columns: 1fr 1fr;\\n  -ms-grid-rows: auto;\\n      grid-template-rows: auto;\\n      grid-template-areas: \\\"subheading subheading\\\" \\\"beerImg homeCopy\\\";\\n  width: 100vw;\\n  height: 80vh;\\n  -webkit-animation: opacityIn 0.2s ease-in 1 forwards;\\n          animation: opacityIn 0.2s ease-in 1 forwards;\\n}\\n\\n.heading,\\n.subheading,\\n.home-copy {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n\\n.heading {\\n  font-size: 6em;\\n  margin-bottom: 20px;\\n}\\n\\n.subheading {\\n  -ms-grid-row: 1;\\n  -ms-grid-column: 1;\\n  -ms-grid-column-span: 2;\\n  grid-area: subheading;\\n  font-size: 2em;\\n  padding: 1em;\\n  margin-bottom: 1em;\\n}\\n\\n.subheading::before {\\n  content: '';\\n  position: absolute;\\n  border-width: 3px 0 3px 0;\\n  border-color: black;\\n  border-style: solid;\\n  height: 2em;\\n  left: 20%;\\n  top: 1em;\\n  width: 60vw;\\n}\\n\\n.beer-img {\\n  -ms-grid-row: 2;\\n  -ms-grid-column: 1;\\n  grid-area: beerImg;\\n  width: 100%;\\n  height: 100%;\\n  border-radius: 20px;\\n  margin-bottom: 1em;\\n}\\n\\n.home-copy {\\n  -ms-grid-row: 2;\\n  -ms-grid-column: 2;\\n  grid-area: homeCopy;\\n  text-align: center;\\n  padding: 1rem;\\n  font-size: 1.4em;\\n}\\n\\n.menu, .contact {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-animation: opacityIn 0.2s ease-in 1 forwards;\\n          animation: opacityIn 0.2s ease-in 1 forwards;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n}\\n\\n.menu h3, .contact h3 {\\n  font-size: 2em;\\n  margin: 1em 0;\\n}\\n\\n.menu h3::before, .contact h3::before {\\n  content: '';\\n  position: absolute;\\n  border-width: 3px 0 3px 0;\\n  border-color: black;\\n  border-style: solid;\\n  height: 2em;\\n  left: 20%;\\n  top: 1em;\\n  width: 60vw;\\n}\\n\\n.contact-info {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n\\n.contact-info h4 {\\n  font-size: 2em;\\n  padding: 1em;\\n}\\n\\n.item-card {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  text-align: center;\\n  margin-bottom: 1em;\\n}\\n\\n.item-card h4 {\\n  font-size: 1.2em;\\n  padding: 1em 0 0.5em 0;\\n  position: relative;\\n}\\n\\n.item-card p {\\n  font-size: 1.2em;\\n  padding: 0.5em;\\n}\\n\\n@-webkit-keyframes opacityIn {\\n  0% {\\n    opacity: 0;\\n    -webkit-transform: scale(0.9);\\n            transform: scale(0.9);\\n  }\\n  100% {\\n    opacity: 1;\\n    -webkit-transform: scale(1);\\n            transform: scale(1);\\n  }\\n}\\n\\n@keyframes opacityIn {\\n  0% {\\n    opacity: 0;\\n    -webkit-transform: scale(0.9);\\n            transform: scale(0.9);\\n  }\\n  100% {\\n    opacity: 1;\\n    -webkit-transform: scale(1);\\n            transform: scale(1);\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-website/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-website/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-website/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contact)\n/* harmony export */ });\n\nfunction Contact() {\n    const contact = document.createElement('div');\n    contact.classList.add('contact');\n    const head = document.createElement('h3');\n    head.innerText = 'Contact us';\n    contact.appendChild(head);\n    const contactInfo = document.createElement('div');\n    contactInfo.classList.add('contact-info');\n    const phoneNum = document.createElement('h4');\n    phoneNum.innerText = '01234 567 890';\n    contactInfo.appendChild(phoneNum);\n    const address = document.createElement('h4');\n    address.innerText = '2 London Lane, Edmonton, N15 12LD';\n    contactInfo.appendChild(address);\n    const emailAdd = document.createElement('h4');\n    emailAdd.innerText = 'info@beerandbrunch.co';\n    contactInfo.appendChild(emailAdd);\n    contact.appendChild(contactInfo);\n    return contact;\n  }\n\n//# sourceURL=webpack://restaurant-website/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _beer_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beer.jpeg */ \"./src/beer.jpeg\");\n\n\nfunction Home() {\n    const homeContent = document.createElement('div');\n    homeContent.classList.add('home-content');\n    const beerImg = new Image();\n    beerImg.src = _beer_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n    beerImg.classList.add('beer-img');\n    const subheading = document.createElement('h3');\n    subheading.classList.add('subheading');\n    subheading.innerText = 'Everything you ever wanted!'\n    const homeCopy = document.createElement('p');\n    homeCopy.classList.add('home-copy');\n    homeCopy.innerText = `Welcome to Beer and Brunch, where brunch is served all day, and beer all night. You can mix and match them to your hearts content. We find comfort in sausages and hops, bacon and barley, and know you will too.`;\n\n    homeContent.appendChild(beerImg);\n    homeContent.appendChild(subheading);\n    homeContent.appendChild(homeCopy);\n\n    \n    return homeContent;\n  }\n\n//# sourceURL=webpack://restaurant-website/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/style.css */ \"./src/style.css\");\n\n\n\n\n\n\nconst content = document.querySelector(\"#content\");\n\nfunction page() {\n  const element = document.createElement(\"div\");\n  const heading = document.createElement(\"h1\");\n  heading.classList.add(\"heading\");\n  heading.innerText = \"Beer and Brunch\";\n  element.appendChild(heading);\n  element.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_0__.default)());\n  const main = document.createElement(\"main\");\n  main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.default)());\n  const homeBtn = element.querySelector(\"#home\");\n  const menuBtn = element.querySelector(\"#menu\");\n  const contactBtn = element.querySelector(\"#contact\");\n  const btns = element.querySelectorAll('.nav-li');\n  \n  homeBtn.addEventListener(\"click\", () => {\n    homeBtn.classList.add('nav-li-active');\n    btns.forEach(btn => {\n      if(btn.innerText === 'home') return;\n      btn.classList.contains('nav-li-active') ? btn.classList.remove('nav-li-active') : '';\n    });\n    main.innerHTML = \"\";\n    main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.default)());\n  });\n  menuBtn.addEventListener(\"click\", () => {\n    menuBtn.classList.add('nav-li-active');\n    btns.forEach(btn => {\n      if(btn.innerText === 'menu') return;\n      btn.classList.contains('nav-li-active') ? btn.classList.remove('nav-li-active') : '';\n    });\n    main.innerHTML = \"\";\n    main.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)());\n  });\n  contactBtn.addEventListener(\"click\", () => {\n    contactBtn.classList.add('nav-li-active');\n    console.log(contactBtn);\n    btns.forEach(btn => {\n      if(btn.innerText === 'contact') return;\n      btn.classList.contains('nav-li-active') ? btn.classList.remove('nav-li-active') : '';\n    });\n    main.innerHTML = \"\";\n    main.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__.default)());\n  });\n\n  element.appendChild(main);\n  return element;\n}\n\ncontent.appendChild(page());\n\n\n//# sourceURL=webpack://restaurant-website/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _beer_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beer.jpeg */ \"./src/beer.jpeg\");\n/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuItems */ \"./src/menuItems.js\");\n\n\n\nfunction Menu() {\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n    const head = document.createElement('h3');\n    head.innerText = 'Summer Menu';\n    menu.appendChild(head);\n    const menuCard = document.createElement('div');\n    menuCard.classList.add('menu-card');\n    let menuItems = (0,_menuItems__WEBPACK_IMPORTED_MODULE_1__.default)();\n    menuItems.forEach(item => {\n      const itemCard = document.createElement('div');\n      itemCard.classList.add('item-card');\n      const name = document.createElement('h4');\n      name.innerText = item.name;\n      itemCard.appendChild(name);\n      const description = document.createElement('p');\n      description.innerText = item.description;\n      itemCard.appendChild(description);\n      const price = document.createElement('h5');\n      price.innerText = `??${item.price}`;\n      itemCard.appendChild(price);\n      menuCard.appendChild(itemCard); \n    });\n    menu.appendChild(menuCard);\n    return menu;\n  }\n\n//# sourceURL=webpack://restaurant-website/./src/menu.js?");

/***/ }),

/***/ "./src/menuItems.js":
/*!**************************!*\
  !*** ./src/menuItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuItems)\n/* harmony export */ });\nfunction menuItems() {\n  return [\n    {\n      name: \"English Brunch\",\n      description:\n        \"Sausages, bacon, hash browns, tomatoes, mushrooms and eggs, served the English Way (fried and delicious!)\",\n      price: \"11.99\",\n    },\n    {\n      name: \"American Pancakes\",\n      description:\n        \"Big, fluffy pancakes with strawberries and blueberries served with your choice of chocolate, strawberry or maple sauce\",\n      price: \"8.99\",\n    },\n    {\n      name: \"Berries and granola\",\n      description: \"Sweet and crunchy granola with oaty flakes, mixed nuts and seasonal berries\",\n      price: \"5.99\",\n    },\n    {\n      name: \"Banana Pancakes\",\n      description:\n        \"Two ingredient pancakes - banana and egg - topped with dried banana flakes, whipped cream and chocolate sprinkles\",\n      price: \"6.99\",\n    },\n    {\n      name: \"Crossiant Platter\",\n      description:\n        \"All of the crossiants! Crescent shaped, pain au chocolat, pain au raisin and almond crossiants. Best for sharers\",\n      price: \"12.99\",\n    },\n    {\n      name: \"Eggs Royale\",\n      description: \"Poached eggs on English muffins with oak smoked salmon and hollandaise sauce\",\n      price: \"8.99\",\n    },\n    {\n      name: \"Belgian Blonde\",\n      description: \"Golden and smooth\",\n      price: \"3.99\",\n    },\n    {\n      name: \"Belgian Dark\",\n      description: \"Earthy and tasty\",\n      price: \"3.99\",\n    },\n    {\n      name: \"IPA\",\n      description: `One of the best IPAs around`,\n      price: \"4.29\",\n    },\n  ];\n}\n\n\n//# sourceURL=webpack://restaurant-website/./src/menuItems.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Nav)\n/* harmony export */ });\nfunction Nav() {\n  let links = [\"home\", \"menu\", \"contact\"];\n  const ul = document.createElement(\"ul\");\n  ul.classList.add(\"nav-links\");\n  links.forEach((link) => {\n    let li = document.createElement(\"li\");\n    li.innerText = link;\n    li.classList.add(\"nav-li\");\n    li.setAttribute('id', link);\n    ul.appendChild(li);\n  });\n\n  const nav = document.createElement(\"nav\");\n  nav.appendChild(ul);\n  return nav;\n}\n\n\n//# sourceURL=webpack://restaurant-website/./src/nav.js?");

/***/ }),

/***/ "./src/beer.jpeg":
/*!***********************!*\
  !*** ./src/beer.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f5236a5eeda2ea333681.jpeg\";\n\n//# sourceURL=webpack://restaurant-website/./src/beer.jpeg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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