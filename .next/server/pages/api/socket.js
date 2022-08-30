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
exports.id = "pages/api/socket";
exports.ids = ["pages/api/socket"];
exports.modules = {

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("socket.io");;

/***/ }),

/***/ "(api)/./pages/api/socket.js":
/*!*****************************!*\
  !*** ./pages/api/socket.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ \"socket.io\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io__WEBPACK_IMPORTED_MODULE_0__]);\nsocket_io__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst SocketHandler = (req, res)=>{\n    if (res.socket.server.io) {\n        console.log(\"Socket is already running\");\n    } else {\n        console.log(\"Socket is initializing\");\n        const io = new socket_io__WEBPACK_IMPORTED_MODULE_0__.Server(res.socket.server);\n        res.socket.server.io = io;\n        io.on(\"connection\", (socket)=>{\n            socket.on(\"input-change\", (msg_and_user)=>{\n                socket.broadcast.emit(\"update-input\", msg_and_user);\n            });\n            socket.on(\"code-submit\", (code_submition)=>{\n                socket.broadcast.emit(\"user-submit-code\", code_submition);\n            });\n            socket.on(\"user-online\", (user)=>{\n                socket.broadcast.emit(\"broadcast-user\", user);\n            });\n        });\n    }\n    res.end();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketHandler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc29ja2V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtDO0FBRWxDLE1BQU1DLGFBQWEsR0FBRyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNsQyxJQUFJQSxHQUFHLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxFQUFFLEVBQUU7UUFDeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO0tBQ3pDLE1BQU07UUFDTEQsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLENBQUM7UUFDckMsTUFBTUYsRUFBRSxHQUFHLElBQUlOLDZDQUFNLENBQUNHLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLENBQUM7UUFDeENGLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLENBQUNDLEVBQUUsR0FBR0EsRUFBRTtRQUV6QkEsRUFBRSxDQUFDRyxFQUFFLENBQUMsWUFBWSxFQUFFTCxDQUFBQSxNQUFNLEdBQUk7WUFDNUJBLE1BQU0sQ0FBQ0ssRUFBRSxDQUFDLGNBQWMsRUFBRUMsQ0FBQUEsWUFBWSxHQUFJO2dCQUN4Q04sTUFBTSxDQUFDTyxTQUFTLENBQUNDLElBQUksQ0FBQyxjQUFjLEVBQUVGLFlBQVksQ0FBQyxDQUFDO2FBQ3JELENBQUM7WUFDQU4sTUFBTSxDQUFDSyxFQUFFLENBQUMsYUFBYSxFQUFFSSxDQUFBQSxjQUFjLEdBQUk7Z0JBQ3ZDVCxNQUFNLENBQUNPLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDLGtCQUFrQixFQUFFQyxjQUFjLENBQUMsQ0FBQzthQUM3RCxDQUFDO1lBQ0ZULE1BQU0sQ0FBQ0ssRUFBRSxDQUFDLGFBQWEsRUFBRUssQ0FBQUEsSUFBSSxHQUFJO2dCQUM3QlYsTUFBTSxDQUFDTyxTQUFTLENBQUNDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRUUsSUFBSSxDQUFDLENBQUM7YUFDakQsQ0FBRTtTQUNOLENBQUM7S0FDSDtJQUNEWCxHQUFHLENBQUNZLEdBQUcsRUFBRTtDQUNWO0FBRUQsaUVBQWVkLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvc29ja2V0LmpzPzkzNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnc29ja2V0LmlvJ1xuXG5jb25zdCBTb2NrZXRIYW5kbGVyID0gKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXMuc29ja2V0LnNlcnZlci5pbykge1xuICAgIGNvbnNvbGUubG9nKCdTb2NrZXQgaXMgYWxyZWFkeSBydW5uaW5nJylcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnU29ja2V0IGlzIGluaXRpYWxpemluZycpXG4gICAgY29uc3QgaW8gPSBuZXcgU2VydmVyKHJlcy5zb2NrZXQuc2VydmVyKVxuICAgIHJlcy5zb2NrZXQuc2VydmVyLmlvID0gaW9cblxuICAgIGlvLm9uKCdjb25uZWN0aW9uJywgc29ja2V0ID0+IHtcbiAgICAgIHNvY2tldC5vbignaW5wdXQtY2hhbmdlJywgbXNnX2FuZF91c2VyID0+IHtcbiAgICAgICAgc29ja2V0LmJyb2FkY2FzdC5lbWl0KCd1cGRhdGUtaW5wdXQnLCBtc2dfYW5kX3VzZXIpO1xuICAgICAgfSlcbiAgICAgICAgc29ja2V0Lm9uKCdjb2RlLXN1Ym1pdCcsIGNvZGVfc3VibWl0aW9uID0+IHtcbiAgICAgICAgICAgIHNvY2tldC5icm9hZGNhc3QuZW1pdCgndXNlci1zdWJtaXQtY29kZScsIGNvZGVfc3VibWl0aW9uKTtcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0Lm9uKCd1c2VyLW9ubGluZScsIHVzZXIgPT4ge1xuICAgICAgICAgICAgc29ja2V0LmJyb2FkY2FzdC5lbWl0KCdicm9hZGNhc3QtdXNlcicsIHVzZXIpO1xuICAgICAgICB9IClcbiAgICB9KVxuICB9XG4gIHJlcy5lbmQoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb2NrZXRIYW5kbGVyIl0sIm5hbWVzIjpbIlNlcnZlciIsIlNvY2tldEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzb2NrZXQiLCJzZXJ2ZXIiLCJpbyIsImNvbnNvbGUiLCJsb2ciLCJvbiIsIm1zZ19hbmRfdXNlciIsImJyb2FkY2FzdCIsImVtaXQiLCJjb2RlX3N1Ym1pdGlvbiIsInVzZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/socket.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/socket.js"));
module.exports = __webpack_exports__;

})();