"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/IndexPage/SearchedNovels.tsx":
/*!*************************************************!*\
  !*** ./components/IndexPage/SearchedNovels.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Ranking; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var _myNovels_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../myNovels.json */ \"./myNovels.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Ranking() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_myNovels_json__WEBPACK_IMPORTED_MODULE_4__);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-4 flex flex-col gap-2 py-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Public Searched Novels\"\n            }, void 0, false, {\n                fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"Latest searched \"\n            }, void 0, false, {\n                fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-9 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 auto-rows-1fr gap-2 p-2\",\n                children: data.map((ele, ind)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/novel/\".concat(ele.novelId),\n                        className: \"col-span-1 p-2 px-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative h-40 w-full mb-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: ele.img,\n                                    alt: \"novel-image\",\n                                    fill: true,\n                                    className: \"object-contain lg:object-cover rounded\"\n                                }, void 0, false, {\n                                    fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm truncate\",\n                                children: ele.title\n                            }, void 0, false, {\n                                fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"flex items-center gap-1 text-gray-600 text-[13px] truncate\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiBookOpen, {\n                                    className: \"inline\"\n                                }, void 0, false, {\n                                    fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, \"weekly-featured\" + ind + 1, true, {\n                        fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Ranking, \"ojjbhbRqi2UzTOOOdy2gcIRwGPk=\");\n_c = Ranking;\nvar _c;\n$RefreshReg$(_c, \"Ranking\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0luZGV4UGFnZS9TZWFyY2hlZE5vdmVscy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUNFO0FBQ2E7QUFDRjtBQUUzQixTQUFTTSxVQUFVOztJQUNoQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUNJLDJDQUFPQTtJQUV4QyxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFLOzs7Ozs7MEJBQ04sOERBQUNDOzs7OzswQkFFRCw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ1pILEtBQUtPLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxNQUFRO29CQUN0QixxQkFDRSw4REFBQ2Qsa0RBQUlBO3dCQUNIZSxNQUFNLFVBQXNCLE9BQVpGLElBQUlHLE9BQU87d0JBQzNCUixXQUFVOzswQ0FHViw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNQLG1EQUFLQTtvQ0FDSmdCLEtBQUtKLElBQUlLLEdBQUc7b0NBQ1pDLEtBQUk7b0NBQ0pDLElBQUk7b0NBQ0paLFdBQVU7Ozs7Ozs7Ozs7OzBDQUlkLDhEQUFDYTtnQ0FBRWIsV0FBVTswQ0FBb0JLLElBQUlTLEtBQUs7Ozs7OzswQ0FDMUMsOERBQUNEO2dDQUFFYixXQUFVOzBDQUNYLDRFQUFDTixzREFBVUE7b0NBQUNNLFdBQVU7Ozs7Ozs7Ozs7Ozt1QkFibkIsb0JBQW9CTSxNQUFNOzs7OztnQkFpQnJDOzs7Ozs7Ozs7Ozs7QUFJUixDQUFDO0dBcEN1QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmRleFBhZ2UvU2VhcmNoZWROb3ZlbHMudHN4PzY2MDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgQmlCb29rT3BlbiB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xuaW1wb3J0IGRhdGFzZXQgZnJvbSBcIi4uLy4uL215Tm92ZWxzLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFua2luZygpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoZGF0YXNldCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBmbGV4LWNvbCBnYXAtMiBweS0xMlwiPlxuICAgICAgPGgxPlB1YmxpYyBTZWFyY2hlZCBOb3ZlbHM8L2gxPlxuICAgICAgPHNwYW4+TGF0ZXN0IHNlYXJjaGVkIDwvc3Bhbj5cbiAgICAgIDxociAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTkgZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNiBhdXRvLXJvd3MtMWZyIGdhcC0yIHAtMlwiPlxuICAgICAgICB7ZGF0YS5tYXAoKGVsZSwgaW5kKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e2Avbm92ZWwvJHtlbGUubm92ZWxJZH1gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIHAtMiBweC00IHJvdW5kZWQteGwgc2hhZG93LW1kIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi03MDBcIlxuICAgICAgICAgICAgICBrZXk9e1wid2Vla2x5LWZlYXR1cmVkXCIgKyBpbmQgKyAxfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNDAgdy1mdWxsIG1iLTJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17ZWxlLmltZ31cbiAgICAgICAgICAgICAgICAgIGFsdD1cIm5vdmVsLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluIGxnOm9iamVjdC1jb3ZlciByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRydW5jYXRlXCI+e2VsZS50aXRsZX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQtZ3JheS02MDAgdGV4dC1bMTNweF0gdHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICA8QmlCb29rT3BlbiBjbGFzc05hbWU9XCJpbmxpbmVcIiAvPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIkltYWdlIiwiQmlCb29rT3BlbiIsImRhdGFzZXQiLCJSYW5raW5nIiwiZGF0YSIsInNldERhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJociIsIm1hcCIsImVsZSIsImluZCIsImhyZWYiLCJub3ZlbElkIiwic3JjIiwiaW1nIiwiYWx0IiwiZmlsbCIsInAiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/IndexPage/SearchedNovels.tsx\n"));

/***/ })

});