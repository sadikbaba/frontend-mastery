// 1. SELECT DOM ELEMENTS
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-input");

// Helper: get current todos from localStorage
function getTodos() {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
}

// Helper: save todos array to localStorage
function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Helper: create and add one <li> to the list
function addTodoToDOM(todoText) {
  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.textContent = todoText;
  todoList.appendChild(li);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn-delete");
  deleteButton.textContent = "Delete";
  li.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    li.remove();
  });
}

// 2. SAVE when user submits
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const todo = todoInput.value.trim();

  if (todo === "") {
    return;
  }

  // Get current list, add new todo, then save
  const todos = getTodos();
  todos.push(todo);
  saveTodos(todos);

  // Show it immediately on the page
  addTodoToDOM(todo);

  // Clear input
  todoInput.value = "";
});

// 3. LOAD when page starts
function init() {
  const todos = getTodos();

  todos.forEach(function (todo) {
    addTodoToDOM(todo);
  });
}

init();
