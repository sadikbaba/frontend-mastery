const todos = [];
let nextId = 1;

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

function getTodos() {
  return [...todos];
}

function findTodo(id) {
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    throw Error("Todo not found");
  }

  return todo;
}

function completeTodo(id) {
  const todo = findTodo(id);

  todo.completed = true;

  return todo;
}

function removeTodo(id) {
  const todo = findTodo(id);
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  todos.splice(todoIndex, 1);

  return todo;
}

function uncompleteTodo(id) {
  const todo = findTodo(id);

  todo.completed = false;

  return todo;
}

function getCompletedTodos() {
  return todos.filter((todo) => todo.completed);
}

function getIncompleteTodos() {
  return todos.filter((todo) => !todo.completed);
}

function searchTodos(query) {
  return todos.filter((todo) => {
    return todo.title.toLowerCase().includes(query.toLowerCase());
  });
}

function countCompletedTodos() {
  const completed = getCompletedTodos();
  const count = completed.reduce((count, todo) => {
    return count + 1;
  }, 0);

  return count;
}

// Much simpler best in real code

// function countCompletedTodos() {
//   return getCompletedTodos().length;
// }

function sortTodosByTitle() {
  return [...todos].sort((a, b) => a.title.localeCompare(b.title));
}

function sortTodosByNewest() {
  return [...todos].sort((a, b) => b.date.getTime() - a.date.getTime());
}

console.log("\n____add todo____");
addTodo("Learn JavaScript");
addTodo("Learn Vue");
addTodo("Learn React");
console.log(getTodos());

// console.log("\n____find todo____");
// console.log("your todo is: ", findTodo(2));

// console.log("\n____complete todo____");
// console.log(completeTodo(2));
// console.log(getTodos());

// console.log("\n____remove todo____");
// console.log(removeTodo(2));
// console.log("\n__get todo__");
// console.log(getTodos());

// addTodo("Learn Django");
// console.log("\n__get todo__");
// console.log(getTodos());

completeTodo(2);

console.log("After completing:");
console.log(findTodo(2));

uncompleteTodo(2);

console.log("After uncompleting:");
console.log(findTodo(2));

console.log("\n complated todo ");
console.log("Completed:", getCompletedTodos());

console.log("\n incomplete todo ");
console.log("Incomplete:", getIncompleteTodos());

console.log("\n seach todo ");
console.log(searchTodos("react"));
console.log(searchTodos("learn"));
console.log(searchTodos("xyz"));

console.log("\n count Completed Todos");
completeTodo(1);
completeTodo(2);
console.log("Completed count:", countCompletedTodos());

console.log("\n sort todo ");
const sorted = sortTodosByTitle();
console.log(sorted);

console.log("\n sort todo ");
const sortedByNewest = sortTodosByNewest();
console.log(sortedByNewest);
