const LOCAL_STORAGE_LIST_KEY = "task.lists";
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

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
    const targetList = ensureList(task.list);
    targetList.tasks.push(task);
    manageLists.save();
    return targetList;
  }

  function deleteThing(listID, thingID) {
    for (let list of lists) {
      if (list.id === listID) {
        const indexToRemove = list.tasks.findIndex(
          (thing) => thing.id === thingID
        );
        if (indexToRemove !== -1) {
          list.tasks.splice(indexToRemove, 1);
          manageLists.save();
        }
      }
    }
  }

  function replaceThingById(listID, thingID, editedThing) {
    for (let list of lists) {
      if (list.id === listID) {
        let indexOfThing = list.tasks.findIndex((task) => task.id === thingID);
        if (indexOfThing !== -1) {
          list.tasks.splice(indexOfThing, 1, editedThing);
          manageLists.save();
        }
      }
    }
  }

  function setTaskCompletion(listID, thingID, complete) {
    for (let list of lists) {
      if (list.id === listID) {
        const task = list.tasks.find((thing) => thing.id === thingID);
        if (task) {
          task.complete = complete;
          manageLists.save();
        }
      }
    }
  }

  function ensureList(listTitle) {
    let existingList = manageLists
      .getLists()
      .find((list) => list.title === listTitle);
    if (!existingList) {
      existingList = manageLists.addList(manageLists.createList(listTitle));
    }
    return existingList;
  }

  return {
    createTask,
    addTaskToList,
    deleteThing,
    replaceThingById,
    setTaskCompletion,
    ensureList,
  };
})();

const manageLists = (function () {
  const save = () => {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  };

  const createList = (title) => {
    return { id: Date.now().toString(), title, tasks: [] };
  };
  const getLists = () => lists;
  const addList = (list) => {
    lists.unshift(list);
    save();
    return list;
  };
  const removeList = (listId) => {
    lists = lists.filter((list) => list.id !== listId);
    save();
  };

  return { createList, getLists, removeList, addList, save };
})();

export { manageTasks, manageLists, lists };
