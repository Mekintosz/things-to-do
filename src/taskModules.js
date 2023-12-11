export default function createTask(title, description, date, priority) {

    let taskTitle = title;
    let taskDescription = description;
    let taskDueDate = date;
    let taskPriority = priority;
    let taskStatus = "uncompleted";
    
    const getTaskTitle = () => taskTitle;
    const setTaskTitle = newTitle => taskTitle = newTitle; 

    const getTaskDescription = () => taskDescription;
    const setTaskDescription = newDescription => taskDescription = newDescription; 

    const getTaskDueDate = () => taskDueDate;
    const setTaskDueDate = newDueDate => taskDueDate = newDueDate; 

    const getTaskPriority = () => taskPriority;
    const setTaskPriority = newPriority => taskPriority = newPriority; 

    const getTaskStatus = () => taskStatus;
    const changeTaskStatus = () => taskStatus = "completed";

    return { getTaskTitle, setTaskTitle,
         getTaskDescription, setTaskDescription,
          getTaskDueDate, setTaskDueDate,
           getTaskPriority, setTaskPriority,
            getTaskStatus, changeTaskStatus }
}