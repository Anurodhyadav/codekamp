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
exports.id = "pages/api/account/login";
exports.ids = ["pages/api/account/login"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./pages/api/account/login.js":
/*!************************************!*\
  !*** ./pages/api/account/login.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst secret_key = \"Secret_key_for_Code_kamp_authentication\";\nasync function login(req, res) {\n  if (req.method == \"POST\") {\n    try {\n      if (req.body.name && req.body.password) {\n        const user = {\n          name: req.body.name,\n          password: req.body.password\n        };\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n          user: user\n        }, secret_key || '', {\n          expiresIn: '7d'\n        });\n        res.status(200).send({\n          accessToken: token,\n          user: req.body.name\n        });\n      } else {\n        res.status(401).send({\n          error: \"Something went wrong\"\n        });\n      }\n    } catch (error) {\n      console.error(error);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWNjb3VudC9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUVBLE1BQU1DLFVBQVUsR0FBRyx5Q0FBbkI7QUFJZSxlQUFlQyxLQUFmLENBQXFCQyxHQUFyQixFQUEwQkMsR0FBMUIsRUFBK0I7RUFDMUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFKLElBQWMsTUFBbEIsRUFBMEI7SUFDdEIsSUFBSTtNQUNBLElBQUlGLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxJQUFULElBQWlCSixHQUFHLENBQUNHLElBQUosQ0FBU0UsUUFBOUIsRUFBd0M7UUFDcEMsTUFBTUMsSUFBSSxHQUFHO1VBQ1RGLElBQUksRUFBRUosR0FBRyxDQUFDRyxJQUFKLENBQVNDLElBRE47VUFFVEMsUUFBUSxFQUFFTCxHQUFHLENBQUNHLElBQUosQ0FBU0U7UUFGVixDQUFiO1FBSUEsTUFBTUUsS0FBSyxHQUFHVix3REFBQSxDQUFTO1VBQUVTLElBQUksRUFBRUE7UUFBUixDQUFULEVBQXlCUixVQUFVLElBQUksRUFBdkMsRUFBMkM7VUFBRVcsU0FBUyxFQUFFO1FBQWIsQ0FBM0MsQ0FBZDtRQUNBUixHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtVQUFFQyxXQUFXLEVBQUVMLEtBQWY7VUFBc0JELElBQUksRUFBRU4sR0FBRyxDQUFDRyxJQUFKLENBQVNDO1FBQXJDLENBQXJCO01BQ0gsQ0FQRCxNQVFLO1FBQ0RILEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO1VBQUVFLEtBQUssRUFBRTtRQUFULENBQXJCO01BQ0g7SUFFSixDQWJELENBYUUsT0FBT0EsS0FBUCxFQUFjO01BQ1pDLE9BQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0lBRUg7RUFFSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL2FjY291bnQvbG9naW4uanM/NDIyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuXG5jb25zdCBzZWNyZXRfa2V5ID0gXCJTZWNyZXRfa2V5X2Zvcl9Db2RlX2thbXBfYXV0aGVudGljYXRpb25cIlxuXG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbG9naW4ocmVxLCByZXMpIHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PSBcIlBPU1RcIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHJlcS5ib2R5Lm5hbWUgJiYgcmVxLmJvZHkucGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiByZXEuYm9keS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcmVxLmJvZHkucGFzc3dvcmRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7IHVzZXI6IHVzZXIgfSwgc2VjcmV0X2tleSB8fCAnJywgeyBleHBpcmVzSW46ICc3ZCcgfSlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IGFjY2Vzc1Rva2VuOiB0b2tlbiwgdXNlcjogcmVxLmJvZHkubmFtZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBlcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgIFxuICAgICAgICB9XG5cbiAgICB9XG59XG4gICAgIl0sIm5hbWVzIjpbImp3dCIsInNlY3JldF9rZXkiLCJsb2dpbiIsInJlcSIsInJlcyIsIm1ldGhvZCIsImJvZHkiLCJuYW1lIiwicGFzc3dvcmQiLCJ1c2VyIiwidG9rZW4iLCJzaWduIiwiZXhwaXJlc0luIiwic3RhdHVzIiwic2VuZCIsImFjY2Vzc1Rva2VuIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/account/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/account/login.js"));
module.exports = __webpack_exports__;

})();