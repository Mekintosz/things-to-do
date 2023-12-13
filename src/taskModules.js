function createTask(name, list = manageLists().lists[0]) {
    return { id: Date.now().toString(), name, list, complete: false };
}

function manageTasksList() {
    const addTaskToList = (task) => lists
}

export { createTask }