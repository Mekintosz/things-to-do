import {createTask, addTaskToList, manageLists, createList} from "./appLogic";

function renderLists() {

    const listsContainer = document.querySelector("[data-list]");
    clearElement(listsContainer);
    manageLists().getLists().forEach((list) => {
        const listElement = document.createElement("li");
        listElement.classList.add("list-ul");
        listElement.innerText = list.title;
        listsContainer.appendChild(listElement);
    });
};

renderLists()

function clearElement(element) {
    while (element.firstChild) {
        element.firstChild.remove();
    }
};

manageLists().addList(createList('sprzątanie'))
addTaskToList(createTask('rozpędzanie'))
console.log(manageLists().getLists())
manageLists().removeList('sprzątanie')
console.log(manageLists().getLists())

const addSetBtn = document.getElementById("add-set-button");
const setDialog = document.getElementById('dialog2')
const inputName = setDialog.querySelector("#input-name");
const confirmBtn = setDialog.querySelector("#confirmBtn2");

addSetBtn.addEventListener("click", () => {
        return setDialog.showModal();
    })

    confirmBtn.addEventListener("click", (event) => {
        event.preventDefault(); // We don't want to submit this fake form
        manageLists().addList(createList(inputName.value))
        renderLists()
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
    
        // // Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
        





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