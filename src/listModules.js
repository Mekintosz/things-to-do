import createTask from "./taskModules";


const manageLists = function () {


    let lists = [{name: "random"}];

    const createList = function (name) {
        return lists.push({ id: Date.now().toString(), name, tasks: [] });
    }
    const getLists = () => lists;
    const removeList = (listToRemoveID) => lists = lists.filter(list => list.id !== listToRemoveID); 

    return { createList, getLists, removeList }
}

export { manageLists };