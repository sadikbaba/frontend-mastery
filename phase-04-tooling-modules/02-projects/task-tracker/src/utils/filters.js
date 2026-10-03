




function filterAllTasks(tasks) {
  return [...tasks];
}

function filterCompletedTasks(tasks) {
  return tasks.filter((task) => task.completed === true);
}

function filterActiveTasks(tasks) {
  return tasks.filter((task) => task.completed === false);
}

export {
  filterAllTasks,
  filterCompletedTasks,
  filterActiveTasks,
};