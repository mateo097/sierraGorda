define("ceb0f20c-8c9f-4640-80a8-bc49ea0ef155_0.0.1", ["SgStatsWebPartStrings","@microsoft/sp-property-pane","@microsoft/sp-core-library","@microsoft/sp-webpart-base","@microsoft/sp-http"], function(__WEBPACK_EXTERNAL_MODULE__3TA__, __WEBPACK_EXTERNAL_MODULE__26ea__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_vlQI__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "pFSP");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+3TA":
/*!****************************************!*\
  !*** external "SgStatsWebPartStrings" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3TA__;

/***/ }),

/***/ "/xmR":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./lib/webparts/sgStats/SgStatsWebPart.module.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, ".testpart_52ec62f9 .container_52ec62f9{max-width:1000px;margin:0 auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.testpart_52ec62f9 .row_52ec62f9{box-sizing:border-box;font-family:Verdana,Geneva,Tahoma,sans-serif;font-weight:100;padding:20px;width:46rem;margin:1rem -8px 0;border-radius:8px}.testpart_52ec62f9 .row_52ec62f9:after,.testpart_52ec62f9 .row_52ec62f9:before{display:table;content:\"\";line-height:0}.testpart_52ec62f9 .row_52ec62f9:after{clear:both}.testpart_52ec62f9 .column_52ec62f9{position:relative;min-height:1px;padding-left:8px;padding-right:8px;box-sizing:border-box}[dir=ltr] .testpart_52ec62f9 .column_52ec62f9{float:left}[dir=rtl] .testpart_52ec62f9 .column_52ec62f9{float:right}.testpart_52ec62f9 .column_52ec62f9 .ms-Grid_52ec62f9{padding:0}@media (min-width:640px){.testpart_52ec62f9 .column_52ec62f9{width:83.3333333333%}}@media (min-width:1024px){.testpart_52ec62f9 .column_52ec62f9{width:66.6666666667%}}@media (min-width:1024px){[dir=ltr] .testpart_52ec62f9 .column_52ec62f9{left:16.6666666667%}[dir=rtl] .testpart_52ec62f9 .column_52ec62f9{right:16.6666666667%}}@media (min-width:640px){[dir=ltr] .testpart_52ec62f9 .column_52ec62f9{left:8.3333333333%}[dir=rtl] .testpart_52ec62f9 .column_52ec62f9{right:8.3333333333%}}.testpart_52ec62f9 .title_52ec62f9{font-size:21px;font-weight:100;margin-left:3rem}.testpart_52ec62f9 .subTitle_52ec62f9{font-size:17px;font-weight:300;margin-left:2rem;font-size:.9rem!important}.testpart_52ec62f9 .wrap_52ec62f9{inline-size:29rem;word-wrap:break-word}.testpart_52ec62f9 .description_52ec62f9{font-size:17px;font-weight:300;color:\"[theme:white, default: #ffffff]\"}.testpart_52ec62f9 .border-bottom_52ec62f9{border-bottom:1px solid #000}.testpart_52ec62f9 .scroll_52ec62f9{display:block;height:15em;overflow:auto}.testpart_52ec62f9 .scroll-horizontal_52ec62f9{overflow:auto;white-space:nowrap}.testpart_52ec62f9 .stats-container_52ec62f9{background-color:#8a2be2;padding:.3rem;color:#fff}.testpart_52ec62f9 .expired-container_52ec62f9{display:grid;grid-template-columns:1fr 1fr;margin-top:-3rem}.testpart_52ec62f9 .expired-expired_52ec62f9{border-radius:5px}.testpart_52ec62f9 .expired-toexpire_52ec62f9{height:100px;border-radius:5px}.testpart_52ec62f9 .expired-number_52ec62f9{font-size:3rem}.testpart_52ec62f9 .expired-text_52ec62f9{color:grey;margin-top:-3rem;font-size:1rem}.testpart_52ec62f9 .expired-title_52ec62f9{color:#000;font-weight:400;font-size:1.2rem}.testpart_52ec62f9 .table-rows-container_52ec62f9{margin-top:1.5rem}.testpart_52ec62f9 .table-row_52ec62f9:hover{background-color:#ffe5c3;border-top:5px solid #ffe5c3;border-bottom:5px solid #ffe5c3}.testpart_52ec62f9 .table-titles_52ec62f9{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around}.testpart_52ec62f9 .text_52ec62f9{color:grey;font-size:1rem;margin:.4rem}.testpart_52ec62f9 .text-alt_52ec62f9{color:grey;font-size:.8rem;margin:.2rem}.testpart_52ec62f9 .button_52ec62f9{text-decoration:none;height:32px;min-width:80px;background-color:\"[theme:themePrimary, default: #0078d4]\";border-color:\"[theme:themePrimary, default: #0078d4]\";color:\"[theme:white, default: #ffffff]\";outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.testpart_52ec62f9 .button_52ec62f9 .label_52ec62f9{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}.stats-container_52ec62f9{height:300px;background-color:#8a2be2}", ""]);


