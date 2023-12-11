import createTask from "./taskModules";

function createTaskList (name, description) {
    
    let taskList = [];

    const addTaskToList = () => taskList.push(createTask());

    const getListName = () => name;
    const setListName = newName => name = newName;

    const getListDescription = () => description;
    const setListDescription = newDescription => description = newDescription;


    return { taskList, addTaskToList, getListName, setListName, getListDescription, setListDescription };
}

let lists = [["probna", "dozrobienia"]];

function addListsData() {
    lists.push(createTaskList());
}

export { createTaskList, addListsData, lists };