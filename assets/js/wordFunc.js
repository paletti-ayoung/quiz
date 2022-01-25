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

/***/ "./src/client/js/wordFunc.js":
/*!***********************************!*\
  !*** ./src/client/js/wordFunc.js ***!
  \***********************************/
/***/ (() => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar addBtn = document.getElementById(\"add\");\nvar wordTxt = document.getElementById(\"word\");\nvar meaningTxt = document.getElementById(\"mean\");\nvar wordBox = document.getElementById(\"word-list\");\nwindow.onload = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n  var list;\n  return regeneratorRuntime.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return getAllWords();\n\n        case 2:\n          list = _context.sent;\n          list.forEach(function (i) {\n            var t = \"\\n\\t\\t<div class=\\\"cardBox\\\">\\n\\t\\t\\t<div>\".concat(i.title, \"</div>\\n\\t\\t\\t<div>\").concat(i.mean, \"</div>\\n\\t\\t</div>\\n\\t\\t\");\n            wordBox.innerHTML += t;\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\naddBtn.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n  return regeneratorRuntime.wrap(function _callee2$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          if (wordTxt.value === '' || meaningTxt.value === '') {\n            alert(\"빈칸을 입력해주세요\");\n          }\n\n          _context2.next = 3;\n          return createWord(wordTxt.value, meaningTxt.value);\n\n        case 3:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _callee2);\n})));\n\nvar createWord = /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(title, mean, desc) {\n    var result;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return axios.post('/api/words', {\n              title: title,\n              mean: mean\n            });\n\n          case 3:\n            result = _context3.sent.data;\n\n            if (result.status === 200) {\n              window.location.reload();\n            }\n\n            _context3.next = 10;\n            break;\n\n          case 7:\n            _context3.prev = 7;\n            _context3.t0 = _context3[\"catch\"](0);\n            console.log('error ', _context3.t0.response.data);\n\n          case 10:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 7]]);\n  }));\n\n  return function createWord(_x, _x2, _x3) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nvar getAllWords = /*#__PURE__*/function () {\n  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n    var result;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.prev = 0;\n            _context4.next = 3;\n            return axios.get('/api/words');\n\n          case 3:\n            result = _context4.sent.data;\n            return _context4.abrupt(\"return\", result.data);\n\n          case 7:\n            _context4.prev = 7;\n            _context4.t0 = _context4[\"catch\"](0);\n            console.log('error ', _context4.t0.response.data);\n\n          case 10:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, null, [[0, 7]]);\n  }));\n\n  return function getAllWords() {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack://quiz/./src/client/js/wordFunc.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/wordFunc.js"]();
/******/ 	
/******/ })()
;