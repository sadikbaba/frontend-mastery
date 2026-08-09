const todos = [];
let nextId = 1;

// ======================
// CREATE
// ======================
function addTodo(title) {
  const todo = {
    id: nextId++,
    title,
    date: new Date(),
    completed: false,
  };

  todos.push(todo);
  return todo;
}

// ======================
// READ
// ======================
function getTodos() {
  return [...todos];
}

function findTodo(id) {
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    throw new Error("Todo not found");
  }

  return todo;
}

function getCompletedTodos() {
  return todos.filter((todo) => todo.completed);
}

function getIncompleteTodos() {
  return todos.filter((todo) => !todo.completed);
}

function getTodosByStatus(completed) {
  return todos.filter((todo) => todo.completed === completed);
}

function searchTodos(query) {
  return todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase()),
  );
}

function countCompletedTodos() {
  return getCompletedTodos().length;
}

// ======================
// UPDATE
// ======================
function completeTodo(id) {
  const todo = findTodo(id);
  todo.completed = true;
  return todo;
}

function uncompleteTodo(id) {
  const todo = findTodo(id);
  todo.completed = false;
  return todo;
}

function updateTodoTitle(id, newTitle) {
  const todo = findTodo(id);
  todo.title = newTitle;
  return todo;
}

// ======================
// DELETE
// ======================
function removeTodo(id) {
  const todo = findTodo(id);
  const index = todos.findIndex((todo) => todo.id === id);
  todos.splice(index, 1);
  return todo;
}

function clearCompletedTodos() {
  const activeTodos = todos.filter((todo) => !todo.completed);
  todos.length = 0;
  todos.push(...activeTodos);
}

// ======================
// SORT
// ======================
function sortTodosByTitle() {
  return [...todos].sort((a, b) => a.title.localeCompare(b.title));
}

function sortTodosByNewest() {
  return [...todos].sort((a, b) => b.date.getTime() - a.date.getTime());
}







// ======================
// TESTING
// ======================

console.log("\n========== TODO APP TESTS ==========\n");

// 1. Add todos
console.log("1. Adding todos...");
addTodo("Learn JavaScript");
addTodo("Learn Vue");
addTodo("Learn React");
console.log(getTodos());

// 2. Complete a todo
console.log("\n2. Completing todo id 2...");
completeTodo(2);
console.log(findTodo(2));

// 3. Uncomplete a todo
console.log("\n3. Uncompleting todo id 2...");
uncompleteTodo(2);
console.log(findTodo(2));

// 4. Get completed & incomplete
console.log("\n4. Completed todos:");
console.log(getCompletedTodos());

console.log("\n5. Incomplete todos:");
console.log(getIncompleteTodos());

// 5. Search
console.log("\n6. Search 'react':");
console.log(searchTodos("react"));

console.log("\n7. Search 'learn':");
console.log(searchTodos("learn"));

// 6. Count completed
completeTodo(1);
completeTodo(2);
console.log("\n8. Count of completed todos:");
console.log(countCompletedTodos());

// 7. Sort by title
console.log("\n9. Sorted by title:");
console.log(sortTodosByTitle());

// 8. Sort by newest
console.log("\n10. Sorted by newest:");
console.log(sortTodosByNewest());

// 9. Filter by status
console.log("\n11. Only completed todos:");
console.log(getTodosByStatus(true));

// 10. Update title
console.log("\n12. Updating title of todo 1...");
console.log(updateTodoTitle(1, "Master JavaScript"));
console.log(getTodos());

// 11. Clear completed
console.log("\n13. Clearing completed todos...");
console.log("Before:");
console.log(getTodos());

clearCompletedTodos();

console.log("\nAfter clearCompletedTodos():");
console.log(getTodos());

console.log("\n========== TESTS FINISHED ==========\n");