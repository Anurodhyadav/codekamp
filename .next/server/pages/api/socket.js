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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ \"socket.io\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io__WEBPACK_IMPORTED_MODULE_0__]);\nsocket_io__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst SocketHandler = (req, res) => {\n  if (res.socket.server.io) {\n    console.log('Socket is already running');\n  } else {\n    console.log('Socket is initializing');\n    const io = new socket_io__WEBPACK_IMPORTED_MODULE_0__.Server(res.socket.server);\n    res.socket.server.io = io;\n    io.on('connection', socket => {\n      socket.on('input-change', msg_and_user => {\n        socket.broadcast.emit('update-input', msg_and_user);\n      });\n      socket.on('code-submit', code_submition => {\n        socket.broadcast.emit('user-submit-code', code_submition);\n      });\n      socket.on('user-online', user => {\n        socket.broadcast.emit('broadcast-user', user);\n      });\n    });\n  }\n\n  res.end();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketHandler);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc29ja2V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0VBQ2xDLElBQUlBLEdBQUcsQ0FBQ0MsTUFBSixDQUFXQyxNQUFYLENBQWtCQyxFQUF0QixFQUEwQjtJQUN4QkMsT0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVo7RUFDRCxDQUZELE1BRU87SUFDTEQsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVo7SUFDQSxNQUFNRixFQUFFLEdBQUcsSUFBSU4sNkNBQUosQ0FBV0csR0FBRyxDQUFDQyxNQUFKLENBQVdDLE1BQXRCLENBQVg7SUFDQUYsR0FBRyxDQUFDQyxNQUFKLENBQVdDLE1BQVgsQ0FBa0JDLEVBQWxCLEdBQXVCQSxFQUF2QjtJQUVBQSxFQUFFLENBQUNHLEVBQUgsQ0FBTSxZQUFOLEVBQW9CTCxNQUFNLElBQUk7TUFDNUJBLE1BQU0sQ0FBQ0ssRUFBUCxDQUFVLGNBQVYsRUFBMEJDLFlBQVksSUFBSTtRQUN4Q04sTUFBTSxDQUFDTyxTQUFQLENBQWlCQyxJQUFqQixDQUFzQixjQUF0QixFQUFzQ0YsWUFBdEM7TUFDRCxDQUZEO01BR0VOLE1BQU0sQ0FBQ0ssRUFBUCxDQUFVLGFBQVYsRUFBeUJJLGNBQWMsSUFBSTtRQUN2Q1QsTUFBTSxDQUFDTyxTQUFQLENBQWlCQyxJQUFqQixDQUFzQixrQkFBdEIsRUFBMENDLGNBQTFDO01BQ0gsQ0FGRDtNQUdBVCxNQUFNLENBQUNLLEVBQVAsQ0FBVSxhQUFWLEVBQXlCSyxJQUFJLElBQUk7UUFDN0JWLE1BQU0sQ0FBQ08sU0FBUCxDQUFpQkMsSUFBakIsQ0FBc0IsZ0JBQXRCLEVBQXdDRSxJQUF4QztNQUNILENBRkQ7SUFHSCxDQVZEO0VBV0Q7O0VBQ0RYLEdBQUcsQ0FBQ1ksR0FBSjtBQUNELENBckJEOztBQXVCQSxpRUFBZWQsYUFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL3NvY2tldC5qcz85MzViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZlciB9IGZyb20gJ3NvY2tldC5pbydcblxuY29uc3QgU29ja2V0SGFuZGxlciA9IChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVzLnNvY2tldC5zZXJ2ZXIuaW8pIHtcbiAgICBjb25zb2xlLmxvZygnU29ja2V0IGlzIGFscmVhZHkgcnVubmluZycpXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ1NvY2tldCBpcyBpbml0aWFsaXppbmcnKVxuICAgIGNvbnN0IGlvID0gbmV3IFNlcnZlcihyZXMuc29ja2V0LnNlcnZlcilcbiAgICByZXMuc29ja2V0LnNlcnZlci5pbyA9IGlvXG5cbiAgICBpby5vbignY29ubmVjdGlvbicsIHNvY2tldCA9PiB7XG4gICAgICBzb2NrZXQub24oJ2lucHV0LWNoYW5nZScsIG1zZ19hbmRfdXNlciA9PiB7XG4gICAgICAgIHNvY2tldC5icm9hZGNhc3QuZW1pdCgndXBkYXRlLWlucHV0JywgbXNnX2FuZF91c2VyKTtcbiAgICAgIH0pXG4gICAgICAgIHNvY2tldC5vbignY29kZS1zdWJtaXQnLCBjb2RlX3N1Ym1pdGlvbiA9PiB7XG4gICAgICAgICAgICBzb2NrZXQuYnJvYWRjYXN0LmVtaXQoJ3VzZXItc3VibWl0LWNvZGUnLCBjb2RlX3N1Ym1pdGlvbik7XG4gICAgICAgIH0pXG4gICAgICAgIHNvY2tldC5vbigndXNlci1vbmxpbmUnLCB1c2VyID0+IHtcbiAgICAgICAgICAgIHNvY2tldC5icm9hZGNhc3QuZW1pdCgnYnJvYWRjYXN0LXVzZXInLCB1c2VyKTtcbiAgICAgICAgfSApXG4gICAgfSlcbiAgfVxuICByZXMuZW5kKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU29ja2V0SGFuZGxlciJdLCJuYW1lcyI6WyJTZXJ2ZXIiLCJTb2NrZXRIYW5kbGVyIiwicmVxIiwicmVzIiwic29ja2V0Iiwic2VydmVyIiwiaW8iLCJjb25zb2xlIiwibG9nIiwib24iLCJtc2dfYW5kX3VzZXIiLCJicm9hZGNhc3QiLCJlbWl0IiwiY29kZV9zdWJtaXRpb24iLCJ1c2VyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/socket.js\n");

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