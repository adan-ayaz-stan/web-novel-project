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
exports.id = "pages/api/getNovelChapters";
exports.ids = ["pages/api/getNovelChapters"];
exports.modules = {

/***/ "axios?6fac":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cheerio");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./pages/api/getNovelChapters.js":
/*!***************************************!*\
  !*** ./pages/api/getNovelChapters.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst axios = __webpack_require__(/*! axios */ \"axios?6fac\");\nconst cheerio = __webpack_require__(/*! cheerio */ \"cheerio\");\nconst json = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nfunction handler(req, res) {\n    const novelID = req.body.novelID;\n    if (novelID == undefined) {\n        return res.status(404).json({\n            error: \"Novel ID not provided.\"\n        });\n    }\n    console.log(\"Fetching novel chapters...\");\n    const url = `https://readnovelfull.com/ajax/chapter-archive?novelId=${novelID}`;\n    axios.get(url).then((response)=>{\n        // Load the HTML content using Cheerio\n        const cheerioResponse = cheerio.load(response.data);\n        const links = [];\n        cheerioResponse(\"a\").each((index, element)=>{\n            const link = cheerioResponse(element).attr(\"href\");\n            const title = cheerioResponse(element).attr(\"title\");\n            const s = json.sign({\n                title,\n                link\n            }, \"thisSiteisWebScrapedLol\");\n            links.push({\n                title,\n                obj: s\n            });\n        });\n        // Print the extracted links\n        return res.status(200).json(links);\n    }).catch((error)=>{\n        console.log(\"Error:\", error);\n        return res.status(404).json({\n            error\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Tm92ZWxDaGFwdGVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsUUFBUUMsbUJBQU9BLENBQUMseUJBQU87QUFDN0IsTUFBTUMsVUFBVUQsbUJBQU9BLENBQUMsd0JBQVM7QUFDakMsTUFBTUUsT0FBT0YsbUJBQU9BLENBQUMsa0NBQWM7QUFDbkMsTUFBTUcsU0FBU0gsbUJBQU9BLENBQUMsc0JBQVE7QUFFaEIsU0FBU0ksUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsTUFBTUMsVUFBVUYsSUFBSUcsSUFBSSxDQUFDRCxPQUFPO0lBRWhDLElBQUlBLFdBQVdFLFdBQVc7UUFDeEIsT0FBT0gsSUFBSUksTUFBTSxDQUFDLEtBQUtSLElBQUksQ0FBQztZQUMxQlMsT0FBTztRQUNUO0lBQ0YsQ0FBQztJQUVEQyxRQUFRQyxHQUFHLENBQUM7SUFFWixNQUFNQyxNQUFNLENBQUMsdURBQXVELEVBQUVQLFFBQVEsQ0FBQztJQUUvRVIsTUFDR2dCLEdBQUcsQ0FBQ0QsS0FDSkUsSUFBSSxDQUFDLENBQUNDLFdBQWE7UUFDbEIsc0NBQXNDO1FBQ3RDLE1BQU1DLGtCQUFrQmpCLFFBQVFrQixJQUFJLENBQUNGLFNBQVNHLElBQUk7UUFFbEQsTUFBTUMsUUFBUSxFQUFFO1FBQ2hCSCxnQkFBZ0IsS0FBS0ksSUFBSSxDQUFDLENBQUNDLE9BQU9DLFVBQVk7WUFDNUMsTUFBTUMsT0FBT1AsZ0JBQWdCTSxTQUFTRSxJQUFJLENBQUM7WUFDM0MsTUFBTUMsUUFBUVQsZ0JBQWdCTSxTQUFTRSxJQUFJLENBQUM7WUFFNUMsTUFBTUUsSUFBSTFCLEtBQUsyQixJQUFJLENBQUM7Z0JBQUVGO2dCQUFPRjtZQUFLLEdBQUc7WUFFckNKLE1BQU1TLElBQUksQ0FBQztnQkFBRUg7Z0JBQU9JLEtBQUtIO1lBQUU7UUFDN0I7UUFFQSw0QkFBNEI7UUFDNUIsT0FBT3RCLElBQUlJLE1BQU0sQ0FBQyxLQUFLUixJQUFJLENBQUNtQjtJQUM5QixHQUNDVyxLQUFLLENBQUMsQ0FBQ3JCLFFBQVU7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQyxVQUFVRjtRQUN0QixPQUFPTCxJQUFJSSxNQUFNLENBQUMsS0FBS1IsSUFBSSxDQUFDO1lBQzFCUztRQUNGO0lBQ0Y7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHdlYi1hZ2VuY3ktd2Vic2l0ZS8uL3BhZ2VzL2FwaS9nZXROb3ZlbENoYXB0ZXJzLmpzPzg5MDMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5jb25zdCBjaGVlcmlvID0gcmVxdWlyZShcImNoZWVyaW9cIik7XG5jb25zdCBqc29uID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTtcbmNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoXCJiY3J5cHRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3Qgbm92ZWxJRCA9IHJlcS5ib2R5Lm5vdmVsSUQ7XG5cbiAgaWYgKG5vdmVsSUQgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtcbiAgICAgIGVycm9yOiBcIk5vdmVsIElEIG5vdCBwcm92aWRlZC5cIixcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgbm92ZWwgY2hhcHRlcnMuLi5cIik7XG5cbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vcmVhZG5vdmVsZnVsbC5jb20vYWpheC9jaGFwdGVyLWFyY2hpdmU/bm92ZWxJZD0ke25vdmVsSUR9YDtcblxuICBheGlvc1xuICAgIC5nZXQodXJsKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gTG9hZCB0aGUgSFRNTCBjb250ZW50IHVzaW5nIENoZWVyaW9cbiAgICAgIGNvbnN0IGNoZWVyaW9SZXNwb25zZSA9IGNoZWVyaW8ubG9hZChyZXNwb25zZS5kYXRhKTtcblxuICAgICAgY29uc3QgbGlua3MgPSBbXTtcbiAgICAgIGNoZWVyaW9SZXNwb25zZShcImFcIikuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgbGluayA9IGNoZWVyaW9SZXNwb25zZShlbGVtZW50KS5hdHRyKFwiaHJlZlwiKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBjaGVlcmlvUmVzcG9uc2UoZWxlbWVudCkuYXR0cihcInRpdGxlXCIpO1xuXG4gICAgICAgIGNvbnN0IHMgPSBqc29uLnNpZ24oeyB0aXRsZSwgbGluayB9LCBcInRoaXNTaXRlaXNXZWJTY3JhcGVkTG9sXCIpO1xuXG4gICAgICAgIGxpbmtzLnB1c2goeyB0aXRsZSwgb2JqOiBzIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFByaW50IHRoZSBleHRyYWN0ZWQgbGlua3NcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihsaW5rcyk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe1xuICAgICAgICBlcnJvcixcbiAgICAgIH0pO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsImNoZWVyaW8iLCJqc29uIiwiYmNyeXB0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5vdmVsSUQiLCJib2R5IiwidW5kZWZpbmVkIiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY2hlZXJpb1Jlc3BvbnNlIiwibG9hZCIsImRhdGEiLCJsaW5rcyIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCJsaW5rIiwiYXR0ciIsInRpdGxlIiwicyIsInNpZ24iLCJwdXNoIiwib2JqIiwiY2F0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getNovelChapters.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getNovelChapters.js"));
module.exports = __webpack_exports__;

})();