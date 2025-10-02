"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "instrumentation";
exports.ids = ["instrumentation"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(instrument)/./instrumentation.js":
/*!****************************!*\
  !*** ./instrumentation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(instrument)/./lib/db.js\");\n\nasync function register() {\n    console.log(\"API Endpoint:\", \"/api\");\n    console.log(\"Connecting to database...\");\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vaW5zdHJ1bWVudGF0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStCO0FBRXhCLGVBQWVDO0lBQ3BCQyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCQyxNQUErQjtJQUM1REYsUUFBUUMsR0FBRyxDQUFDO0lBQ1osTUFBTUgsbURBQU9BO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW1vbmdvLy4vaW5zdHJ1bWVudGF0aW9uLmpzPzA3ZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3QgZnJvbSBcIkAvbGliL2RiXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgY29uc29sZS5sb2coXCJBUEkgRW5kcG9pbnQ6XCIsIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwpXG4gIGNvbnNvbGUubG9nKFwiQ29ubmVjdGluZyB0byBkYXRhYmFzZS4uLlwiKTtcbiAgYXdhaXQgY29ubmVjdCgpO1xufVxuIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJyZWdpc3RlciIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(instrument)/./instrumentation.js\n");

/***/ }),

/***/ "(instrument)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    console.warn(\"MONGODB_URI environment variable not defined. Database connection will fail at runtime.\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            console.log(\"DB connected\");\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vbGliL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFFM0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2RHLFFBQVFDLElBQUksQ0FDUjtBQUVSO0FBRUEsSUFBSUMsU0FBU0MsT0FBT1AsUUFBUTtBQUU1QixJQUFJLENBQUNNLFFBQVE7SUFDVEEsU0FBU0MsT0FBT1AsUUFBUSxHQUFHO1FBQUVRLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQzNEO0FBRUEsZUFBZUM7SUFDWCxJQUFJSixPQUFPRSxJQUFJLEVBQUU7UUFDYixPQUFPRixPQUFPRSxJQUFJO0lBQ3RCO0lBQ0EsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDakIsTUFBTUUsT0FBTztZQUNUQyxnQkFBZ0I7UUFDcEI7UUFDQU4sT0FBT0csT0FBTyxHQUFHVCx1REFBZ0IsQ0FBQ0MsYUFBYVUsTUFDOUNHLElBQUksQ0FBQ2QsQ0FBQUE7WUFDRkksUUFBUVcsR0FBRyxDQUFDO1lBQ1osT0FBT2Y7UUFDWDtJQUNKO0lBQ0EsSUFBSTtRQUNBTSxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUN0QyxFQUFFLE9BQU9PLEdBQUc7UUFDUlYsT0FBT0csT0FBTyxHQUFHO1FBQ2pCLE1BQU1PO0lBQ1Y7SUFFQSxPQUFPVixPQUFPRSxJQUFJO0FBQ3RCO0FBRUEsaUVBQWVFLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW1vbmdvLy4vbGliL2RiLmpzPzNkYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBub3QgZGVmaW5lZC4gRGF0YWJhc2UgY29ubmVjdGlvbiB3aWxsIGZhaWwgYXQgcnVudGltZS4nLFxuICAgIClcbn1cblxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZVxuXG5pZiAoIWNhY2hlZCkge1xuICAgIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZC5jb25uXG4gICAgfVxuICAgIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICAgICAgfVxuICAgICAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpXG4gICAgICAgIC50aGVuKG1vbmdvb3NlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEQiBjb25uZWN0ZWQnKVxuICAgICAgICAgICAgcmV0dXJuIG1vbmdvb3NlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2VcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbFxuICAgICAgICB0aHJvdyBlXG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hlZC5jb25uXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdCJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsImNvbnNvbGUiLCJ3YXJuIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiIsImxvZyIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(instrument)/./lib/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(instrument)/./instrumentation.js"));
module.exports = __webpack_exports__;

})();