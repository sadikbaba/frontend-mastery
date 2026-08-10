// ========== SELECT ELEMENTS ==========
const taskList = document.getElementById("taskList");
const addTaskForm = document.getElementById("addTaskForm");
const taskInput = document.getElementById("taskInput");
const totalTasksEl = document.getElementById("totalTasks");
const completedTasksEl = document.getElementById("completedTasks");
const pendingTasksEl = document.getElementById("pendingTasks");
const currentDateEl = document.getElementById("currentDate");
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

// ========== STATE ==========
let tasks = [];

// ========== LOCAL STORAGE ==========
function saveTasks() {
  localStorage.setItem("dashboard-tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const saved = localStorage.getItem("dashboard-tasks");
  if (saved) {
    tasks = JSON.parse(saved);
  } else {
    // Default starter tasks
    tasks = [
      { id: 1, text: "Learn JavaScript", completed: false },
      { id: 2, text: "Build Dashboard", completed: false },
      { id: 3, text: "Read a Book", completed: true },
    ];
    saveTasks();
  }
}

// ========== RENDER TASKS ==========
function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = `<li class="empty-state">No tasks yet. Add one below!</li>`;
    updateStats();
    return;
  }

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : ""}`;
    li.dataset.id = task.id;

    li.innerHTML = `
      <input type="checkbox" class="task-checkbox" ${task.completed ? "checked" : ""}>
      <span class="task-text">${escapeHtml(task.text)}</span>
      <button class="task-delete" aria-label="Delete task">🗑️</button>
    `;

    taskList.appendChild(li);
  });

  updateStats();
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ========== UPDATE STATISTICS ==========
function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  totalTasksEl.textContent = total;
  completedTasksEl.textContent = completed;
  pendingTasksEl.textContent = pending;
}

// ========== ADD TASK ==========
function addTask(text) {
  const newTask = {
    id: Date.now(),
    text: text.trim(),
    completed: false,
  };

  tasks.unshift(newTask); // newest first
  saveTasks();
  renderTasks();
}

// ========== TOGGLE COMPLETE ==========
function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveTasks();
    renderTasks();
  }
}

// ========== DELETE TASK ==========
function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  renderTasks();
}

// ========== EVENT LISTENERS ==========

// Add task form
addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (text) {
    addTask(text);
    taskInput.value = "";
    taskInput.focus();
  }
});

// Task list (event delegation)
taskList.addEventListener("click", (e) => {
  const taskItem = e.target.closest(".task-item");
  if (!taskItem) return;

  const id = Number(taskItem.dataset.id);

  if (e.target.classList.contains("task-checkbox")) {
    toggleTask(id);
  }

  if (e.target.classList.contains("task-delete")) {
    deleteTask(id);
  }
});

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// Close sidebar when clicking outside (mobile)
document.addEventListener("click", (e) => {
  if (
    sidebar.classList.contains("open") &&
    !sidebar.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    sidebar.classList.remove("open");
  }
});

// ========== DISPLAY CURRENT DATE ==========
function showCurrentDate() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  currentDateEl.textContent = new Date().toLocaleDateString("en-US", options);
}

// ========== INIT ==========
function init() {
  loadTasks();
  renderTasks();
  showCurrentDate();
}

 init();
