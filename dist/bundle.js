/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/appLogic.js":
/*!*************************!*\
  !*** ./src/appLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTaskToList: () => (/* binding */ addTaskToList),\n/* harmony export */   createList: () => (/* binding */ createList),\n/* harmony export */   createTask: () => (/* binding */ createTask),\n/* harmony export */   manageLists: () => (/* binding */ manageLists)\n/* harmony export */ });\nfunction createTask(title, list = 'random') {\n    return { \n        id: Date.now().toString(),\n        title,\n        list,\n        complete: false, \n    };\n}\n\nfunction addTaskToList(task) {\n    for (let list of manageLists().getLists()) {\n        if (list.title === task.list) {\n            list.tasks.push(task);\n        } \n    }\n}\n\nfunction createList (title) {\n    return { id: Date.now().toString(), title, tasks: [] };\n}\n\nlet lists = [{title: \"random\", tasks: []}, {title: \"hophop\"}];\n\nfunction manageLists() {\n    \n    const getLists = () => lists;\n    const addList = (x) => lists.unshift(x);\n    const removeList = (listTitle) => lists = lists.filter(list => list.title !== listTitle); \n\n    return { createList, getLists, removeList, addList }\n}\n\n\n\n//# sourceURL=webpack://things-to-do/./src/appLogic.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n\n\nfunction renderLists() {\n\n    const listsContainer = document.querySelector(\"[data-list]\");\n    clearElement(listsContainer);\n    (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists)().getLists().forEach((list) => {\n        const listElement = document.createElement(\"li\");\n        listElement.classList.add(\"list-ul\");\n        listElement.innerText = list.title;\n        listsContainer.appendChild(listElement);\n    });\n};\n\nrenderLists()\n\nfunction clearElement(element) {\n    while (element.firstChild) {\n        element.firstChild.remove();\n    }\n};\n\n(0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists)().addList((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.createList)('sprzątanie'))\n;(0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.addTaskToList)((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.createTask)('rozpędzanie'))\nconsole.log((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists)().getLists())\n;(0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists)().removeList('sprzątanie')\nconsole.log((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists)().getLists())\n\nconst addSetBtn = document.getElementById(\"add-set-button\");\nconst setDialog = document.getElementById('dialog2')\nconst inputName = setDialog.querySelector(\"#input-name\");\nconst confirmBtn = setDialog.querySelector(\"#confirmBtn2\");\n\naddSetBtn.addEventListener(\"click\", () => {\n        return setDialog.showModal();\n    })\n\n    confirmBtn.addEventListener(\"click\", (event) => {\n        event.preventDefault(); // We don't want to submit this fake form\n        (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists)().addList((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.createList)(inputName.value))\n        renderLists()\n        });\n        \n\n        // // \"Show the dialog\" button opens the <dialog> modally\n        // showButton.addEventListener(\"click\", () => {\n        // setDialog.showModal();\n        // });\n    \n        // // \"Favorite animal\" input sets the value of the submit button\n        // inputName.addEventListener(\"change\", (e) => {\n        // confirmBtn.value = selectEl.value;\n        // });\n    \n        // // \"Cancel\" button closes the dialog without submitting because of [formmethod=\"dialog\"], triggering a close event.\n        // thingDialog.addEventListener(\"close\", (e) => {\n        // outputBox.value =\n        //     favDialog.returnValue === \"default\"\n        //     ? \"No return value.\"\n        //     : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for \"default\" rather than empty string\n        // });\n    \n        // // Prevent the \"confirm\" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the \"close\" event.\n        \n\n\n\n\n\n// function renderThings() {\n//     const thingsListContainer = document.querySelector(\"[data-things]\");\n//     clearElement(thingsListContainer);\n// }\n\n// (function thingDialogOnClick() {\n\n//     const showButton = document.getElementById(\"add-thing-button\");\n//     const thingDialog = document.getElementById(\"dialog1\");\n//     const inputThing = thingDialog.querySelector(\"#thing-input-name\");\n//     const inputDescription = thingDialog.querySelector(\"#thing-input-description\");\n//     const selectPriority = thingDialog.querySelector(\"#dialog1 select\")\n//     const confirmBtn = thingDialog.querySelector(\"#confirmBtn\");\n\n//     // \"Show the dialog\" button opens the <dialog> modally\n//     showButton.addEventListener(\"click\", () => {\n//     thingDialog.showModal();\n//     });\n\n    \n\n    \n//     // Prevent the \"confirm\" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the \"close\" event.\n//     confirmBtn.addEventListener(\"click\", (event) => {\n//     event.preventDefault(); // We don't want to submit this fake form\n//     thingDialog.close(createTask(inputThing.value, inputDescription.value, \"\", selectPriority.value)); // Have to send the select box value here.\n//     addListsData();\n//     renderTaskLists();\n//     });\n// })();\n\n// (function setDialogOnClick() {\n\n//     \n// })();\n\n//# sourceURL=webpack://things-to-do/./src/interface.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/interface.js");
/******/ 	
/******/ })()
;