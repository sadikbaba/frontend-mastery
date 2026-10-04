import {
  addTask,
  getTasks,
  toggleTask,
  deleteTask,
  setTasks,
} from "./data/tasks.js";

import { renderTasks } from "./ui/render.js";

import {
  filterAllTasks,
  filterCompletedTasks,
  filterActiveTasks,
} from "./utils/filters.js";

import { saveTasks, loadTasks } from "./data/storage.js";

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// filter tasks elements
const filterAll = document.querySelector("#filter-all");
const filterActive = document.querySelector("#filter-active");
const filterCompleted = document.querySelector("#filter-completed");

// load tasks from local storage
const savedTasks = loadTasks();
setTasks(savedTasks);
renderTasks(getTasks());

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = taskInput.value.trim();

  if (task === "") {
    return;
  }

  addTask(task);

  // save tasks after adding
  saveTasks(getTasks());

  const tasks = getTasks();
  renderTasks(tasks);

  taskInput.value = "";
});

taskList.addEventListener("click", (event) => {
  // 1. check if .toggle-task was clicked
  if (event.target.classList.contains("toggle-task")) {
    // 2. find its parent li

    // 3. get the numeric task id
    const id = Number(event.target.parentElement.dataset.id);

    // 4. call toggleTask(id)
    toggleTask(id);

    // save tasks after toggle
    saveTasks(getTasks());

    // 5. getTasks()
    const tasks = getTasks();

    // 6. renderTasks(...)
    renderTasks(tasks);
  }

  // delete task
  if (event.target.classList.contains("delete-task")) {
    const id = Number(event.target.parentElement.dataset.id);

    deleteTask(id);

    const tasks = getTasks();

    // save tasks after delete
    saveTasks(tasks);

    renderTasks(tasks);
  }
});

filterAll.addEventListener("click", () => {
  const tasks = filterAllTasks(getTasks());
  renderTasks(tasks);
});

filterActive.addEventListener("click", () => {
  const tasks = filterActiveTasks(getTasks());
  renderTasks(tasks);
});

filterCompleted.addEventListener("click", () => {
  const tasks = filterCompletedTasks(getTasks());
  renderTasks(tasks);
});