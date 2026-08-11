
const menuToggle = document.querySelector("#menuToggle");
const sidebar = document.querySelector("#sidebar");
const currentDate = document.querySelector("#currentDate");
const addTaskForm = document.querySelector("#addTaskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const totalTasks = document.querySelector("#totalTasks");
const completedTasks = document.querySelector("#completedTasks");
const pendingTasks = document.querySelector("#pendingTasks");

function showCurrentDate() {
  const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const today = new Date();
  currentDate.textContent = today.toLocaleDateString("en-US", option);
}

function updateTaskCounts() {
  const completed = document.querySelectorAll(".completed").length;
  const pending = taskList.children.length - completed;

  completedTasks.textContent = completed;
  pendingTasks.textContent = pending;
}

menuToggle.addEventListener("click", function () {
  sidebar.classList.toggle("open");
});

addTaskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const task = taskInput.value.trim();

  if (task !== "") {
    // Variables
    const li = document.createElement("li");
    const span = document.createElement("span");
    const taskActions = document.createElement("div");
    const completeButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    // Task text
    span.textContent = task;
    li.appendChild(span);
    taskList.appendChild(li);

    taskInput.value = "";
    totalTasks.textContent = taskList.children.length;

    // Task actions
    taskActions.classList.add("task-actions");
    li.appendChild(taskActions);

    // Complete button
    completeButton.classList.add("btn-complete");
    completeButton.textContent = "Complete";
    taskActions.appendChild(completeButton);

    completeButton.addEventListener("click", function () {
      li.classList.toggle("completed");
      updateTaskCounts();
    });

    // Delete button
    deleteButton.classList.add("btn-delete");
    deleteButton.textContent = "Delete";
    taskActions.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      li.remove();

      totalTasks.textContent = taskList.children.length;
      updateTaskCounts();
    });

    updateTaskCounts();
  }
});

// Functions that run when the page loads
function init() {
  showCurrentDate();
  updateTaskCounts();
}

init();