import { createTask, addTaskToList } from "./taskModules";
import { manageLists } from "./listModules";

(function renderLists() {

    const listsContainer = document.querySelector("[data-list]");
    clearElement(listsContainer);
    manageLists().getLists().forEach( (list) => {
        const listElement = document.createElement("li");
        listElement.classList.add("list-ul");
        listElement.innerText = list.title;
        listsContainer.appendChild(listElement);
    });
    
   
})();

function clearElement(element) {
    while (element.firstChild) {
        element.remove(firstChild);
    }
};

let dd = createTask("pranie")
console.log(dd)
addTaskToList(dd);
let newList = (manageLists().createList("nowaLista"))
console.log(newList)
const showButton = document.getElementById("add-thing-button");
   
    function add() {manageLists().addList(newList)}
    showButton.addEventListener("click", (e) => {add(),
    console.log(manageLists().getLists())})






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

//     const showButton = document.getElementById("add-set-button");
//     const setDialog = document.getElementById("dialog2");
//     const inputName = setDialog.querySelector("#input1");
//     const confirmBtn = setDialog.querySelector("#confirmBtn");

//     // "Show the dialog" button opens the <dialog> modally
//     showButton.addEventListener("click", () => {
//     setDialog.showModal();
//     });

//     // "Favorite animal" input sets the value of the submit button
//     inputName.addEventListener("change", (e) => {
//     confirmBtn.value = selectEl.value;
//     });

//     // "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
//     thingDialog.addEventListener("close", (e) => {
//     outputBox.value =
//         favDialog.returnValue === "default"
//         ? "No return value."
//         : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
//     });

//     // Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
//     confirmBtn.addEventListener("click", (event) => {
//     event.preventDefault(); // We don't want to submit this fake form
//     thingialog.close(selectEl.value); // Have to send the select box value here.
//     });
// })();