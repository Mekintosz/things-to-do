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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lists: () => (/* binding */ lists),\n/* harmony export */   manageLists: () => (/* binding */ manageLists),\n/* harmony export */   manageTasks: () => (/* binding */ manageTasks)\n/* harmony export */ });\nconst LOCAL_STORAGE_LIST_KEY = 'task.lists'\r\nlet lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []\r\n\r\nconst manageTasks = (function () {\r\n  function createTask(title, list = \"random\", dueDate = \"\", description = \"\") {\r\n    return {\r\n      id: Date.now().toString(),\r\n      title,\r\n      list,\r\n      dueDate,\r\n      description,\r\n      complete: false,\r\n    };\r\n  }\r\n\r\n  function addTaskToList(task) {\r\n    if (!lists.some(list => list.title === task.list)) {\r\n      manageLists.addList(manageLists.createList(task.list))\r\n      console.log(lists)\r\n    }\r\n    for (let list of manageLists.getLists()) {\r\n      if (list.title === task.list) {\r\n        list.tasks.push(task);\r\n      }\r\n    }\r\n  }\r\n\r\n  function deleteThing(listID, thingID) {\r\n    for (let list of lists) {\r\n      if (list.id === listID) {\r\n      list.tasks.splice(list.tasks.map(thing => thing.id).indexOf(thingID), 1)\r\n      }\r\n    }\r\n  }\r\n\r\n  function replaceThingById(listID, thingID, editedThing) {\r\n    for (let list of lists) {\r\n      if (list.id === listID) {\r\n        let indexOfThing = list.tasks.map(thing => thing.id).indexOf(thingID);\r\n        list.tasks.splice(indexOfThing, 1, editedThing)\r\n      }\r\n    }\r\n  }\r\n\r\n  return { createTask, addTaskToList, deleteThing, replaceThingById };\r\n})();\r\n\r\nconst manageLists = (function () {\r\n  const createList = (title) => {\r\n    return { id: Date.now().toString(), title, tasks: [] };\r\n  };\r\n  const getLists = () => lists;\r\n  const addList = (x) => lists.unshift(x);\r\n  const removeList = (listTitle) => {\r\n    lists = lists.filter((list) => list.title !== listTitle);\r\n    console.log(lists)\r\n  }\r\n  const save = () => {\r\n    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))\r\n  }\r\n\r\n  return { createList, getLists, removeList, addList, save };\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://things-to-do/./src/appLogic.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n\r\n\r\nconst listsContainer = document.querySelector(\"[data-list]\");\r\nconst thingsTitleElement = document.querySelector(\".things-list-title\");\r\nconst thingsContainer = document.querySelector(\"[data-things]\");\r\nconst tasksContainer = document.querySelector(\"[data-things]\");\r\nconst taskTemplate = document.getElementById(\"task-template\");\r\nlet selectedListId = \"\";\r\nlet editedThingId = \"\";\r\nrender();\r\n\r\nconst addSetBtn = document.getElementById(\"add-set-button\");\r\nconst setDialog = document.getElementById(\"dialog-2\");\r\nconst inputSetName = setDialog.querySelector(\"#set-input-name\");\r\nconst inputSetDescription = setDialog.querySelector(\"#set-input-description\");\r\nconst confirmSetBtn = setDialog.querySelector(\"#confirm-btn-2\");\r\nconst cancelSetBtn = document.getElementById(\"cancel-btn-2\");\r\n\r\nconst addTaskBtn = document.getElementById(\"add-thing-button\");\r\nconst thingDialog = document.getElementById(\"dialog-1\");\r\nconst inputThingName = document.getElementById(\"thing-input-name\");\r\nconst inputThingList = document.getElementById(\"thing-input-list\");\r\nconst inputThingDescription = document.getElementById(\r\n  \"thing-input-description\"\r\n);\r\nconst inputThingDueDate = document.getElementById(\"thing-input-duedate\");\r\nconst confirmThingBtn = thingDialog.querySelector(\"#confirm-btn-1\");\r\nconst cancelThingBtn = document.getElementById(\"cancel-btn-1\");\r\n\r\nlistsContainer.addEventListener(\"click\", (e) => {\r\n  if (e.target.tagName.toLowerCase() === \"li\") {\r\n    selectedListId = e.target.dataset.listId;\r\n    render();\r\n  }\r\n});\r\n\r\naddSetBtn.addEventListener(\"click\", () => {\r\n  return setDialog.showModal();\r\n});\r\n\r\nconfirmSetBtn.addEventListener(\"click\", (event) => {\r\n  event.preventDefault();\r\n  _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists.addList(_appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists.createList(inputSetName.value));\r\n  emptySetDialog();\r\n  setDialog.close();\r\n  render();\r\n});\r\n\r\ncancelSetBtn.addEventListener(\"click\", (event) => {\r\n  event.preventDefault();\r\n  setDialog.close();\r\n});\r\n\r\nfunction render() {\r\n  clearElement(listsContainer);\r\n  _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists.save()\r\n  renderLists();\r\n  let activeList =  _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists\r\n    .getLists()\r\n    .find((list) => list.id === selectedListId);\r\n  \r\n  if (selectedListId === \"\") {\r\n    return;\r\n  } else {\r\n    thingsTitleElement.innerText = activeList.title;\r\n    clearElement(thingsContainer);\r\n    renderThings(activeList);\r\n  }\r\n}\r\n\r\nfunction renderLists() {\r\n  _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists.getLists().forEach((list) => {\r\n    const listElement = document.createElement(\"li\");\r\n    listElement.dataset.listId = list.id;\r\n    if (list.id === selectedListId) {\r\n      listElement.classList.add(\"active-list\");\r\n    }\r\n    listElement.classList.add(\"list-ul\");\r\n    listElement.innerText = list.title;\r\n    const editListBtn = document.createElement('button')\r\n    editListBtn.classList.add('edit-list-btn')\r\n    editListBtn.innerText = 'Edit'\r\n    listElement.append(editListBtn)\r\n    const deleteListBtn = document.createElement('button')\r\n    deleteListBtn.classList.add('delete-list-btn')\r\n    deleteListBtn.innerText = 'Delete'\r\n    deleteListBtn.addEventListener('click', () => deleteList(list.title))\r\n    listElement.append(deleteListBtn)\r\n    listsContainer.appendChild(listElement);\r\n  });\r\n}\r\n\r\nfunction deleteList(list) {\r\n  if (window.confirm(`Do you want to delete entire \"${list}\" ?`)) {\r\n    _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists.removeList(list)\r\n  render()\r\n  }\r\n}\r\n\r\nfunction renderThings(activeList) {\r\n  activeList.tasks.forEach((thing) => {\r\n    const taskElement = document.importNode(taskTemplate.content, true);\r\n    const checkbox = taskElement.querySelector(\"input\");\r\n    checkbox.id = thing.id;\r\n    checkbox.checked = thing.complete;\r\n    const label = taskElement.querySelector(\"label\");\r\n    label.htmlFor = thing.id;\r\n    label.append(thing.title);\r\n    const dueDate = taskElement.querySelector(\".thing-due-date\");\r\n    dueDate.append(thing.dueDate);\r\n    const deleteThingBtn = taskElement.querySelector(\".delete-task-btn\");\r\n    deleteThingBtn.addEventListener(\"click\", () => deleteThing(thing));\r\n    const editThingBtn = taskElement.querySelector(\".edit-task-btn\");\r\n    editThingBtn.addEventListener(\"click\", () => {\r\n      editThing(thing);\r\n    });\r\n    tasksContainer.appendChild(taskElement);\r\n  });\r\n}\r\n\r\nfunction deleteThing(thing) {\r\n  if (window.confirm(`Do you want to delete \"${thing.title}\" ?`)) {\r\n    _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageTasks.deleteThing(selectedListId, thing.id);\r\n  render();\r\n  }\r\n}\r\n\r\nfunction editThing(thing) {\r\n  inputThingName.value = thing.title;\r\n  inputThingList.value = thing.list;\r\n  inputThingDescription.value = thing.description;\r\n  inputThingDueDate.value = thing.dueDate;\r\n  editedThingId = thing.id;\r\n  thingDialog.showModal();\r\n}\r\n\r\nfunction clearElement(element) {\r\n  while (element.firstChild) {\r\n    element.firstChild.remove();\r\n  }\r\n}\r\n\r\nfunction emptyThingDialog() {\r\n  inputThingName.value = null;\r\n  inputThingList.value = null;\r\n  inputThingDescription.value = null;\r\n  inputThingDueDate.value = null;\r\n}\r\n\r\nfunction emptySetDialog() {\r\n  inputSetName.value = null;\r\n}\r\n\r\n(function manageThingModal() {\r\n\r\n  addTaskBtn.addEventListener(\"click\", () => {\r\n    return thingDialog.showModal();\r\n  });\r\n\r\n  confirmThingBtn.addEventListener(\"click\", (event) => {\r\n    event.preventDefault();\r\n    newThingFromInput();\r\n    emptyThingDialog();\r\n    thingDialog.close();\r\n    render();\r\n  });\r\n\r\n  cancelThingBtn.addEventListener(\"click\", (event) => {\r\n    event.preventDefault();\r\n    thingDialog.close();\r\n  });\r\n\r\n  function checkForActiveList() {\r\n    return _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists\r\n    .getLists()\r\n    .find((list) => list.id === selectedListId);\r\n  }\r\n\r\n  function newThingFromInput() {\r\n    let activeList =  checkForActiveList()\r\n    let newThing = _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageTasks.createTask(\r\n      inputThingName.value,\r\n      inputThingList.value || activeList.title,\r\n      inputThingDueDate.value,\r\n      inputThingDescription.value\r\n    );\r\n      replaceOrAdd(newThing)\r\n  };\r\n\r\n  function replaceOrAdd(newThing) {\r\n    if (editedThingId) {\r\n      newThing.id = editedThingId;\r\n      _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageTasks.replaceThingById(selectedListId, editedThingId, newThing);\r\n      editedThingId = \"\";\r\n    } else {\r\n      _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageTasks.addTaskToList(newThing);\r\n    }\r\n  };\r\n\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://things-to-do/./src/interface.js?");

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