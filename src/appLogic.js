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
    for (let list of manageLists.getLists()) {
      if (list.title === task.list) {
        list.tasks.push(task);
      } else {
        manageLists.createList(task.list);
      }
    }
  }

  return { createTask, addTaskToList };
})();

let lists = [
  {
    id: "001",
    title: "random",
    tasks: [{ id: '001', title: "001 task", list: "random", complete: false }],
  },
  {
    id: "002",
    title: "hophop",
    tasks: [{ id: '071', title: "071 task", list: "hophop", complete: false }],
  },
];

const manageLists = (function () {
  const createList = (title) => {
    return { id: Date.now().toString(), title, tasks: [] };
  };
  const getLists = () => lists;
  const addList = (x) => lists.unshift(x);
  const removeList = (listTitle) =>
    (lists = lists.filter((list) => list.title !== listTitle));

  return { createList, getLists, removeList, addList };
})();

export { manageTasks, manageLists };
