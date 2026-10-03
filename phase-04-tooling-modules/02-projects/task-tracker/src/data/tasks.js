let tasks = [];

function addTask(text) {
  const task = {
    id: Date.now(),
    text,
    completed: false,
  };

  tasks.push(task);
  return task;
}

function getTasks() {
  return [...tasks];
}

function updateTask(id, text) {
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    throw new Error("Task not found");
  }
  task.text = text;
}

function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    throw new Error("Task not found");
  }

  tasks.splice(index, 1);
  return tasks;
}

function toggleTask(id){
    const task = tasks.find((task) => task.id === id);
    if (!task) {
      throw new Error("Task not found");
    }

    if (task.completed === true) {
        task.completed = false;
    }
    else {
        task.completed = true;
    }

}


export {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
  toggleTask
};
