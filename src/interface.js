import createTask from "./taskModules";
import { createTaskList, addListsData, lists } from "./listModules";

(function renderTaskLists() {

    const taskListContainer = document.querySelector("[data-list]");
    clearElement(taskListContainer);
    lists.forEach(task=> {
        const list = document.createElement("li");
        list.classList.add("list-ul");
        list.innerText = task;
        taskListContainer.appendChild(list)
    });

    function clearElement(element) {
        while (element.firstChild) {
            element.remove(firstChild)
        }

    };
})();