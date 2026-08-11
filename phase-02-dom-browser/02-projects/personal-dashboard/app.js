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

menuToggle.addEventListener("click", function () {
  sidebar.classList.toggle("open");
});

addTaskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const task = taskInput.value.trim();

  if (task !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const taskActions = document.createElement("div");

    span.textContent = task;
    li.appendChild(span);
    taskList.appendChild(li);

    taskInput.value = "";
    totalTasks.textContent = taskList.children.length;
  }
});

// for functions that will be called on page load
function init() {
  showCurrentDate();
}
init();
