import { addTask, getTasks, toggleTask } from "./data/tasks.js";
import { renderTasks } from "./ui/render.js";

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = taskInput.value.trim();
  if (task === "") {
    return;
  }
  addTask(task);

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

    // 5. getTasks()
    const tasks = getTasks();

    // 6. renderTasks(...)
    renderTasks(tasks);
  }
});
