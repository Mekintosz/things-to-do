import { manageTasks, manageLists } from "./appLogic";
import "./style.css";
import logoSvg from "../assets/logo.svg";
import setIcon from "../assets/set.svg";
import addCircleIcon from "../assets/add_circle.svg";

const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";

const listsContainer = document.querySelector("[data-list]");
const thingsTitleElement = document.querySelector(".things-list-title");
const thingsTitleText = document.querySelector(".things-title-text");
const thingsContainer = document.querySelector("[data-things]");
const tasksContainer = document.querySelector("[data-things]");
const taskTemplate = document.getElementById("task-template");
let selectedListId =
  localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY) || "";
let editedThingId = "";

const addSetBtn = document.getElementById("add-set-button");
const setDialog = document.getElementById("dialog-2");
const inputSetName = setDialog.querySelector("#set-input-name");
const inputSetDescription = setDialog.querySelector("#set-input-description");
const confirmSetBtn = setDialog.querySelector("#confirm-btn-2");
const cancelSetBtn = document.getElementById("cancel-btn-2");

const addTaskBtn = document.getElementById("add-thing-button");
const thingDialog = document.getElementById("dialog-1");
const inputThingName = document.getElementById("thing-input-name");
const inputThingList = document.getElementById("thing-input-list");
const inputThingDescription = document.getElementById(
  "thing-input-description"
);
const inputThingDueDate = document.getElementById("thing-input-duedate");
const confirmThingBtn = thingDialog.querySelector("#confirm-btn-1");
const cancelThingBtn = document.getElementById("cancel-btn-1");

const headerLogo = document.querySelector(".logo");
const addSetIcon = document
  .getElementById("add-set-button")
  ?.querySelector("img");
const addThingIcon = document
  .getElementById("add-thing-button")
  ?.querySelector("img");
const listTitleIcon = document
  .querySelector(".things-list-title")
  ?.querySelector("img");

if (headerLogo) headerLogo.src = logoSvg;
if (addSetIcon) addSetIcon.src = setIcon;
if (addThingIcon) addThingIcon.src = addCircleIcon;
if (listTitleIcon) listTitleIcon.src = setIcon;

if (manageLists.getLists().length === 0) {
  const defaultList = manageLists.addList(manageLists.createList("Inbox"));
  selectedListId = defaultList.id;
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
}

render();

listsContainer.addEventListener("click", (e) => {
  if (e.target.closest("button")) return;
  const listElement = e.target.closest("li");
  if (!listElement || !listsContainer.contains(listElement)) return;
  selectedListId = listElement.dataset.listId;
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
  render();
});

addSetBtn.addEventListener("click", () => {
  return setDialog.showModal();
});

confirmSetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const newList = manageLists.addList(
    manageLists.createList(inputSetName.value || "Untitled list")
  );
  selectedListId = newList.id;
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
  emptySetDialog();
  setDialog.close();
  render();
});

cancelSetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  setDialog.close();
});

function render() {
  clearElement(listsContainer);
  renderLists();
  const allLists = manageLists.getLists();
  let activeList = allLists.find((list) => list.id === selectedListId);

  if (!activeList && allLists.length > 0) {
    selectedListId = allLists[0].id;
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
    activeList = allLists[0];
  }

  if (!activeList) {
    if (thingsTitleText) {
      thingsTitleText.textContent = "Things to do...";
    }
    listsContainer.classList.add("empty-state");
    clearElement(thingsContainer);
    return;
  }

  listsContainer.classList.remove("empty-state");

  if (thingsTitleText) {
    thingsTitleText.textContent = activeList.title;
  }
  clearElement(thingsContainer);
  renderThings(activeList);
}

function renderThings(activeList) {
  activeList.tasks.forEach((thing) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector("input");
    checkbox.id = thing.id;
    checkbox.checked = thing.complete;
    const label = taskElement.querySelector("label");
    label.htmlFor = thing.id;
    label.append(thing.title);
    const dueDate = taskElement.querySelector(".thing-due-date");
    dueDate.append(thing.dueDate);
    const deleteThingBtn = taskElement.querySelector(".delete-task-btn");
    deleteThingBtn.addEventListener("click", () => deleteThing(thing));
    const editThingBtn = taskElement.querySelector(".edit-task-btn");
    editThingBtn.addEventListener("click", () => {
      editThing(thing);
    });
    checkbox.addEventListener("change", () => {
      manageTasks.setTaskCompletion(activeList.id, thing.id, checkbox.checked);
      render();
    });
    tasksContainer.appendChild(taskElement);
  });
}

