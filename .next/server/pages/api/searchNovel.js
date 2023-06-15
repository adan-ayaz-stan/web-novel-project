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
exports.id = "pages/api/searchNovel";
exports.ids = ["pages/api/searchNovel"];
exports.modules = {

/***/ "axios?6fac":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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

/***/ "(api)/./pages/api/searchNovel.js":
/*!**********************************!*\
  !*** ./pages/api/searchNovel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst axios = __webpack_require__(/*! axios */ \"axios?6fac\");\nconst cheerio = __webpack_require__(/*! cheerio */ \"cheerio\");\nconst json = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nasync function handler(req, res) {\n    const keyword = req.body.keyword;\n    const url = `https://readnovelfull.com/ajax/search-novel?keyword=${keyword}`;\n    await axios.get(url).then((response)=>{\n        const cheerioResponse = cheerio.load(response.data);\n        // Links and titles\n        const links = [];\n        cheerioResponse(\"a\").each((index, element)=>{\n            const title = cheerioResponse(element).attr(\"title\");\n            const href = cheerioResponse(element).attr(\"href\");\n            links.push({\n                title,\n                link: json.sign(href, \"thisSiteisWebScrapedLol\")\n            });\n        });\n        res.status(200).json(links);\n    }).catch((err)=>{\n        console.log(err);\n        res.status(500).json({\n            error: \"An internal error has occured.\"\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoTm92ZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFFBQVFDLG1CQUFPQSxDQUFDLHlCQUFPO0FBQzdCLE1BQU1DLFVBQVVELG1CQUFPQSxDQUFDLHdCQUFTO0FBQ2pDLE1BQU1FLE9BQU9GLG1CQUFPQSxDQUFDLGtDQUFjO0FBRXBCLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLFVBQVVGLElBQUlHLElBQUksQ0FBQ0QsT0FBTztJQUVoQyxNQUFNRSxNQUFNLENBQUMsb0RBQW9ELEVBQUVGLFFBQVEsQ0FBQztJQUU1RSxNQUFNUCxNQUNIVSxHQUFHLENBQUNELEtBQ0pFLElBQUksQ0FBQyxDQUFDQyxXQUFhO1FBQ2xCLE1BQU1DLGtCQUFrQlgsUUFBUVksSUFBSSxDQUFDRixTQUFTRyxJQUFJO1FBRWxELG1CQUFtQjtRQUNuQixNQUFNQyxRQUFRLEVBQUU7UUFDaEJILGdCQUFnQixLQUFLSSxJQUFJLENBQUMsQ0FBQ0MsT0FBT0MsVUFBWTtZQUM1QyxNQUFNQyxRQUFRUCxnQkFBZ0JNLFNBQVNFLElBQUksQ0FBQztZQUM1QyxNQUFNQyxPQUFPVCxnQkFBZ0JNLFNBQVNFLElBQUksQ0FBQztZQUMzQ0wsTUFBTU8sSUFBSSxDQUFDO2dCQUNUSDtnQkFDQUksTUFBTXJCLEtBQUtzQixJQUFJLENBQUNILE1BQU07WUFDeEI7UUFDRjtRQUVBaEIsSUFBSW9CLE1BQU0sQ0FBQyxLQUFLdkIsSUFBSSxDQUFDYTtJQUN2QixHQUNDVyxLQUFLLENBQUMsQ0FBQ0MsTUFBUTtRQUNkQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1p0QixJQUFJb0IsTUFBTSxDQUFDLEtBQUt2QixJQUFJLENBQUM7WUFDbkI0QixPQUFPO1FBQ1Q7SUFDRjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0d2ViLWFnZW5jeS13ZWJzaXRlLy4vcGFnZXMvYXBpL3NlYXJjaE5vdmVsLmpzPzEwZmIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5jb25zdCBjaGVlcmlvID0gcmVxdWlyZShcImNoZWVyaW9cIik7XG5jb25zdCBqc29uID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBrZXl3b3JkID0gcmVxLmJvZHkua2V5d29yZDtcblxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9yZWFkbm92ZWxmdWxsLmNvbS9hamF4L3NlYXJjaC1ub3ZlbD9rZXl3b3JkPSR7a2V5d29yZH1gO1xuXG4gIGF3YWl0IGF4aW9zXG4gICAgLmdldCh1cmwpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCBjaGVlcmlvUmVzcG9uc2UgPSBjaGVlcmlvLmxvYWQocmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgIC8vIExpbmtzIGFuZCB0aXRsZXNcbiAgICAgIGNvbnN0IGxpbmtzID0gW107XG4gICAgICBjaGVlcmlvUmVzcG9uc2UoXCJhXCIpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gY2hlZXJpb1Jlc3BvbnNlKGVsZW1lbnQpLmF0dHIoXCJ0aXRsZVwiKTtcbiAgICAgICAgY29uc3QgaHJlZiA9IGNoZWVyaW9SZXNwb25zZShlbGVtZW50KS5hdHRyKFwiaHJlZlwiKTtcbiAgICAgICAgbGlua3MucHVzaCh7XG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgbGluazoganNvbi5zaWduKGhyZWYsIFwidGhpc1NpdGVpc1dlYlNjcmFwZWRMb2xcIiksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGxpbmtzKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICBlcnJvcjogXCJBbiBpbnRlcm5hbCBlcnJvciBoYXMgb2NjdXJlZC5cIixcbiAgICAgIH0pO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsImNoZWVyaW8iLCJqc29uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImtleXdvcmQiLCJib2R5IiwidXJsIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY2hlZXJpb1Jlc3BvbnNlIiwibG9hZCIsImRhdGEiLCJsaW5rcyIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCJ0aXRsZSIsImF0dHIiLCJocmVmIiwicHVzaCIsImxpbmsiLCJzaWduIiwic3RhdHVzIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/searchNovel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/searchNovel.js"));
module.exports = __webpack_exports__;

})();