function saveTasks(tasks) {
  // convert tasks to JSON string
  const jsonString = JSON.stringify(tasks);
  // save under the key "tasks"
  localStorage.setItem("tasks", jsonString);
}

function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks === null) {
    return [];
  }

  return JSON.parse(savedTasks);
}



export { saveTasks, loadTasks  };