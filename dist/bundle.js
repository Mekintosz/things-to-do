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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lists: () => (/* binding */ lists),\n/* harmony export */   manageLists: () => (/* binding */ manageLists),\n/* harmony export */   manageTasks: () => (/* binding */ manageTasks)\n/* harmony export */ });\nconst LOCAL_STORAGE_LIST_KEY = 'task.lists'\nlet lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []\n\nconst manageTasks = (function () {\n  function createTask(title, list = \"random\", dueDate = \"\", description = \"\") {\n    return {\n      id: Date.now().toString(),\n      title,\n      list,\n      dueDate,\n      description,\n      complete: false,\n    };\n  }\n\n  function createListBYTitle(listTitle) {\n    if (!lists.some(list => list.title === listTitle)) {\n      manageLists.addList(manageLists.createList(listTitle))\n    }\n  }\n\n  function addTaskToList(task) {\n    createListBYTitle(task.list)\n    for (let list of manageLists.getLists()) {\n      if (list.title === task.list) {\n        list.tasks.push(task);\n      }\n    }\n  }\n\n  function deleteThing(listID, thingID) {\n    for (let list of lists) {\n      if (list.id === listID) {\n      list.tasks.splice(list.tasks.map(thing => thing.id).indexOf(thingID), 1)\n      }\n    }\n  }\n\n  function replaceThingById(listID, thingID, editedThing) {\n    for (let list of lists) {\n      if (list.id === listID) {\n        let indexOfThing = list.tasks.indexOf(thingID);\n        list.tasks.splice(indexOfThing, 1, editedThing)\n      }\n    }\n  }\n\n  return { createTask, addTaskToList, deleteThing, replaceThingById };\n})();\n\nconst manageLists = (function () {\n  const createList = (title) => {\n    return { id: Date.now().toString(), title, tasks: [] };\n  };\n  const getLists = () => lists;\n  const addList = (x) => lists.unshift(x);\n  const removeList = (listTitle) => {\n    lists = lists.filter((list) => list.title !== listTitle);\n    console.log(lists)\n  }\n  const save = () => {\n    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))\n  }\n\n  return { createList, getLists, removeList, addList, save };\n})();\n\n\n\n\n//# sourceURL=webpack://things-to-do/./src/appLogic.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n\n\nconst listsContainer = document.querySelector('[data-list]');\nconst thingsTitleElement = document.querySelector('.things-list-title');\nconst thingsContainer = document.querySelector('[data-things]');\nconst tasksContainer = document.querySelector('[data-things]');\nconst taskTemplate = document.getElementById('task-template');\nlet selectedListId = '';\nlet editedThingId = '';\n\nconst addSetBtn = document.getElementById('add-set-button');\nconst setDialog = document.getElementById('dialog-2');\nconst inputSetName = setDialog.querySelector('#set-input-name');\nconst inputSetDescription = setDialog.querySelector('#set-input-description');\nconst confirmSetBtn = setDialog.querySelector('#confirm-btn-2');\nconst cancelSetBtn = document.getElementById('cancel-btn-2');\n\nconst addTaskBtn = document.getElementById('add-thing-button');\nconst thingDialog = document.getElementById('dialog-1');\nconst inputThingName = document.getElementById('thing-input-name');\nconst inputThingList = document.getElementById('thing-input-list');\nconst inputThingDescription = document.getElementById(\n  'thing-input-description'\n);\nconst inputThingDueDate = document.getElementById('thing-input-duedate');\nconst confirmThingBtn = thingDialog.querySelector('#confirm-btn-1');\nconst cancelThingBtn = document.getElementById('cancel-btn-1');\n\nrender();\n\nlistsContainer.addEventListener('click', (e) => {\n  if (e.target.tagName.toLowerCase() === 'li') {\n    selectedListId = e.target.dataset.listId;\n    render();\n  }\n});\n\naddSetBtn.addEventListener('click', () => {\n  return setDialog.showModal();\n});\n\nconfirmSetBtn.addEventListener('click', (event) => {\n  event.preventDefault();\n  _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists.addList(_appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists.createList(inputSetName.value));\n  emptySetDialog();\n  setDialog.close();\n  render();\n});\n\ncancelSetBtn.addEventListener('click', (event) => {\n  event.preventDefault();\n  setDialog.close();\n});\n\nfunction render() {\n  clearElement(listsContainer);\n  _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists.save()\n  renderLists();\n  let activeList =  _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists\n    .getLists()\n    .find((list) => list.id === selectedListId);\n  if (selectedListId === '') {\n    return;\n  } else {\n    thingsTitleElement.innerText = activeList.title;\n    clearElement(thingsContainer);\n    renderThings(activeList);\n  }\n}\n\nfunction renderThings(activeList) {\n  activeList.tasks.forEach((thing) => {\n    const taskElement = document.importNode(taskTemplate.content, true);\n    const checkbox = taskElement.querySelector('input');\n    checkbox.id = thing.id;\n    checkbox.checked = thing.complete;\n    const label = taskElement.querySelector('label');\n    label.htmlFor = thing.id;\n    label.append(thing.title);\n    const dueDate = taskElement.querySelector('.thing-due-date');\n    dueDate.append(thing.dueDate);\n    const deleteThingBtn = taskElement.querySelector('.delete-task-btn');\n    deleteThingBtn.addEventListener('click', () => deleteThing(thing));\n    const editThingBtn = taskElement.querySelector('.edit-task-btn');\n    editThingBtn.addEventListener('click', () => {\n      editThing(thing);\n    });\n    tasksContainer.appendChild(taskElement);\n  });\n}\n\nfunction renderLists() {\n  _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists.getLists().forEach((list) => {\n    const listElement = document.createElement('li');\n    listElement.dataset.listId = list.id;\n    \n    listElement.classList.add('list-ul');\n    listElement.innerText = list.title;\n    const editListBtn = document.createElement('button')\n    editListBtn.classList.add('edit-list-btn')\n    editListBtn.innerText = 'Edit'\n    listElement.append(editListBtn)\n    const deleteListBtn = document.createElement('button')\n    deleteListBtn.classList.add('delete-list-btn')\n    deleteListBtn.innerText = 'Delete'\n    deleteListBtn.addEventListener('click', () => deleteList(list.title))\n    listElement.append(deleteListBtn)\n    listsContainer.appendChild(listElement);\n    if (list.id === selectedListId) {\n      listElement.classList.add('active-list');\n      return\n    } else {\n      editListBtn.style.display = 'none'\n    }\n  });\n}\n\nfunction editSet(set) {\n\n}\n\n\nfunction editThing(thing) {\n  inputThingName.value = thing.title;\n  inputThingList.value = thing.list;\n  inputThingDescription.value = thing.description;\n  inputThingDueDate.value = thing.dueDate;\n  editedThingId = thing.id;\n  thingDialog.showModal();\n}\n\nfunction deleteList(list) {\n  _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists.removeList(list)\n  render()\n}\n\nfunction deleteThing(thing) {\n  _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageTasks.deleteThing(selectedListId, thing.id);\n  render();\n}\n\nfunction clearElement(element) {\n  while (element.firstChild) {\n    element.firstChild.remove();\n  }\n}\n\nfunction emptyThingDialog() {\n  inputThingName.value = null;\n  inputThingList.value = null;\n  inputThingDescription.value = null;\n  inputThingDueDate.value = null;\n}\n\nfunction emptySetDialog() {\n  inputSetName.value = null;\n}\n\n(function manageThingModal() {\n\n  addTaskBtn.addEventListener('click', () => {\n    return thingDialog.showModal();\n  });\n\n  confirmThingBtn.addEventListener('click', (event) => {\n    event.preventDefault();\n    newThingFromInput();\n    emptyThingDialog();\n    thingDialog.close();\n    render();\n  });\n\n  cancelThingBtn.addEventListener('click', (event) => {\n    event.preventDefault();\n    thingDialog.close();\n  });\n\n  function checkForActiveList() {\n    return _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageLists\n    .getLists()\n    .find((list) => list.id === selectedListId);\n  }\n\n  function findListIdByName(listTitle) {\n    for (let list of _appLogic__WEBPACK_IMPORTED_MODULE_0__.lists) {\n    if (list.title === listTitle)\n    return list.id\n    }\n  }\n\n  function newThingFromInput() {\n    let activeList =  checkForActiveList()\n    let newThing = _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageTasks.createTask(\n      inputThingName.value,\n      inputThingList.value || activeList.title,\n      inputThingDueDate.value,\n      inputThingDescription.value\n    );\n      replaceOrAdd(newThing)\n  };\n  \n  function replaceOrAdd(newThing) {\n    let activeListId =  checkForActiveList()?.id\n    let newThingListId = findListIdByName(newThing.list)\n    if (editedThingId && newThingListId !== activeListId) {\n      newThing.id = editedThingId;\n      _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageTasks.addTaskToList(newThing)\n      _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageTasks.deleteThing(activeListId, editedThingId)\n      editedThingId = '';\n      return\n    } else if (editedThingId) {\n      newThing.id = editedThingId;\n      _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageTasks.replaceThingById(activeListId, editedThingId, newThing);\n      editedThingId = ''\n      return\n    } else {\n      _appLogic__WEBPACK_IMPORTED_MODULE_0__.manageTasks.addTaskToList(newThing);\n      editedThingId = ''\n    }\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://things-to-do/./src/interface.js?");

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