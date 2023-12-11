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

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _taskModules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskModules */ \"./src/taskModules.js\");\n/* harmony import */ var _listModules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listModules */ \"./src/listModules.js\");\n\n\n\n(function renderTaskLists() {\n\n    const taskListContainer = document.querySelector(\"[data-list]\");\n    clearElement(taskListContainer);\n    _listModules__WEBPACK_IMPORTED_MODULE_1__.lists.forEach(task=> {\n        const list = document.createElement(\"li\");\n        list.classList.add(\"list-ul\");\n        list.innerText = task;\n        taskListContainer.appendChild(list)\n    });\n\n    function clearElement(element) {\n        while (element.firstChild) {\n            element.remove(firstChild)\n        }\n\n    };\n})();\n\n//# sourceURL=webpack://things-to-do/./src/interface.js?");

/***/ }),

/***/ "./src/listModules.js":
/*!****************************!*\
  !*** ./src/listModules.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addListsData: () => (/* binding */ addListsData),\n/* harmony export */   createTaskList: () => (/* binding */ createTaskList),\n/* harmony export */   lists: () => (/* binding */ lists)\n/* harmony export */ });\n/* harmony import */ var _taskModules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskModules */ \"./src/taskModules.js\");\n\n\nfunction createTaskList (name, description) {\n    \n    let taskList = [];\n\n    const addTaskToList = () => taskList.push((0,_taskModules__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n    const getListName = () => name;\n    const setListName = newName => name = newName;\n\n    const getListDescription = () => description;\n    const setListDescription = newDescription => description = newDescription;\n\n\n    return { taskList, addTaskToList, getListName, setListName, getListDescription, setListDescription };\n}\n\nlet lists = [[\"probna\", \"dozrobienia\"]];\n\nfunction addListsData() {\n    lists.push(createTaskList());\n}\n\n\n\n//# sourceURL=webpack://things-to-do/./src/listModules.js?");

/***/ }),

/***/ "./src/taskModules.js":
/*!****************************!*\
  !*** ./src/taskModules.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTask)\n/* harmony export */ });\nfunction createTask(title, description, date, priority) {\n\n    let taskTitle = title;\n    let taskDescription = description;\n    let taskDueDate = date;\n    let taskPriority = priority;\n    let taskStatus = \"uncompleted\";\n    \n    const getTaskTitle = () => taskTitle;\n    const setTaskTitle = newTitle => taskTitle = newTitle; \n\n    const getTaskDescription = () => taskDescription;\n    const setTaskDescription = newDescription => taskDescription = newDescription; \n\n    const getTaskDueDate = () => taskDueDate;\n    const setTaskDueDate = newDueDate => taskDueDate = newDueDate; \n\n    const getTaskPriority = () => taskPriority;\n    const setTaskPriority = newPriority => taskPriority = newPriority; \n\n    const getTaskStatus = () => taskStatus;\n    const changeTaskStatus = () => taskStatus = \"completed\";\n\n    return { getTaskTitle, setTaskTitle,\n         getTaskDescription, setTaskDescription,\n          getTaskDueDate, setTaskDueDate,\n           getTaskPriority, setTaskPriority,\n            getTaskStatus, changeTaskStatus }\n}\n\n//# sourceURL=webpack://things-to-do/./src/taskModules.js?");

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