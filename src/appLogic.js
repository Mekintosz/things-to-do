
const manageTasks = (function () {

    function createTask(title, list = 'random') {
        return { 
            id: Date.now().toString(),
            title,
            list,
            complete: false, 
        };
    }

    function addTaskToList(task) {
        for (let list of manageLists.getLists()) {
            if (list.title === task.list) {
                list.tasks.push(task);
            } 
        }
    }

    return { createTask, addTaskToList }

})()



let lists = [{id: "001", title: "random", tasks: []}, {id: "002", title: "hophop"}];

const manageLists = (function () {
    
    const createList = (title) => {
        return { id: Date.now().toString(), title, tasks: [] };
    }
    const getLists = () => lists;
    const addList = (x) => lists.unshift(x);
    const removeList = (listTitle) => lists = lists.filter(list => list.title !== listTitle); 

    return { createList, getLists, removeList, addList }

})()

export { manageTasks, manageLists }