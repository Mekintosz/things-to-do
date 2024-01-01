import { manageTasks, manageLists, lists } from "./appLogic";

const listsContainer = document.querySelector("[data-list]");
const thingsTitleElement = document.querySelector(".things-list-title");
const thingsContainer = document.querySelector("[data-things]");
const tasksContainer = document.querySelector("[data-things]");
const taskTemplate = document.getElementById("task-template");
let selectedListId = "";
let editedThingId = "";
render();

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

listsContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId = e.target.dataset.listId;
    render();
  }
});

function render() {
  clearElement(listsContainer);
  renderLists();
  const activeList = manageLists
    .getLists()
    .find((list) => list.id === selectedListId);
  if (selectedListId === "") {
    return;
  } else {
    thingsTitleElement.innerText = activeList.title;
    clearElement(thingsContainer);
    renderThings(activeList);
  }
}

function renderLists() {
  manageLists.getLists().forEach((list) => {
    const listElement = document.createElement("li");
    listElement.dataset.listId = list.id;
    if (list.id === selectedListId) {
      listElement.classList.add("active-list");
    }
    listElement.classList.add("list-ul");
    listElement.innerText = list.title;
    listsContainer.appendChild(listElement);
  });
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
    deleteThingBtn.addEventListener("click", () => {
      manageTasks.deleteThing(selectedListId, thing.id);
      render();
    });
    const editThingBtn = taskElement.querySelector(".edit-task-btn");
    editThingBtn.addEventListener("click", () => {
      editThing(thing);
      editedThingId = thing.id;
      console.log(thing.id);
      console.log(editedThingId);
      console.log(lists);
    });
    tasksContainer.appendChild(taskElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.firstChild.remove();
  }
}

addSetBtn.addEventListener("click", () => {
  return setDialog.showModal();
});

confirmSetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  manageLists.addList(manageLists.createList(inputSetName.value));
  emptySetDialog();
  setDialog.close();
  render();
});

cancelSetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  setDialog.close();
});

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
    newThingFromInput()();

    emptyThingDialog();
    thingDialog.close();
    render();
  });

  const newThingFromInput = function () {
    let newThing = manageTasks.createTask(
      inputThingName.value,
      inputThingList.value || "random",
      inputThingDueDate.value,
      inputThingDescription.value
    );
    return function replaceOrAdd() {
      if (editedThingId) {
        newThing.id = editedThingId;
        manageTasks.replaceThingById(selectedListId, editedThingId, newThing);
        editedThingId = "";
        console.log(lists);
      } else {
        manageTasks.addTaskToList(newThing);
      }
    };
  };

  cancelThingBtn.addEventListener("click", (event) => {
    event.preventDefault();
    thingDialog.close();
  });
})();

function editThing(thing) {
  inputThingName.value = thing.title;
  inputThingList.value = thing.list;
  inputThingDescription.value = thing.description;
  inputThingDueDate.value = thing.dueDate;
  thingDialog.showModal();
}