function renderLists() {
  manageLists.getLists().forEach((list) => {
    const listElement = document.createElement("li");
    listElement.dataset.listId = list.id;

    listElement.classList.add("list-ul");
    const titleSpan = document.createElement("span");
    titleSpan.classList.add("list-title");
    titleSpan.innerText = list.title;
    listElement.append(titleSpan);
    const editListBtn = document.createElement("button");
    editListBtn.classList.add("edit-list-btn");
    editListBtn.innerText = "Edit";
    listElement.append(editListBtn);
    const deleteListBtn = document.createElement("button");
    deleteListBtn.classList.add("delete-list-btn");
    deleteListBtn.innerText = "Delete";
    deleteListBtn.addEventListener("click", () => deleteList(list.id));
    listElement.append(deleteListBtn);
    listsContainer.appendChild(listElement);
    if (list.id === selectedListId) {
      listElement.classList.add("active-list");
      return;
    } else {
      editListBtn.style.display = "none";
    }
  });
}

function editThing(thing) {
  inputThingName.value = thing.title;
  inputThingList.value = thing.list;
  inputThingDescription.value = thing.description;
  inputThingDueDate.value = thing.dueDate;
  editedThingId = thing.id;
  thingDialog.showModal();
}

function deleteList(listId) {
  const isActiveList = listId === selectedListId;
  manageLists.removeList(listId);
  if (isActiveList) {
    const remaining = manageLists.getLists();
    if (remaining.length > 0) {
      selectedListId = remaining[0].id;
      localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
    } else {
      selectedListId = "";
      localStorage.removeItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);
    }
  }
  render();
}

function deleteThing(thing) {
  manageTasks.deleteThing(selectedListId, thing.id);
  render();
}

function clearElement(element) {
  while (element.firstChild) {
    element.firstChild.remove();
  }
}

function emptyThingDialog() {
  inputThingName.value = null;
  inputThingList.value = null;
  inputThingDescription.value = null;
  inputThingDueDate.value = null;
}

function emptySetDialog() {
  inputSetName.value = null;
}

(function manageThingModal() {
  addTaskBtn.addEventListener("click", () => {
    return thingDialog.showModal();
  });

  confirmThingBtn.addEventListener("click", (event) => {
    event.preventDefault();
    newThingFromInput();
    emptyThingDialog();
    thingDialog.close();
    render();
  });

  cancelThingBtn.addEventListener("click", (event) => {
    event.preventDefault();
    thingDialog.close();
  });

  function checkForActiveList() {
    return manageLists.getLists().find((list) => list.id === selectedListId);
  }

  function findListIdByName(listTitle) {
    const list = manageTasks.ensureList(listTitle);
    return list.id;
  }

  function newThingFromInput() {
    let activeList = checkForActiveList();
    const trimmedTitle = inputThingName.value.trim();
    if (!trimmedTitle) {
      return;
    }
    const targetList = manageTasks.ensureList(
      inputThingList.value.trim() || activeList?.title || "Inbox"
    );
    let newThing = manageTasks.createTask(
      trimmedTitle,
      targetList.title,
      inputThingDueDate.value,
      inputThingDescription.value
    );
    replaceOrAdd(newThing);
  }

  function replaceOrAdd(newThing) {
    let activeListId = checkForActiveList()?.id;
    let newThingListId = findListIdByName(newThing.list);
    if (editedThingId && newThingListId !== activeListId) {
      newThing.id = editedThingId;
      const targetList = manageTasks.addTaskToList(newThing);
      selectedListId = targetList.id;
      localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
      manageTasks.deleteThing(activeListId, editedThingId);
      editedThingId = "";
      return;
    } else if (editedThingId) {
      newThing.id = editedThingId;
      manageTasks.replaceThingById(activeListId, editedThingId, newThing);
      editedThingId = "";
      return;
    } else {
      const targetList = manageTasks.addTaskToList(newThing);
      selectedListId = targetList.id;
      localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
      editedThingId = "";
    }
  }
})();
