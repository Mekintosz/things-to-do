import { manageLists } from "./listModules";



function createTask(title, list = "random") {
    return { 
        id: Date.now().toString(),
        title,
        list,
        complete: false, 
    };
}

function addTaskToList(task) {
    for (let x of manageLists().getLists()) {
        if (x.title == task.list) {
            manageLists().addList(task);
        } 

    }
    // manageLists().getLists().push(manageLists().createList(task.list));

}

export { createTask, addTaskToList }