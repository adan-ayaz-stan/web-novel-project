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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Ranking; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var _myNovels_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../myNovels.json */ \"./myNovels.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Ranking() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_myNovels_json__WEBPACK_IMPORTED_MODULE_4__);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-4 flex flex-col gap-2 py-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Public Searched Novels\"\n            }, void 0, false, {\n                fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-9 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 auto-rows-1fr gap-2 p-2\",\n                children: data.map((ele, ind)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/novel/\".concat(ele.novelId),\n                        className: \"col-span-1 p-2 px-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative h-40 w-full mb-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: ele.img,\n                                    alt: \"novel-image\",\n                                    fill: true,\n                                    className: \"object-contain lg:object-cover rounded\"\n                                }, void 0, false, {\n                                    fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm truncate\",\n                                children: ele.title\n                            }, void 0, false, {\n                                fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"flex items-center gap-1 text-gray-600 text-[13px] truncate\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiBookOpen, {\n                                    className: \"inline\"\n                                }, void 0, false, {\n                                    fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, \"weekly-featured\" + ind + 1, true, {\n                        fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/run/media/adanayaz/Adan Ayaz SSD/Official Projects/The Web Novel Project/components/IndexPage/SearchedNovels.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Ranking, \"ojjbhbRqi2UzTOOOdy2gcIRwGPk=\");\n_c = Ranking;\nvar _c;\n$RefreshReg$(_c, \"Ranking\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0luZGV4UGFnZS9TZWFyY2hlZE5vdmVscy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUNFO0FBQ2E7QUFDRjtBQUUzQixTQUFTTSxVQUFVOztJQUNoQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUNJLDJDQUFPQTtJQUV4QyxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzs7OzswQkFFRCw4REFBQ0g7Z0JBQUlDLFdBQVU7MEJBQ1pILEtBQUtNLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxNQUFRO29CQUN0QixxQkFDRSw4REFBQ2Isa0RBQUlBO3dCQUNIYyxNQUFNLFVBQXNCLE9BQVpGLElBQUlHLE9BQU87d0JBQzNCUCxXQUFVOzswQ0FHViw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNQLG1EQUFLQTtvQ0FDSmUsS0FBS0osSUFBSUssR0FBRztvQ0FDWkMsS0FBSTtvQ0FDSkMsSUFBSTtvQ0FDSlgsV0FBVTs7Ozs7Ozs7Ozs7MENBSWQsOERBQUNZO2dDQUFFWixXQUFVOzBDQUFvQkksSUFBSVMsS0FBSzs7Ozs7OzBDQUMxQyw4REFBQ0Q7Z0NBQUVaLFdBQVU7MENBQ1gsNEVBQUNOLHNEQUFVQTtvQ0FBQ00sV0FBVTs7Ozs7Ozs7Ozs7O3VCQWJuQixvQkFBb0JLLE1BQU07Ozs7O2dCQWlCckM7Ozs7Ozs7Ozs7OztBQUlSLENBQUM7R0FuQ3VCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0luZGV4UGFnZS9TZWFyY2hlZE5vdmVscy50c3g/NjYwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBCaUJvb2tPcGVuIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5pbXBvcnQgZGF0YXNldCBmcm9tIFwiLi4vLi4vbXlOb3ZlbHMuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5raW5nKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShkYXRhc2V0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGZsZXgtY29sIGdhcC0yIHB5LTEyXCI+XG4gICAgICA8aDE+UHVibGljIFNlYXJjaGVkIE5vdmVsczwvaDE+XG4gICAgICA8aHIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi05IGdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTYgYXV0by1yb3dzLTFmciBnYXAtMiBwLTJcIj5cbiAgICAgICAge2RhdGEubWFwKChlbGUsIGluZCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPXtgL25vdmVsLyR7ZWxlLm5vdmVsSWR9YH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBwLTIgcHgtNCByb3VuZGVkLXhsIHNoYWRvdy1tZCBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNzAwXCJcbiAgICAgICAgICAgICAga2V5PXtcIndlZWtseS1mZWF0dXJlZFwiICsgaW5kICsgMX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTQwIHctZnVsbCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e2VsZS5pbWd9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJub3ZlbC1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpbiBsZzpvYmplY3QtY292ZXIgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0cnVuY2F0ZVwiPntlbGUudGl0bGV9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LWdyYXktNjAwIHRleHQtWzEzcHhdIHRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgPEJpQm9va09wZW4gY2xhc3NOYW1lPVwiaW5saW5lXCIgLz5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJJbWFnZSIsIkJpQm9va09wZW4iLCJkYXRhc2V0IiwiUmFua2luZyIsImRhdGEiLCJzZXREYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJociIsIm1hcCIsImVsZSIsImluZCIsImhyZWYiLCJub3ZlbElkIiwic3JjIiwiaW1nIiwiYWx0IiwiZmlsbCIsInAiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/IndexPage/SearchedNovels.tsx\n"));

/***/ })

});