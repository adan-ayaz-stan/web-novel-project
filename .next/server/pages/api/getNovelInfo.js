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
exports.id = "pages/api/getNovelInfo";
exports.ids = ["pages/api/getNovelInfo"];
exports.modules = {

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cheerio");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/getNovelInfo.ts":
/*!***********************************!*\
  !*** ./pages/api/getNovelInfo.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _myNovels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myNovels */ \"(api)/./pages/api/myNovels.json\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst cheerio = __webpack_require__(/*! cheerio */ \"cheerio\");\nfunction handler(req, res) {\n    const novelId = req.body.novelId;\n    if (novelId === undefined) {\n        return res.status(400).json({\n            error: \"Invalid call.\"\n        });\n    }\n    // Filter through the novels\n    const novelTarget = _myNovels__WEBPACK_IMPORTED_MODULE_0__.data.find((ele)=>{\n        return ele.novelId == novelId;\n    });\n    if (novelTarget === undefined) {\n        return res.status(302).json({\n            error: \"Novel not found in collection.\"\n        });\n    }\n    axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(novelTarget.link).then((response)=>{\n        const cheerioResponse = cheerio.load(response.data);\n        const liInfoMeta = cheerioResponse(\".info-meta\").find(\"li\");\n        // Metadata Text\n        const metaData = [];\n        liInfoMeta.each((index, element)=>{\n            const liH3 = cheerioResponse(element).find(\"h3\").text();\n            const liTxt = cheerioResponse(element).text();\n            const cleanedLiTxt = liTxt.replace(liH3, \"\");\n            metaData.push({\n                heading: liH3,\n                text: cleanedLiTxt\n            });\n        });\n        // Latest Chapter Text\n        const chapterInfoValue = cheerioResponse(\".item\").find(\".item-value\").text();\n        // Description Text\n        const descText = [];\n        const pDescText = cheerioResponse(\".desc-text\").find(\"p\");\n        pDescText.each((index, element)=>{\n            const text = cheerioResponse(element).text();\n            descText.push(text);\n        });\n        res.status(200).json({\n            title: novelTarget.title,\n            novelId: novelTarget.novelId,\n            img: novelTarget.img,\n            metaData,\n            description: descText,\n            latestChapter: chapterInfoValue\n        });\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Tm92ZWxJbmZvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNrQztBQUNSO0FBRTFCLE1BQU1FLFVBQVVDLG1CQUFPQSxDQUFDLHdCQUFTO0FBU2xCLFNBQVNDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQVE7SUFDL0UsTUFBTUMsVUFBVUYsSUFBSUcsSUFBSSxDQUFDRCxPQUFPO0lBRWhDLElBQUlBLFlBQVlFLFdBQVc7UUFDekIsT0FBT0gsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUMxQkMsT0FBTztRQUNUO0lBQ0YsQ0FBQztJQUVELDRCQUE0QjtJQUM1QixNQUFNQyxjQUF1Q2IsZ0RBQVMsQ0FBQyxDQUFDZSxNQUFxQjtRQUMzRSxPQUFPQSxJQUFJUixPQUFPLElBQUlBO0lBQ3hCO0lBRUEsSUFBSU0sZ0JBQWdCSixXQUFXO1FBQzdCLE9BQU9ILElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDMUJDLE9BQU87UUFDVDtJQUNGLENBQUM7SUFFRFgsaURBQVMsQ0FBQ1ksWUFBWUksSUFBSSxFQUFFQyxJQUFJLENBQUNDLENBQUFBLFdBQVk7UUFDM0MsTUFBTUMsa0JBQWtCbEIsUUFBUW1CLElBQUksQ0FBQ0YsU0FBU25CLElBQUk7UUFFbEQsTUFBTXNCLGFBQWFGLGdCQUFnQixjQUFjTixJQUFJLENBQUM7UUFFdEQsZ0JBQWdCO1FBQ2hCLE1BQU1TLFdBQVcsRUFBRTtRQUVuQkQsV0FBV0UsSUFBSSxDQUFDLENBQUNDLE9BQU9DLFVBQVk7WUFDbEMsTUFBTUMsT0FBT1AsZ0JBQWdCTSxTQUFTWixJQUFJLENBQUMsTUFBTWMsSUFBSTtZQUNyRCxNQUFNQyxRQUFRVCxnQkFBZ0JNLFNBQVNFLElBQUk7WUFDM0MsTUFBTUUsZUFBZUQsTUFBTUUsT0FBTyxDQUFDSixNQUFNO1lBQ3pDSixTQUFTUyxJQUFJLENBQUM7Z0JBQ1pDLFNBQVNOO2dCQUNUQyxNQUFNRTtZQUNSO1FBQ0Y7UUFFQSxzQkFBc0I7UUFDdEIsTUFBTUksbUJBQW1CZCxnQkFBZ0IsU0FBU04sSUFBSSxDQUFDLGVBQWVjLElBQUk7UUFJMUUsbUJBQW1CO1FBQ25CLE1BQU1PLFdBQVcsRUFBRTtRQUVuQixNQUFNQyxZQUFZaEIsZ0JBQWdCLGNBQWNOLElBQUksQ0FBQztRQUNyRHNCLFVBQVVaLElBQUksQ0FBQyxDQUFDQyxPQUFPQyxVQUFZO1lBQ2pDLE1BQU1FLE9BQU9SLGdCQUFnQk0sU0FBU0UsSUFBSTtZQUMxQ08sU0FBU0gsSUFBSSxDQUFDSjtRQUNoQjtRQUVBdEIsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQjBCLE9BQU94QixZQUFZd0IsS0FBSztZQUN4QjlCLFNBQVNNLFlBQVlOLE9BQU87WUFDNUIrQixLQUFLekIsWUFBWXlCLEdBQUc7WUFDcEJmO1lBQ0FnQixhQUFhSjtZQUNiSyxlQUFlTjtRQUNqQjtJQUNGO0FBRUYsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHR3ZWItYWdlbmN5LXdlYnNpdGUvLi9wYWdlcy9hcGkvZ2V0Tm92ZWxJbmZvLnRzP2QxY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vbXlOb3ZlbHMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgY2hlZXJpbyA9IHJlcXVpcmUoXCJjaGVlcmlvXCIpXG5cbnR5cGUgTm92ZWxUYXJnZXQgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbiAgbm92ZWxJZDogbnVtYmVyO1xuICBpbWc6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpOiB2b2lkIHtcbiAgY29uc3Qgbm92ZWxJZCA9IHJlcS5ib2R5Lm5vdmVsSWQ7XG5cbiAgaWYgKG5vdmVsSWQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICBlcnJvcjogJ0ludmFsaWQgY2FsbC4nLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gRmlsdGVyIHRocm91Z2ggdGhlIG5vdmVsc1xuICBjb25zdCBub3ZlbFRhcmdldDogTm92ZWxUYXJnZXQgfCB1bmRlZmluZWQgPSBkYXRhLmZpbmQoKGVsZTogTm92ZWxUYXJnZXQpID0+IHtcbiAgICByZXR1cm4gZWxlLm5vdmVsSWQgPT0gbm92ZWxJZDtcbiAgfSk7XG5cbiAgaWYgKG5vdmVsVGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygzMDIpLmpzb24oe1xuICAgICAgZXJyb3I6IFwiTm92ZWwgbm90IGZvdW5kIGluIGNvbGxlY3Rpb24uXCJcbiAgICB9KVxuICB9XG5cbiAgYXhpb3MuZ2V0KG5vdmVsVGFyZ2V0LmxpbmspLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIGNvbnN0IGNoZWVyaW9SZXNwb25zZSA9IGNoZWVyaW8ubG9hZChyZXNwb25zZS5kYXRhKTtcblxuICAgIGNvbnN0IGxpSW5mb01ldGEgPSBjaGVlcmlvUmVzcG9uc2UoXCIuaW5mby1tZXRhXCIpLmZpbmQoXCJsaVwiKTtcblxuICAgIC8vIE1ldGFkYXRhIFRleHRcbiAgICBjb25zdCBtZXRhRGF0YSA9IFtdXG5cbiAgICBsaUluZm9NZXRhLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBsaUgzID0gY2hlZXJpb1Jlc3BvbnNlKGVsZW1lbnQpLmZpbmQoJ2gzJykudGV4dCgpO1xuICAgICAgY29uc3QgbGlUeHQgPSBjaGVlcmlvUmVzcG9uc2UoZWxlbWVudCkudGV4dCgpO1xuICAgICAgY29uc3QgY2xlYW5lZExpVHh0ID0gbGlUeHQucmVwbGFjZShsaUgzLCAnJyk7XG4gICAgICBtZXRhRGF0YS5wdXNoKHtcbiAgICAgICAgaGVhZGluZzogbGlIMyxcbiAgICAgICAgdGV4dDogY2xlYW5lZExpVHh0XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIExhdGVzdCBDaGFwdGVyIFRleHRcbiAgICBjb25zdCBjaGFwdGVySW5mb1ZhbHVlID0gY2hlZXJpb1Jlc3BvbnNlKFwiLml0ZW1cIikuZmluZChcIi5pdGVtLXZhbHVlXCIpLnRleHQoKVxuXG5cblxuICAgIC8vIERlc2NyaXB0aW9uIFRleHRcbiAgICBjb25zdCBkZXNjVGV4dCA9IFtdO1xuXG4gICAgY29uc3QgcERlc2NUZXh0ID0gY2hlZXJpb1Jlc3BvbnNlKFwiLmRlc2MtdGV4dFwiKS5maW5kKFwicFwiKTtcbiAgICBwRGVzY1RleHQuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBjaGVlcmlvUmVzcG9uc2UoZWxlbWVudCkudGV4dCgpO1xuICAgICAgZGVzY1RleHQucHVzaCh0ZXh0KTtcbiAgICB9KVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgdGl0bGU6IG5vdmVsVGFyZ2V0LnRpdGxlLFxuICAgICAgbm92ZWxJZDogbm92ZWxUYXJnZXQubm92ZWxJZCxcbiAgICAgIGltZzogbm92ZWxUYXJnZXQuaW1nLFxuICAgICAgbWV0YURhdGEsXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY1RleHQsXG4gICAgICBsYXRlc3RDaGFwdGVyOiBjaGFwdGVySW5mb1ZhbHVlXG4gICAgfSlcbiAgfSlcblxufVxuIl0sIm5hbWVzIjpbImRhdGEiLCJheGlvcyIsImNoZWVyaW8iLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5vdmVsSWQiLCJib2R5IiwidW5kZWZpbmVkIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibm92ZWxUYXJnZXQiLCJmaW5kIiwiZWxlIiwiZ2V0IiwibGluayIsInRoZW4iLCJyZXNwb25zZSIsImNoZWVyaW9SZXNwb25zZSIsImxvYWQiLCJsaUluZm9NZXRhIiwibWV0YURhdGEiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwibGlIMyIsInRleHQiLCJsaVR4dCIsImNsZWFuZWRMaVR4dCIsInJlcGxhY2UiLCJwdXNoIiwiaGVhZGluZyIsImNoYXB0ZXJJbmZvVmFsdWUiLCJkZXNjVGV4dCIsInBEZXNjVGV4dCIsInRpdGxlIiwiaW1nIiwiZGVzY3JpcHRpb24iLCJsYXRlc3RDaGFwdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getNovelInfo.ts\n");

/***/ }),

/***/ "(api)/./pages/api/myNovels.json":
/*!*********************************!*\
  !*** ./pages/api/myNovels.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = [];

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getNovelInfo.ts"));
module.exports = __webpack_exports__;

})();