import { manageTasks, manageLists } from "./appLogic";

const listsContainer = document.querySelector("[data-list]");
const thingsTitleElement = document.querySelector(".things-list-title");
const thingsContainer = document.querySelector("[data-things]");
let selectedListId = "";
render();

listsContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId = e.target.dataset.listId;
    render();
  }
});

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

function renderThings(activeList) {
  activeList.tasks.forEach((thing) => {
    const taskElement = document.createElement("li");
    taskElement.innerText = thing.title;
    thingsContainer.appendChild(taskElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.firstChild.remove();
  }
}

const addSetBtn = document.getElementById("add-set-button");
const setDialog = document.getElementById("dialog-2");
const inputSetName = setDialog.querySelector("#set-input-name");
const inputSetDescription = setDialog.querySelector("#set-input-description");
const confirmSetBtn = setDialog.querySelector("#confirm-btn-2");
const cancelSetBtn = document.getElementById("cancel-btn-2");

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

function emptyThingDialog() {
  inputThingName.value = null;
  inputThingList.value = null;
  inputThingDescription.value = null;
  inputThingDueDate.value = null;
}

function emptySetDialog() {
  inputSetName.value = null;
}

addTaskBtn.addEventListener("click", () => {
  return thingDialog.showModal();
});

confirmThingBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let newThing = manageTasks.createTask(
    inputThingName.value,
    inputThingList.value,
    inputThingDescription.value
  );
  manageTasks.addTaskToList(newThing)
  emptyThingDialog();
  thingDialog.close();
  render();
});

cancelThingBtn.addEventListener("click", (event) => {
  event.preventDefault();
  thingDialog.close();
});

// // "Show the dialog" button opens the <dialog> modally
// showButton.addEventListener("click", () => {
// setDialog.showModal();
// });

// // "Favorite animal" input sets the value of the submit button
// inputName.addEventListener("change", (e) => {
// confirmBtn.value = selectEl.value;
// });

// // "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
// thingDialog.addEventListener("close", (e) => {
// outputBox.value =
//     favDialog.returnValue === "default"
//     ? "No return value."
//     : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
// });

// function renderThings() {
//     const thingsListContainer = document.querySelector("[data-things]");
//     clearElement(thingsListContainer);
// }

// (function thingDialogOnClick() {

//     const showButton = document.getElementById("add-thing-button");
//     const thingDialog = document.getElementById("dialog1");
//     const inputThing = thingDialog.querySelector("#thing-input-name");
//     const inputDescription = thingDialog.querySelector("#thing-input-description");
//     const selectPriority = thingDialog.querySelector("#dialog1 select")
//     const confirmBtn = thingDialog.querySelector("#confirmBtn");

//     // "Show the dialog" button opens the <dialog> modally
//     showButton.addEventListener("click", () => {
//     thingDialog.showModal();
//     });

//     // Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
//     confirmBtn.addEventListener("click", (event) => {
//     event.preventDefault(); // We don't want to submit this fake form
//     thingDialog.close(createTask(inputThing.value, inputDescription.value, "", selectPriority.value)); // Have to send the select box value here.
//     addListsData();
//     renderTaskLists();
//     });
// })();

// (function setDialogOnClick() {

//
// })();
