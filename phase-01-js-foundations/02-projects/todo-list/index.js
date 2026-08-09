const todos = [];

function addTodo(title) {
  const todo = {
    id: todos.length + 1,
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

addTodo("Learn JavaScript");
addTodo("Learn React");
addTodo("Learn Vue");
console.log(getTodos());

console.log("\n____find todo____");
console.log("your todo is: ", findTodo(2));

console.log("\n____complete todo____");
console.log(completeTodo(2));
console.log(getTodos());
