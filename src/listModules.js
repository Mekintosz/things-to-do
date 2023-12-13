import createTask from "./taskModules";



const manageLists = function () {

    let lists = [{title: "random", tasks: []}, {title: "hophop"}];
    
    lists.push("totot")

    const createList = function (title) {
        return { id: Date.now().toString(), title, tasks: [] };
    }
    const getLists = () => lists;
    const addList = (x) => lists.unshift(x);
    const addTask = (task) => lists = lists.filter(list => list.name)
    const removeList = (listToRemoveID) => lists = lists.filter(list => list.id !== listToRemoveID); 

    return { createList, getLists, removeList, addList }
}

export { manageLists };