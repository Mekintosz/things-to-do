const LOCAL_STORAGE_LIST_KEY = 'task.lists'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []

const manageTasks = (function () {
  function createTask(title, list = "random", dueDate = "", description = "") {
    return {
      id: Date.now().toString(),
      title,
      list,
      dueDate,
      description,
      complete: false,
    };
  }

  function addTaskToList(task) {
    if (!lists.some(list => list.title ===task)) {
      manageLists.addList(manageLists.createList(task.list))
      console.log(lists)
    }
    for (let list of manageLists.getLists()) {
      if (list.title === task.list) {
        list.tasks.push(task);
      }
    }
  }

  function deleteThing(listID, thingID) {
    for (let list of lists) {
      if (list.id === listID) {
      list.tasks.splice(list.tasks.map(thing => thing.id).indexOf(thingID), 1)
      }
    }
  }

  function replaceThingById(listID, thingID, editedThing) {
    for (let list of lists) {
      if (list.id === listID) {
        let indexOfThing = list.tasks.map(thing => thing.id).indexOf(thingID);
        list.tasks.splice(indexOfThing, 1, editedThing)
      }
    }
  }

  return { createTask, addTaskToList, deleteThing, replaceThingById };
})();

const manageLists = (function () {
  const createList = (title) => {
    return { id: Date.now().toString(), title, tasks: [] };
  };
  const getLists = () => lists;
  const addList = (x) => lists.unshift(x);
  const removeList = (listTitle) => {
    lists = lists.filter((list) => list.title !== listTitle);
    console.log(lists)
  }
  const save = () => {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
  }

  return { createList, getLists, removeList, addList, save };
})();

export { manageTasks, manageLists, lists };