/***/ }),

/***/ "26ea":
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__26ea__;

/***/ }),

/***/ "3Jko":
/*!************************************************************!*\
  !*** ./lib/webparts/sgStats/SgStatsWebPart.module.scss.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./SgStatsWebPart.module.css */ "4wcg");
var styles = {
    testpart: 'testpart_52ec62f9',
    container: 'container_52ec62f9',
    row: 'row_52ec62f9',
    column: 'column_52ec62f9',
    'ms-Grid': 'ms-Grid_52ec62f9',
    title: 'title_52ec62f9',
    subTitle: 'subTitle_52ec62f9',
    wrap: 'wrap_52ec62f9',
    description: 'description_52ec62f9',
    'border-bottom': 'border-bottom_52ec62f9',
    scroll: 'scroll_52ec62f9',
    'scroll-horizontal': 'scroll-horizontal_52ec62f9',
    'stats-container': 'stats-container_52ec62f9',
    'expired-container': 'expired-container_52ec62f9',
    'expired-expired': 'expired-expired_52ec62f9',
    'expired-toexpire': 'expired-toexpire_52ec62f9',
    'expired-number': 'expired-number_52ec62f9',
    'expired-text': 'expired-text_52ec62f9',
    'expired-title': 'expired-title_52ec62f9',
    'table-rows-container': 'table-rows-container_52ec62f9',
    'table-row': 'table-row_52ec62f9',
    'table-titles': 'table-titles_52ec62f9',
    text: 'text_52ec62f9',
    'text-alt': 'text-alt_52ec62f9',
    button: 'button_52ec62f9',
    label: 'label_52ec62f9'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "4wcg":
/*!********************************************************!*\
  !*** ./lib/webparts/sgStats/SgStatsWebPart.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??postcss!./SgStatsWebPart.module.css */ "/xmR");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "pFSP":
