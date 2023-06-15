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
exports.id = "pages/api/addNovelToPublicSearched";
exports.ids = ["pages/api/addNovelToPublicSearched"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/addNovelToPublicSearched.ts":
/*!***********************************************!*\
  !*** ./pages/api/addNovelToPublicSearched.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst json = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst myNovelsFilePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"myNovels.json\");\nfunction handler(req, res) {\n    const { novelId , title , link , img  } = req.body;\n    // Check if all params are provided\n    if (!novelId || !title || !link || !img) {\n        return res.status(400).json({\n            error: \"Missing parameters\"\n        });\n    }\n    // Read the existing data from myNovels.json file\n    let data = [];\n    try {\n        const jsonData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(myNovelsFilePath, \"utf-8\");\n        data = JSON.parse(jsonData);\n    } catch (error) {\n        console.error(\"Error reading myNovels.json file:\", error);\n    }\n    // Check if data of the same novelId is already present\n    const existingIndex = data.findIndex((novel)=>novel.novelId === novelId);\n    // Remove existing data if found\n    if (existingIndex !== -1) {\n        data.splice(existingIndex, 1);\n    }\n    // Add new data at the start of the array\n    const newData = {\n        novelId,\n        title,\n        link: json.sign(link, \"thisSiteisWebScrapedLol\"),\n        img\n    };\n    data.unshift(newData);\n    // Write the updated data back to myNovels.json file\n    try {\n        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(myNovelsFilePath, JSON.stringify(data));\n        res.status(200).json({\n            message: \"Data added successfully\"\n        });\n    } catch (error) {\n        console.error(\"Error writing myNovels.json file:\", error);\n        res.status(500).json({\n            error: \"Internal server error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkTm92ZWxUb1B1YmxpY1NlYXJjaGVkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9CO0FBQ0k7QUFDeEIsTUFBTUUsT0FBT0MsbUJBQU9BLENBQUMsa0NBQWM7QUFFbkMsTUFBTUMsbUJBQW1CSCxnREFBUyxDQUFDSyxRQUFRQyxHQUFHLElBQUk7QUFFbkMsU0FBU0MsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsTUFBTSxFQUFFQyxRQUFPLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFQyxJQUFHLEVBQUUsR0FBR0wsSUFBSU0sSUFBSTtJQUU5QyxtQ0FBbUM7SUFDbkMsSUFBSSxDQUFDSixXQUFXLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLO1FBQ3ZDLE9BQU9KLElBQUlNLE1BQU0sQ0FBQyxLQUFLZCxJQUFJLENBQUM7WUFBRWUsT0FBTztRQUFxQjtJQUM1RCxDQUFDO0lBRUQsaURBQWlEO0lBQ2pELElBQUlDLE9BQU8sRUFBRTtJQUNiLElBQUk7UUFDRixNQUFNQyxXQUFXbkIsc0RBQWUsQ0FBQ0ksa0JBQWtCO1FBQ25EYyxPQUFPRyxLQUFLQyxLQUFLLENBQUNIO0lBQ3BCLEVBQUUsT0FBT0YsT0FBTztRQUNkTSxRQUFRTixLQUFLLENBQUMscUNBQXFDQTtJQUNyRDtJQUVBLHVEQUF1RDtJQUN2RCxNQUFNTyxnQkFBZ0JOLEtBQUtPLFNBQVMsQ0FBQyxDQUFDQyxRQUFVQSxNQUFNZixPQUFPLEtBQUtBO0lBRWxFLGdDQUFnQztJQUNoQyxJQUFJYSxrQkFBa0IsQ0FBQyxHQUFHO1FBQ3hCTixLQUFLUyxNQUFNLENBQUNILGVBQWU7SUFDN0IsQ0FBQztJQUVELHlDQUF5QztJQUN6QyxNQUFNSSxVQUFVO1FBQUVqQjtRQUFTQztRQUFPQyxNQUFNWCxLQUFLMkIsSUFBSSxDQUFDaEIsTUFBTTtRQUE0QkM7SUFBSTtJQUN4RkksS0FBS1ksT0FBTyxDQUFDRjtJQUViLG9EQUFvRDtJQUNwRCxJQUFJO1FBQ0Y1Qix1REFBZ0IsQ0FBQ0ksa0JBQWtCaUIsS0FBS1csU0FBUyxDQUFDZDtRQUNsRFIsSUFBSU0sTUFBTSxDQUFDLEtBQUtkLElBQUksQ0FBQztZQUFFK0IsU0FBUztRQUEwQjtJQUM1RCxFQUFFLE9BQU9oQixPQUFPO1FBQ2RNLFFBQVFOLEtBQUssQ0FBQyxxQ0FBcUNBO1FBQ25EUCxJQUFJTSxNQUFNLENBQUMsS0FBS2QsSUFBSSxDQUFDO1lBQUVlLE9BQU87UUFBd0I7SUFDeEQ7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHdlYi1hZ2VuY3ktd2Vic2l0ZS8uL3BhZ2VzL2FwaS9hZGROb3ZlbFRvUHVibGljU2VhcmNoZWQudHM/MjQzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5jb25zdCBqc29uID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTtcblxuY29uc3QgbXlOb3ZlbHNGaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbXlOb3ZlbHMuanNvbicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgbm92ZWxJZCwgdGl0bGUsIGxpbmssIGltZyB9ID0gcmVxLmJvZHk7XG5cbiAgLy8gQ2hlY2sgaWYgYWxsIHBhcmFtcyBhcmUgcHJvdmlkZWRcbiAgaWYgKCFub3ZlbElkIHx8ICF0aXRsZSB8fCAhbGluayB8fCAhaW1nKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdNaXNzaW5nIHBhcmFtZXRlcnMnIH0pO1xuICB9XG5cbiAgLy8gUmVhZCB0aGUgZXhpc3RpbmcgZGF0YSBmcm9tIG15Tm92ZWxzLmpzb24gZmlsZVxuICBsZXQgZGF0YSA9IFtdO1xuICB0cnkge1xuICAgIGNvbnN0IGpzb25EYXRhID0gZnMucmVhZEZpbGVTeW5jKG15Tm92ZWxzRmlsZVBhdGgsICd1dGYtOCcpO1xuICAgIGRhdGEgPSBKU09OLnBhcnNlKGpzb25EYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWFkaW5nIG15Tm92ZWxzLmpzb24gZmlsZTonLCBlcnJvcik7XG4gIH1cblxuICAvLyBDaGVjayBpZiBkYXRhIG9mIHRoZSBzYW1lIG5vdmVsSWQgaXMgYWxyZWFkeSBwcmVzZW50XG4gIGNvbnN0IGV4aXN0aW5nSW5kZXggPSBkYXRhLmZpbmRJbmRleCgobm92ZWwpID0+IG5vdmVsLm5vdmVsSWQgPT09IG5vdmVsSWQpO1xuXG4gIC8vIFJlbW92ZSBleGlzdGluZyBkYXRhIGlmIGZvdW5kXG4gIGlmIChleGlzdGluZ0luZGV4ICE9PSAtMSkge1xuICAgIGRhdGEuc3BsaWNlKGV4aXN0aW5nSW5kZXgsIDEpO1xuICB9XG5cbiAgLy8gQWRkIG5ldyBkYXRhIGF0IHRoZSBzdGFydCBvZiB0aGUgYXJyYXlcbiAgY29uc3QgbmV3RGF0YSA9IHsgbm92ZWxJZCwgdGl0bGUsIGxpbms6IGpzb24uc2lnbihsaW5rLCBcInRoaXNTaXRlaXNXZWJTY3JhcGVkTG9sXCIpLCBpbWcgfTtcbiAgZGF0YS51bnNoaWZ0KG5ld0RhdGEpO1xuXG4gIC8vIFdyaXRlIHRoZSB1cGRhdGVkIGRhdGEgYmFjayB0byBteU5vdmVscy5qc29uIGZpbGVcbiAgdHJ5IHtcbiAgICBmcy53cml0ZUZpbGVTeW5jKG15Tm92ZWxzRmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdEYXRhIGFkZGVkIHN1Y2Nlc3NmdWxseScgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igd3JpdGluZyBteU5vdmVscy5qc29uIGZpbGU6JywgZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwianNvbiIsInJlcXVpcmUiLCJteU5vdmVsc0ZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibm92ZWxJZCIsInRpdGxlIiwibGluayIsImltZyIsImJvZHkiLCJzdGF0dXMiLCJlcnJvciIsImRhdGEiLCJqc29uRGF0YSIsInJlYWRGaWxlU3luYyIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJleGlzdGluZ0luZGV4IiwiZmluZEluZGV4Iiwibm92ZWwiLCJzcGxpY2UiLCJuZXdEYXRhIiwic2lnbiIsInVuc2hpZnQiLCJ3cml0ZUZpbGVTeW5jIiwic3RyaW5naWZ5IiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/addNovelToPublicSearched.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addNovelToPublicSearched.ts"));
module.exports = __webpack_exports__;

})();