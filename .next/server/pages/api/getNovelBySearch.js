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
exports.id = "pages/api/getNovelBySearch";
exports.ids = ["pages/api/getNovelBySearch"];
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

/***/ "(api)/./pages/api/getNovelBySearch.ts":
/*!***************************************!*\
  !*** ./pages/api/getNovelBySearch.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst axios = __webpack_require__(/*! axios */ \"axios?6fac\");\nconst cheerio = __webpack_require__(/*! cheerio */ \"cheerio\");\nasync function handler(req, res) {\n    const url = `https://readnovelfull.com${req.body.link}`;\n    await axios.get(url).then((response)=>{\n        const cheerioResponse = cheerio.load(response.data);\n        // Image\n        const image = cheerioResponse(\".book img\").attr(\"src\");\n        // Title\n        const title = cheerioResponse(\".book img\").attr(\"alt\");\n        // Description\n        const description = [];\n        cheerioResponse(\".desc-text\").find(\"p\").each((index, element)=>{\n            const text = cheerioResponse(element).text();\n            description.push(text);\n        });\n        // Novel ID\n        const novelID = cheerioResponse(\"#rating\").attr(\"data-novel-id\");\n        const liInfoMeta = cheerioResponse(\".info-meta\").find(\"li\");\n        // Metadata Text\n        const metaData = [];\n        liInfoMeta.each((index, element)=>{\n            const liH3 = cheerioResponse(element).find(\"h3\").text();\n            const liTxt = cheerioResponse(element).text();\n            const cleanedLiTxt = liTxt.replace(liH3, \"\");\n            metaData.push({\n                heading: liH3,\n                text: cleanedLiTxt\n            });\n        });\n        // Latest Chapter Text\n        const chapterInfoValue = cheerioResponse(\".item\").find(\".item-value\").text();\n        return res.status(200).json({\n            title: title,\n            novelId: novelID,\n            img: image,\n            metaData,\n            description: description,\n            latestChapter: chapterInfoValue\n        });\n    });\n    res.status(200).json({\n        name: \"John Does\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Tm92ZWxCeVNlYXJjaC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ0EsTUFBTUEsUUFBUUMsbUJBQU9BLENBQUMseUJBQU87QUFDN0IsTUFBTUMsVUFBVUQsbUJBQU9BLENBQUMsd0JBQVM7QUFFbEIsZUFBZUUsUUFBUUMsR0FBbUIsRUFBQ0MsR0FBbUIsRUFBRTtJQUMzRSxNQUFNQyxNQUFNLENBQUMseUJBQXlCLEVBQUVGLElBQUlHLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFFdkQsTUFBTVIsTUFBTVMsR0FBRyxDQUFDSCxLQUFLSSxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtRQUNwQyxNQUFNQyxrQkFBa0JWLFFBQVFXLElBQUksQ0FBQ0YsU0FBU0csSUFBSTtRQUVsRCxRQUFRO1FBQ1IsTUFBTUMsUUFBUUgsZ0JBQWdCLGFBQWFJLElBQUksQ0FBQztRQUNoRCxRQUFRO1FBQ1IsTUFBTUMsUUFBUUwsZ0JBQWdCLGFBQWFJLElBQUksQ0FBQztRQUNoRCxjQUFjO1FBQ2QsTUFBTUUsY0FBYyxFQUFFO1FBQ3RCTixnQkFBZ0IsY0FBY08sSUFBSSxDQUFDLEtBQUtDLElBQUksQ0FBQyxDQUFDQyxPQUFPQyxVQUFZO1lBQzdELE1BQU1DLE9BQU9YLGdCQUFnQlUsU0FBU0MsSUFBSTtZQUMxQ0wsWUFBWU0sSUFBSSxDQUFDRDtRQUNyQjtRQUNBLFdBQVc7UUFDWCxNQUFNRSxVQUFVYixnQkFBZ0IsV0FBV0ksSUFBSSxDQUFDO1FBRWhELE1BQU1VLGFBQWFkLGdCQUFnQixjQUFjTyxJQUFJLENBQUM7UUFFdEQsZ0JBQWdCO1FBQ2hCLE1BQU1RLFdBQVcsRUFBRTtRQUVuQkQsV0FBV04sSUFBSSxDQUFDLENBQUNDLE9BQU9DLFVBQVk7WUFDcEMsTUFBTU0sT0FBT2hCLGdCQUFnQlUsU0FBU0gsSUFBSSxDQUFDLE1BQU1JLElBQUk7WUFDckQsTUFBTU0sUUFBUWpCLGdCQUFnQlUsU0FBU0MsSUFBSTtZQUMzQyxNQUFNTyxlQUFlRCxNQUFNRSxPQUFPLENBQUNILE1BQU07WUFDekNELFNBQVNILElBQUksQ0FBQztnQkFDVlEsU0FBU0o7Z0JBQ1RMLE1BQU1PO1lBQ1Y7UUFDQTtRQUVBLHNCQUFzQjtRQUN0QixNQUFNRyxtQkFBbUJyQixnQkFBZ0IsU0FBU08sSUFBSSxDQUFDLGVBQWVJLElBQUk7UUFFMUUsT0FBT2xCLElBQUk2QixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ3hCbEIsT0FBT0E7WUFDUG1CLFNBQVNYO1lBQ1RZLEtBQUt0QjtZQUNMWTtZQUNBVCxhQUFhQTtZQUNib0IsZUFBZUw7UUFDakI7SUFDTjtJQUVBNUIsSUFBSTZCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBQ0ksTUFBTTtJQUFXO0FBQzNDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0d2ViLWFnZW5jeS13ZWJzaXRlLy4vcGFnZXMvYXBpL2dldE5vdmVsQnlTZWFyY2gudHM/YjZiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xuY29uc3QgY2hlZXJpbyA9IHJlcXVpcmUoXCJjaGVlcmlvXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QscmVzOk5leHRBcGlSZXNwb25zZSkge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3JlYWRub3ZlbGZ1bGwuY29tJHtyZXEuYm9keS5saW5rfWA7XG5cbiAgICBhd2FpdCBheGlvcy5nZXQodXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBjaGVlcmlvUmVzcG9uc2UgPSBjaGVlcmlvLmxvYWQocmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgICAgLy8gSW1hZ2VcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBjaGVlcmlvUmVzcG9uc2UoXCIuYm9vayBpbWdcIikuYXR0cignc3JjJylcbiAgICAgICAgLy8gVGl0bGVcbiAgICAgICAgY29uc3QgdGl0bGUgPSBjaGVlcmlvUmVzcG9uc2UoXCIuYm9vayBpbWdcIikuYXR0cignYWx0JylcbiAgICAgICAgLy8gRGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBbXTsgXG4gICAgICAgIGNoZWVyaW9SZXNwb25zZSgnLmRlc2MtdGV4dCcpLmZpbmQoXCJwXCIpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gY2hlZXJpb1Jlc3BvbnNlKGVsZW1lbnQpLnRleHQoKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnB1c2godGV4dCk7XG4gICAgICAgIH0pXG4gICAgICAgIC8vIE5vdmVsIElEXG4gICAgICAgIGNvbnN0IG5vdmVsSUQgPSBjaGVlcmlvUmVzcG9uc2UoJyNyYXRpbmcnKS5hdHRyKCdkYXRhLW5vdmVsLWlkJyk7XG5cbiAgICAgICAgY29uc3QgbGlJbmZvTWV0YSA9IGNoZWVyaW9SZXNwb25zZShcIi5pbmZvLW1ldGFcIikuZmluZChcImxpXCIpO1xuXG4gICAgICAgIC8vIE1ldGFkYXRhIFRleHRcbiAgICAgICAgY29uc3QgbWV0YURhdGEgPSBbXVxuXG4gICAgICAgIGxpSW5mb01ldGEuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgbGlIMyA9IGNoZWVyaW9SZXNwb25zZShlbGVtZW50KS5maW5kKCdoMycpLnRleHQoKTtcbiAgICAgICAgY29uc3QgbGlUeHQgPSBjaGVlcmlvUmVzcG9uc2UoZWxlbWVudCkudGV4dCgpO1xuICAgICAgICBjb25zdCBjbGVhbmVkTGlUeHQgPSBsaVR4dC5yZXBsYWNlKGxpSDMsICcnKTtcbiAgICAgICAgbWV0YURhdGEucHVzaCh7XG4gICAgICAgICAgICBoZWFkaW5nOiBsaUgzLFxuICAgICAgICAgICAgdGV4dDogY2xlYW5lZExpVHh0XG4gICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBMYXRlc3QgQ2hhcHRlciBUZXh0XG4gICAgICAgIGNvbnN0IGNoYXB0ZXJJbmZvVmFsdWUgPSBjaGVlcmlvUmVzcG9uc2UoXCIuaXRlbVwiKS5maW5kKFwiLml0ZW0tdmFsdWVcIikudGV4dCgpXG5cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIG5vdmVsSWQ6IG5vdmVsSUQsXG4gICAgICAgICAgICBpbWc6IGltYWdlLFxuICAgICAgICAgICAgbWV0YURhdGEsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBsYXRlc3RDaGFwdGVyOiBjaGFwdGVySW5mb1ZhbHVlXG4gICAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe25hbWU6IFwiSm9obiBEb2VzXCJ9KVxufSJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJjaGVlcmlvIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVybCIsImJvZHkiLCJsaW5rIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY2hlZXJpb1Jlc3BvbnNlIiwibG9hZCIsImRhdGEiLCJpbWFnZSIsImF0dHIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZmluZCIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCJ0ZXh0IiwicHVzaCIsIm5vdmVsSUQiLCJsaUluZm9NZXRhIiwibWV0YURhdGEiLCJsaUgzIiwibGlUeHQiLCJjbGVhbmVkTGlUeHQiLCJyZXBsYWNlIiwiaGVhZGluZyIsImNoYXB0ZXJJbmZvVmFsdWUiLCJzdGF0dXMiLCJqc29uIiwibm92ZWxJZCIsImltZyIsImxhdGVzdENoYXB0ZXIiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getNovelBySearch.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getNovelBySearch.ts"));
module.exports = __webpack_exports__;

})();