/*!************************************************!*\
  !*** ./lib/webparts/sgStats/SgStatsWebPart.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-property-pane */ "26ea");
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SgStatsWebPart.module.scss */ "3Jko");
/* harmony import */ var SgStatsWebPartStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! SgStatsWebPartStrings */ "+3TA");
/* harmony import */ var SgStatsWebPartStrings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(SgStatsWebPartStrings__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var SgStatsWebPart = /** @class */ (function (_super) {
    __extends(SgStatsWebPart, _super);
    function SgStatsWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SgStatsWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].testpart + "\" onload=\"getLists()\">\n\n      <div class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row + "\">\n        <p class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["expired-title"] + "\">Vencimientos</p>\n            <div class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["expired-container"] + "\">\n              <div class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["expired-expired"] + "\">\n                <p class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["expired-number"] + "\" id=\"expiredCounter\">0</p>\n                <p class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["expired-text"] + "\">Documentos vencidos</p>\n              </div>\n              <div class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["expired-toexpire"] + "\">\n                <p class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["expired-number"] + "\" id=toExpireCounter>0</p>\n                <p class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["expired-text"] + "\">Documentos por vencer</p>\n              </div>\n            </div>\n           </div>\n          <div id=\"listContent\" class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row + " " + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].scroll + " " + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["scroll-horizontal"] + "\"> \n          </div>\n      </div>";
        this._bindSave();
    };
    SgStatsWebPart.prototype._bindSave = function () {
        this.getAllLists();
        this.getLists();
        //  this.getExpired();
    };
    SgStatsWebPart.prototype.getAllLists = function () {
        var _this = this;
        var url = this.context.pageContext.site.absoluteUrl + "/_api/web/lists";
        this.context.spHttpClient
            .get(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].configurations.v1)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            json.value.forEach(function (lista) {
                _this.getListsWithExpired(lista.Title);
            });
        });
    };
    SgStatsWebPart.prototype.noSpace = function (text) {
        var array = text
            .split("")
            .filter(function (char) { return char != " " && char != "&" && char != ","; });
        return array.join("");
    };
    SgStatsWebPart.prototype.getListsWithExpired = function (lista) {
        var _this = this;
        var url = this.context.pageContext.site.absoluteUrl +
            "/_api/web/lists/getbytitle('" +
            lista +
            "')/items";
        this.context.spHttpClient
            .get(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].configurations.v1)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            var expiredData = "";
            var toExpireData = "";
            var vencido = 0;
            var porVencer = 0;
            var totalExpired = 0;
            var totalToExpire = 0;
            json.value.forEach(function (item) {
                if (item.Vencimientoestado == "Vencido" ||
                    item.Vencimientoestado == "vencido") {
                    vencido = vencido + 1;
                    totalExpired = totalExpired + 1;
                }
                if (item.Vencimientoestado == "Por vencer" ||
                    item.Vencimientoestado == "Por Vencer") {
                    porVencer = porVencer + 1;
                    totalToExpire = totalToExpire + 1;
                }
            });
            expiredData += "\n          <td class=\"\"> " + vencido + "   </td>\n        ";
            toExpireData += "\n      <td class=\"\"> " + porVencer + "   </td>\n        ";
            var lizta = _this.noSpace(lista);
            var dea = _this.domElement.querySelector("#" + lizta);
            dea.innerHTML = expiredData;
            var dou = _this.domElement.querySelector("#" + lizta + "-toexpire");
            dou.innerHTML = toExpireData;
            var toExpire = _this.domElement.querySelector("#toExpireCounter");
            var actualcounttoexp = "<span>" + totalToExpire + "</span>";
            toExpire.innerHTML = actualcounttoexp;
            var expired = _this.domElement.querySelector("#expiredCounter");
            var actualcountexp = "<span>" + totalExpired + "</span>";
            expired.innerHTML = actualcountexp;
        });
    };
    SgStatsWebPart.prototype.getExpired = function () {
        var _this = this;
        var sitesUrl = this.context.pageContext.site.absoluteUrl + "/_api/web/lists";
        this.context.spHttpClient
            .get(sitesUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].configurations.v1)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            var countExpired = 0;
            var countToExpire = 0;
            json.value.forEach(function (list) {
                var listUrl = sitesUrl + ("/getbytitle('" + list.Title + "')/items");
                _this.context.spHttpClient
                    .get(listUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].configurations.v1)
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (json) {
                    // console.log(json)
                    json.value.map(function (document) {
                        if (document.Vencimientoestado === "Vencido") {
                            countExpired = countExpired + 1;
                            console.log(countExpired);
                        }
                        if (document.Vencimientoestado === "Por vencer") {
                            countToExpire = countToExpire + 1;
                        }
                    });
                    // console.log(countExpired);
                    var toExpire = _this.domElement.querySelector("#toExpireCounter");
                    var actualcounttoexp = "<span>" + countToExpire + "</span>";
                    toExpire.innerHTML = actualcounttoexp;
                    var expired = _this.domElement.querySelector("#expiredCounter");
                    var actualcountexp = "<span>" + countExpired + "</span>";
                    expired.innerHTML = actualcountexp;
                    //?????
                    json.value.map(function (docu) {
                        if (docu.Vencimientoestado === "Vencido") {
                            var conter = 0;
                            var conter = conter + 1;
                            console.log(conter);
                            console.log(docu.Title);
                        }
                    });
                });
            });
        });
    };
    SgStatsWebPart.prototype.getLists = function () {
        var _this = this;
        var sitesUrl = this.context.pageContext.site.absoluteUrl + "/_api/web/lists";
        this.context.spHttpClient
            .get(sitesUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].configurations.v1)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            console.log(json);
            var html = "<table>";
            html += "<p class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["expired-title"] + "\">Estad\u00EDsticas por \u00E1rea</p>";
            html += "<tr >\n        \n          <td class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["text"] + "\">\u00C1rea</td>\n          <td class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["text-alt"] + "\" >Archivos</td>\n          <td class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["text-alt"] + "\" >Vencidos</td>\n          <td class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["text-alt"] + "\" >Por vencer</td>\n        \n        </tr>\n        \n        ";
            json.value.forEach(function (list) {
                if (list.Title !== "Activos del sitio" &&
                    list.Title !== "appdata" &&
                    list.Title !== "appfiles" &&
                    list.Title !== "Biblioteca de estilos" &&
                    list.Title !== "Biblioteca de registros de mantenimiento" &&
                    list.Title !== "Diseños compuestos" &&
                    list.Title !==
                        "DO_NOT_DELETE_SPLIST_SITECOLLECTION_AGGREGATED_CONTENTTYPES" &&
                    list.Title !== "Documentos" &&
                    list.Title !== "Documentos de venta al por menor" &&
                    list.Title !== "Eventos" &&
                    list.Title !== "Extensiones de plantillas web" &&
                    list.Title !== "Formularios convertidos" &&
                    list.Title !== "Galería de elementos web" &&
                    list.Title !== "Galería de páginas principales" &&
                    list.Title !== "Galería de plantillas de listas" &&
                    list.Title !== "Galería de soluciones" &&
                    list.Title !== "Galería de temas" &&
                    list.Title !== "TaxonomyHiddenList" &&
                    list.Title !== "Páginas del sitio" &&
                    list.Title !== "Plantillas de formulario" &&
                    list.Title !==
                        "Sustentabilidad, Asuntos corporativos y Legal - Sustentabilidad-Comunidades Externas" &&
                    list.Title !==
                        "Gerencia Servicios Técnicos - SI Aseguramiento de Calidad y Laboratorio" &&
                    list.Title !==
                        "Sustentabilidad, Asuntos corporativos y Legal - Legal-Propiedad Minera" &&
                    list.Title !== "test") {
                    var listId = _this.noSpace(list.Title);
                    html += "\n            <tr class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["table-row"] + "\">\n              <td class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].subTitle + " " + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["expired-text"] + "\"><div class=\"" + _SgStatsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].wrap + "\">" + list.Title + "</div>\n            </td>\n              <td class=\"\"> " + (list.ItemCount - 11) + "   </td>\n              <td class=\"\" id=\"" + listId + "\">x</td>\n              <td class=\"\" id=\"" + listId + "-toexpire\">x</td>\n            </tr>\n          ";
                }
            });
            html += "</table>";
            var listDiv = _this.domElement.querySelector("#listContent");
            listDiv.innerHTML = html;
        });
    };
    Object.defineProperty(SgStatsWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Version"].parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    SgStatsWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: SgStatsWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["PropertyPaneDescription"],
                    },
                    groups: [
                        {
                            groupName: SgStatsWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneTextField"])("description", {
                                    label: SgStatsWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["DescriptionFieldLabel"],
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    };
    return SgStatsWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (SgStatsWebPart);


/***/ }),

/***/ "ruv1":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitStyles = exports.detokenize = exports.clearStyles = exports.loadTheme = exports.flush = exports.configureRunMode = exports.configureLoadStyles = exports.loadStyles = void 0;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? global : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "vlQI":
/*!*************************************!*\
  !*** external "@microsoft/sp-http" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vlQI__;

/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ })});;
//# sourceMappingURL=sg-stats-web-part.js.map