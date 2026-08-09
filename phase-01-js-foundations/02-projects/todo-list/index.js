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

console.log("\n____add todo____");
addTodo("Learn JavaScript");
addTodo("Learn React");
addTodo("Learn Vue");
console.log(getTodos());

console.log("\n____find todo____");
console.log("your todo is: ", findTodo(2));

console.log("\n____complete todo____");
console.log(completeTodo(2));
console.log(getTodos());

console.log("\n____remove todo____");
console.log(removeTodo(2));
console.log("\n__get todo__");
console.log(getTodos());

addTodo("Learn Django");
console.log("\n__get todo__");
console.log(getTodos());
