// 1. SELECT DOM ELEMENTS
const menuToggle = document.querySelector("#menuToggle");
const sidebar = document.querySelector("#sidebar");
const currentDate = document.querySelector("#currentDate");
const addTaskForm = document.querySelector("#addTaskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const totalTasks = document.querySelector("#totalTasks");
const completedTasks = document.querySelector("#completedTasks");
const pendingTasks = document.querySelector("#pendingTasks");

// 2. DATA / STATE

function getTasks() {
  const savedTasks = localStorage.getItem("tasks");

  if (!savedTasks) {
    return [];
  }

  try {
    return JSON.parse(savedTasks);
  } catch (error) {
    console.error("Could not read saved tasks:", error);
    return [];
  }
}

function saveTasks(taskArray) {
  localStorage.setItem("tasks", JSON.stringify(taskArray));
}

// 3. UI CREATION

function createTaskElement(taskData) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const buttons = document.createElement("div");
  const completeButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  li.dataset.id = taskData.id;

  span.textContent = taskData.task;

  buttons.classList.add("task-actions");

  completeButton.classList.add("btn-complete");
  completeButton.textContent = "Complete";

  deleteButton.classList.add("btn-delete");
  deleteButton.textContent = "Delete";

  buttons.appendChild(completeButton);
  buttons.appendChild(deleteButton);

  li.appendChild(span);
  li.appendChild(buttons);

  if (taskData.completed) {
    li.classList.add("completed");
  }

  completeButton.addEventListener("click", function () {
    const taskArray = getTasks();
    const task = taskArray.find((task) => task.id === taskData.id);

    if (!task) {
      return;
    }

    task.completed = !task.completed;
    li.classList.toggle("completed", task.completed);

    saveTasks(taskArray);
    updateTaskCounts();
  });

  deleteButton.addEventListener("click", function () {
    const taskArray = getTasks();

    const updatedTasks = taskArray.filter((task) => task.id !== taskData.id);

    saveTasks(updatedTasks);

    li.remove();

    updateTaskCounts();
  });

  return li;
}

// 4. UI UPDATE / RENDER

function updateTaskCounts() {
  const completed = document.querySelectorAll(".completed").length;
  const pending = taskList.children.length - completed;

  totalTasks.textContent = taskList.children.length;
  completedTasks.textContent = completed;
  pendingTasks.textContent = pending;
}

function loadTasks() {
  const taskArray = getTasks();

  taskArray.forEach(function (taskData) {
    const li = createTaskElement(taskData);
    taskList.appendChild(li);
  });

  updateTaskCounts();
}

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

// 5. EVENT LISTENERS

menuToggle.addEventListener("click", function () {
  sidebar.classList.toggle("open");
});

addTaskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const task = taskInput.value.trim();

  if (task === "") {
    return;
  }

  const taskArray = getTasks();

  const taskData = {
    id: Date.now(),
    task: task,
    completed: false,
  };

  taskArray.push(taskData);
  saveTasks(taskArray);

  const li = createTaskElement(taskData);
  taskList.appendChild(li);

  taskInput.value = "";

  updateTaskCounts();
});

// 6. INIT

function init() {
  showCurrentDate();
  loadTasks();
}

init();
