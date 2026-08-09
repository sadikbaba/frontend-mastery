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
addTodo("Learn JavaScript");
addTodo("Learn React");
addTodo("Learn Vue");

console.log(getTodos());
