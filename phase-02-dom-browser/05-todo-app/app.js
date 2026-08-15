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
function addTodoToDOM(todo) {
  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.dataset.id = todo.id; // store the unique id

  // Text
  const span = document.createElement("span");
  span.textContent = todo.text;
  li.appendChild(span);

  // Apply completed style if needed
  if (todo.completed) {
    li.classList.add("completed");
    span.style.textDecoration = "line-through";
    span.style.color = "gray";
  }

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn-delete");
  deleteButton.textContent = "Delete";
  li.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    li.remove();

    const todos = getTodos().filter((t) => t.id !== todo.id);
    saveTodos(todos);
  });

  // Complete button
  const completeButton = document.createElement("button");
  completeButton.classList.add("btn-complete");
  completeButton.textContent = "Complete";
  li.appendChild(completeButton);

  completeButton.addEventListener("click", function () {
    todo.completed = !todo.completed;

    li.classList.toggle("completed");
    span.style.textDecoration = todo.completed ? "line-through" : "none";
    span.style.color = todo.completed ? "gray" : "";

    // Save the updated state
    const todos = getTodos();
    const index = todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      todos[index].completed = todo.completed;
      saveTodos(todos);
    }
  });

  todoList.appendChild(li);
}

// 2. SAVE when user submits
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = todoInput.value.trim();
  if (text === "") return;

  const newTodo = {
    id: Date.now(), // unique id
    text: text,
    completed: false,
  };

  const todos = getTodos();
  todos.push(newTodo);
  saveTodos(todos);

  addTodoToDOM(newTodo);
  todoInput.value = "";
});

// 3. LOAD when page starts
function init() {
  const todos = getTodos();
  todos.forEach(addTodoToDOM);
}

init();



function getTodos() {
  const saved = localStorage.getItem("todos");

  if (saved) {
    return JSON.parse(saved);
  } else {
    return [];
  }
}

function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

//   1 get todos
//    2 get id of that todo
//    3 mark as completed  todo
// 4  line-through or none
completeButton.addEventListener("click", function () {
  todo.completed = !todo.completed;

  li.classList.toggle("completed");
  span.style.textDecoration = todo.completed ? "line-through" : "none";
  span.style.color = todo.completed ? "gray" : "";

  const todos = getTodos();

  const index = todos.findIndex((t) => t.id === todo.id);

  if (index !== -1) {
    todos[index].completed = todo.completed;

    saveTodos(todos);
  }
});
